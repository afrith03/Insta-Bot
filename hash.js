let hasharray = [
  "#entrepreneur",
  "#goals",
  "#follow",
  "#quotesdaily",
  "#loveyourself",
  "#business",
  "#instadaily",
  "#wordporn",
  "#like",
  "#writersofig",
  "#happy",
  "#instawriters",
  "#writersofindia",
  "#yourquote",
  "#stories",
  "#art",
  "#quotesaboutlife",
  "#igwriters",
  "#writeaway",
  "#wordswag",
  "#igwritersclub",
  "#photography",
  "#motivate",
  "#nevergiveup",
  "#hustle",
  "#selfcare",
  "#wordsofwisdom",
  "#entrepreneur",
  "#goals",
  "#believe",
  "#ericthomasmotivation",
  "#follow",
  "#follow4follow",
  "#follow4follows",
  "#followbacks",
  "#followforfollow",
  "#followforfollowback",
  "#followforfollowbackalwaysfast",
  "#followhernow",
  "#followme",
  "#followmefollowback",
  "#instaquotesdaily",
  "#inspirational",
  "#followmeforfollowback",
  "#life_quotes",
  "#like4likeplease",
  "#like4like",
  "#motivation",
  "#motivational",
  "#motivational_quotes",
  "#motivationallifequotes",
  "#motivationalmondays",
  "#motivationalmindsetquotes",
  "#motivationalquotes",
  "#motivationalposts",
  "#motivationalmusic",
  "#motivationalquotesaboutlife",
  "#motivationalquotesforlife",
  "#motivationalquotesdaily",
  "#motivationalspeakers",
  "#motivationalsquotes",
  "#motivationgym",
  "#motivationiskey",
  "#motivationtuesday",
  "#motivationquotes",
  "#positive",
  "#positivityquotes",
  "#quote",
  "#quotes",
  "#quotesaboutlifequotesandsayings",
  "#quotesfangirl",
  "#quotesilove",
  "#quotesjowo",
  "#quoteskristen",
  "#quoteslove",
  "#quotesofday",
  "#quotesoflove",
  "#quotesoflife",
  "#quotestag",
  "#sadshayarii",
  "#successfull",
  "#couple",
  "#couplegoals",
  "#couples",
  "#inspirationalquotes",
  "#lifequotes",
  "#love",
  "#loveforever",
  "#lovelive",
  "#lovequotes",
  "#lovers",
  "#loves",
  "#lovestory",
  "#loveyou",
  "#loveyourbody",
  "#mylove",
  "#poetry",
  "#poetrycommunity",
  "#quote",
  "#quoteoftheday",
  "#quotes",
  "#quotesaboutlife",
  "#quotesdaily",
  "#quotestagram",
  "#quotestoliveby",
  "#relationship",
  "#relationshipgoals",
  "#relationshipquotes",
  "#relationships",
  "#writer",
  "#writersofinstagram#inspiringquotesandsayings",
  "#quotestolive",
  "#motivationalquoteslover",
  "#motivationquotesforlife",
  "#motivationalstatus",
  "#motivationquotesdaily",
  "#quotestothinkabout",
  "#quotestolivebyforever",
  "#reminderoftheday",
  "#dailyislamicreminders",
  "#motivationalquotesforlife",
  "#quotesthatinspire",
  "#motivationneeded",
  "#successquotesdaily",
  "#motivationalsunday",
  "#littlereminders",
  "#motivationalquotesaboutlife",
  "#motivationforsuccess",
  "#selfquote",
  "#motivationquoteoftheday",
  "#motivationalquotesforstudents",
  "#motivationalsaying",
  "#motivationfortheday",
  "#motivationqoutes",
  "#motivationquotesoftheday",
  "#successqoutes",
  "#selfquotes",
  "#successquotess",
  "#quotestoponder",
  "#todaysmotivation#poetrycollection",
  "#lovequotesandsayings",
  "#wordhour",
  "#worldoflabs",
  "#poetssociety",
  "#artofwriters",
  "#poemaday",
  "#poetrycommunityofig",
  "#igquotes",
  "#instaquotesdaily",
  "#stitchedwithlove",
  "#writersofmirakee",
  "#writers_together",
  "#writerscorner",
  "#wordsporn",
  "#wordswordswords",
  "#wordsgram",
  "#poetrytribe",
  "#poetrylover",
  "#wordsmiths",
  "#poetsandwriters",
  "#lovequotesforhim",
  "#lovequotesforher",
  "#poeticjustice",
  "#wristtattoo",
  "#poetry",
  "#poem#writers",
  "#writersofinstagram",
  "#writerscommunity",
  "#poetry",
  "#writer",
  "#writing",
  "#writingcommunity",
  "#writersofig",
  "#quotes",
  "#love",
  "#poetrycommunity",
  "#poetsofinstagram",
  "#poems",
  "#poem",
  "#poet",
  "#words",
  "#art",
  "#poets",
  "#life",
  "#thoughts",
  "#shayari",
  "#writerslife",
  "#author",
  "#instagram",
  "#instadaily",
  "#story",
  "#wordporn",
  "#write",
  "#loveyourself",
];

//Math.abs()
function randomHashtag(hasharray) {
  let generatedArray = [];
  for (let i = 0; i < 25; i++) {
    let randomIndex = Math.ceil(Math.random() * hasharray.length - 1);
    var randValue = hasharray[randomIndex];
    if (generatedArray.includes(randValue)) {
      --i;
      console.log("Excluded" + randValue);
    } else {
      console.log("index " + randomIndex);
      generatedArray.push(randValue);
    }
  }
  return generatedArray.toString().split(",").join(" ");
}
// console.log(randomHashtag(hasharray));
// console.log(randomHashtag(hasharray).toString().split(",").join(" "));
// console.log(hasharray.toString().split(",").join(" "));

export { randomHashtag, hasharray };
