import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Birds Fly Higher Than The Moon",
      artist: "Yasper",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#F9D5BD", "#39B5C1"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9367",
    },
    {
      name: "Not A Cloud In Sight",
      artist: "Aviion",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#F39695", "#5E9EDD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10450",
    },
    {
      name: "Hidden Structure",
      artist: "Leavv, Flitz&Suppe",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#B2CDA2", "#CC8D64"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9913",
    },
    {
      name: "Plants",
      artist: "Philanthrope, Ian Ewing, Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#353A24", "#A94437"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10255",
    },
    {
      name: "Bliss",
      artist: "Misha, Jussi Halme",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#3F4B75", "#6F88B6"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9248",
    },
    {
      name: "Hotel Lobby Birthday Party",
      artist: "Aviino, Oliv",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#69A3E2", "#BF79BF"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10452",
    },
    {
      name: "Still Life Dreamtime",
      artist: "Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#3F4B75", "#6F88B6"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9248",
    },
    {
      name: "Paved Paths",
      artist: "Leavv",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#428260", "#99C8B3"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9919",
    },
  ];
}

export default chillHop;
