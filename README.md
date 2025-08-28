# 🪄 Flowboard

Flowboard is a modern project management tool inspired by Trello. It provides an intuitive kanban-style interface for organizing tasks, managing workflows, and collaborating with teams.

Built with a scalable full-stack architecture and deployed on AWS, Flowboard delivers performance, reliability, and flexibility for personal and professional project management.

---

## 🚀 Tech Stack

**Frontend**

- [Next.js](https://nextjs.org/) – React framework for building fast, scalable web apps
- Tailwind CSS (optional mention if you use it) – styling and UI components

**Backend**

- [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) – REST API server
- [Prisma](https://www.prisma.io/) – TypeScript ORM for PostgreSQL

**Database**

- [PostgreSQL](https://www.postgresql.org/) – relational database
- [Amazon RDS](https://aws.amazon.com/rds/) – managed production database
- Local development with PostgreSQL instance

**Deployment**

- AWS Amplify – hosting for frontend
- AWS EC2 – backend server deployment
- AWS RDS – production relational database

---

## ⚙️ Features

- ✅ Kanban board for task management
- ✅ Create, update, delete, and reorder tasks
- ✅ Backend REST API with Express
- ✅ Database persistence with Prisma + PostgreSQL
- ✅ Scalable deployment on AWS (Amplify, EC2, RDS)
- ✅ Local development environment with PostgreSQL

---

## 📂 Project Structure

```bash
flowboard/
├── frontend/          # Next.js frontend
├── backend/           # Node.js + Express backend
│   ├── prisma/        # Prisma schema and migrations
│   └── src/           # Express routes, controllers, services
└── README.md          # Project documentation
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 22
- [PostgreSQL](https://www.postgresql.org/) installed locally
- [Prisma CLI](https://www.prisma.io/docs/concepts/components/prisma-cli)

### Clone the Repository

```bash
git clone https://git@github.com:Michael-YZhou/Flowboard.git
cd flowboard
```

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env`:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/flowboard"
   ```
4. Run Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```
4. Run the Next.js dev server:
   ```bash
   npm run dev
   ```

Frontend will run at: `http://localhost:3000`  
Backend will run at: `http://localhost:5000`

---

## 🌐 Deployment

- **Frontend:** hosted on AWS Amplify
- **Backend:** deployed to AWS EC2 instance
- **Database:** hosted on Amazon RDS with PostgreSQL engine

---

## 📖 Scripts

### Backend

- `npm run dev` – start Express server in development mode
- `npm run build` – build backend for production
- `npm start` – run backend in production

### Frontend

- `npm run dev` – start Next.js in development
- `npm run build` – build frontend for production
- `npm start` – run Next.js in production

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

---

## 📜 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## ✨ Acknowledgements

- Inspired by [Trello](https://trello.com/)
- Built with 💙 using Next.js, Node.js, Express, PostgreSQL, and AWS
