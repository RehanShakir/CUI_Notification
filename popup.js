window.addEventListener("load", function (evt) {
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
    file: "background.js",
  });
});

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   //code in here will run every time a user goes onto a new tab, so you can insert your scripts into every new tab
// });
