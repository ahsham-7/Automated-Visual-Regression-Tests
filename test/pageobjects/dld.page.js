import Page from './page.js';

class DldPage extends Page {
    openProduction() {
        super.openProduction('https://www.bayut.com/property-market-analysis/sale/')
    }
    openE2E() {
        super.openE2E('https://sl:getin1@bayut-e2e-development.dubizzle.dev/property-market-analysis/sale/')
    }
    openStage(){
        super.openE2E('https://sl:getin1@https//stage.bayut.sector.run')
    }


}
export default new DldPage()