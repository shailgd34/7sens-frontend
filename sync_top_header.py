import os
import re

# We will read profile.html to extract the correct header
with open('profile.html', 'r', encoding='utf-8') as f:
    profile_content = f.read()

# Extract header using regex
header_pattern = re.compile(r'(<header class="db-top-header".*?</header>)', re.DOTALL)
match = header_pattern.search(profile_content)

if match:
    correct_header = match.group(1)
    
    dashboard_files = [
        'settings.html',
        'mesNotifications.html',
        'mesPaiements.html',
        'mesRéservations.html',
        'mesCompatibilités.html'
    ]
    
    for filepath in dashboard_files:
        if not os.path.exists(filepath):
            continue
            
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = header_pattern.sub(correct_header.replace('\\', '\\\\'), content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        print(f"Updated {filepath}")
else:
    print("Could not find db-top-header in profile.html")
