import os
import re

def main():
    for root, dirs, files in os.walk('.'):
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace ♂ [number] H -> ♂ [number]
                content = re.sub(r'♂\s*(\d+)\s*H', r'<span style="font-size: 1.1rem; font-weight: bold;">♂</span> \1', content)
                
                # Replace ♀ [number] F -> ♀ [number]
                content = re.sub(r'♀\s*(\d+)\s*F', r'<span style="font-size: 1.1rem; font-weight: bold;">♀</span> \1', content)
                
                # Increase overall font size for capacity label row
                content = content.replace('font-size: 0.6rem;', 'font-size: 0.8rem;')
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)

    print("HTML files updated")

if __name__ == '__main__':
    main()
