# ./

A modern React application built with Vite.

## 🚀 Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Latest React with modern hooks
- 🎨 **Tailwind** - Styling framework
- 🛣️ **React Router** - Client-side routing



## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. Navigate to the project directory:
   ```bash
   cd ./
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
.//
├── public/
├── src/
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── store/            # State management
│   ├── utils/            # Utility functions
│   ├── assets/          # Static assets
│   ├── App.tsx           # Main App component
│   └── main.tsx           # Entry point
├── vite.config.ts        # Vite configuration
└── package.json
```

## 🎨 Styling

This project uses **Tailwind** for styling:

- Classes are available globally
- Configuration in `vite.config.js`
- Customize in `src/index.css`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

## 🎯 Next Steps

1. **Add Components**: Start building your app components
2. **Set up Routing**: Add more routes in main.tsx
3. **Configure API**: Set up your API endpoints if using Axios
4. **Add State Management**: Implement Redux/Zustand if needed
5. **Deploy**: Deploy to your preferred hosting service

---

Built using React + Vite
