import express from "express";
import { db, connectToDb } from "./db.js";

const app = express();
app.use(express.json());

app.get("/api/rooms/:rent", async (req, res) => {
  const { rent } = req.params;
  const share = await db.collection("rooms").findOne({ rent });
  if (share) {
    res.json(share);
  } else {
    res.sendStatus(404);
  }
});

app.get("/api/about/dining/:day", async (req, res) => {
  const { day } = req.params;
  const food = await db.collection("dining").findOne({ day });
  if (food) {
    res.json(food);
  } else {
    res.send(`${day} does not exist`);
  }
});

app.put("/api/rooms/:type/likes", async (req, res) => {
  const { type } = req.params;
  await db.collection("rooms").updateOne({ type }, { $inc: { likes: 1 } });
  const share = await db.collection("rooms").findOne({ type });
  if (share) {
    res.send(`${share.type} has ${share.likes} likes!`);
  } else {
    res.send("Room not Found");
  }
});

app.post("/api/rooms/:type/review", async (req, res) => {
  const { type } = req.params;
  const { typ, review } = req.body;
  await db.collection("rooms").findOne({ type }, { $push: { reviews: [] } });
  const share = await db.collection("rooms").findOne({ type });
  if (share) {
    share.reviews.push({ review });
    res.send(share.reviews);
  } else {
    res.send("Room not Found");
  }
});

app.get("/api/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  await db.collection("signinInfo").insertOne({firstname, lastname, email, password});
  const signup = await db.collection("signinInfo").findOne();
  if (signup) {
    res.json(signup);
  } else {
    res.send(notfound);
  }
});



connectToDb(() => {
  console.log("Successfully connected to database");
  app.listen(8000, () => {
    console.log("Listening to 8000...");
  });
});
