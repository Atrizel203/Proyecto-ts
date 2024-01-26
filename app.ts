import express from "express";
import cors from "cors";


const app = express();
const PORT = "3000";

app.use(cors());
app.use(express.json());

db.connect()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Error connecting to database: " + err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});