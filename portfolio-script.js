// ============================================
// Portfolio Interactive Script - Gen Z Style
// ============================================

// Language Manager
class LanguageManager {
    constructor(audioManager) {
        this.audioManager = audioManager;
        this.currentLang = localStorage.getItem('language') || 'id';
        this.langToggle = document.getElementById('langToggle');
        this.langIcon = document.getElementById('langIcon');
        
        this.translations = {
            id: {
                // Navigation
                navHome: 'Beranda',
                navAbout: 'Tentang',
                navSkills: 'Keahlian',
                navProjects: 'Proyek',
                navContact: 'Kontak',
                
                // Hero Section
                heroSubtitle: 'Industrial Engineering Fresh Graduate',
                heroDescription: 'Warehouse & Supply Chain Analyst, Data Analyst (khususnya inventory & demand planning), PPIC (Production Planning & Inventory Control), & HR/Talent Management (basic, sesuai minat)',
                btnViewWork: 'Lihat Karya Saya',
                btnDownloadCV: 'Unduh CV',
                
                // About Section
                aboutTitle: 'Tentang Saya',
                aboutSubtitle: 'Kenali saya lebih dekat',
                aboutHeading: 'Halo! Saya Rifki Maulana',
                aboutText1: 'Seorang lulusan Teknik Industri yang bersemangat memecahkan masalah dunia nyata melalui data, pemikiran sistem, dan peningkatan berkelanjutan. Pengalaman saya mencakup manufaktur, optimasi gudang, pelaksanaan proyek, dan desain teknik, di mana saya telah berkontribusi pada peningkatan proses, perencanaan operasional, dan pengambilan keputusan berbasis data.',
                aboutText2: 'Di luar keahlian teknis, saya menghargai kepemimpinan, kolaborasi, dan pembelajaran sepanjang hayat. Saya bercita-cita membangun karier internasional di bidang operasional, manajemen proyek, dan pengembangan organisasi sambil terus menciptakan solusi yang memberikan dampak berkelanjutan.',
                statYears: 'Tahun Pengalaman',
                statProjects: 'Proyek Selesai',
                statClients: 'Klien Puas',
                
                // Skills Section
                skillsTitle: 'Keahlian & Teknologi',
                skillsSubtitle: 'Tool yang saya gunakan',
                
                // Projects Section
                projectsTitle: 'Proyek Unggulan',
                projectsSubtitle: 'Beberapa karya terbaru saya',
                project1Title: 'Platform E-Commerce',
                project1Desc: 'Solusi e-commerce modern dengan inventaris real-time dan integrasi pembayaran',
                project2Title: 'Dashboard Analitik',
                project2Desc: 'Dashboard visualisasi data real-time dengan analitik canggih',
                project3Title: 'Aplikasi Media Sosial',
                project3Desc: 'Platform jejaring sosial kaya fitur dengan messaging real-time',
                
                // Contact Section
                contactTitle: 'Mari Bekerja Sama',
                contactSubtitle: 'Hubungi saya',
                contactHeading: 'Informasi Kontak',
                contactText: 'Jangan ragu untuk menghubungi! Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang.',
                formName: 'Nama Anda',
                formEmail: 'Email Anda',
                formMessage: 'Pesan Anda',
                btnSend: 'Kirim Pesan',
                
                // Footer
                footerText: '© 2026 Rifki. Hak cipta dilindungi.',
                
                // Notifications
                notifSuccess: 'Pesan berhasil terkirim! 🎉'
            },
            en: {
                // Navigation
                navHome: 'Home',
                navAbout: 'About',
                navSkills: 'Skills',
                navProjects: 'Projects',
                navContact: 'Contact',
                
                // Hero Section
                heroSubtitle: 'Industrial Engineering Fresh Graduate',
                heroDescription: 'Warehouse & Supply Chain Analyst, Data Analyst (especially inventory & demand planning), PPIC (Production Planning & Inventory Control), & HR/Talent Management (basic, according to interest)',
                btnViewWork: 'View My Work',
                btnDownloadCV: 'Download CV',
                
                // About Section
                aboutTitle: 'About Me',
                aboutSubtitle: 'Get to know me better',
                aboutHeading: 'Hello! I\'m Rifki Maulana',
                aboutText1: 'An Industrial Engineering graduate passionate about solving real-world problems through data, systems thinking, and continuous improvement. My experience spans manufacturing, warehouse optimization, project execution, and engineering design, where I have contributed to process improvements, operational planning, and data-driven decision making.',
                aboutText2: 'Beyond technical expertise, I value leadership, collaboration, and lifelong learning. I aspire to build an international career in operations, project management, and organizational development while continuously creating solutions that deliver sustainable impact.',
                statYears: 'Years Experience',
                statProjects: 'Projects Completed',
                statClients: 'Happy Clients',
                
                // Skills Section
                skillsTitle: 'Skills & Technologies',
                skillsSubtitle: 'Tools I work with',
                
                // Projects Section
                projectsTitle: 'Featured Projects',
                projectsSubtitle: 'Some of my recent work',
                project1Title: 'E-Commerce Platform',
                project1Desc: 'A modern e-commerce solution with real-time inventory and payment integration',
                project2Title: 'Analytics Dashboard',
                project2Desc: 'Real-time data visualization dashboard with advanced analytics',
                project3Title: 'Social Media App',
                project3Desc: 'Feature-rich social networking platform with real-time messaging',
                
                // Contact Section
                contactTitle: 'Let\'s Work Together',
                contactSubtitle: 'Get in touch with me',
                contactHeading: 'Contact Information',
                contactText: 'Feel free to reach out! I\'m always open to discussing new projects, creative ideas, or opportunities.',
                formName: 'Your Name',
                formEmail: 'Your Email',
                formMessage: 'Your Message',
                btnSend: 'Send Message',
                
                // Footer
                footerText: '© 2026 Rifki. All rights reserved.',
                
                // Notifications
                notifSuccess: 'Message sent successfully! 🎉'
            }
        };
        
        this.init();
    }
    
