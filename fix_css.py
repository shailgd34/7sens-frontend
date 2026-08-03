with open('dashboard-shared.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# We need to find the correct block and remove the garbage
# I will just rewrite the bottom section from line 940 to EOF properly

correct_bottom = """
.compat-strengths-footer { font-size: 0.75rem; color: var(--text-muted); margin: 0; line-height: 1.5; font-style: italic; }

/* Premium List Items for Notifications and Payments */
.db-premium-item {
    padding: 20px 24px;
    border-bottom: 1px solid rgba(20, 43, 99, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    border-radius: 8px;
    margin-bottom: 8px;
    background-color: transparent;
}

.db-premium-item:hover {
    background-color: #ffffff;
    box-shadow: 0 4px 15px rgba(20, 43, 99, 0.05);
    transform: translateY(-2px);
    border-bottom-color: transparent;
}

.db-premium-item.no-justify {
    justify-content: flex-start;
    gap: 20px;
}

/* Interactive Banner Enhancements */
.interactive-banner {
    background: linear-gradient(-45deg, #091c42, #030819, #142b63, #091c42) !important;
    background-size: 400% 400% !important;
    animation: gradientBG 15s ease infinite !important;
    position: relative;
    overflow: hidden;
}

@keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.progress-circle-fill {
    transition: stroke-dashoffset 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.interactive-banner:hover .progress-circle-fill {
    stroke-dashoffset: 0 !important; /* Animates to 100% on hover just for fun interaction */
    stroke: var(--warm-ivory);
}

.glow-btn {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 14px 28px !important;
    border-radius: 50px !important; /* Pill shape */
    background: rgba(214, 164, 55, 0.1) !important;
    backdrop-filter: blur(5px);
}

.glow-btn:hover {
    background: var(--luxury-gold) !important;
    transform: translateY(-2px) scale(1.05) !important;
    box-shadow: 0 10px 25px rgba(214, 164, 55, 0.4) !important;
}
"""

# Find line 940 (0-indexed 939) which should be around where .compat-strengths-footer is.
# Let's find the first instance of .compat-strengths-footer and truncate from there.
index = -1
for i, line in enumerate(lines):
    if ".compat-strengths-footer {" in line:
        index = i
        break

if index != -1:
    new_content = "".join(lines[:index]) + correct_bottom
    with open('dashboard-shared.css', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Fixed CSS file.")
else:
    print("Could not find .compat-strengths-footer")
