const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const resultsArr = []
//let resultsObj = {}

function getElementsFromDriver (url) {
    const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build()
    .then(driver => {
        return driver.manage().window().setSize(1440, 817)
        .then(_ => driver.get(url))
        .then(_ => driver.wait(until.elementsLocated(By.tagName('a')), 5000, 'Could not locate links in time'))
        .then(_ => driver.findElements(By.tagName('a')))
        .then(elements => {
            return Promise.all(elements.map(element => {
                return Promise.all(['tagName', 'innerHTML', 'href']
                .map(attribute => element.getAttribute(attribute).then(thing => {
                    //console.log("Element: ", element)
                    //console.log("Attribute: ", attribute)
                    //console.log("Attribute's value: ", thing)
                    resultsArr.push(thing.trim())
                })))
            }))
        })
        .then(_ => console.log(resultsArr))
        .then(_ => driver.quit())
        .catch(err => console.error(err))

    })
    return resultsArr
}


module.exports = getElementsFromDriver
