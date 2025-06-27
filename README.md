# Shiv Raj Bhagat - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing the professional experience and projects of Shiv Raj Bhagat, a Full Stack Software Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Components**: Smooth scrolling, hover effects, and animations
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📱 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About**: Professional summary and core competencies
3. **Skills**: Technical and soft skills categorized
4. **Experience**: Current role and responsibilities
5. **Projects**: Featured projects with tech stacks and contributions
6. **Education**: Academic background and certifications
7. **Achievements**: Awards and recognitions
8. **Contact**: Contact information and message form

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/         # React components
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Main page
├── public/               # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Colors
The color palette can be customized in `tailwind.config.js`:
- Primary: Blue (#3B82F6)
- Secondary: Dark Blue (#1E40AF)
- Accent: Amber (#F59E0B)

### Content
Update the content in each component file to reflect your personal information, experience, and projects.

### Styling
Modify the global styles in `app/globals.css` and component-specific styles using Tailwind CSS classes.

## 📧 Contact Form

The contact form is currently set up for frontend display. To make it functional, integrate with:
- Email services (EmailJS, Formspree)
- Backend API
- Serverless functions

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with customization, feel free to reach out!

---

**Built with ❤️ by Shiv Raj Bhagat** 