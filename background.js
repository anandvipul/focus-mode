chrome.runtime.onInstalled.addlistener(() => {
    chrome.action.setbadgeText({
        text: "OFF"
    });
});