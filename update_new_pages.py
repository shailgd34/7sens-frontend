import os
import re

# Update mesNotifications.html
with open('mesNotifications.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace title
content = re.sub(r'<title>.*?</title>', '<title>Mes Notifications — 7Sens Premium Social Club</title>', content)

# Replace the main content section
new_notifications_content = """                    <div id="section-notifications" style="padding: 40px 50px; box-sizing: border-box;">
                        <div class="db-section-header" style="margin-bottom: 30px; border-bottom: 1px solid rgba(20, 43, 99, 0.05); padding-bottom: 20px;">
                            <h3 class="db-section-title" style="font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; color: var(--primary-navy); font-weight: 300; margin: 0 0 8px 0;">Mes notifications</h3>
                            <p class="db-section-subtitle" style="font-size: 0.95rem; color: var(--text-muted); margin: 0; font-family: 'Instrument Sans', sans-serif;">Tenez-vous informé(e) des dernières mises à jour et de l'activité de votre profil.</p>
                        </div>
                        
                        <div class="db-widget" style="padding: 0;">
                            <!-- Notification Item 1 -->
                            <div style="padding: 20px 24px; border-bottom: 1px solid rgba(20,43,99,0.05); display: flex; gap: 20px; align-items: flex-start;">
                                <div style="width: 48px; height: 48px; border-radius: 50%; background: #fcf4e3; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--luxury-gold);">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                </div>
                                <div style="flex: 1;">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                                        <h4 style="margin: 0; font-family: 'Instrument Sans', sans-serif; font-size: 1rem; color: var(--primary-navy);">Place disponible pour Sunset & Conversations</h4>
                                        <span style="font-size: 0.75rem; color: var(--text-muted);">Aujourd'hui, 10:45</span>
                                    </div>
                                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">Une place s'est libérée pour l'expérience Sunset & Conversations. Veuillez finaliser votre règlement pour confirmer votre présence.</p>
                                </div>
                            </div>
                            
                            <!-- Notification Item 2 -->
                            <div style="padding: 20px 24px; border-bottom: 1px solid rgba(20,43,99,0.05); display: flex; gap: 20px; align-items: flex-start;">
                                <div style="width: 48px; height: 48px; border-radius: 50%; background: #e1effe; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #1a56db;">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                </div>
                                <div style="flex: 1;">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                                        <h4 style="margin: 0; font-family: 'Instrument Sans', sans-serif; font-size: 1rem; color: var(--primary-navy);">Profil validé avec succès</h4>
                                        <span style="font-size: 0.75rem; color: var(--text-muted);">Hier, 14:30</span>
                                    </div>
                                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">Votre profil relationnel a été vérifié et approuvé par notre équipe. Vous pouvez maintenant accéder aux expériences exclusives.</p>
                                </div>
                            </div>

                            <!-- Notification Item 3 -->
                            <div style="padding: 20px 24px; display: flex; gap: 20px; align-items: flex-start;">
                                <div style="width: 48px; height: 48px; border-radius: 50%; background: #f8f9fa; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--primary-navy);">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                </div>
                                <div style="flex: 1;">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                                        <h4 style="margin: 0; font-family: 'Instrument Sans', sans-serif; font-size: 1rem; color: var(--primary-navy);">Nouvel événement publié</h4>
                                        <span style="font-size: 0.75rem; color: var(--text-muted);">12 avr. 2026</span>
                                    </div>
                                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">Découvrez notre prochain atelier créatif à Lausanne. Les inscriptions sont désormais ouvertes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
"""
content = re.sub(r'<div id="section-reservations".*?</main>', new_notifications_content, content, flags=re.DOTALL)
# Remove the large script block related to reservations
content = re.sub(r'<script>\s*document\.addEventListener\(\'DOMContentLoaded\'.*?</script>', '', content, flags=re.DOTALL)

with open('mesNotifications.html', 'w', encoding='utf-8') as f:
    f.write(content)


# Update mesPaiements.html
with open('mesPaiements.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace title
content = re.sub(r'<title>.*?</title>', '<title>Mes Paiements — 7Sens Premium Social Club</title>', content)

new_payments_content = """                    <div id="section-payments" style="padding: 40px 50px; box-sizing: border-box;">
                        <div class="db-section-header" style="margin-bottom: 30px; border-bottom: 1px solid rgba(20, 43, 99, 0.05); padding-bottom: 20px;">
                            <h3 class="db-section-title" style="font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; color: var(--primary-navy); font-weight: 300; margin: 0 0 8px 0;">Mes paiements</h3>
                            <p class="db-section-subtitle" style="font-size: 0.95rem; color: var(--text-muted); margin: 0; font-family: 'Instrument Sans', sans-serif;">Gérez vos factures et consultez l'historique de vos transactions.</p>
                        </div>
                        
                        <div class="db-widget" style="padding: 0;">
                            <!-- Payment Item 1 -->
                            <div style="padding: 20px 24px; border-bottom: 1px solid rgba(20,43,99,0.05); display: flex; justify-content: space-between; align-items: center;">
                                <div style="display: flex; gap: 20px; align-items: center;">
                                    <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(20,43,99,0.05); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--primary-navy);">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                    </div>
                                    <div>
                                        <h4 style="margin: 0 0 4px 0; font-family: 'Instrument Sans', sans-serif; font-size: 1rem; color: var(--primary-navy);">Soirée Dégustation & Échanges</h4>
                                        <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">Payé avec Visa terminée par 4242 &middot; 12 avril 2026</p>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 600; color: var(--primary-navy);">CHF 120.-</div>
                                    <span style="font-size: 0.75rem; font-weight: 700; color: #2b8a3e; background: rgba(43,138,62,0.1); padding: 2px 8px; border-radius: 4px;">PAYÉ</span>
                                </div>
                            </div>

                            <!-- Payment Item 2 -->
                            <div style="padding: 20px 24px; border-bottom: 1px solid rgba(20,43,99,0.05); display: flex; justify-content: space-between; align-items: center;">
                                <div style="display: flex; gap: 20px; align-items: center;">
                                    <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(214,164,55,0.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--luxury-gold);">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                    </div>
                                    <div>
                                        <h4 style="margin: 0 0 4px 0; font-family: 'Instrument Sans', sans-serif; font-size: 1rem; color: var(--primary-navy);">Adhésion Annuelle 7Sens</h4>
                                        <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">Payé avec Mastercard terminée par 8812 &middot; 1 mars 2026</p>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 600; color: var(--primary-navy);">CHF 450.-</div>
                                    <span style="font-size: 0.75rem; font-weight: 700; color: #2b8a3e; background: rgba(43,138,62,0.1); padding: 2px 8px; border-radius: 4px;">PAYÉ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
"""
content = re.sub(r'<div id="section-reservations".*?</main>', new_payments_content, content, flags=re.DOTALL)
content = re.sub(r'<script>\s*document\.addEventListener\(\'DOMContentLoaded\'.*?</script>', '', content, flags=re.DOTALL)

with open('mesPaiements.html', 'w', encoding='utf-8') as f:
    f.write(content)
