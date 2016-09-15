/*
Open a new tab, and load "my-page.html" into it.
*/
function getDomain(name){
switch (name) {
    case "Techopedia":
      return "https://www.techopedia.com/";
  case "Airmalta":
	return "http://www.airmalta.com";
  case "Eco Gozo":
	return "http://www.ecegozo.com";

	}

}

function openMyPage(message) {
var domain = getDomain(message.name);
  chrome.tabs.create({
     "url": chrome.extension.getURL(domain)
   });
}






chrome.runtime.onMessage.addListener(openMyPage);

