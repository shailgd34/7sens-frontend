import os

dashboard_files = [
    'profile.html',
    'settings.html',
    'mesNotifications.html',
    'mesPaiements.html',
    'mesRéservations.html',
    'mesCompatibilités.html'
]

flag_html = """
                    <!-- Language Selector bottom of sidebar -->
                    <div style="margin-top: auto; padding-top: 25px; width: 100%;">
                        <div class="lang-dropdown" style="width: 100%;">
                            <button class="lang-btn" aria-haspopup="true" aria-expanded="false"
                                style="color: var(--primary-navy); border-color: rgba(20,43,99,0.15); width: 100%; display: flex; justify-content: center; gap: 8px;">
                                <img src="https://flagcdn.com/w20/fr.png" width="16" alt="FR"
                                    style="border-radius: 2px;"> FR
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                            <ul class="lang-menu" style="bottom: 100%; top: auto; margin-bottom: 10px; width: 100%;">
                                <li><a href="#" class="active"><img src="https://flagcdn.com/w20/fr.png" width="16"
                                            alt="FR" style="border-radius: 2px;"> FR</a></li>
                                <li><a href="#"><img src="https://flagcdn.com/w20/gb.png" width="16" alt="EN"
                                            style="border-radius: 2px;"> EN</a></li>
                            </ul>
                        </div>
                    </div>
"""

for filepath in dashboard_files:
    if not os.path.exists(filepath):
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if we need to remove the broken/old flag at the bottom of the sidebar
    # The old one might not have the <ul class="lang-menu">
    # Let's just find the end of the </nav> and replace everything until </aside>
    import re
    
    # We want to replace from </nav> to </aside> (exclusive of </aside>)
    # with </nav> + flag_html
    
    # regex to find </nav> followed by any space/old flag html until </aside>
    pattern = re.compile(r'</nav>.*?(?=</aside>)', re.DOTALL)
    
    new_content = pattern.sub(f'</nav>\n{flag_html}', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"Updated {filepath}")
