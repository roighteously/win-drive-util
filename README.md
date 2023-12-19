# win-drive-util

> A simple utility for Windows to help with volume/disk control.

## Install

```
npm i win-drive-util
```

## Usage

```js
const wdu = require('win-drive-util')

console.log(wdu.listDrivesSync())
// should return something like [ 'C:' ]

wdu.waitForDrive('MyCoolDrive').then(drive =>{
    console.log('Found drive MyCoolDrive on ' + drive)
})
```