    init() {
        // Set initial language
        this.applyLanguage(this.currentLang);
        
        // Language toggle listener
        this.langToggle.addEventListener('click', () => {
            this.toggleLanguage();
            this.audioManager.playSFX('click');
        });
    }
    
    toggleLanguage() {
        this.currentLang = this.currentLang === 'id' ? 'en' : 'id';
        localStorage.setItem('language', this.currentLang);
        this.applyLanguage(this.currentLang);
    }
    
    applyLanguage(lang) {
        const t = this.translations[lang];
        
        // Update language icon
        this.langIcon.textContent = lang === 'id' ? '🌐 ID' : '🌐 EN';
        document.documentElement.lang = lang;
        
        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks[0].textContent = t.navHome;
        navLinks[1].textContent = t.navAbout;
        navLinks[2].textContent = t.navSkills;
        navLinks[3].textContent = t.navProjects;
        navLinks[4].textContent = t.navContact;
        
        // Hero Section
        document.querySelector('.hero-subtitle').textContent = t.heroSubtitle;
        document.querySelector('.hero-description').textContent = t.heroDescription;
        document.querySelector('.btn-primary').textContent = t.btnViewWork;
        const downloadBtn = document.querySelector('.btn-secondary');
        downloadBtn.innerHTML = `<i class="fas fa-download"></i> ${t.btnDownloadCV}`;
        
        // About Section
        document.querySelectorAll('.section-title')[0].textContent = t.aboutTitle;
        document.querySelectorAll('.section-subtitle')[0].textContent = t.aboutSubtitle;
        document.querySelector('.about-text h3').textContent = t.aboutHeading;
        const aboutParas = document.querySelectorAll('.about-text p');
        aboutParas[0].textContent = t.aboutText1;
        aboutParas[1].textContent = t.aboutText2;
        const statItems = document.querySelectorAll('.stat-item p');
        statItems[0].textContent = t.statYears;
        statItems[1].textContent = t.statProjects;
        statItems[2].textContent = t.statClients;
        
        // Skills Section
        document.querySelectorAll('.section-title')[1].textContent = t.skillsTitle;
        document.querySelectorAll('.section-subtitle')[1].textContent = t.skillsSubtitle;
        
        // Projects Section
        document.querySelectorAll('.section-title')[2].textContent = t.projectsTitle;
        document.querySelectorAll('.section-subtitle')[2].textContent = t.projectsSubtitle;
        const projectTitles = document.querySelectorAll('.project-info h3');
        const projectDescs = document.querySelectorAll('.project-info p');
        projectTitles[0].textContent = t.project1Title;
        projectDescs[0].textContent = t.project1Desc;
        projectTitles[1].textContent = t.project2Title;
        projectDescs[1].textContent = t.project2Desc;
        projectTitles[2].textContent = t.project3Title;
        projectDescs[2].textContent = t.project3Desc;
        
        // Contact Section
        document.querySelectorAll('.section-title')[3].textContent = t.contactTitle;
        document.querySelectorAll('.section-subtitle')[3].textContent = t.contactSubtitle;
        document.querySelector('.contact-info h3').textContent = t.contactHeading;
        document.querySelector('.contact-info p').textContent = t.contactText;
        const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
        formInputs[0].placeholder = t.formName;
        formInputs[1].placeholder = t.formEmail;
        formInputs[2].placeholder = t.formMessage;
        document.querySelector('.contact-form .btn-primary').textContent = t.btnSend;
        
        // Footer
        document.querySelector('.footer p').textContent = t.footerText;
        
        // Store for form handler
        this.currentTranslations = t;
    }
}

