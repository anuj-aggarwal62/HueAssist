import {colorPage,googleColor} from './colors.js';
import {search_for} from './search.js'

chrome.action.onClicked.addListener((tab) => 
{
  if(tab.url.includes("google.co")) 
  {
    chrome.scripting.executeScript
    ({
      target: { tabId: tab.id },
      function: googleColor
    });
  }

  else if(!tab.url.includes("chrome://")) 
  {
      chrome.scripting.executeScript
    ({
      target: { tabId: tab.id },
      function: colorPage
    });

    chrome.scripting.executeScript
    ({
      target: { tabId: tab.id },
      function: search_for
    });
  }
});

  chrome.runtime.onInstalled.addListener(async () => {
    chrome.action.setPopup({popup: "main.html"});

    chrome.storage.sync.set({Visit:1}, function() {});
});