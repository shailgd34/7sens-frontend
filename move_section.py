import re

with open('d:/7sens/7sens/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the Cities section
cities_match = re.search(r'(\s*<!-- Cities Section -->.*?</section>)', content, re.DOTALL)
if not cities_match:
    print('Cities section not found')
    exit(1)

cities_block = cities_match.group(1)

# Remove cities section
new_content = content.replace(cities_block, '')

# Find the Featured Events section end
events_match = re.search(r'(<!-- Featured Events Section -->.*?</section>)', new_content, re.DOTALL)
if not events_match:
    print('Events section not found')
    exit(1)

events_block = events_match.group(1)

# Insert cities block after events block
final_content = new_content.replace(events_block, events_block + '\n' + cities_block)

with open('d:/7sens/7sens/index.html', 'w', encoding='utf-8') as f:
    f.write(final_content)

print('Moved successfully.')
