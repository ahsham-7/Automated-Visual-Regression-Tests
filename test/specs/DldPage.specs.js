import DldPage from '../pageobjects/dld.page.js'
import Page from '../pageobjects/page.js'

describe('Dld Page Suite', async () => {
    it('Verify Dld Page Top Section', async () => {
        DldPage.openE2E()
        await DldPage.SaveShot('Dld top section')
        DldPage.openProduction()
       await DldPage.CompareShot('Dld top section')

    })

})