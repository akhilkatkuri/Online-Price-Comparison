const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer=require("puppeteer");
const url = 'https://www.amazon.in/s?k=' + encodeURIComponent('apple air pods pro');
async function getproductsamaz()
{
    try {
        const browser = await puppeteer.launch({
          headless: false,
          args: ["--no-sandbox"],
        });
        console.log("Browser launched");
        const page = await browser.newPage();
        console.log("Page opened");
        await page.goto("https://www.amazon.in", { waitUntil: "domcontentloaded" });
        console.log("URL visited");
        await page.waitForSelector("[data-as-in]");
        console.log("Selector found");
        const allprod=await page.evaluate(()=>{

        })
    }
    catch(error)
    {
        console.log(error);
    }
}
getproductsamaz();