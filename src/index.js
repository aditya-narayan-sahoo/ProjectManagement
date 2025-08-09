import "dotenv/config";
import cors from "cors";
import express from "express";

const PORT = process.env.PORT || 5432;

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public")); // serve static files
app.use(express.urlencoded({ extended: false, limit: "16kb" }));

app.get("/", (req, res) => {
  res.send("Starting a backend project");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
