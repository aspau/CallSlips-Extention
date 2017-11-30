# Voyager-Callslips

A Chrome extention that grabs title and call number information from the WRLC Voyager Catalog and prints it on receipt paper to hand to patrons.


## Installing

The packaged extention can be added to Chrome [here](https://chrome.google.com/webstore/detail/wrlc-call-slips/dffclpmiijffakenibfpcpgheldnmfko).

## Local modification

This extention will only work in the Washington Research Library Consortium but it can serve as a template for any other Library that wants to implement it. In the 'payload.js' file find a distinguishing element that wraps around some instance of call numbers and titles and then edit the code to include them

```
var aCount = document.body.getElementsByTagName("a").length;

for (var i = 0; i < aCount; i++) {

// Change "SC=CallNumber" to some string that shows up in the call number element

  if (document.body.getElementsByTagName("a")[i].href.indexOf("SC=CallNumber") > -1) {
    var callNo = document.body.getElementsByTagName("a")[i].innerHTML;
  }

}

// See if the title element has a recognizeable class. Otherwise use a method similar to the Call Number
var displayTitle = document.body.getElementsByClassName("displaytitle")[0].innerHTML;
var callTitle = [callNo, displayTitle];

chrome.runtime.sendMessage(callTitle);
```
The payload.js file is injected into the active page, and then sends a message back to the background process which in turn takes that information and puts it into the call slip.

## License

This project is licensed under the MIT License.
