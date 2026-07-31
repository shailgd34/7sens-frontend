const fs = require('fs');
let html = fs.readFileSync('profile.html', 'utf8');

const newOnboarding = `
                                <!-- 3-Step Onboarding -->
                                <div style="margin-top: 15px; margin-bottom: 15px; background: rgba(255, 255, 255, 0.7); border: 1px solid rgba(214, 164, 55, 0.2); padding: 15px 20px; border-radius: 8px; backdrop-filter: blur(10px);">
                                    <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; color: var(--primary-navy); margin: 0 0 15px 0;">PRÊT À COMMENCER ?</h3>
                                    
                                    <div style="display: flex; flex-direction: column; gap: 10px;">
                                        <!-- Step 1 -->
                                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 15px; background: #fff; border: 1px solid rgba(20,43,99,0.05); border-radius: 6px;">
                                            <div style="max-width: 60%;">
                                                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                                                    <span style="font-size: 0.65rem; font-weight: 700; color: #2b8a3e; background: rgba(43,138,62,0.1); padding: 3px 6px; border-radius: 4px; text-transform: uppercase;">Terminé</span>
                                                    <h4 style="font-family: 'Outfit', sans-serif; font-size: 0.95rem; color: var(--primary-navy); margin: 0;">Complétez votre profil</h4>
                                                </div>
                                                <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0; line-height: 1.3;">Ajoutez les informations nécessaires pour participer aux expériences 7Sens.</p>
                                            </div>
                                            <button class="db-widget-btn secondary" style="margin-top: 0; padding: 6px 12px; font-size: 0.7rem; pointer-events: none; opacity: 0.5;">COMPLÉTER MON PROFIL</button>
                                        </div>

                                        <!-- Step 2 -->
                                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 15px; background: #fff; border: 1px solid var(--luxury-gold); border-radius: 6px; box-shadow: 0 2px 10px rgba(214,164,55,0.08);">
                                            <div style="max-width: 60%;">
                                                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                                                    <span style="font-size: 0.65rem; font-weight: 700; color: var(--luxury-gold); background: rgba(214,164,55,0.1); padding: 3px 6px; border-radius: 4px; text-transform: uppercase;">En cours</span>
                                                    <h4 style="font-family: 'Outfit', sans-serif; font-size: 0.95rem; color: var(--primary-navy); margin: 0;">Définissez votre profil relationnel</h4>
                                                </div>
                                                <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0; line-height: 1.3;">Répondez au questionnaire S7 Affinity pour identifier vos affinités et vos complémentarités.</p>
                                            </div>
                                            <button class="db-widget-btn" style="margin-top: 0; padding: 6px 12px; font-size: 0.7rem;">COMMENCER LE QUESTIONNAIRE</button>
                                        </div>

                                        <!-- Step 3 -->
                                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 15px; background: #fff; border: 1px solid rgba(20,43,99,0.05); border-radius: 6px; opacity: 0.8;">
                                            <div style="max-width: 60%;">
                                                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                                                    <span style="font-size: 0.65rem; font-weight: 700; color: var(--text-muted); background: rgba(0,0,0,0.05); padding: 3px 6px; border-radius: 4px; text-transform: uppercase;">À compléter</span>
                                                    <h4 style="font-family: 'Outfit', sans-serif; font-size: 0.95rem; color: var(--primary-navy); margin: 0;">Choisissez votre prochaine expérience</h4>
                                                </div>
                                                <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0; line-height: 1.3;">Découvrez les événements disponibles dans votre ville et votre tranche d’âge.</p>
                                            </div>
                                            <button class="db-widget-btn secondary" style="margin-top: 0; padding: 6px 12px; font-size: 0.7rem;">DÉCOUVRIR LES ÉVÉNEMENTS</button>
                                        </div>
                                    </div>
                                </div>
`;

// Regex to capture the entire onboarding section
// Starts with <!-- 3-Step Onboarding --> and ends at the first closing </div> that matches the outer div's scope
// Wait, the outer div contains another div, which contains 3 divs.
// The easiest way is to use a regex that matches from <!-- 3-Step Onboarding --> up to and including the specific closing div
const regex = /<!-- 3-Step Onboarding -->[\s\S]*?DÉCOUVRIR LES\s*ÉVÉNEMENTS<\/button>\s*<\/div>\s*<\/div>\s*<\/div>/;

if (regex.test(html)) {
    html = html.replace(regex, newOnboarding.trim());
    fs.writeFileSync('profile.html', html, 'utf8');
    console.log("Success");
} else {
    console.log("Regex didn't match!");
}
