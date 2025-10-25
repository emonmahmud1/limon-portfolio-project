# React Portfolio - Limon Parvez

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS showcasing my skills as a Full-Stack Developer specializing in MERN stack development.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme and gradient accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth animations, hover effects, and dynamic mouse tracking
- **Component-Based Architecture**: Well-organized React components for maintainability
- **Performance Optimized**: Built with Vite for fast development and optimized builds
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript (ES6+)
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Development**: ESLint for code quality

## 📁 Project Structure

```
my-react-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── SocialLink.jsx
│   │   ├── TechStack.jsx
│   │   ├── FeaturedWork.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── CurrentlyBuilding.jsx
│   │   ├── GetInTouch.jsx
│   │   ├── ContactInfo.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (version 18 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/emonmahmud1/limon-portfolio-project.git
   cd my-react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.jsx` - Name, title, and bio
- `src/components/FeaturedWork.jsx` - Your projects
- `src/components/GetInTouch.jsx` - Contact information
- `src/components/Footer.jsx` - Social links

### Styling
- Modify `src/index.css` for global styles
- Update component styles using Tailwind CSS classes
- Customize colors and animations in individual components

### Projects
Add your projects in `src/components/FeaturedWork.jsx`:
```javascript
const projects = [
  {
    title: "Your Project Name",
    type: "Project Type",
    description: "Project description...",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://your-project-link.com",
    gradient: "from-cyan-500 to-blue-500",
    featured: true
  },
  // Add more projects...
];
```

## 🌐 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://github.com/emonmahmud1/limon-portfolio-project.git",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 📱 Sections

1. **Hero Section**: Introduction with animated elements
2. **Tech Stack**: Skills and technologies with progress bars
3. **Featured Work**: Portfolio projects with descriptions
4. **Currently Building**: Upcoming projects
5. **Contact**: Contact form and social links
6. **Footer**: Additional information and links

## 🎯 Performance Features

- **Lazy Loading**: Components load efficiently
- **Optimized Images**: Proper image optimization
- **Minimal Bundle**: Tree-shaking and code splitting
- **Fast Refresh**: Hot module replacement during development

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration
- `postcss.config.js` - PostCSS and Tailwind CSS setup
- `eslint.config.js` - ESLint rules and configuration

## 📞 Contact

- **Email**: smlimonparvez@gmail.com
- **GitHub**: [@smlimonparvez](https://github.com/smlimonparvez)
- **LinkedIn**: [Connect with me](https://linkedin.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide React](https://lucide.dev/) - Icon library

---

**Built with ❤️ by S M Limon Parvez**

*Clean code • Scalable architecture • Optimal performance*