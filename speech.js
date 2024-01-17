click_to_record.addEventListener('click',
function()
{
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
        recognition.interimResults = true;
    
        recognition.addEventListener('result', e => 
        {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
    
            document.getElementById("convert_text").innerHTML = transcript;
    
            for(var i in social)
            {
                if(transcript.toLowerCase().includes(i))
               {
                window.open(social[i]);
               }  
            }

            if(transcript.toLowerCase().includes("ishihara test"))
            {
                document.getElementById("test1").click();
            }

            else if(transcript.toLowerCase().includes("cambridge test"))
            {
                document.getElementById("test2").click();
            }

            else if(transcript.toLowerCase().includes("solution"))
            {
                document.getElementById("gotoSol").click();
            }
        });
        
        if (speech == true) 
        {
            recognition.start();
        }
});

//speech_help.addEventListener('click',
//function()
//{
    //chrome.tts.speak("I will now explain you the keywords used for the voice assistant.........Open is used for opening a website......Compase mail to compose a mail......Post tweet to post a tweet......Cambridge test or Ishihara test to take the respective test",{'rate': 1});
//});
