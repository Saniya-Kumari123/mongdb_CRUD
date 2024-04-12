const { MongoClient } = require('mongodb');

const url = "mongodb+srv://saniya_kumari:saniya123@myproject.slhxaej.mongodb.net/";


MongoClient.connect(url)
  .then(client => {
    const db = client.db("Student");
    const collection = db.collection("studentinfo");
    const query = { name: "saniya kumari" }; // Query to find the document to delete
    return collection.deleteOne(query)
      .then(result => {
        console.log("1 document deleted");
        client.close();
      })
      .catch(error => {
        console.error("Delete operation failed:", error);
        client.close();
      });
  })
  .catch(error => {
    console.error("Connection to MongoDB failed:", error);
  });
