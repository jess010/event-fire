// const url = PageTest api GET request  --> deal with this later.
const Promise = require('bluebird')
const url = 'https://www.fullstackacademy.com'

//module.exports =
function webby (u) {
    const webdriver = require('selenium-webdriver'),
        By = webdriver.By,
        until = webdriver.until;

    let attArr = []

    const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build()
    .then(driver => {
        return driver.manage().window().setSize(1440, 817)
        .then(_ => driver.manage().timeouts().implicitlyWait(1000))
        .then(_ => driver.get(u))
        .then(_ => driver.wait(until.elementsLocated(By.tagName('a')), 5000, 'Took too long'))
        .then(_ => driver.findElements(By.tagName('a')))
        .then(elements => {
            return Promise.all(elements.map(element => {
                return Promise.all(['tagName', 'innerHTML', 'href']
                .map(attribute => element.getAttribute(attribute).then(thing => {
                    return thing.trim() //attArr.push(thing.trim())
                })))
            }))
        })
        .then(something => something)
        // .then(_ => driver.quit())
        //.catch(err => console.error(err))

    })
}

webby(url, function (err, result) {
    if (err) console.err(err)
    console.log(result)
})

//module.exports = attArr


            // .then(_ => Promise.all(attArr.map(item => {
            //     if (count + 1 % 3 === 0) {
            //         obj['href'] = item
            //         attObjArr.push(obj)
            //         obj = {}
            //     } else if (count + 1 % 2 === 0) {
            //         obj['innerHTML'] = item
            //     } else {
            //         obj['tagName'] = item
            //     }
            //     count += 1
            //     console.log(count)
            // })))
            //.then(_ => console.log('AttArr', attArr))
