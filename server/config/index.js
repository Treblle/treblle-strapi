'use strict'

module.exports = {
  default: ({ env }) => ({
    apiKey: env('TREBLLE_API_KEY'),
    projectId: env('TREBLLE_PROJECT_ID'),
    additionalFieldsToMask: [],
    routesToMonitor: ['api'],
  }),
  validator: (config) => {
    if (typeof config.apiKey !== 'string') {
      throw new Error('Treblle API key is not set or is not a string')
    }
    if (typeof config.projectId !== 'string') {
      throw new Error('Your Treblle project ID is not set or is not a string')
    }
  },
}
