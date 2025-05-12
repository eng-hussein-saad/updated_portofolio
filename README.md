# Modern Developer Portfolio


A modern, responsive developer portfolio built with React, TypeScript, and Tailwind CSS. This portfolio showcases professional skills, projects, and services with interactive elements and modern UI design principles.

## ✨ Features

- **Responsive Design** - Optimized for all device sizes
- **Interactive Elements** - Custom cursor, particle background, and animations
- **TypeScript Support** - Fully typed codebase for better development experience
- **Section-based Layout** - Organized content in distinct sections:
  - Hero section with typewriter effect
  - Skills showcase with categorization
  - Services offered
  - Projects portfolio
  - Contact form with email integration
- **Modern UI Components** - Using shadcn/ui for consistent design
- **Animation Effects** - Smooth scroll reveal animations
- **Custom Icons** - Tech stack icons for visual representation

## 🚀 Technologies

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion
- **Routing**: React Router
- **Form Handling**: React Hook Form with Zod validation
- **Email Integration**: EmailJS
- **State Management**: React Query
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js (v16+)
- npm or Bun package manager

## 🛠️ Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```sh
   cd updated_portofolio
   ```

3. Install dependencies:

   ```sh
   npm install
   # or
   bun install
   ```

4. Start the development server:

   ```sh
   npm run dev
   # or
   bun run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/           # UI components
│   ├── icons/            # Custom icon components
│   ├── sections/         # Main page sections
│   └── ui/               # shadcn/ui components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── pages/                # Application pages
└── App.tsx               # Main application component
```

## 🔧 Configuration

- **Tailwind CSS**: Configure styling in `tailwind.config.ts`
- **TypeScript**: Configure type checking in `tsconfig.json`
- **Vite**: Configure build settings in `vite.config.ts`

## 🚢 Deployment

Build the production-ready assets:

```sh
npm run build
# or
bun run build
```

The build artifacts will be stored in the `dist/` directory, ready to be deployed to your preferred hosting platform such as Vercel, Netlify, or GitHub Pages.

## 🎯 Customization

- **Personal Information**: Update your details in the respective section components
- **Projects**: Modify `ProjectsSection.tsx` to showcase your own projects
- **Skills**: Edit `SkillsSection.tsx` to reflect your technical expertise
- **Color Scheme**: Modify theme colors in `tailwind.config.ts`

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📬 Contact

For any inquiries or suggestions, please use the contact form on the portfolio or reach out through the provided social media links.
