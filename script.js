// Data
const projectsData = [
    {id: 1, category: 'ml', title: 'Customer Churn Prediction', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', tags: ['Machine Learning', 'Python'], description: 'Built a predictive model achieving 92% accuracy in identifying at-risk customers, enabling proactive retention strategies.', stats: [{icon: 'chart-line', text: '92% Accuracy'}, {icon: 'clock', text: '3 months'}]},
    {id: 2, category: 'dashboard', title: 'Real-Time Sales Analytics Dashboard', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', tags: ['Dashboard', 'Tableau'], description: 'Interactive dashboard providing real-time insights into sales performance, trends, and KPIs across multiple regions.', stats: [{icon: 'users', text: '500+ Users'}, {icon: 'clock', text: '2 months'}]},
    {id: 3, category: 'ml', title: 'Sentiment Analysis Engine', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop', tags: ['NLP', 'Deep Learning'], description: 'Developed an NLP model for analyzing customer feedback across social media, achieving 89% sentiment classification accuracy.', stats: [{icon: 'comments', text: '1M+ Reviews'}, {icon: 'clock', text: '4 months'}]},
    {id: 4, category: 'analysis', title: 'Market Segmentation Analysis', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop', tags: ['Analysis', 'R'], description: 'Comprehensive customer segmentation study identifying 5 distinct market segments, driving targeted marketing strategies.', stats: [{icon: 'users', text: '50K Customers'}, {icon: 'clock', text: '2 months'}]},
    {id: 5, category: 'ml', title: 'Object Detection System', image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&h=400&fit=crop', tags: ['Computer Vision', 'PyTorch'], description: 'Real-time object detection system for quality control in manufacturing, reducing defect rates by 35%.', stats: [{icon: 'eye', text: '95% Detection'}, {icon: 'clock', text: '5 months'}]},
    {id: 6, category: 'dashboard', title: 'Healthcare Analytics Platform', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', tags: ['Dashboard', 'Power BI'], description: 'Comprehensive analytics platform for hospital operations, patient outcomes, and resource optimization.', stats: [{icon: 'hospital', text: '10 Hospitals'}, {icon: 'clock', text: '6 months'}]}
];

const testimonialsData = [
    {name: 'Michael Chen', role: 'CEO, TechVenture Inc.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop', text: "Dhananjay's expertise in machine learning transformed our customer retention strategy. The predictive model delivered exceptional results, and the implementation was seamless. Highly recommended for any data science project!"},
    {name: 'Sarah Johnson', role: 'Director of Analytics, RetailCorp', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop', text: 'Working with Dhananjay was a game-changer for our analytics capabilities. The dashboard provided clear, actionable insights that directly impacted our bottom line. Professional, responsive, and incredibly skilled.'},
    {name: 'David Martinez', role: 'Product Manager, SocialMetrics', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop', text: 'The NLP solution Dhananjay developed exceeded our expectations. The sentiment analysis provided invaluable insights into customer feedback. A true expert who delivers results!'}
];

const servicesData = [
    {title: 'Mock Interviews', icon: 'user-tie', description: 'Prepare for your dream data science role with realistic mock interviews. Get detailed feedback on technical skills, problem-solving approach, and communication.', features: ['60-minute technical interview', 'Detailed written feedback', 'Coding & case study practice', 'Follow-up Q&A session'], price: '$150', period: 'per session', featured: false},
    {title: 'Resume & Portfolio Review', icon: 'file-alt', description: 'Get your resume and portfolio reviewed by an industry expert. Receive actionable recommendations to stand out in the competitive data science job market.', features: ['Comprehensive resume analysis', 'Portfolio project evaluation', 'ATS optimization tips', '30-minute consultation call'], price: '$100', period: 'per review', featured: true},
    {title: 'Data Analytics & Visualization', icon: 'chart-bar', description: 'Transform raw data into compelling visual stories. Interactive dashboards and reports that drive data-driven decision making.', features: ['Exploratory data analysis', 'Interactive dashboards', 'Custom visualizations', 'Reporting automation'], price: '$180', period: 'per hour', featured: false}
];

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active Navigation Link
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Particle Animation
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 80;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }

    draw() {
        const theme = html.getAttribute('data-theme');
        ctx.fillStyle = theme === 'dark' ? `rgba(59, 130, 246, ${this.opacity})` : `rgba(37, 99, 235, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Counter Animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    updateCounter();
}

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
});

// Apply skill level color classes
document.querySelectorAll('.skill-level').forEach(badge => {
    const level = badge.textContent.toLowerCase();
    if (level === 'expert') {
        badge.classList.add('expert');
    } else if (level === 'advanced') {
        badge.classList.add('advanced');
    } else if (level === 'intermediate') {
        badge.classList.add('intermediate');
    }
});

// Projects Rendering
function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    const filteredProjects = filter === 'all' ? projectsData : projectsData.filter(p => p.category === filter);

    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class="project-card" data-category="${project.category}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <button class="btn-icon preview-btn" data-project="${project.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                    <a href="#" class="btn-icon" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
            <div class="project-content">
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-stats">
                    ${project.stats.map(stat => `<span><i class="fas fa-${stat.icon}"></i> ${stat.text}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    // Reattach preview button listeners
    document.querySelectorAll('.preview-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = parseInt(btn.getAttribute('data-project'));
            showProjectModal(projectId);
        });
    });
}

// Project Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        renderProjects(filter);
    });
});

