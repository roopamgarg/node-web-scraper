const axios = require('axios');
const cheerio = require('cheerio');

const url = "https://www.sarkariresult.com"

let getData = html => {
    data = []
    const $ = cheerio.load(html);
    $('div#post ul li').each((i,elem)=>{
        data.push({
            title : $(elem).text(),
            link : $(elem).find('a:nth-child(2)').attr('href')
        })
    })
    console.log(data)
}

axios.get(url).then(response=>{
    getData(response.data)
}).catch(err =>{
    console.log(err)
})