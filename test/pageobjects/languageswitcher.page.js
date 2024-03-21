import Page from './page.js';
class languageSwitcher extends Page{
get languageSwitcherModel(){
    return $('//div[@aria-label="language switch button"]')
}
get applybutton(){
    return $('//div[@class="_1075545d f1edf50c"]/a[@aria-label="Apply changes"]')
}
get EnglishTranslation(){
    return $('//div[@class="_25ff67fb"]/button[1]')
}
get ArabicTranslation(){
    return $('//div[@class="_25ff67fb"]/button[2]')
}
get ChineseTranslation(){
    return $('//div[@class="_25ff67fb"]/button[3]')
}
get RussianTranslation(){
    return $('//div[@class="_25ff67fb"]/button[4]')
}
async VerifyIsArabicPopup(){
await this.languageSwitcherModel.click()
await this.ArabicTranslation.click()
await this.applybutton.click()
await this.languageSwitcherModel.click()
}
async VerifyIsChinesePopup(){
    await this.languageSwitcherModel.click()
    await this.ChineseTranslation.click()
    await this.applybutton.click()
    await this.languageSwitcherModel.click()
}
async VerifyIsRussianPopup(){
    await this.languageSwitcherModel.click()
    await this.RussianTranslation.click()
    await this.applybutton.click()
    await this.languageSwitcherModel.click()
}
async VerifyIsEnglishPopup(){
    await this.languageSwitcherModel.click()
    await this.ArabicTranslation.click()
    await this.applybutton.click()
    await this.languageSwitcherModel.click()
    await this.EnglishTranslation.click()
    await this.applybutton.click()
    await this.languageSwitcherModel.click()
    await this.languageSwitcherModel.waitForDisplayed({ timeout: 3000 })
}

}
export default new languageSwitcher()