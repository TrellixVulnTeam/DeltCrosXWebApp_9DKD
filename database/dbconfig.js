const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://DeltCrosX3002:gamer15243E!!@dcxwebappcluster001.wgedp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

client.connect(!err = {
	const checkDb = "Connected";
	console.log("connected");
});