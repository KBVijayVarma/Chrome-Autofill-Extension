(() => {
    let inputs;
    inputs = document.querySelectorAll('input[type="text"]');
    console.log(inputs);
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, formId } = obj;

        console.log("Received Message");
        if (type === "YES") {
          currentForm = formId;
          //newVideoLoaded();
        } else if (type === "FILL") {
          //youtubePlayer.currentTime = value;
          console.log("Went into Fill");

        } else if ( type === "DELETE") {
          //currentVideoBookmarks = currentVideoBookmarks.filter((b) => b.time != value);
          //chrome.storage.sync.set({ [currentVideo]: JSON.stringify(currentVideoBookmarks) });
    
          //response(currentVideoBookmarks);
        }
    });
});



