/* ==========================================================================
   7Sens Dynamic Events Script
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Lenis Smooth Scroll (if available)
    let lenis;
    try {
        if (typeof Lenis !== "undefined") {
            lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smooth: true
            });
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        }
    } catch (e) {
        console.warn("Lenis smooth scroll skipped", e);
    }

    // 2. Mobile Menu Toggle
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    let isMenuOpen = false;

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                navMenu.style.display = "flex";
                menuToggle.classList.add("open");
                if (typeof gsap !== "undefined") {
                    gsap.to(navMenu, { x: 0, duration: 0.6, ease: "power3.out" });
                }
            } else {
                menuToggle.classList.remove("open");
                if (typeof gsap !== "undefined") {
                    gsap.to(navMenu, {
                        x: "100%",
                        duration: 0.6,
                        ease: "power3.inOut",
                        onComplete: () => { navMenu.removeAttribute("style"); }
                    });
                } else {
                    navMenu.removeAttribute("style");
                }
            }
        });
    }

    // 3. Magnetic CTA & Buttons
    const magneticElements = document.querySelectorAll(".btn-magnetic");
    magneticElements.forEach(elem => {
        elem.addEventListener("mousemove", (e) => {
            const rect = elem.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            if (typeof gsap !== "undefined") {
                gsap.to(elem, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" });
                const inner = elem.querySelector("span");
                if (inner) {
                    gsap.to(inner, { x: x * 0.15, y: y * 0.15, duration: 0.3, ease: "power2.out" });
                }
            }
        });
        
        elem.addEventListener("mouseleave", () => {
            if (typeof gsap !== "undefined") {
                gsap.to(elem, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1.1, 0.4)" });
                const inner = elem.querySelector("span");
                if (inner) {
                    gsap.to(inner, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1.1, 0.4)" });
                }
            }
        });
    });

    // Determine current page
    const isListingPage = document.getElementById("events-grid-container") !== null;
    const isDetailPage = document.getElementById("detail-event-title") !== null;

    if (isListingPage) {
        initListingPage();
    } else if (isDetailPage) {
        initDetailPage();
    }
});

/* ==========================================================================
   EVENT LISTING PAGE LOGIC
   ========================================================================== */
