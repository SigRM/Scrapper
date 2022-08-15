async function init(){ //Peticion a internet
    const $ =  await request({
        uri: 'https://www.linkedin.com/feed/',
        transform: body => cheerio.load(body)
    });

    const websiteTitle = $('title');
    console.log(websiteTitle.html());

    const websiteHeading = $('h1');
    console.log(websiteHeading.text().trim());

    const header = $('title').parent().next();//Tambien se puede usar children()
    console.log(header.html())

  $('')
}

init();