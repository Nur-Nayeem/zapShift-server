const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to the server");
});

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
