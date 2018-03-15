<div align="center">
  <h1>
    Better Cardmarket Browser Extension 
  </h1>

  <p>
    <strong>A browser extensions for optimizing design and functions of cardmarket.com</strong>
  </p>
</div>



## Features

<dl>
  <dt>Showing preview of card images</dt>
  <dd>
    Based on WebExtensions. It also includes a tiny polyfill to bring uniformity to the APIs exposed by different browsers.
  </dd>
</dl>

<dl>
  <dt>optimized design</dt>
  <dd>
    Optimized font and layout
  </dd>
</dl>

## Demo-Screenshots:
[Screenshot 1](https://i.imgur.com/Az6gET1.png)

[Screenshot 2](https://i.imgur.com/5gAbeiN.png)

[Screenshot 3](https://i.imgur.com/44wziFk.png)


## Supported Browsers
- Chrome
- Firefox
- Opera


#How to contribute

## Installation
1. Clone the repository `git clone https://github.com/newsfusion/better-cardmarket.git`
2. Run `npm install`
3. Run `npm run build`

After building there are 3 zipped files for each supported browser

##### Load the extension in Chrome & Opera
1. Open Chrome/Opera browser and navigate to chrome://extensions
2. Select "Developer Mode" and then click "Load unpacked extension..."
3. From the file browser, choose to `better-cardmarket/build/chrome` or (`better-cardmarket/build/opera`)


##### Load the extension in Firefox
1. Open Firefox browser and navigate to about:debugging
2. Click "Load Temporary Add-on" and from the file browser, choose `better-cardmarket/build/firefox`


## Developing
The following tasks can be used when you want to start developing the extension and want to enable live reload - 

1. Execute run script for your browser
- `npm run chrome-watch`
- `npm run opera-watch`
- `npm run firefox-watch`

2. Open your browser and go to chrome://extensions/ (for chrome)
3. Enable Developer mode by clicking the checkbox in the upper-right corner.
4. Click on the "Load unpacked extension..." button.
5. Select the "build\<browser>" directory of the better-cardmarket project (this folder should contain your unpacked extension).


-----------
**Please contribute to this project! I'm very happy for any help and ideas** 

_This extension is based on a boilderplate from Bharani, [Email This](https://www.emailthis.me) - Thanks!_
