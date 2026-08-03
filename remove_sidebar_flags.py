import os
import re

dashboard_files = [
    'profile.html',
    'settings.html',
    'mesNotifications.html',
    'mesPaiements.html',
    'mesRéservations.html',
    'mesCompatibilités.html'
]

# We want to replace everything between </nav> and </aside> with just a newline
pattern = re.compile(r'</nav>.*?(?=</aside>)', re.DOTALL)

for filepath in dashboard_files:
    if not os.path.exists(filepath):
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = pattern.sub('</nav>\n', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"Removed language flags from sidebar in {filepath}")
