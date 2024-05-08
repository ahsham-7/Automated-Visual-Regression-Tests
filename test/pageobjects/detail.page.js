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
    


    

}
export default new DetailPage()