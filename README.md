[README.md](https://github.com/user-attachments/files/23396091/README.md)
# Gualph Backend MVP

This is a minimal Node.js + TypeScript + Express API for managing golf courses and tee times.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Endpoints

- GET / -> health check
- GET /courses
- POST /courses { "name": "Course Name" }
- GET /teetimes?courseId=...
- POST /teetimes { "courseId": "...", "startTime": "...", "endTime": "..." }
- POST /teetimes/:id/book
```

Deploy on Render with:

- Build command: `npm install && npm run build`
- Start command: `npm start`
