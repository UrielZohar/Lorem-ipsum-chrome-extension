chrome.action.onClicked.addListener(async () => {
  const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  
  await chrome.scripting
  .executeScript({
    target : {tabId : tab.id},
    files : [ './js/jquery.min.js', './js/toastr.min.js' ],
  });

  await chrome.scripting
    .insertCSS({
      target : {tabId : tab.id},
      files : [ './css/toastr.min.css' ],
    });
  
  chrome.tabs.sendMessage(tab.id, 'loading');
  
  setTimeout(async () => {
    await chrome.scripting
    .executeScript({
      target : {tabId : tab.id},
      files : [ './dist/bundle.js' ],
    });
    chrome.tabs.sendMessage(tab.id, 'running');
  }, 200);

});