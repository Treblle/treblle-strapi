<div align="center">
  
# ⚠️ DEPRECATED PACKAGE

**This SDK has been deprecated in favor of the new unified [Treblle Node.js SDK v2.0](https://www.npmjs.com/package/treblle)**

[![New SDK](https://img.shields.io/badge/Migrate%20to-New%20SDK%20v2.0-blue?style=for-the-badge)](https://www.npmjs.com/package/treblle)

</div>

---

# ⚠️ DEPRECATED - Use New Treblle Node.js SDK v2.0

> **This package is deprecated and no longer maintained. Please migrate to the new unified [Treblle Node.js SDK v2.0](https://www.npmjs.com/package/treblle).**

## 🚀 Migration to New SDK

The new Treblle Node.js SDK v2.0 provides better performance, more features, and unified support for all Node.js frameworks including Strapi.

### Quick Migration

**Old SDK:**
```javascript
// In config/middlewares.js
module.exports = [
  'plugin::treblle.treblle',
]
```

**New SDK v2.0:**
```javascript
// middlewares/treblle/index.js
const { strapiTreblle } = require('treblle')

module.exports = (strapi) => {
  return {
    initialize() {
      strapi.app.use(strapiTreblle({
        sdkToken: "_YOUR_SDK_TOKEN_",
        apiKey: "_YOUR_API_KEY_"
      }))
    }
  }
}

// config/middlewares.js
module.exports = {
  settings: {
    treblle: {
      enabled: true,
    },
  },
}
```

### Benefits of New SDK
- 🚀 **40-60% faster** API calls with optimized networking
- 🧠 **50-70% reduction** in memory usage
- ⚡ **80-90% faster** field masking
- 🔧 **Strapi 4.x & 5.x support**
- 🛡️ **Enhanced security** with comprehensive field masking
- 📊 **Better debugging** and error handling
- 🎯 **Smart admin route filtering**

### Installation
```bash
npm install treblle@^2.0.0
```

## 📖 Documentation
- [New SDK Documentation](https://docs.treblle.com/integrations/javascript/node/)
- [npm Package](https://www.npmjs.com/package/treblle)

---

**This repository will be archived soon. Please update your projects to use the new SDK.**

<div align="center">
  <img src="https://github.com/user-attachments/assets/58474b6d-f649-4b0f-b8eb-55abe7564c1e"/>
</div>
<div align="center">

# Treblle

<a href="https://docs.treblle.com/en/integrations" target="_blank">Integrations</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="http://treblle.com/" target="_blank">Website</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://docs.treblle.com" target="_blank">Docs</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://blog.treblle.com" target="_blank">Blog</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://twitter.com/treblleapi" target="_blank">Twitter</a>
<br />

  <hr />
</div>

API Intelligence Platform. 🚀

Treblle is a lightweight SDK that helps Engineering and Product teams build, ship & maintain REST-based APIs faster.

## Features

<div align="center">
  <br />
  <img src="https://github.com/user-attachments/assets/184197ca-9ad8-42ab-9d72-3da2c8eafe6b"/>
  <br />
  <br />
</div>

- [API Intelligance](https://treblle.com/product/api-intelligence)
- [Auto-generated API Docs](https://treblle.com/product/api-documentation)
- [API analytics](https://treblle.com/product/api-analytics)
- [Treblle API Governance](https://treblle.com/product/api-governance)
- [API Security](https://treblle.com/product/api-security)
- [API Testing](https://treblle.com/product/aspen)
- [API Assistant](https://treblle.com/product/alfred)

## How Treblle Works

Once you've integrated a Treblle SDK in your codebase, this SDK will send requests and response data to your Treblle Dashboard.

In your Treblle Dashboard you get to see real-time requests to your API, auto-generated API docs, API analytics like how fast the response was for an endpoint, the load size of the response, etc.

Treblle also uses the requests sent to your Dashboard to calculate your API score which is a quality score that's calculated based on the performance, quality, and security best practices for your API.

> Visit [https://docs.treblle.com](http://docs.treblle.com) for the complete documentation.

## Security

### Masking fields

Masking fields ensure certain sensitive data are removed before being sent to Treblle.

To make sure masking is done before any data leaves your server [we built it into all our SDKs](https://docs.treblle.com/treblle/data-masking/#default-masked-fields).

This means data masking is super fast and happens on a programming level before the API request is sent to Treblle. You can customize exactly which fields are masked when you're integrating the SDK.

> Visit the [Masked fields](https://docs.treblle.com/treblle/data-masking/) section of the docs for the complete documentation.

## Get Started

1. Sign in to [Treblle](https://platform.treblle.com).
2. Create [Workspace and your API](https://docs.treblle.com/guides/getting-started/).
3. [Setup the SDK](https://docs.treblle.com/integrations/) for your platform.

### Install the SDK

```sh
npm i treblle --save
```

After installation set the following environment variables your `.env`

> You can find the values in your Treblle dashboard

- `TREBLLE_API_KEY`
- `TREBLLE_PROJECT_ID`

`treblle` provides Strapi integration through middleware configuration.

## Available SDKs

Treblle provides [open-source SDKs](https://docs.treblle.com/en/integrations) that let you seamlessly integrate Treblle with your REST-based APIs.

- [`treblle-laravel`](https://github.com/Treblle/treblle-laravel): SDK for Laravel
- [`treblle-php`](https://github.com/Treblle/treblle-php): SDK for PHP
- [`treblle-symfony`](https://github.com/Treblle/treblle-symfony): SDK for Symfony
- [`treblle-lumen`](https://github.com/Treblle/treblle-lumen): SDK for Lumen
- [`treblle-sails`](https://github.com/Treblle/treblle-sails): SDK for Sails
- [`treblle-adonisjs`](https://github.com/Treblle/treblle-adonisjs): SDK for AdonisJS
- [`treblle-fastify`](https://github.com/Treblle/treblle-fastify): SDK for Fastify
- [`treblle-directus`](https://github.com/Treblle/treblle-directus): SDK for Directus
- [`treblle-strapi`](https://github.com/Treblle/treblle-strapi): SDK for Strapi
- [`treblle-express`](https://github.com/Treblle/treblle-express): SDK for Express
- [`treblle-koa`](https://github.com/Treblle/treblle-koa): SDK for Koa
- [`treblle-go`](https://github.com/Treblle/treblle-go): SDK for Go
- [`treblle-ruby`](https://github.com/Treblle/treblle-ruby): SDK for Ruby on Rails
- [`treblle-python`](https://github.com/Treblle/treblle-python): SDK for Python/Django

> See the [docs](https://docs.treblle.com/en/integrations) for more on SDKs and Integrations.

## Other Packages

Besides the SDKs, we also provide helpers and configuration used for SDK
development. If you're thinking about contributing to or creating a SDK, have a look at the resources
below:

- [`treblle-utils`](https://github.com/Treblle/treblle-utils): A set of helpers and
  utility functions useful for the JavaScript SDKs.
- [`php-utils`](https://github.com/Treblle/php-utils): A set of helpers and
  utility functions useful for the PHP SDKs.

## Community 💙

First and foremost: **Star and watch this repository** to stay up-to-date.

Also, follow our [Blog](https://blog.treblle.com), and on [Twitter](https://twitter.com/treblleapi).

Follow our tutorials and other video material at [YouTube](https://youtube.com/@treblle).

[![Treblle YouTube](https://img.shields.io/badge/Treblle%20YouTube-Subscribe%20on%20YouTube-F3F5FC?labelColor=c4302b&style=for-the-badge&logo=YouTube&logoColor=F3F5FC&link=https://youtube.com/@treblle)](https://youtube.com/@treblle)

[![Treblle on Twitter](https://img.shields.io/badge/Treblle%20on%20Twitter-Follow%20Us-F3F5FC?labelColor=1DA1F2&style=for-the-badge&logo=Twitter&logoColor=F3F5FC&link=https://twitter.com/treblleapi)](https://twitter.com/treblleapi)

### How to contribute

Here are some ways of contributing to making Treblle better:

- **[Try out Treblle](https://docs.treblle.com/en/introduction#getting-started)**, and let us know ways to make Treblle better for you.
- Send a pull request to any of our [open source repositories](https://github.com/Treblle) on Github. Check the contribution guide on the repo you want to contribute to for more details about how to contribute. We're looking forward to your contribution!

### Contributors

<!-- Replace link with the link of the SDK contributors-->
<a href="https://github.com/Treblle/treblle-strapi/graphs/contributors">
  <p align="center">
    <img  src="https://contrib.rocks/image?repo=Treblle/treblle-strapi" alt="A table of avatars from the project's contributors" />
  </p>
</a>
