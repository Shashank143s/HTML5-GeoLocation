/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */
 var options = {
 type: "basic",
 title: "Primary Title",
 message: "Primary message to display",
 iconUrl: "icon_128.png"
};

chrome.app.runtime.onLaunched.addListener(function() {

  chrome.app.window.create('index.html', {
    id: 'main',
    bounds: { width: 620, height: 500 }
  });

  chrome.notifications.create(options);
});
