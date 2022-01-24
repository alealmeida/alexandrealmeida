# Next.js + Fonts

Import fonts in [Next.js](https://github.com/zeit/next.js)
(woff, woff2, eot, ttf, otf & svg)

## Installation

```
npm install --save nextjs-fonts
```

or

```
yarn add nextjs-fonts
```

## Usage

Create a `next.config.js` in your project

```js
// next.config.js
const withFonts = require('nextjs-fonts');
module.exports = withFonts();
```

Optionally you can add your custom Next.js configuration as parameter

```js
// next.config.js
const withFonts = require('nextjs-fonts');
module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
});
```


Add your font files under `public/fonts` directory

and add your font as font-face to css file

```
@font-face {
  font-family: 'Font';
  src: url('/static/fonts/Font-Bold.ttf');
  src: url('/static/fonts/Font-Light.ttf');
  src: url('/static/fonts/Font-Medium.ttf');
  src: url('/static/fonts/Font-Regular.ttf');
}
```


### assetPrefix

You can serve remote resources by setting **_assetPrefix_** option.

Example usage:

```js
// next.config.js
const withFonts = require('nextjs-fonts');
module.exports = withFonts({
  assetPrefix: 'https://example.com',
  webpack(config, options) {
    return config;
  }
});
```

### Include SVG fonts

You can also (optionally) include SVG fonts by setting **_enableSvg_** option.

Example usage:

```js
// next.config.js
const withFonts = require('nextjs-fonts');
module.exports = withFonts({
  enableSvg: true,
  webpack(config, options) {
    return config;
  }
});
```

## Author 
this repo forked from 

https://github.com/rohanray/next-fonts
