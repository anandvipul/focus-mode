// First Event called runtime.onInstalled is listenend

chrome.runtime.onInstalled.addlistener(() => {
    chrome.action.setbadgeText({
        text: "OFF"
    });
});