// Audio Management
class AudioManager {
    constructor() {
        this.music = document.getElementById('backgroundMusic');
        this.musicToggle = document.getElementById('musicToggle');
        this.sfxToggle = document.getElementById('sfxToggle');
        this.audioControlToggle = document.getElementById('audioControlToggle');
        this.audioControlMenu = document.querySelector('.audio-control-menu');
        this.musicEnabled = false;
        this.sfxEnabled = true;
        this.menuOpen = false;
        
        this.init();
    }
    
    init() {
        // Audio control menu toggle
        if (this.audioControlToggle && this.audioControlMenu) {
            this.audioControlToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMenu();
                this.playSFX('click');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (this.menuOpen && !e.target.closest('.audio-control')) {
                    this.closeMenu();
                }
            });
        }
        
        // Music toggle
        this.musicToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMusic();
            this.playSFX('click');
        });
        
        // SFX toggle
        this.sfxToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            this.sfxEnabled = !this.sfxEnabled;
            this.sfxToggle.classList.toggle('active');
            this.playSFX('click');
        });
        
        // Set initial volume
        if (this.music) {
            this.music.volume = 0.3;
        }
    }
    
    toggleMenu() {
        this.menuOpen = !this.menuOpen;
        this.audioControlMenu.classList.toggle('active');
        this.audioControlToggle.classList.toggle('active');
    }
    
    closeMenu() {
        this.menuOpen = false;
        this.audioControlMenu.classList.remove('active');
        this.audioControlToggle.classList.remove('active');
    }
    
    toggleMusic() {
        if (this.music) {
            if (this.musicEnabled) {
                this.music.pause();
                this.musicToggle.classList.remove('active');
            } else {
                this.music.play().catch(e => console.log('Audio play failed:', e));
                this.musicToggle.classList.add('active');
            }
            this.musicEnabled = !this.musicEnabled;
        }
    }
    
    playSFX(type) {
        if (!this.sfxEnabled) return;
        
        // Create oscillator for simple sound effects
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        switch(type) {
            case 'click':
                oscillator.frequency.value = 800;
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
                break;
            case 'hover':
                oscillator.frequency.value = 600;
                gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.05);
                break;
            case 'success':
                oscillator.frequency.value = 1000;
                gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.2);
                break;
        }
    }
}

// Navigation Management
class NavigationManager {
    constructor(audioManager) {
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.audioManager = audioManager;
        
        this.init();
    }
    
    init() {
        // Scroll effect on navbar
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        });
        
        // Hamburger menu toggle
        this.hamburger.addEventListener('click', () => {
            this.hamburger.classList.toggle('active');
            this.navMenu.classList.toggle('active');
            this.audioManager.playSFX('click');
        });
        
        // Smooth scrolling and close menu on link click
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    this.audioManager.playSFX('click');
                    
                    // Close mobile menu
                    this.hamburger.classList.remove('active');
                    this.navMenu.classList.remove('active');
                }
            });
            
            // Hover sound effect
            link.addEventListener('mouseenter', () => {
                this.audioManager.playSFX('hover');
            });
        });
    }
}

// Animation Manager
class AnimationManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.observeElements();
        this.animateSkillBars();
    }
    
    observeElements() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe sections
        const sections = document.querySelectorAll('.skill-card, .project-card, .about-content, .contact-content');
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(section);
        });
    }
    
    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target.getAttribute('data-progress');
                    entry.target.style.width = progress + '%';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => {
            bar.style.width = '0%';
            observer.observe(bar);
        });
    }
}

// Button Effects Manager
class ButtonEffectsManager {
    constructor(audioManager) {
        this.audioManager = audioManager;
        this.init();
    }
    
