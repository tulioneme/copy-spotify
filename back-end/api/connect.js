import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
dotenv.config();

const dbPassword = process.env.DB_PASSWORD;

const URI = `mongodb+srv://testeOmniStack:${dbPassword}@cluster0.i3e6h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(URI);

export const db = client.db("copy-spotify");
