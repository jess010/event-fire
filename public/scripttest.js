
function makeMeWindow (url, wName) {
    return window.open(url, wName)
}

myNewToy = makeMeWindow("https://www.w3schools.com", 'mine')
// myNewToy.anapple = "fred"
// console.log(myNewToy.anapple)

console.log(myNewToy.document)

// var url = '//www.sprymedia.co.uk/VisualEvent/VisualEvent_Loader.js';
// var n = myNewToy.document.createElement('script');
// n.setAttribute('language','JavaScript');
// n.setAttribute('src',url+'?rand='+new Date().getTime());
// myNewToy.document.body.appendChild(n);

// //tryVisualEvent(myNewToy)
// console.log(myNewToy)


