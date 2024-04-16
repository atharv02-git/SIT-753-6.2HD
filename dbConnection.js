// database connectivity
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://atharv02:Atharv2@cardcluster.zwt8hfn.mongodb.net/?retryWrites=true&w=majority&appName=cardCluster";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function connect() {
    await client.connect()
}

module.exports = client;