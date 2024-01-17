$(document).ready(function()
{
  navigator.mediaDevices.getUserMedia({video: false, audio: true}).then((stream) => {
    window.localStream = stream; 
    window.localAudio.srcObject = stream;
    window.localAudio.autoplay = true; 
}).catch((err) => {
    console.log("you got an error : "+err);
});

chrome.storage.sync.get(["Visit"], function(result) {
  
  if(result.Visit==1)
  {
    window.open("main.html");

    chrome.storage.sync.set({color:null}, function() {});
    
    chrome.storage.sync.set({Visit:2}, function() {});
  }
});

  chrome.storage.sync.set({page:1}, function() {});

    $("#next").click(function()
    {
      $("#mainDiv").css('display','none');    
      $("#bldRes1").css('display','none');    
      $("#choose").css('display','none');    
      $("#cct").css('display','none');    
      $("#qsre").css({"display":"flex","flex-direction":"column"});

      chrome.storage.sync.set({page:2}, function() {});
    });

    $(".back").click(function()
    {
      $("#mainDiv").css('display','none');    
      $("#bldRes1").css('display','none');    
      $("#choose").css('display','none');    
      $("#cct").css('display','none');    
      $("#qsre").css({"display":"flex","flex-direction":"column"});

      chrome.storage.sync.set({page:2}, function() {});
    });
  
    $("#gotoSol").click(function()
    {
      $("#mainDiv").css('display','none');    
      $("#bldRes1").css('display','none');    
      $("#qsre").css('display','none');    
      $("#cct").css('display','none');    
      $("#choose").css({"display":"flex","flex-direction":"column"});

      chrome.storage.sync.set({page:3}, function() {});
    });

    $("#colorpick1").click(function()
    {
        chrome.storage.sync.set({color:"red-green"}, function() {});
    });

    $("#colorpick2").click(function()
    {
      chrome.storage.sync.set({color:"blue-yellow"}, function() {});
    });

    $("#colorpick3").click(function()
    {
      chrome.storage.sync.set({color:"complete"}, function() {});
    });

    $("#test1").click(function()
    {
      $("#mainDiv").css('display','none');    
      $("#bldRes1").css('display','none');    
      $("#choose").css('display','none');    
      $("#qsre").css('display','none');    
      $("#cct").css('display','none');    

      chrome.storage.sync.set({page:5}, function() {});
    });

    $("#test2").click(function()
    {
      $("#mainDiv").css('display','none');    
      $("#bldRes1").css('display','none');    
      $("#choose").css('display','none');    
      $("#qsre").css('display','none');    
      $("#cct").css({"display":"flex","flex-direction":"column"});

      chrome.storage.sync.set({page:6}, function() {});
    });

    $("#finish").click(function()
    {
      chrome.action.setPopup({popup: ""});
      window.close();  
    }) 
}); 
