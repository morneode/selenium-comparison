"use strict";

// var webdriver = require("selenium-webdriver");
const { Builder, By, Key, until } = require("selenium-webdriver");

// const sleep = async () => {
//   setTimeout(() => {
//     console.log("Waiting...");
//   }, 2000);
// };

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function example() {
  let driver = await new Builder().forBrowser("firefox").build();
  // let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://www.google.com/ncr");
    await sleep(2000).then(() => console.log("Waiting..."));
    await driver.getTitle().then(function (title) {
      console.log("The title is: " + title);
    });

    await sleep(2000).then(() => console.log("Waiting..."));

    await driver
      .findElement(By.name("q"))
      .sendKeys("webdriver", Key.RETURN)
      .then(() => console.log("Search query entered.."));

    await sleep(2000).then(() => console.log("Waiting..."));

    await driver
      .wait(until.titleIs("webdriver - Google Search"), 10000)
      .then(() => console.log("The title is correct"));

    await sleep(5000).then(() => console.log("Waiting..."));
  } finally {
    await driver.quit().then(() => console.log("Closed webdriver"));
  }
}
example();
console.log("DONE...");
function handleFailure(err, driver) {
  console.error("Something went wrong!\n", err.stack, "\n");
  driver.quit();
}
