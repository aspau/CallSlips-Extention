var aCount = document.body.getElementsByTagName("a").length;

for (var i = 0; i < aCount; i++) {
  if (document.body.getElementsByTagName("a")[i].href.indexOf("SC=CallNumber") > -1) {
    var callNo = document.body.getElementsByTagName("a")[i].innerHTML;
  }

}

var displayTitle = document.body.getElementsByClassName("displaytitle")[0].innerHTML;
var callTitle = [callNo, displayTitle];

chrome.runtime.sendMessage(callTitle);
