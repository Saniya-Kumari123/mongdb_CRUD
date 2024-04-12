const { MongoClient } = require('mongodb');

const url = "mongodb+srv://saniya_kumari:saniya123@myproject.slhxaej.mongodb.net/";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("Student");
    const collection = db.collection("studentinfo");
    return collection.find({}).toArray()
      .then(docs => {
        console.log("Documents retrieved:");
        console.log(docs);
        client.close();
      })
      .catch(error => {
        console.error("View operation failed:", error);
        client.close();
      });
  })
  .catch(error => {
    console.error("Connection to MongoDB failed:", error);
  });
