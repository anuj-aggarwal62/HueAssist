function search_for()
{
    var tagList = ["abbreviation","acronymn","address","a","area","button","label","p",
    "pre","span","td","th","summary","i","li","h6","h5","h4","h3","h2","h1"]

    var social = 
    {
        "open youtube" : "https://www.youtube.com/",
        "open twitter" : "https://twitter.com/home",
        "open instagram" : "https://www.instagram.com/",
        "open gmail" : "https://mail.google.com/",
        "open mail" : "https://mail.google.com/",
        "open quora" : "https://www.quora.com/",
        "compose mail" : "https://mail.google.com/mail/u/0/#inbox?compose=new",
        "twitter post" : "https://twitter.com/compose/tweet",
        "google images":"https://www.google.co.in/imghp?hl=en&tab=ri&authuser=0&ogbl",
        "open spotify" : "https://open.spotify.com/",
    }

    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = false;

    recognition.addEventListener('result', e => 
    {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

            console.log(transcript.toLowerCase());

            for(var i in social)
            {
                if(transcript.toLowerCase().includes(i))
               {
                window.open(social[i]);
               }  
            }

            if(transcript.toLowerCase().includes("go back")||transcript.toLowerCase().includes("go backward"))
            {
                history.back();
            }

            else if(transcript.toLowerCase().includes("go forward")||transcript.toLowerCase().includes("next page"))
            {
                history.forward();
            }

            if(transcript.toLowerCase().includes("get me the headers"))
            {
                var headers = "The headers are\n\n";

                for(var i = (all.length-2); i <all.length; i++) 
                {
                    for(var j=0;j<all[i].length;j++)
                    {  
                     headers += all[i][j].innerText+"\n";
                    }

                    headers += "\n";
                }

                alert(headers);
            }

            if(transcript.toLowerCase().includes("pause")||transcript.toLowerCase().includes("pass")||transcript.toLowerCase().includes("play"))
            {
                console.log(document.getElementsByClassName("vnCew8qzJq3cVGlYFXRI")[0]);
                document.getElementsByClassName("vnCew8qzJq3cVGlYFXRI")[0].click();
            }

            var all = []

            for(var i=0;i<tagList.length;i++)
            {
                all[i] = document.getElementsByTagName(tagList[i])
            }

            for(var i = 0; i < all.length; i++) 
            {
                for(var j=0;j<all[i].length;j++)
                {  
                 all[i][j].style.removeProperty("color");
                 all[i][j].style.removeProperty("background");
                }
            }
    
            for(var i = 0; i < all.length; i++) 
            {
                for(var j=0;j<all[i].length;j++)
                {
                  var txt = all[i][j].innerHTML.toLowerCase(); 

                if(transcript.includes("click"))
                {
                var transcriptR = transcript.replace("click","").trim();

                if(txt.includes(transcriptR.toLowerCase()))
                {  
                 all[i][j].click();
                 
                 break;
                }
                }

                else if(txt.includes(transcript.toLowerCase()))
                {  
                 all[i][j].style.background = "black";
                 all[i][j].style.color = "red";
                }
                }
            }
    });

    if (speech == true) 
    {
        recognition.start();
    }
}

export {search_for};