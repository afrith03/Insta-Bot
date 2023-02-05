let hasharray = [
  "#dgyufgsdyuftgfuidfguidtitfui",
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
  "#yourself",
  "#yourself",
];

//Math.abs()
function randomHashtag(hasharray) {
  let generatedArray = [];
  for (let i = 0; i < 11; i++) {
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
console.log(randomHashtag(hasharray));
console.log(randomHashtag(hasharray).toString().split(",").join(" "));
// console.log(hasharray.toString().split(",").join(" "));

export {randomHashtag , hasharray};
