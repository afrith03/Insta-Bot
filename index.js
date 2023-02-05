require("dotenv").config();
const { IgApiClient } = require("instagram-private-api");
const { get } = require("request-promise");
//hash . js for hash tag
const { randomHashtag, hasharray } = require("./hash");
// const CronJob = require("cron").CronJob;
const express = require("express");
const app = express();
const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//for quotes
const Quotes = require("randomquote-api");

let caption =
  "Your views about this Post..?\n.\nThe comment section is yours!!\n.\nI post QUOTES daily\n.\n.\n.\nfollow\n@quotesbymyth\n@quotesbymyth\n@quotesbymyth\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n#quotesbymyth";
let captionWithHashTag = caption + randomHashtag(hasharray);
const postToInsta = async () => {
  try {
    const ig = new IgApiClient();
    ig.state.generateDevice(process.env.UNAME);
    await ig.account.login(process.env.UNAME, process.env.PASSWORD);

    const randomquote = Quotes.randomQuote();
    let quoteToInsta = randomquote.quote.split(" ").join("%20");
    let theme = Math.round(Math.random() * 10) > 5;
    //  https://unsplash.it/200/300/?random
    const imageBuffer = await get({
      url: `https://web-series-quotes-api.deta.dev/pic/custom?text=${quoteToInsta}&background_color=${
        theme ? "white" : "black"
      }&text_color=${!theme ? "white" : "black"}&text_size=50&x=1080&y=1080`,
      encoding: null,
    });

    await ig.publish.photo({
      file: imageBuffer,
      caption: captionWithHashTag,
    });
    console.log(quoteToInsta);
    return quoteToInsta;
    // console.log(typeof(process.env.UNAME))
  } catch (error) {
    console.log(error);
    return error;
  }
};

app.get("/", async (req, res) => {
  var t = await postToInsta();
  res.json({ message: "hello Insta bot", quote: t });
});

app.post("/instapost", async (req, res) => {
  var t = await postToInsta();
  res.json({ message: "hello Insta bot", quote: t });
});

// const cronInsta = new CronJob("30 * * * * *", async () => {
// postToInsta();
// });

// cronInsta.start();

// https://insta-bot-sooty.vercel.app/instapost
