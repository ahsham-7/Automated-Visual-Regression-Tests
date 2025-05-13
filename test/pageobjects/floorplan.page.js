import Page from "./page";
class Floorplan extends Page{
  
    async openProduction() {
         super.open('https://www.bayut.com/floorplans/');
    }
    
   async openStage(){
        super.open('https://stage.bayut.sector.run/floorplans/', true)
    }
    get uaeLocationList(){
        return $('//h2[text()="UAE Location List"]')
    }
    get ScrollToTopBtn(){
        return $('//span[@aria-label="Scroll to top"]')
    }
    get FloorPlanMainCards(){
        return $('//a[@title="Dubai Floor plans"]//div[@aria-label="Floorplan card"]')
    }

    async verifyUaeLocLists(){
        await this.ScrollElement(this.uaeLocationList)
    }
    async VerifyBottomLinks(){
        await this.ScrollElement(this.ScrollToTopBtn)
    }
    async VerifyMainFloorPlanCards(){
        await this.ScrollElement(this.FloorPlanMainCards)
    }
    async VerifyIconCityPage(){
        await this.open('https://stage.bayut.sector.run/floorplans/dubai/business-bay/aykon-city/')
    }
    
}
export default new Floorplan();