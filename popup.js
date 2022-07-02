window.onload=function(){
    function retrieve(){
        elements = document.getElementById('myform').elements;
        for(i=0;i<elements.length;i++){
            chrome.storage.local.get([elements[i].name],function(result){
                elements[i].setAttribute("value",result[elements[i].name]);
            });
        }
        console.log("Retreival Successfull");
    };
    retrieve();
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {}, function (response) {
                console.log("Sent a Message");
                console.log(response);
        });
    });
    document.getElementById("myButton").addEventListener("click", myFunction);
    document.getElementById("fill").addEventListener("click", fill);
    function fill(){
        chrome.tabs.sendMessage("1",{
            type:"FILL",
            value:"ALL"
        });
    };
    
    function myFunction(){
        elements = document.getElementById('myform').elements;
        
        console.log(elements);
        data = {};
        arr = [];
        for(i=0;i<elements.length;i++){
            data[elements[i].name]= elements[i].value;
            arr.push(elements[i].name);
        }
        console.log(data);
        console.log("Arr is",arr);
        
        chrome.storage.local.set(data,function(){
           console.log("Storage is saved");
        });
        chrome.storage.local.get(arr, function(result) {
            console.log('Value currently is ' + result.fname);
            console.log(result);
            console.log(result["fname"]);
          });
    }
}