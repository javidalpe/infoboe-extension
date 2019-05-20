
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: 'buscar',
        title: 'Buscar en los boletines',
        type: 'normal',
        contexts: ['selection'],
    });

    chrome.contextMenus.onClicked.addListener(function(info) {
        // Encode user input for special characters , / ? : @ & = + $ #
        var newURL = 'https://www.infoboe.com/buscar?q=' + encodeURIComponent(info.selectionText);
        chrome.tabs.create({ url: newURL });
    });
});