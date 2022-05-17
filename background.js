// Será executado quando instalar ou atualizar extensão

chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({
       url: 'https://github.com/MatheusPalmieri'
    })
})
