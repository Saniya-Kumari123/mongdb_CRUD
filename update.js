const { MongoClient } = require('mongodb');

const url = "mongodb+srv://saniya_kumari:saniya123@myproject.slhxaej.mongodb.net/";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("Student");
    const collection = db.collection("studentinfo");
    const query = { name: "saniya kumari" }; // Query to find the document to update
    const updateValues = { $set: { gpa: 3.62 } }; // Update values
    return collection.updateOne(query, updateValues)
      .then(result => {
        console.log("1 document updated");
        client.close();
      })
      .catch(error => {
        console.error("Update operation failed:", error);
        client.close();
      });
  })
  .catch(error => {
    console.error("Connection to MongoDB failed:", error);
  });
