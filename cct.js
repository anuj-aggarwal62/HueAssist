function camCalcScore(prm)
{
     if($("#cctVs").val() == "visible")
    {
        if(prm==1)
        {
        chrome.storage.sync.get(["score1"], function(result) {
            var s = result.score1+1;
            chrome.storage.sync.set({score1:s}, function() {});    
        })
        }

        else
        {
        chrome.storage.sync.get(["score2"], function(result) {
            var s = result.score2+1;
            chrome.storage.sync.set({score2:s}, function() {});    
        })
        }
    }
}

function setCamVal(params)
{
    var max = 9;
    var min=0;

    var r = Math.random() * (max - min) + min;

    var srcName = "data/cambridge/"+params+"/"+Math.ceil(r)+".jpg";

    $("#cctId")[0].src = srcName;
}

$(document).ready(function(){
    
    $("#test2").click(function()
    {    
        setCamVal("red-green");
        chrome.storage.sync.set({cctNextVal:1}, function() {});
        chrome.storage.sync.set({score1:0}, function() {});
        chrome.storage.sync.set({score2:0}, function() {});
    });

    $("#cctNext").click(function(){

        chrome.storage.sync.get(["cctNextVal"], function(result) {
            if(result.cctNextVal<10)
            {
                camCalcScore(1);
                setCamVal("red-green");
                q = result.cctNextVal+1;
                chrome.storage.sync.set({cctNextVal:q}, function() {});
            }

            else if(result.cctNextVal>=10 && result.cctNextVal<20)
            {
                camCalcScore(2);
                setCamVal("blue-yellow");
                q = result.cctNextVal+1;
                chrome.storage.sync.set({cctNextVal:q}, function() {});
            }

            else
            {
                camCalcScore(2);
                
                chrome.storage.sync.get(["score1","score2"], function(result) {

                    var displayMsg;

                    if(result.score1<5 && result.score2<5)
                    {
                        displayMsg="Sorry!!...You seem to have complete color blindness";
                    }

                    else if(result.score1<result.score2)
                    {
                        var prb = result.score1;

                        if(prb>=8)
                        {
                            displayMsg = "Your eyes are perfect. No worries!!"; 
                        }

                        else if(prb<8 && prb>=5)
                        {
                            displayMsg = "You have a mild red-green color blindness";
                        }

                        else
                        {
                            displayMsg = "Sorry!!..You have a severe red-green color blindness";
                        }
                    }

                    else
                    {
                        var prb = result.score2;

                        if(prb>=8)
                        {
                            displayMsg = " No worries!!...Your eyes are perfect."; 
                        }

                        else if(prb<8 && prb>=5)
                        {
                            displayMsg = "You have a mild blue-yellow color blindness";
                        }

                        else
                        {
                            displayMsg = "Sorry!!..You have a severe blue-yellow color blindness";
                        }
                    }

                    $("#cct").css("display","none");
                    $("#bldRes").html(displayMsg);
                    $("#bldRes1").css({"display":"flex","flex-direction":"column"});

                    chrome.storage.sync.set({page:7}, function() {});
                })
            }
        })
    });

});