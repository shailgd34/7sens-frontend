/* ==========================================================================
   7Sens Version II Javascript (Interactive Map and Counters)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // 1. Featured Experiences Slider Auto-scroll with Hover Pause
    const sliderViewport = document.querySelector(".v2-slider-viewport");
    let autoScrollInterval = null;

    function startAutoScroll() {
        if (!sliderViewport) return;
        autoScrollInterval = setInterval(() => {
            const maxScroll = sliderViewport.scrollWidth - sliderViewport.clientWidth;
            if (sliderViewport.scrollLeft >= maxScroll - 10) {
                // Loop back to start smoothly
                sliderViewport.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                sliderViewport.scrollBy({ left: 340, behavior: "smooth" });
            }
        }, 4000);
    }

    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }

    if (sliderViewport) {
        startAutoScroll();
        sliderViewport.addEventListener("mouseenter", stopAutoScroll);
        sliderViewport.addEventListener("mouseleave", startAutoScroll);
    }

    // 2. Statistics Counter Numbers Ticker Animation on scroll
    const statNums = document.querySelectorAll(".v2-counter-num");
    
    if (statNums.length && typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        statNums.forEach(stat => {
            const emTag = stat.querySelector("em");
            const suffix = emTag ? emTag.outerHTML : "";
            const rawVal = stat.textContent.replace(/[^0-9]/g, ""); // Extract pure numbers only
            const targetVal = parseFloat(rawVal) || 0;

            // Set initial state to 0 on load
            stat.innerHTML = `0${suffix}`;

            // Animate dummy object to prevent GSAP overwriting textContent directly
            const dummy = { val: 0 };

            gsap.to(dummy, {
                val: targetVal,
                scrollTrigger: {
                    trigger: stat,
                    start: "top 95%",
                    toggleActions: "play none none none"
                },
                duration: 2.0,
                onUpdate: function() {
                    const currentNum = Math.floor(dummy.val);
                    // format with thousands separator if needed
                    const formatted = currentNum >= 1000 ? currentNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") : currentNum;
                    stat.innerHTML = `${formatted}${suffix}`;
                },
                onComplete: function() {
                    // Lock final correct value
                    const finalFormatted = targetVal >= 1000 ? targetVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") : targetVal;
                    stat.innerHTML = `${finalFormatted}${suffix}`;
                }
            });
        });
    }

    // 3. Horizontal Timeline Drag Physics (Swipe-to-scroll support)
    const timelineWrapper = document.querySelector(".v2-horizontal-track-wrapper");
    let isDown = false;
    let startX;
    let scrollLeft;

    if (timelineWrapper) {
        timelineWrapper.addEventListener("mousedown", (e) => {
            isDown = true;
            timelineWrapper.classList.add("active");
            startX = e.pageX - timelineWrapper.offsetLeft;
            scrollLeft = timelineWrapper.scrollLeft;
        });

        timelineWrapper.addEventListener("mouseleave", () => {
            isDown = false;
            timelineWrapper.classList.remove("active");
        });

        timelineWrapper.addEventListener("mouseup", () => {
            isDown = false;
            timelineWrapper.classList.remove("active");
        });

        timelineWrapper.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - timelineWrapper.offsetLeft;
            const walk = (x - startX) * 2.5; // multiplier
            timelineWrapper.scrollLeft = scrollLeft - walk;
        });
    }

    // 4. Form submission handler for Version 2 (Vetting Application Form)
    const v2Form = document.getElementById("v2-contact-form");
    const v2Status = document.getElementById("contact-form-status");

    if (v2Form && v2Status) {
        v2Form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            v2Status.textContent = "SENDING APPLICATION...";
            v2Status.className = "form-status-msg";
            v2Status.style.opacity = "1";
            
            setTimeout(() => {
                v2Status.textContent = "YOUR APPLICATION WAS SUBMITTED. OUR CONCIERGERIE WILL REVIEW YOUR PROFILE AND GET BACK TO YOU SOON.";
                v2Status.classList.add("success");
                v2Form.reset();
                
                setTimeout(() => {
                    if (typeof gsap !== "undefined") {
                        gsap.to(v2Status, {
                            opacity: 0,
                            duration: 0.6,
                            onComplete: () => {
                                v2Status.className = "form-status-msg";
                                v2Status.textContent = "";
                            }
                        });
                    } else {
                        v2Status.style.opacity = "0";
                    }
                }, 5000);
            }, 1800);
        });
    }

    // 5. Redesigned Header Scrolled State Trigger
    const v2Header = document.querySelector(".v2-header");
    if (v2Header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                v2Header.classList.add("scrolled");
            } else {
                v2Header.classList.remove("scrolled");
            }
        });
    }

    // 6. Featured Experiences Horizontal Slider Controls & Swipe Physics
    const sliderPrev = document.querySelector(".v2-prev-btn");
    const sliderNext = document.querySelector(".v2-next-btn");

    if (sliderViewport) {
        // Button click controls
        if (sliderNext) {
            sliderNext.addEventListener("click", () => {
                sliderViewport.scrollBy({ left: 420, behavior: "smooth" });
            });
        }
        if (sliderPrev) {
            sliderPrev.addEventListener("click", () => {
                sliderViewport.scrollBy({ left: -420, behavior: "smooth" });
            });
        }

        // Drag scrolling physics
        let isDragDown = false;
        let startDragX;
        let scrollDragLeft;

        sliderViewport.addEventListener("mousedown", (e) => {
            isDragDown = true;
            sliderViewport.classList.add("active");
            startDragX = e.pageX - sliderViewport.offsetLeft;
            scrollDragLeft = sliderViewport.scrollLeft;
        });

        sliderViewport.addEventListener("mouseleave", () => {
            isDragDown = false;
            sliderViewport.classList.remove("active");
        });

        sliderViewport.addEventListener("mouseup", () => {
            isDragDown = false;
            sliderViewport.classList.remove("active");
        });

        sliderViewport.addEventListener("mousemove", (e) => {
            if (!isDragDown) return;
            e.preventDefault();
            const x = e.pageX - sliderViewport.offsetLeft;
            const walk = (x - startDragX) * 2; // Drag speed modifier
            sliderViewport.scrollLeft = scrollDragLeft - walk;
        });
    }

    // 7. Redesigned Sticky FAQ Accordion Toggle
    const v2FaqTriggers = document.querySelectorAll('.v2-faq-trigger');
    v2FaqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            const item = trigger.closest('.v2-faq-item');
            const content = item.querySelector('.v2-faq-content');
            
            // Close other open FAQ items
            document.querySelectorAll('.v2-faq-trigger').forEach(otherTrigger => {
                if (otherTrigger !== trigger && otherTrigger.getAttribute('aria-expanded') === 'true') {
                    otherTrigger.setAttribute('aria-expanded', 'false');
                    const otherItem = otherTrigger.closest('.v2-faq-item');
                    const otherContent = otherItem.querySelector('.v2-faq-content');
                    if (typeof gsap !== "undefined") {
                        gsap.to(otherContent, { maxHeight: 0, duration: 0.4, ease: 'power2.out' });
                    } else {
                        otherContent.style.maxHeight = '0';
                    }
                }
            });

            // Toggle active state
            trigger.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                if (typeof gsap !== "undefined") {
                    gsap.to(content, {
                        maxHeight: content.scrollHeight,
                        duration: 0.5,
                        ease: 'power3.out'
                    });
                } else {
                    content.style.maxHeight = `${content.scrollHeight}px`;
                }
            } else {
                if (typeof gsap !== "undefined") {
                    gsap.to(content, {
                        maxHeight: 0,
                        duration: 0.4,
                        ease: 'power2.out'
                    });
                } else {
                    content.style.maxHeight = '0';
                }
            }
        });
    });
});
