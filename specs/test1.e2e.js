describe("home-work tests", function () {
    it('name1', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await $('#spinner').waitForDisplayed({ reverse: true, timeout: 20000 });

        const user = await $$('//a[@title="walker@jw.com"]');
        if (user.length === 0) {
            throw new Error(`Login user is not equal to navbar user!`)
        }

        const items = await $$('//ul[@id="first-nav-block"]//li')

        for (let i = 0; i < items.length; i++) {
            await items[i].moveTo()

            const color = await items[i].getCSSProperty('background-color')

            if (color.value === "rgba(255,0,0,1)") {
                const text = await items[i].getText();
                throw new Error(`The menu Item ${text} has wrong color!`)
            }
        }
    })
})
