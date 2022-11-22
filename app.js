const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const PORT = 3005;

const legends = {
  messi: {
    age: 36,
    birthName: "Lionel la Pulga Messi",
    birthLocation: "Buenos Aires, Argentina",
  },
  ronaldo: {
    age: 37,
    birthName: "Cristiano el Bicho Ronaldo",
    birthLocation: "Portugal, Portugal",
  },
  ronaldinho: {
    age: 45,
    birthName: "Jonaldinho el Tooth Ronaldinho",
    birthLocation: "Brazil",
  },
  unknown: {
    age: 0,
    birthName: "unknown",
    birthLocation: "unknown",
  },
};

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const legendName = req.params.name.toLowerCase();
  // console.log(legends[legendName].birthName);
  if (legends[legendName]) {
    res.json(legends[legendName]);
  } else {
    res.json(legends["unknown"]);
  }
});

app.post("/players", (req, res) => {
  console.log(req.body);
});

app.listen(process.env.PORT || PORT, () => {
  console.log("Listening on server 3005, ya better go git it");
});

// DB
// MongoClient.connect(
//   "mongodb+srv://brian:bs23@cluster0.rhj49ud.mongodb.net/?retryWrites=true&w=majority",
//   {useUnifiedTopology: true}
// )
//   .then(client => {
//     console.log("Connected to DB B");
//     const db = client.db("soccer-player-names");
//     ////////////// MIDDLEWARE
//   })
//   .catch(console.error);
