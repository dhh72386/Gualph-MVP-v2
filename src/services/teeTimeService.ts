import { teeTimes } from "../data/db";
import { v4 as uuid } from "uuid";

type CreateTeeTimeInput = {
  courseId: string;
  startTime: string;
  endTime: string;
};

export function listTeeTimes(courseId?: string) {
  if (!courseId) return teeTimes;
  return teeTimes.filter((t) => t.courseId === courseId);
}

export function createTeeTime(input: CreateTeeTimeInput) {
  const start = new Date(input.startTime).getTime();
  const end = new Date(input.endTime).getTime();

  const conflict = teeTimes.find((t) => {
    if (t.courseId !== input.courseId) return false;
    const existingStart = new Date(t.startTime).getTime();
    const existingEnd = new Date(t.endTime).getTime();
    return start < existingEnd && end > existingStart;
  });

  if (conflict) {
    throw new Error("Conflicting tee time exists for this course and time window.");
  }

  const newTeeTime = {
    id: uuid(),
    courseId: input.courseId,
    startTime: input.startTime,
    endTime: input.endTime,
    booked: false,
  };

  teeTimes.push(newTeeTime);
  return newTeeTime;
}

export function bookTeeTime(id: string) {
  const tee = teeTimes.find((t) => t.id === id);
  if (!tee) throw new Error("Tee time not found");
  if (tee.booked) throw new Error("Already booked");
  tee.booked = true;
  return tee;
}
