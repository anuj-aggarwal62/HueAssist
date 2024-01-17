document.onkeydown = function (e) {

    if(e.key=="ArrowRight")
    {
      chrome.storage.sync.get(["page"], function(result) 
      {
      if(result.page==1)
      {
        $("#mainDiv").css('display','none');    
        $("#qsre").css({"display":"flex","flex-direction":"column"});

        chrome.storage.sync.set({page:2}, function() {});
      }

      else if(result.page==2)
      {
        $("#qsre").css('display','none');    
        $("#choose").css({"display":"flex","flex-direction":"column"});

        chrome.storage.sync.set({page:3}, function() {});
      }
      })
    }

    else if(e.key=="ArrowLeft")
    {
      chrome.storage.sync.get(["page"], function(result) 
      {
      if(result.page==3)
      {
        $("#choose").css('display','none');    
        $("#qsre").css({"display":"flex","flex-direction":"column"});

        chrome.storage.sync.set({page:2}, function() {});
      }

      else if(result.page==2)
      {
        $("#qsre").css('display','none');    
        $("#mainDiv").css({"display":"block"});

        chrome.storage.sync.set({page:1}, function() {});
      }

      else if(result.page==5 || result.page==6 || result.page==7)
      {
        $("#bldRes1").css('display','none');
        $("#cct").css('display','none');
        $("#ishihara").css('display','none');    
        $("#qsre").css({"display":"flex","flex-direction":"column"});

        chrome.storage.sync.set({page:2}, function() {});
      }
      })
    }

    else if(e.key.toLowerCase()=="x")
    {
      window.close();
    }

  

    else if(e.key.toLowerCase()=="c")
    {
        $("#mainDiv").css('display','none');    
        $("#qsre").css('display','none');    
        $("#choose").css('display','none');    
        $("#bldRes1").css('display','none');
        $("#cct").css({"display":"flex","flex-direction":"column"});

        setCamVal("red-green");
        chrome.storage.sync.set({cctNextVal:1}, function() {});
        chrome.storage.sync.set({score1:0}, function() {});
        chrome.storage.sync.set({score2:0}, function() {});
        chrome.storage.sync.set({page:6}, function() {});
    }

    else if(e.key.toLowerCase()=="s")
    {
        $("#mainDiv").css('display','none');    
        $("#qsre").css('display','none');    
        $("#cct").css('display','none');    
        $("#bldRes1").css('display','none');
        
        $("#choose").css({"display":"flex","flex-direction":"column"});

        chrome.storage.sync.set({page:3}, function() {});
    }

    else if(e.key.toLowerCase()=="w")
    {
      document.getElementById("click_to_record").click();
    }

    else if(e.key.toLowerCase()=="h")
    {
      document.getElementById("speech_help").click();
    }
};