# 🧩 Micro Frontend Demo (Vite + React + Module Federation)

This project is my first successful implementation of a **micro frontend architecture** using **Vite**, **React**, and **Module Federation**.  
It consists of two apps:

- **Remote App** → exposes shared UI components (e.g., `Header`, `Button`)  
- **Host App** → dynamically loads and renders these remote components at runtime

The setup demonstrates how to share features across independent applications while keeping each project isolated, deployable, and scalable.

---

## 🚀 Features

- Micro frontend architecture using **@originjs/vite-plugin-federation**
- Dynamic runtime loading of remote components (`remoteApp/Header`, `remoteApp/Button`)
- React + TypeScript + TailwindCSS
- Lazy loading with `React.Suspense`
- Independent build & deploy for each application

---

## 📁 Project Structure

micro-frontend/
│
├── remote-app/ # Exposes shared components
│ ├── src/components/Header.tsx
│ ├── src/components/Button.tsx
│ └── remoteEntry.js (generated)
│
└── host-app/ # Consumes components from remote-app
├── src/components/RemoteComponentWrapper.tsx
├── vite.config.ts
└── App.tsx

---

## 🔧 Technologies Used

- **Vite**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Module Federation**
- **Bun / yarn**

---

## ▶️ How to Run

### 1️⃣ Start the Remote App
```bash
cd remote-app
bun run serve
2️⃣ Start the Host App
bash
Copy code
cd host-app
bun run serve
The host app will automatically fetch remote modules at runtime.

🎯 What This Demo Shows
How to expose components from a remote micro frontend

How to dynamically import them inside a host application

How module federation works with Vite (build & dev)

The foundation for scaling micro frontend architecture across teams

📌 Notes
This is an initial learning project to explore micro frontends.
Future improvements may include:

Shared global state

Versioned remote components

CI/CD deployment workflow for independent apps
