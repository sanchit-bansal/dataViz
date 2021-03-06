mapboxgl.accessToken = 'pk.eyJ1IjoidmluZWV0cmVkZHkiLCJhIjoiY2pkeWcxOXl6MTMxczJ3cXAwYnJqbm05OSJ9.5HKKb0O8A-9ChhsXoW6LtA'


var chapters = {
    'part-0' : {
        center : [78.9629,20.5937],
        zoom : 4,
        bearing : 0,
        pitch : 0,
    },
'part-1' : {
    center : [74.030543,15.29299],
    zoom : 11.3,
    bearing : 40,
    pitch : 1,
},
'part-2' : {
    center : [76.2673, 9.9312],
    zoom : 12,
    bearing : 50,
    pitch : 20,
},
'part-3' : {
    center : [77.123,28.653],
    zoom : 11.5,
    bearing : 0,
    pitch : 1,
},
'part-4' : {
    center : [72.83333,18.96667],
    zoom : 11,
    bearing : -60,
    pitch : 50,
},
'part-5' : {
    center : [88.33778,22.54111],
    zoom : 12,
    bearing : 18,
    pitch : 30,
},
'part-6' : {
    center : [77.59796,12.96991],
    zoom : 11,
    bearing : 0,
    pitch : 30,
},
'part-7' : {
// center : [76.266935,9.901199],
center : [78.46667,17.36667],
zoom : 12,
bearing : 20,
pitch : 1,
},
'part-8' : {
center : [72.58,23.03],
zoom : 12.2,
bearing : 0,
pitch : 1,
},
'part-9' : {
    center : [73.84778,18.52361],
    zoom : 12.5,
    bearing : 0,
    pitch : 1,
},
'part-10' : {
    center : [88.33778,22.54111],
    zoom : 12,
    bearing : 18,
    pitch : 30,
},
'part-11' : {
center : [78.9629,20.5937],
zoom : 4,
bearing : 0,
pitch : 0,
},
};

var map;

window.onload = function() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/vineetreddy/cjeejipd541hn2rpuvmzto3l5',
        center: [82.8, 23.88],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    });
}

// On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    console.log(chapterNames);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'part-1';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}