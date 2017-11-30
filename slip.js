runToo = true;

chrome.runtime.onMessage.addListener(function (callTitle) {
	if (runToo == true) {
          document.getElementById("callNo").innerHTML = callTitle[0];
          document.getElementById("displayTitle").innerHTML = callTitle[1];
          window.print();
          runToo = false;
          window.close();
     }
});
