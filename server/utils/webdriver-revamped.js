const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const attArr = []
const resultsArr = []
let status = 'Fired!'
let newEls
//let resultsObj = {}

function getElementsFromDriver (url) {

    const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build()
    .then(driver => {
        // let numLinksClicked = -1
        return driver.manage().window().setSize(1440, 817)
        .then(_ => driver.manage().timeouts().implicitlyWait(2000))
        .then(_ => driver.get(url))
        .then(_ => driver.wait(until.elementsLocated(By.tagName('a')), 5000, 'Took too long'))
        .then(_ => driver.findElements(By.tagName('a')))
        .then(elements => {
            return Promise.all(elements.map(element => {
                return Promise.all(['tagName', 'innerHTML', 'href']
                .map(attribute => element.getAttribute(attribute).then(thing => {
                    attArr.push(thing.trim())
                })))
            }))
        })
        .then(_ => driver.findElements(By.tagName('a')))
        // While number of iterations is less than tagName 'a's...
        .then(els => {
            for (var l = 0; l < 100; l++) {
                // Get the 'A' elements
                driver.wait(until.elementsLocated(By.tagName('a')), 5000, 'Took too long')
                .then(_ => {
                    return driver.findElements(By.tagName('a'))
                })
                // Slice out the ones already used
                // Click on the first one in the remaining A's, record result based on error
                .then(innerElements => innerElements.slice(l)[0].click().catch(e => {
                    status = 'Fizzled'
                }))
                .then(_ => resultsArr.push(status))
                .then(
                    // Goto page
                    driver.get(url)
                    //status = 'Fired'
                )
            }
        })
        .then(_ => console.log(resultsArr, attArr))
        .then(_ => driver.quit())
        .catch(err => console.error(err))

    })
    return resultsArr
}

getElementsFromDriver('https://www.fullstackacademy.com')

module.exports = getElementsFromDriver
