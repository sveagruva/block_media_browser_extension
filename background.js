function performToAll(callback){
    chrome.tabs.query({ "url": "*://*.twitter.com/*" }, function(tabs) {  
        callback(tabs);
    }); 

    chrome.tabs.query({ "url": "*://*.reddit.com/*" }, function(tabs) {  
        callback(tabs);
    }); 
}

function doIt(){
    performToAll(tabs => {
        tabs.forEach(tab => {
            chrome.tabs.remove(tab.id);
        });
    });
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    doIt();
});