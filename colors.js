function colorPage() {

    var tagList = ["abbreviation","acronymn","address","area","button","code","datalist","label","p",
                    "pre","span","td","th","summary","i","li"]

    var colors = {
        'complete': {
            'text': 'white',
            'background': 'black',
            'links': 'red'
        },
    
        'red-green': {
            'text': 'white',
            'background': '#184890',
            'links': '#ffd800'
        },
    
        'blue-yellow': {
            'text': 'white',
            'background': '#BF692C',
            'links': 'yellow'
        }
    };

    chrome.storage.sync.get(["color"], function(result) {
        
        var color = result.color;

        if(color==null) 
            return

        document.body.style.color = colors[color].text;
        document.body.style.background = colors[color].background;

        var all = []

        for(var i=0;i<tagList.length;i++)
        {
            all[i] = document.getElementsByTagName(tagList[i])
        }

        for(var i = 0; i < all.length; i++) 
        {
            for(var j=0;j<all[i].length;j++)
            {
            all[i][j].style.background = colors[color].background;
            all[i][j].style.color = colors[color].text;
            }
        }

        var links = document.getElementsByTagName('a');
        
        for(var i = 0; i < links.length; i++) {
            links[i].style.color = colors[color].links;
        }

        var imgs = document.getElementsByTagName('img');
        var video = document.getElementsByTagName('video');

        for(var i = 0; i < imgs.length; i++) 
        {
            if(result.color=="complete")
            {
                imgs[i].style.filter = "grayscale(100%)";
            }

            else
            {
                imgs[i].style.filter = "sepia(100%)";
            }
        }
    
        for(var i = 0; i < video.length; i++) 
        {
            if(result.color=="complete")
            {
                video[i].style.filter='url(#blackandwhite)';
            }

            else
            {
                video[i].style.filter = "sepia(100%)";
            }
        }
    }); 
}

function googleColor()
{
    var colors = {
        'complete': {
            'text': 'white',
            'background': 'black',
            'links': 'red'
        },
    
        'red-green': {
            'text': 'white',
            'background': '#184890',
            'links': '#ffd800'
        },
    
        'blue-yellow': {
            'text': 'white',
            'background': '#BF692C',
            'links': 'yellow'
        }
    };

    chrome.storage.sync.get(["color"], function(result) {

        var color = result.color;

        if(color==null) 
            return

        var links = [];

    links[0] = document.getElementsByTagName('a');
    links[1] = document.getElementsByTagName('i');
    links[2] = document.getElementsByTagName('span');

    for(var i = 0; i < links.length; i++) 
    {
        for(var j = 0; j < links[i].length; j++)
            links[i][j].style.color = colors[color].links;
    }

    for(var i = 0; i < links.length; i++) 
    {
        for(var j = 0; j < links[i].length; j++)
            links[i][j].style.color = colors[color].links;
    }

    var imgs = document.getElementsByTagName('img');
    var video = document.getElementsByTagName('video');

    for(var i = 0; i < imgs.length; i++) 
    {
        if(result.color=="complete")
        {
            imgs[i].style.filter = "grayscale(100%)";
        }

        else
        {
            video[i].style.filter = "sepia(100%)";
        }
    }

    for(var i = 0; i < video.length; i++) 
    {
        if(result.color=="complete")
        {
            video[i].style.filter='grayscale(100%)';
        }

        else
        {
            video[i].style.filter = "sepia(100%)";
        }
    }
  });
}

export {colorPage,googleColor};
