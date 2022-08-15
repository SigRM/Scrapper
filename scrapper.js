const puppeteer = require('puppeteer');//Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol

async function scrapeProfile(url){//**1**
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const[el] = await page.$x('//*[@id="ember1663"]');
    const src =  await el.getProperty('src');
    const imgURL = await src.jsonValue();

    const[el2] = await page.$x('//*[@id="ember1717"]/div[2]/div/div/div/h2/span[1]');
    const txt =  await el2.getProperty('txtContent');
    const title = await txt.jsonValue();

    const[el3] = await page.$x('//*[@id="ember1720"]/div[2]/div/div/div/h2/span[1]');
    const txt1 =  await el3.getProperty('text');
    const licenses = await txt1.jsonValue();

    console.log({imgURL, title, licenses});

    browser.close();

}

scrapeProfile('https://www.linkedin.com/in/alfardavid95/');


async function scrapeProfile(url){//**2**
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const[el] = await page.$x('//*[@id="ember779"]');
    const src =  await el.getProperty('src');
    const imgURL = await src.jsonValue();

    const[el2] = await page.$x('//*[@id="ember816"]/div[2]/div/div/div/h2/span[1]');
    const txt =  await el2.getProperty('txtContent');
    const about = await txt.jsonValue();

    const[el3] = await page.$x('//*[@id="ember818"]/div[2]/div/div/div/h2/span[1]');
    const txt1 =  await el3.getProperty('text');
    const experience = await txt1.jsonValue();

    console.log({imgURL, about, experience});

    browser.close();

}

scrapeProfile('https://www.linkedin.com/in/natalia-martinez-trejos-a4902049/');


async function scrapeProfile(url){//**3**
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const[el] = await page.$x('//*[@id="ember1110"]"]');
    const src =  await el.getProperty('src');
    const imgURL = await src.jsonValue();

    const[el2] = await page.$x('//*[@id="ember1146"]/div[2]/div/div/div/h2/span[1]');
    const txt =  await el2.getProperty('txtContent');
    const experience= await txt.jsonValue();

    const[el3] = await page.$x('//*[@id="ember1151"]/div[2]/div/div/div/h2/span[1]');
    const txt1 =  await el3.getProperty('text');
    const education = await txt1.jsonValue();

    console.log({imgURL, experience, education});

    browser.close();

}

scrapeProfile('https://www.linkedin.com/in/adriana-calvo-a1340398/');

async function scrapeProfile(url){//**4**
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const[el] = await page.$x('//*[@id="ember2003"]');
    const src =  await el.getProperty('src');
    const imgURL = await src.jsonValue();

    const[el2] = await page.$x('//*[@id="ember2017"]/div[2]/div/div/div/h2/span[1]');
    const txt =  await el2.getProperty('txtContent');
    const about = await txt.jsonValue();

    const[el3] = await page.$x('//*[@id="ember2020"]/div[2]/div/div/div/h2/span[1]');
    const txt1 =  await el3.getProperty('text');
    const experience = await txt1.jsonValue();

    console.log({imgURL, about, experience});

    browser.close();

}

scrapeProfile('https://www.linkedin.com/in/karen-herrera-494663162/');

async function scrapeProfile(url){//**5**
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const[el] = await page.$x('//*[@id="ember2816"]');
    const src =  await el.getProperty('src');
    const imgURL = await src.jsonValue();

    const[el2] = await page.$x('//*[@id="ember2839"]/div[2]/div/div/div/h2/span[1]');
    const txt =  await el2.getProperty('txtContent');
    const about = await txt.jsonValue();

    const[el3] = await page.$x('//*[@id="ember2841"]/div[2]/div/div/div/h2/span[1]');
    const txt1 =  await el3.getProperty('text');
    const experience = await txt1.jsonValue();

    console.log({imgURL, about, experience});

    browser.close();

}

scrapeProfile('https://www.linkedin.com/in/ownyourdata/');

async function scrapeProfile(url){//**6**
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const[el] = await page.$x('//*[@id="ember3428"]');
    const src =  await el.getProperty('src');
    const imgURL = await src.jsonValue();

    const[el2] = await page.$x('//*[@id="ember3461"]/div[2]/div/div/div/h2/span[1]');
    const txt =  await el2.getProperty('txtContent');
    const experience = await txt.jsonValue();

    const[el3] = await page.$x('//*[@id="ember3467"]/div[2]/div/div/div/h2/span[1]');
    const txt1 =  await el3.getProperty('text');
    const licenses = await txt1.jsonValue();

    console.log({imgURL, experience, licenses});

    browser.close();

}

scrapeProfile('https://www.linkedin.com/in/marie-iglesias-84b7162b/');

async function scrapeProfile(url){//**7**
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const[el] = await page.$x('//*[@id="ember3428"]"]');
    const src =  await el.getProperty('src');
    const imgURL = await src.jsonValue();

    const[el2] = await page.$x('//*[@id="ember3661"]/div[2]/div/div/div/h2/span[1]');
    const txt =  await el2.getProperty('txtContent');
    const experience = await txt.jsonValue();

    const[el3] = await page.$x('//*[@id="ember3669"]/div[2]/div/div/div/h2/span[1]');
    const txt1 =  await el3.getProperty('text');
    const education = await txt1.jsonValue();

    console.log({imgURL, experience, education});

    browser.close();

}

scrapeProfile('https://www.linkedin.com/in/v-alexandra-andrei/');

async function scrapeProfile(url){//**8**
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const[el] = await page.$x('//*[@id="ember3428"]');
    const src =  await el.getProperty('src');
    const imgURL = await src.jsonValue();

    const[el2] = await page.$x('//*[@id="ember3842"]/div[2]/div/div/div/h2/span[1]');
    const txt =  await el2.getProperty('txtContent');
    const volunteering = await txt.jsonValue();

    const[el3] = await page.$x('//*[@id="ember3838"]/div[2]/div/div/div/h2/span[1]');
    const txt1 =  await el3.getProperty('text');
    const licenses = await txt1.jsonValue();

    console.log({imgURL, volunteering, licenses});

    browser.close();

}

scrapeProfile('https://www.linkedin.com/in/mariaelenapopa/');

async function scrapeProfile(url){//**9**
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const[el] = await page.$x('//*[@id="ember3428"]');
    const src =  await el.getProperty('src');
    const imgURL = await src.jsonValue();

    const[el2] = await page.$x('//*[@id="ember3999"]/div[2]/div/div/div/h2/span[1]');
    const txt =  await el2.getProperty('txtContent');
    const skills = await txt.jsonValue();

    const[el3] = await page.$x('//*[@id="ember4000"]/div[2]/div/div/div/h2/span[1]');
    const txt1 =  await el3.getProperty('text');
    const recommendations = await txt1.jsonValue();

    console.log({imgURL, skills, recommendations});

    browser.close();

}

scrapeProfile('https://www.linkedin.com/in/tamaytarakcil/');

async function scrapeProfile(url){//**10**
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const[el] = await page.$x('//*[@id="ember3428"]');
    const src =  await el.getProperty('src');
    const imgURL = await src.jsonValue();

    const[el2] = await page.$x('//*[@id="ember4111"]/div[2]/div/div/div/h2/span[1]');
    const txt =  await el2.getProperty('txtContent');
    const education = await txt.jsonValue();

    const[el3] = await page.$x('//*[@id="ember4124"]/div[2]/div/div/div/h2/span[1]');
    const txt1 =  await el3.getProperty('text');
    const courses = await txt1.jsonValue();

    console.log({imgURL, education, courses});

    browser.close();

}

scrapeProfile('https://www.linkedin.com/in/aris-valachis/');
