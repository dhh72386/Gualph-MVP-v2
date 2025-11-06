import express from "express";
import cors from "cors";
import coursesRoute from "./routes/courses";
import teeTimesRoute from "./routes/teetimes";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Gualph MVP API running");
});

app.use("/courses", coursesRoute);
app.use("/teetimes", teeTimesRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Gualph API listening on port ${PORT}`);
});
