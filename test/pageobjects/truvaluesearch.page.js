import Page from './page.js';
class truvaluesearch extends Page{
    openProduction(){
        super.openProduction('https://www.bayut.com/tru-value?category=apartments&purpose=for-sale&location=%2Fdubai%2Fjumeirah-village-triangle-jvt&beds_in=2&area_min=91.9740096&area_max=112.4126784&baths_in=1%2C2%2C3')
       }
    openStage() {
        super.openStage('https://sl:getin1@stage.bayut.sector.run/tru-value?category=apartments&purpose=for-sale&location=%2Fdubai%2Fjumeirah-village-triangle-jvt&beds_in=2&area_min=91.9740096&area_max=112.4126784&baths_in=1%2C2%2C3')
    }



get TellMePopup(){
    return $('//div[@aria-label="Dialog"]')
}
get Close_Button_Popup(){
    return $('//button[@aria-label="Close button"]')
}
get TruvalueFilter(){
    return $('//div[@aria-label="Filters"]')
}
get TruValueCard(){
    return $('//div[@class="_25ccb61f"]')
}
}

export default new truvaluesearch()