    init() {
        // Add sound effects to all buttons
        const buttons = document.querySelectorAll('.btn, .social-link, .project-link');
        
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.audioManager.playSFX('click');
                this.createRipple(e, button);
            });
            
            button.addEventListener('mouseenter', () => {
                this.audioManager.playSFX('hover');
            });
        });
    }
    
    createRipple(event, element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');
        
        const existingRipple = element.querySelector('.ripple-effect');
        if (existingRipple) {
            existingRipple.remove();
        }
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
}

// Form Handler
class FormHandler {
    constructor(audioManager, languageManager) {
        this.form = document.getElementById('contactForm');
        this.audioManager = audioManager;
        this.languageManager = languageManager;
        this.init();
    }
    
    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit();
            });
        }
    }
    
    handleSubmit() {
        // Get form data
        const formData = new FormData(this.form);
        
        // Show success message
        this.audioManager.playSFX('success');
        const message = this.languageManager.currentTranslations.notifSuccess;
        this.showNotification(message, 'success');
        
        // Reset form
        this.form.reset();
    }
    
    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem 2rem;
            border-radius: 50px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 10000;
            animation: slideIn 0.3s ease;
            font-weight: 600;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Collapsible Sections Manager
class CollapsibleManager {
    constructor(audioManager) {
        this.audioManager = audioManager;
        this.headers = document.querySelectorAll('.collapsible-header');
        this.init();
    }
    
    init() {
        this.headers.forEach(header => {
            const toggleBtn = header.querySelector('.collapse-toggle');
            const sectionName = header.getAttribute('data-section');
            const content = document.querySelector(`[data-content="${sectionName}"]`);
            
            if (toggleBtn && content) {
                // Load saved state from localStorage
                const isCollapsed = localStorage.getItem(`section-${sectionName}-collapsed`) === 'true';
                if (isCollapsed) {
                    this.collapseSection(header, content, false);
                }
                
                // Add click event to entire header
                header.addEventListener('click', (e) => {
                    this.toggleSection(header, content, sectionName);
                    this.audioManager.playSFX('click');
                });
                
                // Hover effect
                header.addEventListener('mouseenter', () => {
                    this.audioManager.playSFX('hover');
                });
            }
        });
    }
    
    toggleSection(header, content, sectionName) {
        const isCollapsed = header.classList.contains('collapsed');
        
        if (isCollapsed) {
            this.expandSection(header, content);
            localStorage.setItem(`section-${sectionName}-collapsed`, 'false');
        } else {
            this.collapseSection(header, content);
            localStorage.setItem(`section-${sectionName}-collapsed`, 'true');
        }
    }
    
    collapseSection(header, content, animate = true) {
        header.classList.add('collapsed');
        content.classList.add('collapsed');
        
        if (!animate) {
            content.style.transition = 'none';
            setTimeout(() => {
                content.style.transition = '';
            }, 50);
        }
    }
    
    expandSection(header, content) {
        header.classList.remove('collapsed');
        content.classList.remove('collapsed');
    }
}

// Cursor Effects (Optional - Gen Z style)
class CursorEffects {
    constructor() {
        this.cursor = null;
        this.init();
    }
    
    init() {
        // Create custom cursor trail effect
        document.addEventListener('mousemove', (e) => {
            this.createTrail(e.clientX, e.clientY);
        });
    }
    
    createTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            width: 5px;
            height: 5px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 50%;
            pointer-events: none;
            left: ${x}px;
            top: ${y}px;
            z-index: 9998;
            opacity: 0.6;
            transform: translate(-50%, -50%);
        `;
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.style.transition = 'all 0.5s ease';
            trail.style.opacity = '0';
            trail.style.transform = 'translate(-50%, -50%) scale(2)';
            setTimeout(() => trail.remove(), 500);
        }, 10);
    }
}

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize managers in correct order
    const audioManager = new AudioManager();
    const languageManager = new LanguageManager(audioManager);
    const navigationManager = new NavigationManager(audioManager);
    const animationManager = new AnimationManager();
    const buttonEffects = new ButtonEffectsManager(audioManager);
    const formHandler = new FormHandler(audioManager, languageManager);
    const collapsibleManager = new CollapsibleManager(audioManager);
    const cursorEffects = new CursorEffects();
    
    // Add page load animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('🎨 Portfolio loaded successfully!');
    console.log('🌐 Language switcher ready!');
    console.log('📦 Collapsible sections ready!');
});

// Parallax effect for hero orbs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.1;
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
