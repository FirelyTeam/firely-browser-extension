# Firely browser extension for FHIR

## Installing

### Latest stable
* Find the Chrome extension in the [Chrome Web Store](https://chrome.google.com/webstore/).
   * Should work on all Chromium based browsers, including Google Chrome, Microsoft Edge and Arc.
 * Find the Firefox extension in the [Firefox Browser Add-Ons store](https://addons.mozilla.org/en-US/firefox/addon/firely-fhir-extension/).

### For Development

Chrome:
1. Go to [chrome://extensions](chrome://extensions) and turn on `Developer Mode` on top-right.
2. Click `Load unpacked` and select the `dist` folder where the browser plugin is located.

Firefox:
1. Install Firefox Developer Edition
2. In `about:debugging#/runtime/this-firefox` load a `Temporary Add-On` and select the built Release.zip.

## Publishing

Chrome:
* Release are published from the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/) under the `Firely` publisher.
* Members from the [Firely Publishing Google Group](https://groups.google.com/g/firely-publishing) are able to publish, after setting up a Chrome Webstore Developer account.

Firefox:
* Release a new version from the [Developer Hub](https://addons.mozilla.org/en-US/developers/).

## Development 

The framework for this extension was created with [Extension CLI](https://oss.mobilefirst.me/extension-cli/).


### Available Commands

| Commands | Description |
| --- | --- |
| `npm run start` | build extension, watch file changes |
| `npm run build` | generate release version |
| `npm run build:firefox` | generate release version |
| `npm run docs` | generate source code docs |
| `npm run clean` | remove temporary files |
| `npm run test` | run unit tests |
| `npm run sync` | update config files |

For CLI instructions see [User Guide &rarr;](https://oss.mobilefirst.me/extension-cli/)
