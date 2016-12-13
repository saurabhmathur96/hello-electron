"use strict"

const builder = require("electron-builder")
const Platform = builder.Platform

// Promise is returned
builder.build({
  targets: Platform.LINUX.createTarget()
})
  .then(() => {
      console.log("build successful")
    // handle result
  })
  .catch((error) => {
      console.log(error);
    // handle error
  })