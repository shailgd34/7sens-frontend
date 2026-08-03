import os
import re

files_to_update = [
    'profile.html',
    'settings.html',
    'mesRéservations.html',
    'mesCompatibilités.html',
    'mesNotifications.html',
    'mesPaiements.html'
]

new_nav = """                    <nav class="db-nav-list">
                        <button class="db-nav-item" onclick="location.href='profile.html?tab=home'" id="btn-tab-home">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <rect x="3" y="3" width="7" height="9" />
                                <rect x="14" y="3" width="7" height="5" />
                                <rect x="14" y="12" width="7" height="9" />
                                <rect x="3" y="16" width="7" height="5" />
                            </svg>
                            <span>TABLEAU DE BORD</span>
                        </button>
                        <button class="db-nav-item" onclick="location.href='profile.html?tab=profile'" id="btn-tab-profile">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span>MON PROFIL</span>
                        </button>
                        <button class="db-nav-item" onclick="location.href='questionnaire.html'" id="btn-tab-questionnaire">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            <span>MON PROFIL RELATIONNEL</span>
                        </button>
                        <button class="db-nav-item" onclick="location.href='mesCompatibilités.html'" id="btn-tab-matches">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                            <span>MES COMPATIBILITÉS</span>
                        </button>
                        <button class="db-nav-item" onclick="location.href='mesRéservations.html'" id="btn-tab-bookings">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            <span>MES RÉSERVATIONS</span>
                        </button>
                        <button class="db-nav-item" onclick="location.href='mesNotifications.html'" id="btn-tab-notifications">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                            <span>MES NOTIFICATIONS</span>
                        </button>
                        <button class="db-nav-item" onclick="location.href='mesPaiements.html'" id="btn-tab-billing">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                <line x1="1" y1="10" x2="23" y2="10" />
                            </svg>
                            <span>MES PAIEMENTS</span>
                        </button>
                        <button class="db-nav-item" onclick="location.href='settings.html'" id="btn-tab-settings">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                            <span>PARAMÈTRES</span>
                        </button>
                        
                        <!-- Back Link -->
                        <button class="db-nav-item" onclick="location.href='events.html'" style="margin-top: 15px; border-top: 1px solid rgba(20,43,99,0.05); padding-top: 20px; color: var(--text-muted);">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                            <span>RETOUR AU SITE</span>
                        </button>
                    </nav>"""

for f in files_to_update:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # We need to replace the entire <nav class="db-nav-list">...</nav> block
        # Using a regex
        pattern = re.compile(r'                    <nav class="db-nav-list">.*?</nav>', re.DOTALL)
        
        # Some files might have slightly different indentation, but we'll try this first
        new_content, num_subs = pattern.subn(new_nav, content)
        
        if num_subs > 0:
            # We also need to add 'active' class to the correct button depending on the file
            if f == 'profile.html':
                # active state is handled via JS usually, but if we need a default:
                pass
            elif f == 'mesCompatibilités.html':
                new_content = new_content.replace('id="btn-tab-matches"', 'id="btn-tab-matches" class="db-nav-item active"')
            elif f == 'mesRéservations.html':
                new_content = new_content.replace('id="btn-tab-bookings"', 'id="btn-tab-bookings" class="db-nav-item active"')
            elif f == 'mesNotifications.html':
                new_content = new_content.replace('id="btn-tab-notifications"', 'id="btn-tab-notifications" class="db-nav-item active"')
            elif f == 'mesPaiements.html':
                new_content = new_content.replace('id="btn-tab-billing"', 'id="btn-tab-billing" class="db-nav-item active"')
            elif f == 'settings.html':
                new_content = new_content.replace('id="btn-tab-settings"', 'id="btn-tab-settings" class="db-nav-item active"')
            
            # Clean up double classes just in case
            new_content = new_content.replace('class="db-nav-item" class="db-nav-item active"', 'class="db-nav-item active"')
            
            with open(f, 'w', encoding='utf-8') as file:
                file.write(new_content)
            print(f"Updated {f}")
        else:
            print(f"Could not find nav block in {f}")
