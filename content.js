chrome.runtime.onMessage.addListener(msg => {
  if (msg === 'loading') {
    toastr.info('Lorem ipsum is running...');
  }

  if (msg === 'running') {
    try {
      changeContentOfBodyGlobal();
      toastr.success('Lorem ipsum done !');
    } catch (err) {
      toastr.error('Lorem ipsum failed');
    }
  }
});