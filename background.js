chrome.browserAction.onClicked.addListener(function (tab) {
     var slipURL = "/slip.html";
     chrome.tabs.create({index: 0, active: false, url: slipURL});
     chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
          file: "payload.js"
     });
});

chrome.runtime.onMessage.addListener(function (callTitle) {
     chrome.runtime.sendMessage(callTitle);
});
