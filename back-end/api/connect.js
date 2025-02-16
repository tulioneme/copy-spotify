import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://testeOmniStack:WfvTBQQr7hwpIbCN@cluster0.i3e6h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("copy-spotify");
