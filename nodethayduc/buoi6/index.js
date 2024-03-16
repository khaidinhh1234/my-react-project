const express = require("express");
const app = express();
const port = 3000;

// Phân tích request từ form
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Kết nối đến mongodb
const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri);

const database = client.db("WD18332");
const products = database.collection("products");

app.get("/api/v1/products", async (req, res) => {
  try {
    await client.connect();

    const result = await products.find(req.query).toArray();

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  } finally {
    await client.close();
  }
});
app.delete("/api/v1/products/:id", async (req, res) => {
  try {
    await client.connect();

    const result = await products.deleteOne({
      _id: new ObjectId(req.params.id),
    });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  } finally {
    await client.close();
  }
});
app.post("/api/v1/products", async (req, res) => {
  try {
    await client.connect();

    const data = await products.insertOne(req.body);

    res.status(204).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log("Khởi động server thành công!");
});
