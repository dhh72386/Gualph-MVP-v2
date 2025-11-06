import { Router } from "express";
import { listTeeTimes, createTeeTime, bookTeeTime } from "../services/teeTimeService";

const router = Router();

router.get("/", (req, res) => {
  const { courseId } = req.query;
  const result = listTeeTimes(courseId as string | undefined);
  res.json(result);
});

router.post("/", (req, res) => {
  const { courseId, startTime, endTime } = req.body;
  if (!courseId || !startTime || !endTime) {
    return res.status(400).json({ message: "courseId, startTime, and endTime are required" });
  }
  try {
    const tee = createTeeTime({ courseId, startTime, endTime });
    res.status(201).json(tee);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/:id/book", (req, res) => {
  try {
    const updated = bookTeeTime(req.params.id);
    res.json(updated);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
