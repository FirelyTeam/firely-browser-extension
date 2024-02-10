# Firely browser extension for FHIR

## Installing

### Latest stable
* Find the extension (once published) in the [Chrome Web Store](https://chrome.google.com/webstore/).
   * Should work on all Chromium based browsers, including Google Chrome, Microsoft Edge and Arc.

Todo: Add Firefox instructions

### For Development

1. Go to [chrome://extensions](chrome://extensions) and turn on `Developer Mode` on top-right.
2. Click `Load unpacked` and select the `dist` folder where the browser plugin is located.

Todo: Add Firefox instructions

## Publishing

* Release are published from the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/) under the `Firely` publisher.
* Members from the [Firely Publishing Google Group](https://groups.google.com/g/firely-publishing) are able to publish, after setting up a Chrome Webstore Developer account.

Todo: Add Firefox instructions

## Development 

The framework for this extension was created with [Extension CLI](https://oss.mobilefirst.me/extension-cli/).

If you find this software helpful [star](https://github.com/MobileFirstLLC/extension-cli/) or [sponsor](https://github.com/sponsors/MobileFirstLLC) this project.


### Available Commands

| Commands | Description |
| --- | --- |
| `npm run start` | build extension, watch file changes |
| `npm run build` | generate release version |
| `npm run docs` | generate source code docs |
| `npm run clean` | remove temporary files |
| `npm run test` | run unit tests |
| `npm run sync` | update config files |

For CLI instructions see [User Guide &rarr;](https://oss.mobilefirst.me/extension-cli/)