renderProjects();

// Project Modal
function showProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    const modal = document.getElementById('projectModal');
    const details = document.getElementById('projectDetails');

    details.innerHTML = `
        <h3>${project.title}</h3>
        <div class="project-tags" style="margin: 1rem 0;">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 1rem; margin: 1rem 0;">
        <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem;">${project.description}</p>
        <div class="project-stats">
            ${project.stats.map(stat => `<span><i class="fas fa-${stat.icon}"></i> ${stat.text}</span>`).join('')}
        </div>
    `;

    modal.classList.add('active');
}

document.getElementById('projectModalClose').addEventListener('click', () => {
    document.getElementById('projectModal').classList.remove('active');
});

// Testimonials Rendering
function renderTestimonials() {
    const slider = document.getElementById('testimonialsSlider');
    const dots = document.getElementById('sliderDots');

    slider.innerHTML = testimonialsData.map((testimonial, index) => `
        <div class="testimonial-card ${index === 0 ? 'active' : ''}">
            <div class="testimonial-content">
                <div class="quote-icon">
                    <i class="fas fa-quote-left"></i>
                </div>
                <p class="testimonial-text">${testimonial.text}</p>
                <div class="testimonial-author">
                    <img src="${testimonial.image}" alt="${testimonial.name}">
                    <div class="author-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    dots.innerHTML = testimonialsData.map((_, index) => 
        `<span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`
    ).join('');

    // Dot click handlers
    document.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            showTestimonial(index);
        });
    });
}

let currentTestimonial = 0;

function showTestimonial(index) {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');

    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    cards[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
}

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonialsData.length) % testimonialsData.length;
    showTestimonial(currentTestimonial);
});

document.querySelector('.next-btn').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonialsData.length;
    showTestimonial(currentTestimonial);
});

renderTestimonials();

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialsData.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Services Rendering
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = servicesData.map(service => `
        <div class="service-card ${service.featured ? 'featured' : ''}">
            ${service.featured ? '<div class="featured-badge">Most Popular</div>' : ''}
            <div class="service-icon">
                <i class="fas fa-${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
            </ul>
            <div class="service-price">
                <span class="price">${service.price}</span>
                <span class="period">${service.period}</span>
            </div>
            <button class="btn btn-primary book-btn" data-service="${service.title}">
                ${service.price === 'Custom' ? 'Get Quote' : 'Book Now'}
            </button>
        </div>
    `).join('');

    // Attach booking button listeners
    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const serviceName = btn.getAttribute('data-service');
            showBookingModal(serviceName);
        });
    });
}

renderServices();

// Booking Modal
function showBookingModal(serviceName) {
    const modal = document.getElementById('bookingModal');
    document.getElementById('serviceType').value = serviceName;
    modal.classList.add('active');
}

document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('bookingModal').classList.remove('active');
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Form Validation
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');

    inputs.forEach(input => {
        const formGroup = input.closest('.form-group');
        const errorMsg = formGroup.querySelector('.error-message');

        if (!input.value.trim()) {
            formGroup.classList.add('error');
            errorMsg.textContent = 'This field is required';
            isValid = false;
        } else if (input.type === 'email' && !validateEmail(input.value)) {
            formGroup.classList.add('error');
            errorMsg.textContent = 'Please enter a valid email';
            isValid = false;
        } else {
            formGroup.classList.remove('error');
            errorMsg.textContent = '';
        }
    });

    return isValid;
}

// Contact Form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm(contactForm)) return;

    const btn = contactForm.querySelector('button[type="submit"]');
    const status = contactForm.querySelector('.form-status');

    btn.classList.add('loading');
    btn.disabled = true;

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    btn.classList.remove('loading');
    btn.disabled = false;

    status.className = 'form-status success';
    status.textContent = 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.';
    contactForm.reset();

    setTimeout(() => {
        status.style.display = 'none';
    }, 5000);
});

// Booking Form
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm(bookingForm)) return;

    const btn = bookingForm.querySelector('button[type="submit"]');
    const status = bookingForm.querySelector('.form-status');

    btn.classList.add('loading');
    btn.disabled = true;

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    btn.classList.remove('loading');
    btn.disabled = false;

    status.className = 'form-status success';
    status.textContent = 'Booking confirmed! You will receive a confirmation email shortly.';

    setTimeout(() => {
        document.getElementById('bookingModal').classList.remove('active');
        bookingForm.reset();
        status.className = 'form-status';
    }, 3000);
});

// Real-time input validation
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('blur', () => {
        const formGroup = input.closest('.form-group');
        const errorMsg = formGroup.querySelector('.error-message');

        if (input.hasAttribute('required') && !input.value.trim()) {
            formGroup.classList.add('error');
            errorMsg.textContent = 'This field is required';
        } else if (input.type === 'email' && input.value && !validateEmail(input.value)) {
            formGroup.classList.add('error');
            errorMsg.textContent = 'Please enter a valid email';
        } else {
            formGroup.classList.remove('error');
            errorMsg.textContent = '';
        }
    });

    input.addEventListener('input', () => {
        const formGroup = input.closest('.form-group');
        if (formGroup.classList.contains('error') && input.value.trim()) {
            formGroup.classList.remove('error');
            formGroup.querySelector('.error-message').textContent = '';
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animations
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {threshold: 0.1});

document.querySelectorAll('.project-card, .service-card, .highlight-item, .tech-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateOnScroll.observe(el);
});

// Initialize particle canvases for all sections
function initSectionCanvas(canvasId, particleCount = 50) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const section = canvas.parentElement;
    
    function resizeCanvas() {
        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;
    }
    resizeCanvas();
    
    const particles = [];
    
    class SectionParticle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.3 + 0.1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        }
        
        draw() {
            const theme = html.getAttribute('data-theme');
            ctx.fillStyle = theme === 'dark' 
                ? `rgba(129, 140, 248, ${this.opacity})` 
                : `rgba(99, 102, 241, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new SectionParticle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', resizeCanvas);
}

// Initialize all section canvases
initSectionCanvas('aboutCanvas', 40);
initSectionCanvas('projectsCanvas', 45);
initSectionCanvas('skillsCanvas', 50);
initSectionCanvas('testimonialsCanvas', 35);
initSectionCanvas('servicesCanvas', 40);
initSectionCanvas('contactCanvas', 45);

console.log('Portfolio website loaded successfully!');
