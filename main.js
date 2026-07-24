/* ==========================================================================
   7Sens Interactive Scripts (GSAP, Lenis Smooth Scroll, Custom Cursor)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // 1. Initialize Lenis Smooth Scroll
    let lenis;
    try {
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        
        // Link Lenis scroll triggers to GSAP
        lenis.on('scroll', ScrollTrigger.update);
        
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        
        gsap.ticker.lagSmoothing(0);
    } catch (e) {
        console.warn("Lenis library could not be initialized, falling back to standard scroll", e);
    }



    // 3. Magnetic CTA & Links Effect
    const magneticElements = document.querySelectorAll('.btn-magnetic');
    magneticElements.forEach(elem => {
        elem.addEventListener('mousemove', (e) => {
            const rect = elem.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Pull element container toward mouse coordinates
            gsap.to(elem, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            // Subtly pull inner elements slightly less/more for depth
            const inner = elem.querySelector('span');
            if (inner) {
                gsap.to(inner, {
                    x: x * 0.15,
                    y: y * 0.15,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
            
            const arrow = elem.querySelector('.btn-arrow-icon');
            if (arrow) {
                gsap.to(arrow, {
                    x: x * 0.25,
                    y: y * 0.25,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
        
        elem.addEventListener('mouseleave', () => {
            // Spring back element and inner child to baseline positions
            gsap.to(elem, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'elastic.out(1.1, 0.4)'
            });
            
            const inner = elem.querySelector('span');
            if (inner) {
                gsap.to(inner, {
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: 'elastic.out(1.1, 0.4)'
                });
            }
            
            const arrow = elem.querySelector('.btn-arrow-icon');
            if (arrow) {
                gsap.to(arrow, {
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: 'elastic.out(1.1, 0.4)'
                });
            }
        });
    });

    // Header scroll state toggle
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 4. GSAP Page Entry and Scroll Reveal Animations
    try {
        // Core GSAP Register
        gsap.registerPlugin(ScrollTrigger);

        // Header and Hero elements entrance timeline
        const introTl = gsap.timeline();
        
        introTl.from('#main-header', {
            y: -80,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        });

        introTl.from('.hero-content .tagline', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.8');

        introTl.from('.hero-title', {
            y: 45,
            opacity: 0,
            duration: 1.2,
            ease: 'power4.out'
        }, '-=0.6');

        introTl.from('.hero-description', {
            y: 25,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8');

        introTl.from('.hero-actions', {
            y: 25,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.9');

        introTl.from('.hero-visual', {
            opacity: 0,
            scale: 0.98,
            duration: 1.5,
            ease: 'power3.out'
        }, '-=1.2');

        // Scroll reveals are disabled to ensure all content displays properly without layout delays

        // Parallax image scrolling on featured items
        const parallaxContainers = document.querySelectorAll('.hero-illustration-wrapper, .event-image-wrapper, .why-image-wrapper, .about-img-frame, .upcoming-card-image-wrapper, .city-thumb-wrapper');
        parallaxContainers.forEach(container => {
            const img = container.querySelector('img');
            if (img) {
                gsap.fromTo(img, {
                    yPercent: -8
                }, {
                    yPercent: 8,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                });
            }
        });

    } catch (err) {
        console.warn("GSAP / ScrollTrigger animations fail-safe bypass activated", err);
    }

    // 5. Upcoming Experiences horizontal scroll track controls
    const scrollContainer = document.querySelector('.horizontal-scroll-container');
    const scrollTrack = document.getElementById('upcoming-track');
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');

    if (scrollContainer && scrollTrack) {
        // Click Controls
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                scrollContainer.scrollBy({ left: 350, behavior: 'smooth' });
            });
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                scrollContainer.scrollBy({ left: -350, behavior: 'smooth' });
            });
        }

        // Horizontal Drag scrolling logic for editorial feel
        let isDown = false;
        let startX;
        let scrollLeft;

        scrollContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollContainer.style.cursor = 'grabbing';
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        });

        scrollContainer.addEventListener('mouseleave', () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
        });

        scrollContainer.addEventListener('mouseup', () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
        });

        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 1.5; // Drag speed modifier
            scrollContainer.scrollLeft = scrollLeft - walk;
        });
    }

    // 6. Interactive Form Handling (Simulated AJAX with premium UX responses)
    const contactForm = document.getElementById('luxury-contact-form');
    const contactStatus = document.getElementById('contact-form-status');

    if (contactForm && contactStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Set state
            contactStatus.textContent = "ENVOI DE LA CANDIDATURE EN COURS...";
            contactStatus.className = "form-status-msg";
            contactStatus.style.opacity = "1";
            
            // Simulate Luxury processing
            setTimeout(() => {
                contactStatus.textContent = "VOTRE CANDIDATURE A BIEN ÉTÉ SOUMISE. NOTRE CONCIERGERIE VOUS RÉPONDRA SOUS 48 HEURES.";
                contactStatus.classList.add("success");
                contactForm.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    gsap.to(contactStatus, {
                        opacity: 0,
                        duration: 0.6,
                        onComplete: () => {
                            contactStatus.className = "form-status-msg";
                            contactStatus.textContent = "";
                        }
                    });
                }, 5000);
            }, 1800);
        });
    }

    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterStatus = document.getElementById('newsletter-form-status');

    if (newsletterForm && newsletterStatus) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            newsletterStatus.textContent = "INSCRIPTION...";
            newsletterStatus.className = "form-status-msg";
            newsletterStatus.style.opacity = "1";
            
            setTimeout(() => {
                newsletterStatus.textContent = "INSCRIPTION RÉUSSIE. BIENVENUE PARMI NOUS.";
                newsletterStatus.classList.add("success");
                newsletterForm.reset();
                
                setTimeout(() => {
                    gsap.to(newsletterStatus, {
                        opacity: 0,
                        duration: 0.6,
                        onComplete: () => {
                            newsletterStatus.className = "form-status-msg";
                            newsletterStatus.textContent = "";
                        }
                    });
                }, 4000);
            }, 1200);
        });
    }

    // 7. Active Navigation State mapping on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 160;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
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

    // 8. Mobile Navigation Toggle Menu Panel
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    let isMenuOpen = false;

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                // Open menu animations
                navMenu.style.display = 'flex';
                menuToggle.classList.add('open');
                gsap.to(navMenu, {
                    x: 0,
                    duration: 0.6,
                    ease: 'power3.out'
                });
            } else {
                // Close menu animations
                menuToggle.classList.remove('open');
                gsap.to(navMenu, {
                    x: '100%',
                    duration: 0.6,
                    ease: 'power3.inOut',
                    onComplete: () => {
                        navMenu.removeAttribute('style');
                    }
                });
            }
        });
        
        // Auto-close on link navigation click
        const menuLinks = navMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    menuToggle.click();
                }
            });
        });
    }

    // 9. FAQ Accordion Toggle Interaction
    const faqTriggers = document.querySelectorAll('.faq-trigger');
    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            const item = trigger.closest('.faq-item');
            const content = item.querySelector('.faq-content');
            
            // Close other open FAQ items for a clean premium accordion behavior
            document.querySelectorAll('.faq-trigger').forEach(otherTrigger => {
                if (otherTrigger !== trigger && otherTrigger.getAttribute('aria-expanded') === 'true') {
                    otherTrigger.setAttribute('aria-expanded', 'false');
                    const otherItem = otherTrigger.closest('.faq-item');
                    const otherContent = otherItem.querySelector('.faq-content');
                    gsap.to(otherContent, { maxHeight: 0, duration: 0.4, ease: 'power2.out' });
                }
            });

            // Toggle state
            trigger.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                // Open content
                gsap.to(content, {
                    maxHeight: content.scrollHeight,
                    duration: 0.5,
                    ease: 'power3.out'
                });
            } else {
                // Close content
                gsap.to(content, {
                    maxHeight: 0,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            }
        });
    });
});

// Floating Back to Top Logic
const floatingBtt = document.getElementById('floating-back-to-top');
if (floatingBtt) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            floatingBtt.classList.add('show');
        } else {
            floatingBtt.classList.remove('show');
        }
    });

    floatingBtt.addEventListener('click', (e) => {
        e.preventDefault();
        // If lenis is available (smooth scroll library used in this template), use it
        if (typeof lenis !== 'undefined') {
            lenis.scrollTo(0);
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
}
