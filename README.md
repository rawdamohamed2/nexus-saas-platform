# Nexus - B2B SaaS Home Services Platform 

**Nexus** is a comprehensive multi-tenant SaaS platform designed to streamline home service management. It enables companies to manage bookings, workers, and services efficiently through a unified dashboard.

---

## 🛠️ Tech Stack
- **Frontend:** React.js, Vite, Tailwind CSS (v4)
- **UI Components:** shadcn/ui, Lucide Icons
- **Backend/Database:** Supabase (PostgreSQL, Auth, Storage)
- **State Management:** Custom Hooks (useApi)

---

## ✨ Features (In Progress)
- [x] **Dynamic Landing Page:** Professional UI with responsive design.
- [x] **Subscription Plans:** Dynamic pricing cards fetched from Supabase.
- [x] **Service Discovery:** Displaying company-specific services.
- [x] **Smart Booking System:** Real-time availability check for workers.
- [x] **Multi-tenant Dashboard:** Separate views for Admins, Workers, and Clients.

---

## Getting Started

### Prerequisites
- Node.js installed
- Supabase account and project
  
### Installation
### 1. Clone the repository:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/nexus-saas-platform.git](https://github.com/YOUR_USERNAME/nexus-saas-platform.git)
   ```
### 2. Install dependencies:
```bash
npm install
```

### 3. Set up environment variables:
Create a `.env` file in the root directory and add:

`VITE_SUPABASE_URL=your_supabase_url`
`VITE_SUPABASE_ANON_KEY=your_supabase_anon_key`

### 4. Run the development server:

```Bash
npm run dev
```

### Project Structure
- src/components: Reusable UI components.
- src/hooks: Custom React hooks (like useApi).
- src/lib: Configuration files (Supabase client).
- src/pages: Main application pages (Landing, Features, etc.).

### Author
Rawda Mohamed Sengab Computer Science Student at Alexandria University

