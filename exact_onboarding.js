const fs = require('fs');
let html = fs.readFileSync('profile.html', 'utf8');

const exactOnboarding = `
                                <!-- 3-Step Onboarding -->
                                <div style="margin-top: 30px; margin-bottom: 30px;">
                                    <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: var(--primary-navy); margin: 0 0 20px 0; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">PRÊT À COMMENCER ?</h3>
                                    
                                    <div style="display: flex; align-items: stretch; gap: 15px;">
                                        <!-- Step 1 -->
                                        <div style="flex: 1; display: flex; flex-direction: column; padding: 25px; background: #fff; border: 1px solid rgba(20,43,99,0.08); border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
                                            <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px;">
                                                <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--primary-navy); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1rem; font-weight: 600; flex-shrink: 0; font-family: 'Outfit', sans-serif;">1</div>
                                                <div>
                                                    <h4 style="font-family: 'Outfit', sans-serif; font-size: 1rem; color: var(--primary-navy); margin: 4px 0 8px 0; font-weight: 600;">Complétez votre profil</h4>
                                                    <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.5;">Ajoutez les informations nécessaires pour participer aux expériences 7Sens.</p>
                                                </div>
                                            </div>
                                            
                                            <div style="margin-top: auto;">
                                                <div style="margin-bottom: 20px; padding-left: 44px;">
                                                    <span style="display: inline-block; font-size: 0.7rem; font-weight: 700; color: #2b8a3e; background: rgba(43,138,62,0.15); padding: 4px 10px; border-radius: 4px; text-transform: uppercase; font-family: 'Outfit', sans-serif; letter-spacing: 0.5px;">Terminé</span>
                                                </div>
                                                <button class="db-widget-btn" style="margin-top: 0; padding: 12px; font-size: 0.8rem; width: 100%; border-radius: 4px; background: var(--primary-navy); color: #fff; border: none; font-weight: 600;">COMPLÉTER MON PROFIL</button>
                                            </div>
                                        </div>

                                        <div style="display: flex; align-items: center; color: rgba(20,43,99,0.6);">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;"><path d="M9 18l6-6-6-6"></path></svg>
                                        </div>

                                        <!-- Step 2 -->
                                        <div style="flex: 1; display: flex; flex-direction: column; padding: 25px; background: #fff; border: 1px solid rgba(20,43,99,0.08); border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
                                            <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px;">
                                                <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--primary-navy); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1rem; font-weight: 600; flex-shrink: 0; font-family: 'Outfit', sans-serif;">2</div>
                                                <div>
                                                    <h4 style="font-family: 'Outfit', sans-serif; font-size: 1rem; color: var(--primary-navy); margin: 4px 0 8px 0; font-weight: 600;">Définissez votre profil relationnel</h4>
                                                    <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.5;">Répondez au questionnaire S7 Affinity pour identifier vos affinités et vos complémentarités.</p>
                                                </div>
                                            </div>
                                            
                                            <div style="margin-top: auto;">
                                                <div style="margin-bottom: 20px; padding-left: 44px;">
                                                    <span style="display: inline-block; font-size: 0.7rem; font-weight: 700; color: #d6a427; background: rgba(214,164,39,0.15); padding: 4px 10px; border-radius: 4px; text-transform: uppercase; font-family: 'Outfit', sans-serif; letter-spacing: 0.5px;">En cours</span>
                                                </div>
                                                <button class="db-widget-btn" style="margin-top: 0; padding: 12px; font-size: 0.8rem; width: 100%; border-radius: 4px; background: var(--primary-navy); color: #fff; border: none; font-weight: 600;">COMMENCER LE QUESTIONNAIRE</button>
                                            </div>
                                        </div>

                                        <div style="display: flex; align-items: center; color: rgba(20,43,99,0.6);">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;"><path d="M9 18l6-6-6-6"></path></svg>
                                        </div>

                                        <!-- Step 3 -->
                                        <div style="flex: 1; display: flex; flex-direction: column; padding: 25px; background: #fff; border: 1px solid rgba(20,43,99,0.08); border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
                                            <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px;">
                                                <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--primary-navy); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1rem; font-weight: 600; flex-shrink: 0; font-family: 'Outfit', sans-serif;">3</div>
                                                <div>
                                                    <h4 style="font-family: 'Outfit', sans-serif; font-size: 1rem; color: var(--primary-navy); margin: 4px 0 8px 0; font-weight: 600;">Choisissez votre prochaine expérience</h4>
                                                    <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.5;">Découvrez les événements disponibles dans votre ville et votre tranche d’âge.</p>
                                                </div>
                                            </div>
                                            
                                            <div style="margin-top: auto;">
                                                <div style="margin-bottom: 20px; padding-left: 44px;">
                                                    <span style="display: inline-block; font-size: 0.7rem; font-weight: 700; color: #555; background: rgba(0,0,0,0.06); padding: 4px 10px; border-radius: 4px; text-transform: uppercase; font-family: 'Outfit', sans-serif; letter-spacing: 0.5px;">À venir</span>
                                                </div>
                                                <button class="db-widget-btn" style="margin-top: 0; padding: 12px; font-size: 0.8rem; width: 100%; border-radius: 4px; background: var(--primary-navy); color: #fff; border: none; font-weight: 600;">DÉCOUVRIR LES ÉVÉNEMENTS</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
`;

// Replace the onboarding block
const regex = /<!-- 3-Step Onboarding -->[\s\S]*?DÉCOUVRIR LES\s*ÉVÉNEMENTS<\/button>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;

if (regex.test(html)) {
    html = html.replace(regex, exactOnboarding.trim());
    fs.writeFileSync('profile.html', html, 'utf8');
    console.log("Success");
} else {
    // Try a slightly shorter regex in case of mismatches
    const regex2 = /<!-- 3-Step Onboarding -->[\s\S]*?DÉCOUVRIR LES\s*ÉVÉNEMENTS<\/button>\s*<\/div>\s*<\/div>/;
    if (regex2.test(html)) {
        // Need to be careful here to not strip too much or too little.
        // It's safer to match exactly our previous output block.
        console.log("Using fallback replacement...");
        const previousBlockMatch = html.match(/<!-- 3-Step Onboarding -->[\s\S]*?DÉCOUVRIR LES ÉVÉNEMENTS<\/button>\s*<\/div>\s*<\/div>\s*<\/div>/);
        if (previousBlockMatch) {
            html = html.replace(previousBlockMatch[0], exactOnboarding.trim());
            fs.writeFileSync('profile.html', html, 'utf8');
            console.log("Success fallback");
        }
    } else {
        console.log("Regex didn't match!");
    }
}
