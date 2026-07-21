import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  date: string;
  audienceType: "companies" | "freelancers" | "local-businesses";
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  audienceType: string;
  message: string;
  date: string;
}

const REVIEWS_FILE = path.join(process.cwd(), "reviews_db.json");
const CONTACT_FILE = path.join(process.cwd(), "contact_db.json");

// Default high-quality seeded reviews matching the 3 target archetypes
const DEFAULT_REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Sarah Jenkins",
    role: "VP of Product",
    company: "Aethera Systems",
    rating: 5,
    comment: "Working with Jack was a game-changer for our upcoming product launch. His 3D visualizations and rendering detail exceeded all expectations. Our interactive web demo saw a 40% increase in retention. Highly recommend him for high-impact technical branding projects!",
    date: "2026-06-15",
    audienceType: "companies"
  },
  {
    id: "rev-2",
    name: "Marcus Aurelius",
    role: "Creative Director",
    company: "Studio 21",
    rating: 5,
    comment: "Jack is an absolute wizard of motion graphics and WebGL-like experiences. He delivered a flawless 3D branding system on a tight timeline. He communicates clearly, designs iteratively, and brings genuine artistry to the screen. A reliable premium freelancer.",
    date: "2026-07-01",
    audienceType: "freelancers"
  },
  {
    id: "rev-3",
    name: "Chef Liam Vance",
    role: "Owner",
    company: "L'Aura Bistro & Bar",
    rating: 5,
    comment: "The Web layout Jack designed for our restaurant is breathtaking. Local customers keep mentioning how amazing our animated online menu is. Online reservation bookings have doubled since launch. Jack understands exactly what local businesses need to stand out!",
    date: "2026-07-10",
    audienceType: "local-businesses"
  },
  {
    id: "rev-4",
    name: "Dr. Evelyn Chen",
    role: "Lead Practitioner",
    company: "Apex Dental Clinic",
    rating: 5,
    comment: "We needed a modern, welcoming website that didn't look like a generic corporate template. Jack built a clean layout with custom 3D illustration assets that put our patients at ease. A stellar professional who understands the medical field's constraints.",
    date: "2026-07-18",
    audienceType: "local-businesses"
  }
];

// Read helper
function readDataFile<T>(filePath: string, defaultData: T[]): T[] {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2));
      return defaultData;
    }
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return defaultData;
  }
}

// Write helper
function writeDataFile<T>(filePath: string, data: T[]): void {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Error writing to ${filePath}:`, error);
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize data files
  let reviews = readDataFile<Review>(REVIEWS_FILE, DEFAULT_REVIEWS);
  let messages = readDataFile<ContactMessage>(CONTACT_FILE, []);

  // API: Get reviews
  app.get("/api/reviews", (req, res) => {
    res.json(reviews);
  });

  // API: Create review
  app.post("/api/reviews", (req, res) => {
    const { name, role, company, rating, comment, audienceType } = req.body;
    
    if (!name || !rating || !comment) {
      return res.status(400).json({ error: "Name, rating, and comment are required." });
    }

    const wordCount = comment.trim().split(/\s+/).length;
    if (wordCount > 200) {
      return res.status(400).json({ error: "Comment exceeds the maximum limit of 200 words." });
    }

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      name: String(name),
      role: String(role || "Client"),
      company: String(company || "Independent"),
      rating: Number(rating),
      comment: String(comment),
      date: new Date().toISOString().split('T')[0],
      audienceType: audienceType || "freelancers"
    };

    reviews.unshift(newReview);
    writeDataFile(REVIEWS_FILE, reviews);

    res.status(201).json(newReview);
  });

  // API: Submit Contact message
  app.post("/api/contact", (req, res) => {
    const { name, email, company, audienceType, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      name: String(name),
      email: String(email),
      company: company ? String(company) : undefined,
      audienceType: String(audienceType || "general"),
      message: String(message),
      date: new Date().toISOString()
    };

    messages.push(newMessage);
    writeDataFile(CONTACT_FILE, messages);

    res.status(201).json({ success: true, data: newMessage });
  });

  // Vite Integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
