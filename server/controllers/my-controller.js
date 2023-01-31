'use strict'

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi.plugin('treblle').service('myService').getWelcomeMessage()
  },
})
