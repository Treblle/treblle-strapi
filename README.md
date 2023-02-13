# Strapi plugin treblle

> Check out the [official Treblle docs](https://docs.treblle.com/en/integrations/strapi) for usage of this plugin.

To integrate Treblle with [Strapi](http://strapi.io), we provide an official SDK for Strapi which is a Strapi plugin - [`treblle-strapi`](https://github.com/Treblle/treblle-strapi).

## Requirements

* Strapi v4

## Installation

```sh
npm i @treblle/strapi --save
```

After installation set the following environment variables  your `.env`

> You can find the values in your Treblle dashboard

* `TREBLLE_API_KEY`
* `TREBLLE_PROJECT_ID`


## Setup

`treblle-strapi` exposes a middleware that you can add in your `config/middlewares.js` array like so:

```js
module.exports = [
  //...
 'plugin::treblle.treblle'
]
```

And that's it, Treblle will now monitor your Strapi content API.

## Config

### AdditionalFieldsToMask
You can specify additional fields to be [masked](/en/security/masked-fields) before sending the Treblle payload. To do so, add the following config in `config/plugins.js`

```js
module.exports = {
  'treblle': {
    config: {
      additionalFieldsToMask: ['FIELD_TO_MASK_1']
    }
  }
}
```
> Do replace `FIELDS_TO_MASK_1` with the field you want to mask.

### routesToMonitor
By default, this Strapi plugin will monitor only routes that starts has `/api` in the URL. You can override this by passing a `routesToMonitor` array in the `config` of the plugin.

```js
module.exports = {
  'treblle': {
    config: {
      routesToMonitor: ['api'] // this is the default
    }
  }
}
```
