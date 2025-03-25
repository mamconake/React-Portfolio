// Navigation Component
function Navigation() {
    return (
        <nav className="nav">
            <div className="container nav-content">
                <div className="logo">nSeg</div>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#blog">Blog</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}

// Hero Section Component
function Hero() {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <h1>Database Administration & Consulting</h1>
                <p>Expert solutions for Oracle, MySQL, PostgreSQL, and cloud databases. Optimize performance, enhance security, and scale your database infrastructure.</p>
                <a href="#contact" className="btn">Get Started</a>
            </div>
        </section>
    );
}

// Services Section Component
function Services() {
    const services = [
        {
            title: "Performance Tuning",
            description: "Optimize your database performance with expert tuning and optimization techniques.",
            icon: "fas fa-tachometer-alt"
        },
        {
            title: "Security Audits",
            description: "Comprehensive security assessments and recommendations for your database infrastructure.",
            icon: "fas fa-shield-alt"
        },
        {
            title: "Cloud Migration",
            description: "Seamless migration of your databases to cloud platforms with minimal downtime.",
            icon: "fas fa-cloud"
        },
        {
            title: "Training & Consulting",
            description: "Custom training programs and expert consulting for your team.",
            icon: "fas fa-chalkboard-teacher"
        }
    ];

    return (
        <section id="services" className="section">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <div className="blog-grid">
                    {services.map((service, index) => (
                        <div key={index} className="blog-card">
                            <div className="blog-content">
                                <i className={service.icon} style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}></i>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Blog Section Component with Video Support
function Blog() {
    const blogPosts = [
        {
            title: "Oracle Database 23ai",
            excerpt: "Learn the best practices for optimizing your database performance.",
            image: "https://source.unsplash.com/random/800x600?database",
            videoUrl: "https://www.youtube.com/embed/t_fZZDXUgKE"
        },
        {
            title: "Cloud Database Migration Guide",
            excerpt: "A comprehensive guide to migrating your databases to the cloud.",
            image: "https://source.unsplash.com/random/800x600?cloud",
            videoUrl: "https://www.youtube.com/embed/jd9IqV8HGI4"
        },
        {
            title: "Database Security Best Practices",
            excerpt: "Essential security practices to protect your database infrastructure.",
            image: "https://source.unsplash.com/random/800x600?security",
            videoUrl: "https://www.youtube.com/embed/8AljFsc1RNc"
        }
    ];

    return (
        <section id="blog" className="section">
            <div className="container">
                <h2 className="section-title">Latest Articles</h2>
                <div className="blog-grid">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="blog-card">
                            <img src={post.image} alt={post.title} />
                            <div className="blog-content">
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <div className="video-container">
                                    <iframe 
                                        src={post.videoUrl}
                                        title={post.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                                <a href="#" className="btn">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Contact Form Component
function Contact() {
    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn">Send Message</button>
                </form>
            </div>
        </section>
    );
}

// Footer Component
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="social-links">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
                <p>&copy; 2024 nSeg. All rights reserved.</p>
            </div>
        </footer>
    );
}

// Main App Component (removed Services section)
function App() {
    return (
        <div>
            <Navigation />
            <Hero />
            <Services />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
}

// Render the app
ReactDOM.render(<App />, document.getElementById('root')); 