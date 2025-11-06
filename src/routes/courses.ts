import { Router } from "express";
import { courses } from "../data/db";
import { v4 as uuid } from "uuid";

const router = Router();

router.get("/", (_req, res) => {
  res.json(courses);
});

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "name is required" });

  const course = { id: uuid(), name };
  courses.push(course);
  res.status(201).json(course);
});

export default router;
