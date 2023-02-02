require("dotenv").config();
const { IgApiClient } = require("instagram-private-api");
const { get } = require("request-promise");
// const CronJob = require("cron").CronJob;
//for quotes
const Quotes = require("randomquote-api");

let caption = "Your views about this Post..?\n.\nThe comment section is yours!!\n.\nI post QUOTES daily\n.\n.\n.\nfollow\n@quotesbymyth\n@quotesbymyth\n@quotesbymyth\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n#quotesbymyth #myth'squotes #wordsofwisdom #entrepreneur #goals #follow #quotesdaily #loveyourself #business #instadaily #wordporn #like #writersofig #happy #instawriters #writersofindia #yourquote #stories #art #quotesaboutlife #igwriters #writeaway #wordswag #igwritersclub #photography #motivate #nevergiveup #hustle #selfcare #yourself"

const postToInsta = async () => {
  try {
    const ig = new IgApiClient();
    ig.state.generateDevice(process.env.UNAME);
    await ig.account.login(process.env.UNAME, process.env.PASSWORD);

    const randomquote = Quotes.randomQuote();
    let quoteToInsta = randomquote.quote.split(" ").join("%20");
   //  https://unsplash.it/200/300/?random
    const imageBuffer = await get({
      url: `https://web-series-quotes-api.deta.dev/pic/custom?text=${quoteToInsta}&background_color=white&text_color=black&text_size=200&x=3600&y=2400`,
      encoding: null,
    });

    await ig.publish.photo({
      file: imageBuffer,
      caption: caption,
    });
    console.log(quoteToInsta);
    // console.log(typeof(process.env.UNAME))
  } catch (error) {
    console.log(error);
  }
};

postToInsta();

// const cronInsta = new CronJob("30 * * * * *", async () => {
//     postToInsta();
// });

// cronInsta.start();