function initListingPage() {
    const container = document.getElementById("events-grid-container");
    const paginationContainer = document.getElementById("events-pagination");
    const citySelect = document.getElementById("filter-city");
    const statusSelect = document.getElementById("filter-status");
    const ageInput = document.getElementById("filter-age");
    const sortSelect = document.getElementById("filter-sort");

    let activeCity = "all";
    let activeStatus = "all";
    let activeAge = null;
    let activeSort = "date-asc";
    let currentPage = 1;
    const pageSize = 3;

    // Initial render
    renderCards();

    // Age input listener
    if (ageInput) {
        ageInput.addEventListener("input", (e) => {
            activeAge = parseInt(e.target.value, 10);
            if (isNaN(activeAge)) {
                activeAge = null;
            }
            currentPage = 1; // Reset to page 1
            renderCards();
        });
    }

    // Custom Dropdown Logic
    const customDropdowns = document.querySelectorAll('.custom-dropdown');
    customDropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        const options = dropdown.querySelectorAll('.dropdown-option');
        const selectedText = dropdown.querySelector('.selected-text');
        const id = dropdown.id; // dropdown-city, dropdown-status, dropdown-sort

        trigger.addEventListener('click', (e) => {
            // Close others first
            customDropdowns.forEach(d => {
                if (d !== dropdown) d.classList.remove('open');
            });
            dropdown.classList.toggle('open');
            e.stopPropagation();
        });

        options.forEach(option => {
            option.addEventListener('click', (e) => {
                // Update UI
                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                selectedText.textContent = option.textContent;
                dropdown.dataset.value = option.dataset.value;
                dropdown.classList.remove('open');
                
                // Update active state variables
                const val = option.dataset.value;
                if (id === 'dropdown-city') activeCity = val;
                else if (id === 'dropdown-status') activeStatus = val;
                else if (id === 'dropdown-sort') activeSort = val;

                currentPage = 1;
                renderCards();
                e.stopPropagation();
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        customDropdowns.forEach(d => d.classList.remove('open'));
    });

    function renderPagination(totalItems) {
        if (!paginationContainer) return;
        paginationContainer.innerHTML = "";

        const totalPages = Math.ceil(totalItems / pageSize);
        if (totalPages <= 1) {
            return; // No pagination controls needed
        }

        // Previous Button
        const prevBtn = document.createElement("button");
        prevBtn.className = `page-btn prev ${currentPage === 1 ? "disabled" : ""}`;
        prevBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width: 14px; height: 14px;">
                <path d="M15 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        `;
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                renderCards();
                container.scrollIntoView({ behavior: "smooth" });
            }
        });
        paginationContainer.appendChild(prevBtn);

        // Page Numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement("button");
            pageBtn.className = `page-btn ${currentPage === i ? "active" : ""}`;
            pageBtn.textContent = i;
            pageBtn.addEventListener("click", () => {
                currentPage = i;
                renderCards();
                container.scrollIntoView({ behavior: "smooth" });
            });
            paginationContainer.appendChild(pageBtn);
        }

        // Next Button
        const nextBtn = document.createElement("button");
        nextBtn.className = `page-btn next ${currentPage === totalPages ? "disabled" : ""}`;
        nextBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width: 14px; height: 14px;">
                <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        `;
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener("click", () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderCards();
                container.scrollIntoView({ behavior: "smooth" });
            }
        });
        paginationContainer.appendChild(nextBtn);
    }

    function renderCards() {
        // Filter events
        const filteredEvents = window.eventsData.filter(event => {
            const matchesCity = (activeCity === "all" || event.city === activeCity);
            
            let matchesStatus = true;
            if (activeStatus === "available") {
                matchesStatus = (event.status === "booking-open" || event.status === "limited");
            } else if (activeStatus === "full") {
                matchesStatus = (event.status === "waiting-list" || event.status === "fully-booked");
            } else if (activeStatus === "pre-registration") {
                matchesStatus = (event.status === "pre-registration");
            } else if (activeStatus === "tba") {
                matchesStatus = (event.status === "tba");
            }

            let matchesAge = true;
            if (activeAge !== null && event.ageGroup) {
                // Parse event.ageGroup (e.g. "35 - 50 ans")
                const match = event.ageGroup.match(/(\d+)\s*-\s*(\d+)/);
                if (match) {
                    const minAge = parseInt(match[1], 10);
                    const maxAge = parseInt(match[2], 10);
                    if (activeAge < minAge || activeAge > maxAge) {
                        matchesAge = false;
                    }
                }
            }

            return matchesCity && matchesStatus && matchesAge;
        });

        // Sort events
        filteredEvents.sort((a, b) => {
            if (activeSort === "date-asc") {
                return new Date(a.dateRaw) - new Date(b.dateRaw);
            } else if (activeSort === "date-desc") {
                return new Date(b.dateRaw) - new Date(a.dateRaw);
            } else if (activeSort === "price-asc") {
                const priceA = parseFloat(a.price.replace(/[^\d.-]/g, ''));
                const priceB = parseFloat(b.price.replace(/[^\d.-]/g, ''));
                return priceA - priceB;
            } else if (activeSort === "price-desc") {
                const priceA = parseFloat(a.price.replace(/[^\d.-]/g, ''));
                const priceB = parseFloat(b.price.replace(/[^\d.-]/g, ''));
                return priceB - priceA;
            }
            return 0;
        });

        // Clear container
        container.innerHTML = "";

        if (filteredEvents.length === 0) {
            container.innerHTML = `<div class="no-results">Aucun événement ne correspond à vos critères de recherche.</div>`;
            if (paginationContainer) paginationContainer.innerHTML = "";
            return;
        }

        // Slice events for the active page
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedEvents = filteredEvents.slice(startIndex, endIndex);

        // Render each card for active page
        paginatedEvents.forEach(event => {
            const totalPreRegistered = event.preRegistered.men + event.preRegistered.women;
            const menPercentage = (event.preRegistered.men / event.capacity) * 100;
            const womenPercentage = (event.preRegistered.women / event.capacity) * 100;

            const card = document.createElement("div");
            card.className = "events-grid-card fade-in-up";
            card.dataset.id = event.id;

            // Define status class for visual style
            let badgeClass = "open";
            let actionText = "Réserver l'expérience";
            if (event.status === "limited") {
                badgeClass = "limited";
                actionText = "Places limitées";
            } else if (event.status === "waiting-list") {
                badgeClass = "waiting";
                actionText = "Liste d'attente";
            } else if (event.status === "fully-booked") {
                badgeClass = "fully-booked";
                actionText = "Complet";
            } else if (event.status === "pre-registration") {
                badgeClass = "pre-registration";
                actionText = "S'inscrire";
            } else if (event.status === "tba") {
                badgeClass = "tba";
                actionText = "M'avertir";
            }

            card.innerHTML = `
                <div class="v2-card-image-frame">
                    <img src="${event.image}" alt="${event.title}" class="v2-card-img">
                    <div class="v2-status-badge ${badgeClass}">${event.statusText}</div>
                </div>
                <div class="v2-card-details">
                    <div class="v2-card-top-row">
                                <span class="v2-card-city">${event.city}</span>
                                <span class="v2-card-price">${event.price}</span>
                            </div>
                            <h3 class="v2-card-title">${event.title}</h3>
                    
                    <div class="v2-card-info-grid">
                        <div class="v2-info-item">
                            <span class="v2-info-label">
<svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                                <span>DATE</span>
                            </span>
                            <span class="v2-info-value">${event.date}</span>
                        </div>
                        <div class="v2-info-item">
                            <span class="v2-info-label">
<svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                                <span>TRANCHE D'ÂGE</span>
                            </span>
                            <span class="v2-info-value">${event.ageGroup}</span>
                        </div>
                    </div>

                    <!-- Gender & Capacity Split Tracker -->
                    <div class="card-capacity-tracker">
                        <div class="capacity-label-row">
                            <span>Capacité</span>
                            <span>${totalPreRegistered} / ${event.capacity} places</span>
                        </div>
                        <div class="capacity-progress-bar">
                            <div class="capacity-bar-men" style="width: ${menPercentage}%" title="Hommes: ${event.preRegistered.men}"></div>
                            <div class="capacity-bar-women" style="width: ${womenPercentage}%" title="Femmes: ${event.preRegistered.women}"></div>
                        </div>
                        <div class="capacity-label-row" style="margin-top: 2px; font-size: 0.6rem;">
                            <span class="gender-split-text">
                                <span class="men-text">♂ ${event.preRegistered.men} H</span>
                                <span class="women-text">♀ ${event.preRegistered.women} F</span>
                            </span>
                            <span>Équilibre des genres</span>
                        </div>
                    </div>

                    <div class="v2-card-booking-footer">
                        <span class="v2-booking-btn-text">${actionText}</span>
                        <svg class="v2-booking-arrow" viewBox="0 0 24 24" fill="none">
                            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            `;

            // Click redirection
            card.addEventListener("click", () => {
                window.location.href = `event-detail.html?id=${event.id}`;
            });

            container.appendChild(card);
        });

        // Render Pagination buttons
        renderPagination(filteredEvents.length);

        // GSAP animate entrance if GSAP is loaded
        if (typeof gsap !== "undefined") {
            gsap.from(".events-grid-card", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
    }
}

/* ==========================================================================
   EVENT DETAIL PAGE LOGIC
   ========================================================================== */
function initDetailPage() {
    // Extract ID from URL query parameters
    const params = new URLSearchParams(window.location.search);
    const eventId = params.get("id");

    if (!eventId) {
        // Redirect to calendar if no event selected
        window.location.href = "events.html";
        return;
    }

    // Find event
    const event = window.eventsData.find(e => e.id === eventId);

    if (!event) {
        window.location.href = "events.html";
        return;
    }

    // Populate text details
    document.title = `${event.title} — 7Sens Experience`;
    document.getElementById("breadcrumb-event-name").textContent = event.title;
    document.getElementById("detail-event-title").textContent = event.title;
    document.getElementById("detail-event-city").textContent = event.city;
    document.getElementById("detail-event-date").textContent = event.date;
    document.getElementById("detail-event-age").textContent = event.ageGroup;
    document.getElementById("detail-event-price").textContent = event.price;
    document.getElementById("detail-event-desc").textContent = event.description;
    document.getElementById("detail-event-venue").textContent = event.venue;
    
    const imgEl = document.getElementById("detail-event-image");
    imgEl.src = event.image;
    imgEl.alt = event.title;

    // Set hidden event ID in the registration form
    const hiddenIdInput = document.getElementById("form-event-id");
    if (hiddenIdInput) {
        hiddenIdInput.value = event.id;
    }

    // Populate Itinerary
    const itineraryContainer = document.getElementById("detail-event-itinerary");
    itineraryContainer.innerHTML = "";
    event.itinerary.forEach(step => {
        const item = document.createElement("div");
        item.className = "itinerary-item";
        item.innerHTML = `
            <div class="itinerary-node"></div>
            <span class="itinerary-time">${step.time}</span>
            <p class="itinerary-text">${step.event}</p>
        `;
        itineraryContainer.appendChild(item);
    });

    // Populate Inclusions
    const inclusionsContainer = document.getElementById("detail-event-inclusions");
    inclusionsContainer.innerHTML = "";
    event.inclusions.forEach(inc => {
        const item = document.createElement("div");
        item.className = "inclusion-item";
        item.innerHTML = `
            <svg class="inclusion-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span class="inclusion-text">${inc}</span>
        `;
        inclusionsContainer.appendChild(item);
    });

    // Calculate capacity ratios
    const totalPreRegistered = event.preRegistered.men + event.preRegistered.women;
    const menPrePercent = (event.preRegistered.men / event.capacity) * 100;
    const womenPrePercent = (event.preRegistered.women / event.capacity) * 100;

    // Populate Capacity elements
    document.getElementById("detail-capacity-ratio").textContent = `${totalPreRegistered} / ${event.capacity}`;
    document.getElementById("detail-men-count").textContent = event.preRegistered.men;
    document.getElementById("detail-women-count").textContent = event.preRegistered.women;

    // Update Gender Progress Bar
    const genderBar = document.getElementById("detail-gender-bar");
    if (genderBar) {
        genderBar.innerHTML = `
            <div class="capacity-bar-men" style="width: ${menPrePercent}%" title="Hommes: ${event.preRegistered.men}"></div>
            <div class="capacity-bar-women" style="width: ${womenPrePercent}%" title="Femmes: ${event.preRegistered.women}"></div>
        `;
    }

    // Calculate Payments Confirmation ratios
    const totalConfirmed = event.confirmedPaid.men + event.confirmedPaid.women;
    const confirmedPercent = (totalConfirmed / event.capacity) * 100;

    // Populate confirmed payment elements
    document.getElementById("detail-confirmed-ratio").textContent = `${totalConfirmed} / ${event.capacity}`;
    const paymentBar = document.getElementById("detail-payment-bar");
    if (paymentBar) {
        paymentBar.style.width = `${confirmedPercent}%`;
    }

    const breakdownText = document.getElementById("detail-payment-breakdown");
    if (breakdownText) {
        breakdownText.innerHTML = `
            <strong>${totalConfirmed} participants confirmés</strong> après règlement.<br>
            <span style="font-size: 0.68rem; color: var(--text-muted);">Répartition : ${event.confirmedPaid.men} Hommes, ${event.confirmedPaid.women} Femmes.</span>
        `;
    }

    // Button states
    const actionBtn = document.getElementById("booking-action-btn");
    if (actionBtn) {
        if (event.status === "waiting-list") {
            actionBtn.querySelector("span").textContent = "REJOINDRE LA LISTE D'ATTENTE";
        } else if (event.status === "fully-booked") {
            actionBtn.querySelector("span").textContent = "COMPLET / FERMÉ";
            actionBtn.classList.add("disabled");
            actionBtn.disabled = true;
        } else if (event.status === "limited") {
            actionBtn.querySelector("span").textContent = "PLACES LIMITÉES - DEVENIR MEMBRE";
        }

        // Redirect to booking page on click
        actionBtn.addEventListener("click", () => {
            if (!actionBtn.classList.contains("disabled")) {
                window.location.href = `booking.html?id=${event.id}`;
            }
        });
    }

    // Coupon Code Copy Handler
    const copyPromoBtn = document.getElementById("copy-promo-btn");
    const promoCodeVal = document.getElementById("promo-code-val");
    const copyStatus = document.getElementById("copy-status");

    if (copyPromoBtn && promoCodeVal && copyStatus) {
        copyPromoBtn.addEventListener("click", () => {
            const codeText = promoCodeVal.textContent.trim();
            navigator.clipboard.writeText(codeText).then(() => {
                copyStatus.style.opacity = "1";
                copyPromoBtn.textContent = "COPIÉ !";
                
                setTimeout(() => {
                    copyStatus.style.opacity = "0";
                    copyPromoBtn.textContent = "COPIER";
                }, 2500);
            }).catch(err => {
                console.error("Impossible de copier le code: ", err);
            });
        });
    }

    // Render related events slider at the bottom of the page
    renderRelatedEventsSlider(event);
}

/* ==========================================================================
   RELATED EVENTS SLIDER LOGIC
   ========================================================================== */
function renderRelatedEventsSlider(currentEvent) {
    const sliderTrack = document.getElementById("related-events-slider");
    if (!sliderTrack) return;

    // Filter out the current event
    let related = window.eventsData.filter(e => e.id !== currentEvent.id);

    if (related.length === 0) {
        const viewport = document.querySelector(".slider-viewport");
        if (viewport) {
            viewport.innerHTML = `<div class="no-results">Aucun autre événement disponible pour le moment.</div>`;
        }
        return;
    }

    // Sort related events: prioritize events in the same city
    related.sort((a, b) => {
        if (a.city === currentEvent.city && b.city !== currentEvent.city) return -1;
        if (a.city !== currentEvent.city && b.city === currentEvent.city) return 1;
        return 0;
    });

    sliderTrack.innerHTML = "";

    related.forEach(ev => {
        let badgeClass = "open";
        if (ev.status === "limited") {
            badgeClass = "limited";
        } else if (ev.status === "waiting-list") {
            badgeClass = "waiting";
        } else if (ev.status === "fully-booked") {
            badgeClass = "fully-booked";
        }

        const card = document.createElement("div");
        card.className = "slider-card";
        card.innerHTML = `
            <div class="slider-card-image-frame">
                <img src="${ev.image}" alt="${ev.title}" class="slider-card-img">
                <div class="slider-status-badge ${badgeClass}">${ev.statusText}</div>
            </div>
            <div class="slider-card-details">
                <div class="slider-card-top-row">
                    <span class="slider-card-city">${ev.city}</span>
                    <span class="slider-card-price">${ev.price}</span>
                </div>
                <h4 class="slider-card-title">${ev.title}</h4>
                <div class="slider-card-info-row">
                    <span>${ev.date}</span>
                    <span>&nbsp;•&nbsp;</span>
                    <span>${ev.ageGroup}</span>
                </div>
            </div>
        `;

        card.addEventListener("click", () => {
            window.location.href = `event-detail.html?id=${ev.id}`;
        });

        sliderTrack.appendChild(card);
    });

    // Slider scroll logic
    const prevBtn = document.getElementById("slider-prev");
    const nextBtn = document.getElementById("slider-next");
    if (prevBtn && nextBtn) {
        let scrollPosition = 0;

        const getScrollStep = () => {
            const card = sliderTrack.querySelector(".slider-card");
            if (card) {
                const style = window.getComputedStyle(card);
                const width = card.offsetWidth;
                const marginRight = parseFloat(style.marginRight) || 0;
                return width + marginRight;
            }
            return 320;
        };

        nextBtn.addEventListener("click", () => {
            const step = getScrollStep();
            const maxScroll = sliderTrack.scrollWidth - sliderTrack.parentElement.clientWidth;
            scrollPosition = Math.min(scrollPosition + step, Math.max(0, maxScroll));
            sliderTrack.style.transform = `translateX(-${scrollPosition}px)`;
        });

        prevBtn.addEventListener("click", () => {
            const step = getScrollStep();
            scrollPosition = Math.max(scrollPosition - step, 0);
            sliderTrack.style.transform = `translateX(-${scrollPosition}px)`;
        });

        window.addEventListener("resize", () => {
            scrollPosition = 0;
            sliderTrack.style.transform = `translateX(0px)`;
        });
    }
}
