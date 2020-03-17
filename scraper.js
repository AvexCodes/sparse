const stats = {}


const fetchData = async (siteUR) => {
  const result = await axios.get(siteUR);
  return cheerio.load(result.data);
};

const corona = async (url) => {
const $ = await fetchData(url);
const cases = $('.maincounter-number').text();
const death = $('.').text();
console.log(`${cases || "0"} ${deaths || "0"} ${recovered || "0"}`) // Logs 'Post a Job'
}

// CORONAVIRUS STAT SCRAPER, CHECKS EVERY 10 MINUTES
setInterval(() => {
  corona("https://www.worldometers.info/coronavirus/").then().catch(x =>{console.log(x)}) 
}, 600000)