import { updateHTMLReport, writeReport } from '../../reports/generateReport.js';
import Page from '../pageobjects/page.js';
import agentHomepage from '../pageobjects/findmyagenthome.page.js'

describe("AgentHomePage Suite", () => {

    after(() => {
        writeReport(); 
    });

    it("TC1", async () => {
        const formattedName = Page.formatScreenshot("Verify default view of Agent Home Page");
        await agentHomepage.compareEnvironments(
            'AgentHomePage',
            formattedName,
            "Verify default view of Agent Home Page",           
            'https://www.bayut.com/brokers/',
            'https://stage.bayut.sector.run/brokers/'
        );
    });

    it("TC2", async () => {
        const formattedName = Page.formatScreenshot("Verify full view of Agent Home Page");
        await agentHomepage.compareFullPageEnvironments(
            'AgentHomePage',
            formattedName,
            "Verify full view of Agent Home Page",
            'https://www.bayut.com/brokers/',
            'https://stage.bayut.sector.run/brokers/'
        );
    });

      it("TC3", async () => {
        const formattedName = Page.formatScreenshot("Verify full view of Agent Search Page");
        await agentHomepage.compareFullPageEnvironments(
            'AgentHomePage',
            formattedName,
            "Verify full view of Agent Search Page",
            'https://www.bayut.com/brokers/search/',
            'https://stage.bayut.sector.run/brokers/search/',
        );
    });


          it("TC4", async () => {
        const formattedName = Page.formatScreenshot("Verify Agent Search Page: Uae Loc");
        await agentHomepage.compareEnvironments(
            'AgentHomePage',
            formattedName,
            "Verify Agent Search Page: Uae Loc",
            'https://www.bayut.com/brokers/uae/',
            'https://stage.bayut.sector.run/brokers/uae/'
        );
        });
        

          it("TC5", async () => {
        const formattedName = Page.formatScreenshot("Verify Agent Search Page: Dubai Loc");
        await agentHomepage.compareEnvironments(
            'AgentHomePage',
            formattedName,
            "Verify Agent Search Page: Uae Loc",
            'https://www.bayut.com/brokers/dubai/',
            'https://stage.bayut.sector.run/brokers/dubai/'
        );
        });
          it("TC6", async () => {
        const formattedName = Page.formatScreenshot("Verify Agent Search Page: AbuDhabi Loc");
        await agentHomepage.compareEnvironments(
            'AgentHomePage',
            formattedName,
            "Verify Agent Search Page: Uae Loc",
            'https://www.bayut.com/brokers/abu-dhabi/',
            'https://stage.bayut.sector.run/brokers/abu-dhabi/'
        );
        });
    


})