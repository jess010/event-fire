// Core function content curated from "event-listeners.js" gist
// Stored in a function and updated to ES15
// https://gist.github.com/danburzo/9254630

export default function getEventListenersFromDoc (document) {
    return Array.prototype.slice.call(
    document.querySelectorAll('*')
    ).map(function(element) {
        var listeners = getEventListeners(element);
        return {
            element: element,
            listeners: Object.keys(listeners).map(function(k) {
                return { event: k, listeners: listeners[k] }
            })
        }
    }).filter(function(item) {
        return item.listeners.length;
    })
}


