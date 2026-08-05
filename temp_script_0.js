
        const categories = [
            { id: 'q1', title: 'What are you looking for today?', desc: "What best describes what you're looking for right now?", limit: 1, exact: true, options: ["The love of my life", "A serious relationship", "Open to seeing where things go", "Meeting new people", "Casual dating", "I'm not sure yet"] },
            { id: 'q2', title: 'Choose your 3 core values', desc: "What are the three values that define you the most?", limit: 3, exact: true, options: ["Honesty", "Respect", "Family", "Freedom", "Kindness", "Loyalty", "Authenticity", "Adventure", "Stability", "Sense of humor", "Spirituality", "Personal growth", "Creativity", "Ambition", "Independence"] },
            { id: 'q3', title: 'Which qualities attract you the most?', desc: "What qualities make you fall for someone?", limit: 2, exact: false, options: ["Honesty", "Kindness", "Intelligence", "Sense of humor", "Confidence", "Authenticity", "Emotional maturity", "Ambition", "Passion", "Loyalty", "Calmness", "Open-mindedness", "Generosity", "Adventurous spirit", "Good communication"] },
            { id: 'q4', title: 'Your biggest deal breakers', desc: "What would immediately make a relationship impossible for you?", limit: 2, exact: false, options: ["Lies", "Infidelity", "Lack of respect", "Manipulation", "Jealousy", "Violence or aggression", "Lack of communication", "Selfishness", "Addiction", "Emotional immaturity", "Lack of ambition", "Dishonesty", "Excessive control", "Negativity", "Lack of commitment"] },
            { id: 'q5', title: 'Your biggest dreams', desc: "If everything were possible, what would you most like to build in your life?", limit: 2, exact: false, options: ["Grow old together", "Build a happy family", "Travel the world", "Achieve financial freedom", "Start my own business", "Buy my dream home", "Change country and start a new life", "Help others make a difference", "Find my soulmate", "Live a peaceful life", "Leave a positive legacy", "Create something meaningful", "Have children", "Live close to nature", "Wake up every day happy"] },
            { id: 'q6', title: 'Your biggest flaws', desc: "Which flaws best describe you?", limit: 2, exact: false, options: ["Stubborn", "Impatient", "Too sensitive", "Overthinker", "Perfectionist", "Too independent", "Too direct", "Shy", "Distracted", "Jealous", "Workaholic", "Reserved", "Impulsive", "Disorganized", "Too trusting"] },
            { id: 'q7', title: 'How do you express love?', desc: "How do you naturally express love and affection?", limit: 1, exact: true, options: ["Quality time", "Physical touch", "Words of affirmation", "Receiving gifts", "Acts of service"] },
            { id: 'q8', title: 'Conflict and repair style', type: 'multi-question', subQuestions: [
                { id: 'q8a', desc: 'When a disagreement becomes tense, what do you usually do?', limit: 1, exact: true, options: ["Talk about it immediately", "Take time to calm down, then discuss it", "Look for a compromise", "Avoid the subject and move on", "Expect the other person to make the first move", "I sometimes struggle to communicate"] },
                { id: 'q8b', desc: 'What helps you feel secure after a conflict?', limit: 1, exact: true, options: ["A calm conversation", "A sincere apology", "Affection and reassurance", "Concrete actions or solutions", "Some time alone"] },
                { id: 'q8c', desc: 'During a disagreement, what is most difficult for you?', limit: 1, exact: true, options: ["Feeling ignored", "Raised voices or aggression", "Criticism", "Emotional distance", "A partner who refuses to compromise"] }
            ]},
            { id: 'q9', title: 'How easily do you express your emotions?', desc: "How comfortable are you expressing your emotions?", limit: 1, exact: true, options: ["Very easily", "Fairly easily", "Only with people I trust", "With difficulty", "I usually keep them to myself"] },
            { id: 'q10', title: 'Which lifestyle describes you best?', desc: "Which lifestyle best represents you?", limit: 1, exact: true, options: ["Very calm", "Mostly calm", "Balanced", "Active", "Always on the go"] },
            { id: 'q11', title: 'Hobbies and interests', desc: "Which activities and interests are genuinely part of your life?", limit: 20, exact: false, type: 'hobbies' },
            { id: 'q12', title: 'How do you make important decisions?', desc: "When making important decisions, what do you rely on the most?", limit: 1, exact: true, options: ["Logic", "Intuition", "A balance of both"] },
            { id: 'q13', title: 'How important is family to you?', desc: "What role does family play in your life?", limit: 1, exact: true, options: ["My highest priority", "Very important", "Important", "Not very important", "Not important at all"] },
            { id: 'q14', title: 'Your financial mindset', desc: "Which statement best describes your relationship with money?", limit: 1, exact: true, options: ["I prefer saving money", "I enjoy spending and living in the moment", "I'm balanced", "I prefer investing", "I take life one day at a time"] },
            { id: 'q15', title: 'Your preferred vacation', desc: "What type of holiday would you choose?", limit: 1, exact: true, options: ["Beach", "Mountains", "Road trip", "City break", "Luxury resort", "Adventure travel", "I'm happy with anything"] },
            { id: 'q16', title: 'How spontaneous are you?', desc: "How spontaneous are you in everyday life?", limit: 1, exact: true, options: ["I plan everything", "I like planning ahead", "A balance of both", "Very spontaneous"] },
            { id: 'q17', title: 'Do you want children?', desc: "What best describes your wishes regarding children?", limit: 1, exact: true, options: ["Yes", "No", "Maybe", "I already have children and don't want more", "I already have children and would like more"] },
            { id: 'q18', title: 'Your vision of a relationship', desc: "Which statement best represents your ideal relationship?", limit: 1, exact: true, options: ["Sharing everything together", "Maintaining our independence", "A healthy balance between togetherness and independence"] },
            { id: 'q19', title: 'Intimacy and sexual compatibility', type: 'multi-question', subQuestions: [
                { id: 'q19a', desc: 'How important is physical and sexual intimacy in a relationship?', limit: 1, exact: true, options: ["Essential", "Very important", "Important, but not central", "Relatively unimportant", "Prefer not to answer"] },
                { id: 'q19b', desc: 'How comfortable are you discussing your intimate needs with a partner?', limit: 1, exact: true, options: ["Very comfortable", "Comfortable once trust is established", "Somewhat uncomfortable", "I prefer my partner to initiate the conversation", "Prefer not to answer"] },
                { id: 'q19c', desc: 'What creates intimacy for you?', limit: 2, exact: false, options: ["Emotional connection", "Physical affection", "Sexual attraction", "Trust and communication", "A combination of all these elements", "Prefer not to answer"] },
                { id: 'q19d', desc: 'How would you describe your preferred pace for developing physical intimacy?', limit: 1, exact: true, options: ["Slowly, after establishing trust", "Naturally, without a fixed timeline", "Relatively quickly when attraction is mutual", "Prefer not to answer"] }
            ]},
            { id: 'q20', title: 'Your biggest fear in love', desc: "What worries you the most in a relationship?", limit: 1, exact: true, options: ["Being cheated on", "Being abandoned", "Not being understood", "Losing my freedom", "Commitment", "Getting hurt"] },
            { id: 'q21', title: 'A quality you would like to improve', desc: "If you could improve one aspect of yourself, what would it be?", limit: 1, exact: true, options: ["Patience", "Self-confidence", "Communication", "Courage", "Organization", "Empathy"] },
            { id: 'q22', title: 'What kind of humor makes you laugh?', desc: "What type of humor do you enjoy the most?", limit: 1, exact: true, options: ["Dark humor", "Wordplay", "Absurd situations", "Self-deprecating humor", "Spontaneous people"] },
            { id: 'q23', title: 'In a relationship, what do you need most to feel truly happy?', desc: "What are the three things you need the most?", limit: 3, exact: true, options: ["To feel loved", "To feel respected", "To feel safe and secure", "To be accepted for who I am", "To grow together", "To build a family", "To laugh every day", "To travel together", "To feel supported", "To have excellent communication", "To share a strong friendship", "To experience passion", "To have stability", "To have freedom", "To share an intellectual connection", "To share an emotional connection", "To share a spiritual connection", "To have an ambitious partner", "To receive affection and tenderness", "To admire and be admired by my partner"] },
            { id: 'q24', title: 'Personal Description', desc: "Share a little about yourself and describe who you truly are. The more authentic and detailed your description is, the better we can understand your personality and help you find the most compatible matches. Your answer will remain completely private and will never be published on your profile.", type: 'textarea' },
            { id: 'q25', title: "What I'm Looking For", desc: "Describe the kind of person you would like to meet and the connection you hope to build. You can share the qualities, values, personality and relationship dynamic that matter most to you. The more sincere and detailed your answer is, the better we can understand what you are looking for and identify the most compatible matches. Your answer will remain private.", type: 'textarea' }
        ];

        let currentStep = 0;
        let selections = {};
        let currentSelections = [];

        const introView = document.getElementById('intro-view');
        const questionnaireView = document.getElementById('questionnaire-view');

        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        const stepTitle = document.getElementById('step-title');
        const stepDesc = document.getElementById('step-desc');
        const cardsContainer = document.getElementById('cards-container');
        const selectionCounter = document.getElementById('selection-counter');

        const btnNext = document.getElementById('btn-next');
        const btnBack = document.getElementById('btn-back');

        // Set smart CTA label on page load
        (function initCTA() {
            const saved = localStorage.getItem('s7_questionnaire_results');
            const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
            const ctaBtn = document.getElementById('btn-start-cta');
            if (!ctaBtn) return;
            if (user.questionnaireCompleted) {
                ctaBtn.textContent = 'Revoir mes réponses';
            } else if (saved) {
                ctaBtn.textContent = 'Continuer S7 Affinity';
            } else {
                ctaBtn.textContent = 'Commencer S7 Affinity';
            }
        })();

        function startQuestionnaire() {
            const saved = localStorage.getItem('s7_questionnaire_results');
            if (saved) {
                try { selections = JSON.parse(saved); } catch (e) { }
                // Resume from the last step that was answered
                const answeredKeys = Object.keys(selections);
                if (answeredKeys.length > 0) {
                    const lastKey = answeredKeys[answeredKeys.length - 1];
                    const lastIdx = categories.findIndex(c => c.id === lastKey);
                    if (lastIdx >= 0 && lastIdx < categories.length - 1) {
                        currentStep = lastIdx + 1;
                    }
                }
            }
            introView.style.display = 'none';
            questionnaireView.style.display = 'flex';
            initStep();
        }

        function initStep() {
            const category = categories[currentStep];
            let savedSelections = selections[category.id] || (category.type === 'textarea' ? '' : []);

            if (category.type !== 'textarea' && Array.isArray(savedSelections)) {
                // Filter out any selections that no longer exist in the options (e.g. if language changed)
                savedSelections = savedSelections.filter(item => category.options.includes(item));
                // Update selections to avoid keeping ghost items
                selections[category.id] = savedSelections;
            }

            currentSelections = savedSelections;

            progressFill.style.width = `${((currentStep + 1) / categories.length) * 100}%`;
            progressText.innerText = `Étape ${currentStep + 1} sur ${categories.length}`;
            stepTitle.innerText = category.title;
            stepDesc.innerText = category.desc;

            if (currentStep === 0) {
                btnBack.style.visibility = 'hidden';
            } else {
                btnBack.style.visibility = 'visible';
            }

            if (currentStep === categories.length - 1) {
                btnNext.innerText = 'Terminer';
            } else {
                btnNext.innerText = 'Suivant';
            }

            cardsContainer.innerHTML = '';

            if (category.type === 'multi-question') {
                cardsContainer.style.display = 'flex';
                cardsContainer.style.flexDirection = 'column';
                cardsContainer.style.gap = '30px';
                
                category.subQuestions.forEach(sub => {
                    const subContainer = document.createElement('div');
                    
                    const subTitle = document.createElement('p');
                    subTitle.className = 'q-desc';
                    subTitle.style.marginBottom = '15px';
                    subTitle.style.fontWeight = '600';
                    subTitle.style.color = 'var(--primary-navy)';
                    subTitle.innerText = sub.desc;
                    subContainer.appendChild(subTitle);
                    
                    const subGrid = document.createElement('div');
                    subGrid.style.display = 'grid';
                    subGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(220px, 1fr))';
                    subGrid.style.gap = '15px';
                    
                    let subSelections = selections[sub.id] || [];
                    if (!Array.isArray(subSelections)) subSelections = [subSelections];
                    
                    sub.options.forEach(item => {
                        const card = document.createElement('div');
                        card.className = 'q-text-btn';
                        if (subSelections.includes(item)) {
                            card.classList.add('selected');
                        }
                        card.innerHTML = `<span>${item}</span>`;
                        card.onclick = () => {
                            if (sub.limit === 1) {
                                subSelections = [item];
                            } else {
                                if (subSelections.includes(item)) {
                                    subSelections = subSelections.filter(i => i !== item);
                                } else {
                                    if (subSelections.length < sub.limit) {
                                        subSelections.push(item);
                                    }
                                }
                            }
                            selections[sub.id] = subSelections;
                            initStep(); // Re-render to update UI and footer
                        };
                        subGrid.appendChild(card);
                    });
                    
                    subContainer.appendChild(subGrid);
                    cardsContainer.appendChild(subContainer);
                });
            } else if (category.type === 'textarea') {
                cardsContainer.style.display = 'block'; // Remove grid for textarea
                const textarea = document.createElement('textarea');
                textarea.className = 'q-textarea';
                textarea.placeholder = 'Saisissez votre réponse ici...';
                textarea.value = currentSelections;
                textarea.addEventListener('input', (e) => {
                    currentSelections = e.target.value;
                    updateFooter(category);
                });
                cardsContainer.appendChild(textarea);
            } else if (category.type === 'hobbies') {
                cardsContainer.style.display = 'block';
                
                const searchContainer = document.createElement('div');
                searchContainer.className = 'hobbies-search-container';
                searchContainer.style.marginBottom = '20px';
                
                const searchInput = document.createElement('input');
                searchInput.type = 'text';
                searchInput.placeholder = 'Rechercher...';
                searchInput.className = 'hobbies-search-input';
                searchInput.style.width = '100%';
                searchInput.style.padding = '12px 16px';
                searchInput.style.borderRadius = '8px';
                searchInput.style.border = '1px solid rgba(214, 164, 55, 0.4)';
                searchInput.style.fontFamily = "'Instrument Sans', sans-serif";
                searchInput.style.fontSize = '0.95rem';
                searchInput.style.boxSizing = 'border-box';
                searchInput.style.marginBottom = '10px';
                
                searchContainer.appendChild(searchInput);
                cardsContainer.appendChild(searchContainer);
                
                const hobbiesGrid = document.createElement('div');
                hobbiesGrid.className = 'hobbies-grid';
                hobbiesGrid.style.display = 'grid';
                hobbiesGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(180px, 1fr))';
                hobbiesGrid.style.gap = '10px';
                hobbiesGrid.style.maxHeight = '40vh';
                hobbiesGrid.style.overflowY = 'auto';
                hobbiesGrid.style.padding = '5px';
                hobbiesGrid.style.scrollbarWidth = 'thin';
                
                // Add hobbies here based on taxonomy
                const hobbiesTaxonomy = [
                    {key: 'arts.cinema', label: 'Cinema'},
                    {key: 'arts.theatre', label: 'Theatre'},
                    {key: 'arts.museums', label: 'Museums and exhibitions'},
                    {key: 'arts.reading', label: 'Reading'},
                    {key: 'arts.photography', label: 'Photography'},
                    {key: 'arts.painting', label: 'Painting and drawing'},
                    {key: 'arts.writing', label: 'Writing and poetry'},
                    {key: 'arts.architecture', label: 'Architecture and design'},
                    {key: 'arts.history', label: 'History and heritage'},
                    {key: 'music.live', label: 'Concerts and live music'},
                    {key: 'music.instrument', label: 'Playing an instrument'},
                    {key: 'music.singing', label: 'Singing and choir'},
                    {key: 'music.classical', label: 'Classical music'},
                    {key: 'music.jazz', label: 'Jazz and blues'},
                    {key: 'music.pop_rock', label: 'Pop and rock'},
                    {key: 'music.electronic', label: 'Electronic music'},
                    {key: 'dance.partner', label: 'Salsa, bachata and partner dance'},
                    {key: 'dance.contemporary', label: 'Contemporary and urban dance'},
                    {key: 'food.cooking', label: 'Cooking'},
                    {key: 'food.baking', label: 'Baking'},
                    {key: 'food.restaurants', label: 'Restaurants and gastronomy'},
                    {key: 'food.wine', label: 'Wine and wine tasting'},
                    {key: 'food.cocktails', label: 'Cocktails and mixology'},
                    {key: 'food.coffee_tea', label: 'Coffee and tea'},
                    {key: 'food.markets', label: 'Markets and local products'},
                    {key: 'food.world', label: 'World cuisines'},
                    {key: 'sport.fitness', label: 'Fitness and strength training'},
                    {key: 'sport.running', label: 'Running'},
                    {key: 'sport.hiking', label: 'Hiking'},
                    {key: 'sport.cycling', label: 'Cycling and mountain biking'},
                    {key: 'sport.swimming', label: 'Swimming'},
                    {key: 'sport.skiing', label: 'Skiing and snowboarding'},
                    {key: 'sport.tennis_padel', label: 'Tennis and padel'},
                    {key: 'sport.climbing', label: 'Climbing'},
                    {key: 'sport.golf', label: 'Golf'},
                    {key: 'sport.team', label: 'Team sports'},
                    {key: 'sport.martial_arts', label: 'Martial arts'},
                    {key: 'sport.water', label: 'Water sports'},
                    {key: 'sport.yoga_pilates', label: 'Yoga and Pilates'},
                    {key: 'nature.walks', label: 'Walking'},
                    {key: 'nature.camping', label: 'Camping'},
                    {key: 'nature.gardening', label: 'Gardening'},
                    {key: 'nature.animals', label: 'Animals'},
                    {key: 'nature.boating', label: 'Boating and sailing'},
                    {key: 'nature.fishing', label: 'Fishing'},
                    {key: 'nature.astronomy', label: 'Astronomy'},
                    {key: 'nature.environment', label: 'Ecology and environment'},
                    {key: 'travel.city', label: 'City breaks'},
                    {key: 'travel.road', label: 'Road trips'},
                    {key: 'travel.cultural', label: 'Cultural travel'},
                    {key: 'travel.adventure', label: 'Adventure travel'},
                    {key: 'travel.beach', label: 'Beach holidays'},
                    {key: 'travel.mountains', label: 'Mountain holidays'},
                    {key: 'travel.luxury', label: 'Luxury travel'},
                    {key: 'travel.languages', label: 'Languages and cultures'},
                    {key: 'social.friends', label: 'Going out with friends'},
                    {key: 'social.dinners', label: 'Hosting dinners'},
                    {key: 'social.board_games', label: 'Board games'},
                    {key: 'social.cards', label: 'Card games'},
                    {key: 'social.escape', label: 'Escape rooms'},
                    {key: 'social.bowling', label: 'Bowling'},
                    {key: 'social.billiards', label: 'Billiards'},
                    {key: 'social.karaoke', label: 'Karaoke'},
                    {key: 'social.festivals', label: 'Festivals'},
                    {key: 'social.nightlife', label: 'Bars and nightlife'},
                    {key: 'craft.pottery', label: 'Pottery and ceramics'},
                    {key: 'craft.jewellery', label: 'Jewellery and beadwork'},
                    {key: 'craft.sewing', label: 'Sewing, knitting and crochet'},
                    {key: 'craft.diy', label: 'DIY and home projects'},
                    {key: 'craft.woodwork', label: 'Woodworking'},
                    {key: 'craft.floral', label: 'Floral design'},
                    {key: 'craft.perfume', label: 'Perfume making'},
                    {key: 'craft.fashion', label: 'Fashion and styling'},
                    {key: 'craft.upcycling', label: 'Upcycling'},
                    {key: 'tech.video_games', label: 'Video games'},
                    {key: 'tech.board_strategy', label: 'Strategy games'},
                    {key: 'tech.coding', label: 'Coding'},
                    {key: 'tech.ai', label: 'Artificial intelligence'},
                    {key: 'tech.gadgets', label: 'Technology and gadgets'},
                    {key: 'tech.podcasts', label: 'Podcasts'},
                    {key: 'tech.film_series', label: 'Films and series'},
                    {key: 'tech.content', label: 'Content creation'},
                    {key: 'learning.workshops', label: 'Workshops and new skills'},
                    {key: 'learning.psychology', label: 'Psychology'},
                    {key: 'learning.philosophy', label: 'Philosophy'},
                    {key: 'learning.science', label: 'Science'},
                    {key: 'learning.history', label: 'History'},
                    {key: 'learning.languages', label: 'Language learning'},
                    {key: 'learning.finance', label: 'Finance and investing'},
                    {key: 'learning.business', label: 'Entrepreneurship'},
                    {key: 'wellbeing.meditation', label: 'Meditation'},
                    {key: 'wellbeing.mindfulness', label: 'Mindfulness'},
                    {key: 'wellbeing.spa', label: 'Spa and wellness'},
                    {key: 'wellbeing.nutrition', label: 'Nutrition'},
                    {key: 'wellbeing.personal_development', label: 'Personal development'},
                    {key: 'wellbeing.spirituality', label: 'Spirituality'},
                    {key: 'wellbeing.astrology', label: 'Astrology'},
                    {key: 'wellbeing.retreats', label: 'Wellness retreats'},
                    {key: 'home.family_time', label: 'Family time'},
                    {key: 'home.parenting', label: 'Parenting'},
                    {key: 'home.pets', label: 'Pets'},
                    {key: 'home.decor', label: 'Interior design'},
                    {key: 'home.quiet_evenings', label: 'Quiet evenings at home'},
                    {key: 'home.shopping', label: 'Shopping'},
                    {key: 'home.collecting', label: 'Collecting'},
                    {key: 'community.volunteering', label: 'Volunteering'},
                    {key: 'community.charity', label: 'Charity work'},
                    {key: 'community.local', label: 'Local events'},
                    {key: 'community.environment', label: 'Environmental protection'},
                    {key: 'community.animals', label: 'Animal welfare'},
                    {key: 'community.civic', label: 'Civic engagement'}
                ];
                
                function renderHobbies(filter = '') {
                    hobbiesGrid.innerHTML = '';
                    const filtered = hobbiesTaxonomy.filter(h => h.label.toLowerCase().includes(filter.toLowerCase()));
                    filtered.forEach(item => {
                        const card = document.createElement('div');
                        card.className = 'q-text-btn';
                        card.style.padding = '10px';
                        card.style.minHeight = '40px';
                        if (currentSelections.includes(item.key)) {
                            card.classList.add('selected');
                        }
                        card.innerHTML = `<span>${item.label}</span>`;
                        card.onclick = () => toggleCard(card, item.key, category);
                        hobbiesGrid.appendChild(card);
                    });
                }
                
                renderHobbies();
                searchInput.addEventListener('input', (e) => renderHobbies(e.target.value));
                
                cardsContainer.appendChild(hobbiesGrid);
            } else {
                cardsContainer.style.display = 'grid'; // Restore grid
                category.options.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'q-text-btn';
                    if (currentSelections.includes(item)) {
                        card.classList.add('selected');
                    }

                    card.innerHTML = `<span>${item}</span>`;

                    card.onclick = () => toggleCard(card, item, category);
                    cardsContainer.appendChild(card);
                });
            }

            updateCinematicIcon(currentStep);
            updateFooter(category);
        }

        const stepIcons = [
            { path: "01-compass.svg", alt: "What are you looking for?" }, // 1
            { path: "06-core-values.svg", alt: "Core Values" }, // 2
            { path: "11-attraction.svg", alt: "Attraction" }, // 3
            { path: "16-deal-breakers.svg", alt: "Deal breakers" }, // 4
            { path: "21-dreams.svg", alt: "Dreams" }, // 5
            { path: "02-mirror.svg", alt: "Flaws" }, // 6
            { path: "07-love-language.svg", alt: "Love Language" }, // 7
            { path: "S7_icon_step_08_conflict.png", alt: "Conflict" }, // 8
            { path: "03-emotions.svg", alt: "Emotions" }, // 9
            { path: "17-lifestyle.svg", alt: "Lifestyle" }, // 10
            { path: "15-hobbies.svg", alt: "Hobbies" }, // 11
            { path: "22-decisions.svg", alt: "Decisions" }, // 12
            { path: "08-family.svg", alt: "Family" }, // 13
            { path: "13-finances.svg", alt: "Finances" }, // 14
            { path: "18-vacation.svg", alt: "Vacation" }, // 15
            { path: "23-spontaneity.svg", alt: "Spontaneity" }, // 16
            { path: "04-children.svg", alt: "Children" }, // 17
            { path: "09-relationship-vision.svg", alt: "Vision" }, // 18
            { path: "S7_icon_step_19_intimacy.png", alt: "Intimacy" }, // 19
            { path: "14-love-fear.svg", alt: "Fear in love" }, // 20
            { path: "19-self-improvement.svg", alt: "Improvement" }, // 21
            { path: "24-humor.svg", alt: "Humor" }, // 22
            { path: "05-relationship-needs.svg", alt: "Needs" }, // 23
            { path: "10-personal-description.svg", alt: "Personal description" }, // 24
            { path: "20-looking-for.svg", alt: "Looking for" } // 25
        ];

        // Preload all icons to prevent flickering
        stepIcons.forEach(icon => {
            const img = new Image();
            img.src = `assets/s7-affinity-icons/${icon.path}`;
        });

        function updateCinematicIcon(step) {
            const imgEl = document.getElementById('step-icon-img');
            if (imgEl && stepIcons[step]) {
                imgEl.src = `assets/s7-affinity-icons/${stepIcons[step].path}`;
                imgEl.alt = stepIcons[step].alt;
                imgEl.setAttribute('aria-label', stepIcons[step].alt);
            }
        }

        function toggleCard(cardElement, item, category) {
            const isSelected = currentSelections.includes(item);

            if (isSelected) {
                currentSelections = currentSelections.filter(c => c !== item);
                cardElement.classList.remove('selected');
            } else {
                if (currentSelections.length < category.limit) {
                    currentSelections.push(item);
                    cardElement.classList.add('selected');
                } else if (category.limit === 1) {
                    // Auto-replace for single selection
                    currentSelections = [item];
                    Array.from(cardsContainer.children).forEach(c => c.classList.remove('selected'));
                    cardElement.classList.add('selected');
                } else {
                    cardElement.style.transform = 'translateX(-5px)';
                    setTimeout(() => cardElement.style.transform = 'translateX(5px)', 100);
                    setTimeout(() => cardElement.style.transform = 'translateX(0)', 200);
                }
            }
            updateFooter(category);
        }

        function updateFooter(category) {
            if (category.type === 'multi-question') {
                selectionCounter.innerText = '';
                // Check if all subquestions are satisfied
                let allSatisfied = true;
                for (let sub of category.subQuestions) {
                    const subSelections = selections[sub.id] || [];
                    if (sub.exact && subSelections.length !== sub.limit) allSatisfied = false;
                    if (!sub.exact && (subSelections.length === 0 || subSelections.length > sub.limit)) allSatisfied = false;
                }
                btnNext.disabled = !allSatisfied;
            } else if (category.type === 'textarea') {
                selectionCounter.innerText = '';
                btnNext.disabled = currentSelections.trim().length === 0;
            } else {
                if (category.limit === 1) {
                    selectionCounter.innerText = '';
                    btnNext.disabled = currentSelections.length === 0;
                } else {
                    const word = category.exact ? 'exactement' : 'jusqu\'à';
                    selectionCounter.innerText = `${currentSelections.length} / ${category.limit} sélectionné(s) (${word})`;
                    if ((category.exact && currentSelections.length === category.limit) || (!category.exact && currentSelections.length > 0 && currentSelections.length <= category.limit)) {
                        btnNext.disabled = false;
                        selectionCounter.style.color = 'var(--luxury-gold)';
                    } else {
                        btnNext.disabled = true;
                        selectionCounter.style.color = 'var(--primary-navy)';
                    }
                }
            }
        }

        function goBack() {
            const category = categories[currentStep];
            if (category.type !== 'multi-question') {
                selections[category.id] = category.type === 'textarea' ? currentSelections : [...currentSelections];
            }
            // Auto-save progress
            localStorage.setItem('s7_questionnaire_results', JSON.stringify(selections));
            if (currentStep > 0) {
                currentStep--;
                initStep();
                window.scrollTo(0, 0);
            }
        }

        function goNext() {
            const category = categories[currentStep];
            if (category.type !== 'multi-question') {
                selections[category.id] = category.type === 'textarea' ? currentSelections : [...currentSelections];
            }
            // Auto-save progress after every step
            localStorage.setItem('s7_questionnaire_results', JSON.stringify(selections));

            if (currentStep < categories.length - 1) {
                currentStep++;
                initStep();
                window.scrollTo(0, 0);
            } else {
                let user = JSON.parse(localStorage.getItem('currentUser') || '{}');
                user.questionnaireCompleted = true;

                // Merge text fields into user profile
                user.description = selections['q24'];
                user.hobbies = selections['q11'];
                user.lookingFor = selections['q25'];
                localStorage.setItem('currentUser', JSON.stringify(user));

                // Show AI Processing State
                document.getElementById('questionnaire-view').style.display = 'none';
                document.getElementById('state-processing').style.display = 'flex';

                const statusText = document.getElementById('processing-status-text');
                const sequence = [
                    "Analyse de vos valeurs profondes...",
                    "Génération du vecteur S7 Affinity...",
                    "Chiffrement des données relationnelles...",
                    "Finalisation du profil..."
                ];

                let seqIndex = 0;
                statusText.innerText = sequence[0];
                const seqInterval = setInterval(() => {
                    seqIndex++;
                    if (seqIndex < sequence.length) {
                        statusText.innerText = sequence[seqIndex];
                    } else {
                        clearInterval(seqInterval);
                    }
                }, 1000);

                setTimeout(() => {
                    document.getElementById('state-processing').style.display = 'none';
                    document.getElementById('state-summary').style.display = 'flex';
                }, 4500);
            }
        }
    