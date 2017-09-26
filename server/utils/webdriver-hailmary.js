// const url = PageTest api GET request  --> deal with this later.
const Promise = require('bluebird')
const url = 'https://www.fullstackacademy.com'
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

// let attArr = []


function webby (u) {
    const driver = new webdriver.Builder().forBrowser('chrome').build()
    driver.manage().window().setSize(1440, 817)
    driver.manage().timeouts().implicitlyWait(1000)

    return driver.get(u)
    .then(_ => driver.wait(until.elementsLocated(By.tagName('a')), 5000, 'Took too long'))
    .then(_ => driver.findElements(By.tagName('a')))
    .then(elements => {
        return Promise.all(elements.map(element => {
            return Promise.all(['tagName', 'href', 'innerHTML']
            .map(attribute => element.getAttribute(attribute).then(attValue => {
                return attValue.trim() //attArr.push(thing.trim())
            })))
        }))
    })
    .then(attValues => attValues)
        // .then(_ => driver.quit())
        //.catch(err => console.error(err))
}

//const asyncWebby =

// webby(url, function (err, res) {
//     if (err) console.err(err)
//     console.log(res)
// })

//asyncWebby.then(val => console.log(val))

module.exports = webby
