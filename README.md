# Data Science Portfolio Website

A modern, dynamic, and responsive portfolio website for a data scientist freelancer built with HTML, CSS, and JavaScript.

## Features

### 🎨 Design
- Clean, professional, and visually appealing design
- Neutral color palette with professional accents (navy, turquoise, slate)
- Consistent typography and balanced whitespace
- Responsive grid layouts for all screen sizes
- Smooth animations and transitions throughout

### 🌓 Dark/Light Mode
- Toggle between dark and light themes
- Persistent theme selection (saved in localStorage)
- Smooth theme transitions

### 📱 Responsive Design
- Fully responsive across all devices (mobile, tablet, desktop)
- Mobile-friendly navigation with hamburger menu
- Optimized layouts for different screen sizes

### 🎯 Sections

#### Hero Section
- Animated gradient background with particle effect
- Name, title, and introduction
- Animated statistics counter
- Call-to-action buttons
- Scroll indicator

#### About Section
- Professional profile image with hover effects
- Detailed background information
- Education, certifications, and experience highlights
- Interactive cards with hover animations

#### Skills Section
- Grid-based skill cards with clean, minimal design
- Visual skill representations with icons
- Hover effects with gradient backgrounds
- Three categories: Programming Languages, ML & AI, Tools & Frameworks
- Responsive grid layout with smooth animations

#### Projects Section
- Filterable project gallery (All, ML, Analysis, Dashboards)
- Interactive project cards with hover overlays
- Project preview modals
- Tags, descriptions, and statistics for each project

#### Testimonials Section
- Carousel slider with client testimonials
- Auto-rotating testimonials (5-second intervals)
- Navigation controls (previous/next buttons)
- Dot indicators for manual navigation
- Star ratings and client photos

#### Services Section
- Professional service offerings
- Mock interviews and resume reviews
- Data analytics and visualization services
- Featured service highlighting
- Pricing information with CTA buttons

#### Contact Section
- Contact information with icons
- Social media links
- Contact form with real-time validation
- Email and phone validation
- Success/error message display
- Loading states for form submission

### ⚡ Interactive Features

#### Navigation
- Sticky navigation bar with scroll effects
- Active section highlighting
- Smooth scroll to sections
- Mobile-responsive menu

#### Animations
- Fade-in animations on scroll
- Counter animations for statistics
- Progress bar animations for skills
- Particle animation in hero section
- Hover effects on cards and buttons

#### Modals
- Project preview modal with detailed information
- Service booking modal with form
- Click-outside-to-close functionality

#### Forms
- Real-time input validation
- Email format validation
- Required field checking
- Visual error indicators
- Success/error status messages
- Loading states during submission

### 🎭 User Experience
- Smooth scroll behavior
- Intuitive navigation
- Fast loading times
- Accessible design
- Interactive hover states
- Visual feedback for all interactions

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, Grid, Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter, Poppins)

## File Structure

```
portfolio_cursor/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles (minified)
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## Setup & Usage

1. Open `index.html` in a modern web browser
2. No build process or dependencies required
3. All assets are loaded from CDNs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #14b8a6;
    --accent-color: #0891b2;
    /* ... */
}
```

### Content
- Update personal information in `index.html`
- Modify projects data in `script.js` (projectsData array)
- Update testimonials in `script.js` (testimonialsData array)
- Customize services in `script.js` (servicesData array)

### Images
Replace placeholder images with your own:
- Profile photo in About section
- Project screenshots
- Testimonial photos

## Performance

- Optimized CSS (minified)
- Efficient JavaScript
- Lazy loading for images
- Smooth 60fps animations
- Minimal external dependencies

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast
- Responsive text sizing

## Future Enhancements

- Blog section integration
- Case study pages for projects
- Email service integration (EmailJS, Formspree)
- Analytics tracking
- SEO optimization
- Progressive Web App (PWA) features

## License

This project is open source and available for personal and commercial use.

## Contact

For inquiries about this portfolio template or data science services:
- Email: dhanukamble001@gmail.com
- Phone: +91 7875345734
- Location: Pune, India

---

Built with ❤️ by a Data Science Professional
