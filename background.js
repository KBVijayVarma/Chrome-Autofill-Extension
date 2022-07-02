
            chrome.tabs.query({active:true,lastFocusedWindow:true},all_tabs => {
                let url = all_tabs[0].url;
                console.log("Url is");
                console.log(url);
            });