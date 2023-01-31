const {
  sendPayloadToTreblle,
  generateFieldsToMask,
  maskSensitiveValues,
  getRequestDuration,
} = require('@treblle/utils')
const os = require('os')
const { version: sdkVersion } = require('../../package.json')

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const { apiKey, projectId, routesToIgnore, additionalFieldsToMask } =
      strapi.config.get('plugin.treblle')

    const [_, path] = ctx.request.url.split('/')
    if (routesToIgnore.includes(path)) {
      return next()
    }

    const requestStartTime = process.hrtime()
    let errors = []
    await next()
    const { body, params, query } = ctx.request
    const requestPayload = { ...body, ...params, ...query }
    const fieldsToMask = generateFieldsToMask(additionalFieldsToMask)
    const maskedRequestPayload = maskSensitiveValues(requestPayload, fieldsToMask)
    const protocol = `${ctx.request.protocol.toUpperCase()}/${ctx.request.req.httpVersion}`

    let maskedResponseBody
    try {
      let originalResponseBody = ctx.response.body
      if (Buffer.isBuffer(originalResponseBody)) {
        originalResponseBody = originalResponseBody.toString('utf8')
      }

      if (typeof originalResponseBody === 'string') {
        let parsedResponseBody = JSON.parse(originalResponseBody)
        maskedResponseBody = maskSensitiveValues(parsedResponseBody, fieldsToMask)
      } else if (typeof originalResponseBody === 'object') {
        maskedResponseBody = maskSensitiveValues(originalResponseBody, fieldsToMask)
      }
    } catch {
      // if we can't parse the body we'll leave it empty and set an error
      errors.push({
        source: 'onShutdown',
        type: 'INVALID_JSON',
        message: 'Invalid JSON format',
        file: null,
        line: null,
      })
    }

    const trebllePayload = {
      api_key: apiKey,
      project_id: projectId,
      version: sdkVersion,
      sdk: 'strapi',
      data: {
        server: {
          timezone: Intl.DateTimeFormat().resolvedOptions.timezone,
          os: {
            name: os.platform(),
            release: os.release(),
            architecture: os.arch(),
          },
          software: null,
          signature: null,
          protocol,
        },
        language: {
          name: 'node',
          version: process.version,
        },
        request: {
          timestamp: new Date().toISOString().replace('T', ' ').substr(0, 19),
          ip: ctx.request.ip,
          url: `${ctx.request.protocol}://${ctx.request.get('host')}${ctx.request.originalUrl}`,
          user_agent: ctx.request.header['user-agent'],
          method: ctx.request.method,
          headers: maskSensitiveValues(ctx.request.headers),
          body: maskedRequestPayload || null,
        },
        response: {
          headers: maskSensitiveValues(ctx.response.headers),
          code: ctx.response.code,
          size: ctx.response.length || null,
          load_time: getRequestDuration(requestStartTime),
          body: maskedResponseBody || null,
        },
        errors,
      },
    }
    sendPayloadToTreblle(trebllePayload, apiKey)
  }
}
