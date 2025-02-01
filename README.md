# Firely browser extension for FHIR

* Find the Chrome extension in the [Chrome Web Store](https://chromewebstore.google.com/detail/firely-fhir-extension/oofbicpdhcjcnbohhbcpgfmogeolgaah).
   * Should work on all Chromium based browsers, including Google Chrome, Microsoft Edge and Arc.
 * Find the Firefox extension in the [Firefox Browser Add-Ons store](https://addons.mozilla.org/en-US/firefox/addon/firely-fhir-extension/).

## Development

Build:
1. `npm install`
2. `npm run build`

Chrome:
1. Go to [chrome://extensions](chrome://extensions) and turn on `Developer Mode` on top-right.
2. Click `Load unpacked` and select the `dist` folder where the browser plugin is located.

Firefox:
1. Install Firefox Developer Edition
2. In [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox) load a `Temporary Add-On` and select the built Release.zip.

## Testing

1. `npm install --save-dev mocha chai`
2. `npm test`

## Publishing

Chrome:
* Release are published from the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/) under the `Firely` publisher.
* Members from the [Firely Publishing Google Group](https://groups.google.com/g/firely-publishing) are able to publish, after setting up a Chrome Webstore Developer account.

Firefox:
* Release a new version from the [Developer Hub](https://addons.mozilla.org/en-US/developers/).
