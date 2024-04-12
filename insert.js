const { MongoClient } = require('mongodb');

const url = "mongodb+srv://saniya_kumari:saniya123@myproject.slhxaej.mongodb.net/";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("Student");
    const collection = db.collection("studentinfo");
    const myobj = { name: "saniya kumari", degree: "BSCS", semester: "5th", gpa: 3.3 };
    return collection.insertOne(myobj)
      .then(result => {
        console.log("1 document inserted");
        client.close();
      })
      .catch(error => {
        console.error("Insert operation failed:", error);
        client.close();
      });
  })
  .catch(error => {
    console.error("Connection to MongoDB failed:", error);
  });
