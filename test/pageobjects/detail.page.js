import Page from './page.js';

class DetailPage extends Page {
    openProduction(){
        super.openProduction('https://www.bayut.com/property/details-6331676.html')
       }
    openStage(){
        super.openE2E('https://sl:getin1@stage.bayut.sector.run/property/details-6331676.html')
    }

    get Image_ToGalleryView(){
        return $('//div[@class="_6d2ea5a7 _2ff2123c"]')
    }
    get GalleryView(){
        return $('/html/body/div[2]/div[3]/div/div/div/div/div')
    }
    get FullGalleryView(){
        return $('//div[@class="image-gallery-slide center"]')
    }
    get Image_ToFullGalleryView(){
        return $('/html/body/div[2]/div[3]/div/div/div/div/div/div[2]/div[1]/div/div/div/div[1]/picture/img')
    }
    get MapButton(){
        return $('//div[contains(@class, "_9b5b54a0")and contains(text(), "Map")]')
    }
    get MapCanvas(){
        return $('//canvas[@aria-label="Map"]')
    }
    get AllowButton(){
        return $('//button[contains(@ng-attr-id, "webPushPlatformData.chrome.domain_type")]')
    }
    get DontAllowButton(){
        return $('//button[@id="moe-dontallow_button"]')
    }
    get Location_NearbyLabel(){
        return $('//h2[text()="Location & Nearby"]')
    }
    get LocationBox(){
        return $('//div[@class="_4866b17e" and text()="Location"]')
    }
    get SchoolBox(){
        return $('//div[@class="a68e82ed" and text()="Schools"]')
    }
    get RestrauntsBox(){
        return $('//div[@class="_4866b17e" and text()="Restaurants"]')
    }
    get HospitalBox(){
        return $('//div[@class="ad5c301a"]//div[@class="a68e82ed" and text()="Hospitals"]')
    }
    get AmenitiesLabel(){
        return $('//h2[text()="Features / Amenities"]')
    }
    get MoreAmenetiesBtn(){
        return $('//div[@aria-label="More amenities"]')
    }
    get PropertyInfoLabel(){
        return $('//h2[text()="Property Information"]')
    }
    get PropertyOverview(){
        return $('//div[@aria-label="Property overview"]')
    }
    get ReadMoreBtn(){
        return $('//div[text()="Read More"]')
    }
    get RegulatoryInfoSection(){
        return $('//div[@class="_948d9e0a _1cc8fb85 _95d4067f"]/h2[text()="Regulatory Information"]')
    }
    get Agent_AgencyCard(){
        return $('//div[@aria-label="Agency info" and @class="_948d9e0a e6c84807 _95d4067f"]')
    }

    async isAllowButtonDisplayed() {
        return await this.waitForElementDisplayed(this.AllowButton, { timeout: 5000, reverse: true });
    }

    async OpenHalf_GalleryView(){
        await this.waitForElementDisplayed(this.Image_ToGalleryView)
        this.Image_ToGalleryView.click()
        await this.waitForElementDisplayed(this.GalleryView)
    }
    async OpenFull_GalleryView(){
        await this.waitForElementDisplayed(this.Image_ToGalleryView)
        await this.Image_ToGalleryView.click()
        await this.waitForElementDisplayed(this.Image_ToFullGalleryView)
        await this.Image_ToFullGalleryView.click()
        await this.waitForElementDisplayed(this.FullGalleryView)
    }
    async OpenMapHalfGalleryView(){
        await this.OpenHalf_GalleryView()
        await this.waitForElementDisplayed(this.MapButton)
        await this.MapButton.click()
        await this.waitForElementDisplayed(this.MapCanvas)
    }
    async AllowBtnVisible(){
        await this.DontAllowButton.waitForDisplayed();
        return await this.DontAllowButton.isDisplayed();
    }
    async GoToLocation_NearbySection(){
        await this.Scroll_WaitForExist(this.Location_NearbyLabel)
    }
    async OpenLocationMapview(){
        await this.LocationBox.click()
        await this.waitForElementDisplayed(this.MapCanvas)
    }
    async OpenSchoolsMapview(){
        await this.SchoolBox.click()
        await this.waitForElementDisplayed(this.MapCanvas)
    }
    async OpenRestaurantsMapview(){
        await this.RestrauntsBox.click()
        await this.waitForElementDisplayed(this.MapCanvas)
    }
    async OpenHospitalsMapview(){
        await this.HospitalBox.click()
        await this.waitForElementDisplayed(this.MapCanvas)
    }
    async ViewFullAmenities(){
        await this.MoreAmenetiesBtn.click()
    }
    async ViewAmenities(){
        await this.Scroll_WaitForExist(this.AmenitiesLabel)
    }
    async ViewPropertyInfoSection(){
        await browser.executeScript('arguments[0].scrollIntoView(true);', this.PropertyInfoLabel);
    }
    async ViewReadMorePropertyDescription(){
        await this.waitForElementDisplayed(this.ReadMoreBtn)
        await this.ReadMoreBtn.scrollIntoView();
        await this.ReadMoreBtn.click()
    }
    async ViewReadLessPropertyDescription(){
        
    }

    async ViewRegulatoryInfo(){
        await this.Scroll_WaitForExist(this.RegulatoryInfoSection)
    }
    async View_Agent_AgencyCard(){
        await this.Scroll_WaitForExist(this.Agent_AgencyCard)
    }

    

}
export default new DetailPage()