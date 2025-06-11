import Floorplan from '../pageobjects/floorplan.page.js';
import { updateHTMLReport, writeReport } from '../../reports/generateReport.js';
import Page from '../pageobjects/page.js';

describe("FloorPlan Suite", () => {

 

    it("TC1", async () => {
        const formattedName = Page.formatScreenshot("Verify Default View FloorPlan");
        await Floorplan.compareEnvironments(
            'Floorplan',
            formattedName,
            "Verify_Default_View_Floor_Plan",
            'https://stage.bayut.sector.run/floorplans/',
            'https://www.bayut.com/floorplans/'
        );
    });

    it("TC2", async () => {
        const formattedName = Page.formatScreenshot("Verify FloorPlan UAE location SEO");
        await Floorplan.compareEnvironments(
            'Floorplan',
            formattedName,
            "Verify FloorPlan UAE location SEO",
            'https://stage.bayut.sector.run/floorplans/',
            'https://www.bayut.com/floorplans/',
            async () => await Floorplan.verifyUaeLocLists()
        );
    });

    it("TC3", async () => {
        const formattedName = Page.formatScreenshot("Verify FloorPlan BottomList");
        await Floorplan.compareEnvironments(
            'Floorplan',
            formattedName,
            "Verify FloorPlan BottomList",
            'https://stage.bayut.sector.run/floorplans/',
            'https://www.bayut.com/floorplans/',
            async () => await Floorplan.VerifyBottomLinks()
        );
    });

    it("TC4", async () => {
        const formattedName = Page.formatScreenshot("Verify FloorPlan MainCards");
        await Floorplan.compareEnvironments(
            'Floorplan',
            formattedName,
            "Verify FloorPlan MainCards",
            'https://stage.bayut.sector.run/floorplans/',
            'https://www.bayut.com/floorplans/'
        );
    });

    it("TC5", async () => {
        const formattedName = Page.formatScreenshot("Verify FloorPlan AbuDhabi Location");
        await Floorplan.compareFullPageEnvironments(
            'Floorplan',
            formattedName,
            "Verify FloorPlan AbuDhabi Location",
            'https://stage.bayut.sector.run/floorplans/abu-dhabi/',
            'https://www.bayut.com/floorplans/abu-dhabi/'
        );
    });

    it("TC6", async () => {
        const formattedName = Page.formatScreenshot("Verify FloorPlan Actuall FloorPlan Location");
        await Floorplan.compareFullPageEnvironments(
            'Floorplan',
            formattedName,
            "Verify FloorPlan Actuall FloorPlan Location",
            'https://stage.bayut.sector.run/floorplans/abu-dhabi/al-raha-beach/al-zeina/al-zeina-building-c/',
            'http://bayut.com/floorplans/abu-dhabi/al-raha-beach/al-zeina/al-zeina-building-c/'
        );
    });

    it("TC7", async () => {
        const formattedName = Page.formatScreenshot("Verify FloorPlan DPV");
        await Floorplan.compareFullPageEnvironments(
            'Floorplan',
            formattedName,
            "Verify FloorPlan DPV",
            'https://stage.bayut.sector.run/floorplans/details-6128.html',
            'https://www.bayut.com/floorplans/details-6128.html'
        );
    });

});
