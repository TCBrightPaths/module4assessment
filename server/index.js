const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.


app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["The crying baby gets the milk.",
					 "The palest ink is better than the sharpest sword.",
					 "It is better to light a candle than to curse the darkness.",
  ];

  // choose random fortune
  let randomIndex2 = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex2];

  res.status(200).send(randomFortune);
  
});

const { getGroceries, addGroceries, deleteGroceries, updateGroceries } = require('./controller.js');

app.get(`/api/groceries`, getGroceries);
app.post(`/api/groceries`, addGroceries);
app.put(`/api/groceries/:id`, updateGroceries);
app.delete(`/api/groceries/:id`, deleteGroceries);
 

  

app.listen(4000, () => console.log("Server running on 4000"));
