const jsdom = require("jsdom")
const { JSDOM } = jsdom

// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// //console.log(dom.window.document.querySelector("p").textContent); // "Hello world"

// module.exports = dom.window.document.querySelector("p").textContent

const dom = new JSDOM(``, {
    url: 'https://www.motto.com.au/',
    contentType: 'text/html',
    includeNodeLocations: true
  });
//console.log(dom.window.document.querySelector("p").textContent); // "Hello world"

const nodeArray = Array.prototype.slice.call(
    dom.window.document.querySelectorAll('*')
    ).map(function(element) {
        // var listeners = getEventListeners(element);
        return {
            element: element,
            // listeners: Object.keys(listeners).map(function(k) {
            //     return { event: k, listeners: listeners[k] }
            // })
        }
    // }).filter(function(item) {
    //     return item.listeners.length;
    })

module.exports = nodeArray
