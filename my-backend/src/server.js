import express from "express";
import { db, connectToDb } from "./db.js";

const app = express();
app.use(express.json());

app.get("/api/rooms/:type", async (req, res) => {
  const { type } = req.params;
  const share = await db.collection("rooms").findOne({ type });
  if (share) {
    res.json(share);
  } else {
    res.sendStatus(404);
  }
});

app.get("/api/dining/:day", async (req, res) => {
  const { day } = req.params;
  const food = await db.collection("dining").findOne({ day });
  if (food) {
    res.json(food);
  } else {
    res.sendStatus(404);
  }
});

// app.get("/api/methods", (req, res) => {
//   const { name} = req.body;
//   res.send(name,type);
// });

// app.get("/", (req, res) => {
//     res.send("Hello Backend!!!");
//   });

// app.listen(8000, () => {
//   console.log("Listening ");
// });

connectToDb(() => {
  console.log("Successfully connected to database");
  app.listen(8000, () => {
    console.log("Listening to 8000 ");
  });
});

