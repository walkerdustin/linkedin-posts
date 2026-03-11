from reportlab.lib.pagesizes import A4, portrait
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.lib.units import cm
import os

def create_brand_pdf(output_filename):
    c = canvas.Canvas(output_filename, pagesize=portrait(A4))
    width, height = A4
    
    # --- COLORS ---
    COLOR_BG_PRIMARY = colors.HexColor("#116578")
    COLOR_ACCENT = colors.HexColor("#E65F45")
    COLOR_TEXT = colors.HexColor("#F0F7F8")
    COLOR_BG_SECONDARY = colors.HexColor("#307785")
    
    # --- PAGE 1: BRAND OVERVIEW ---
    
    # Title
    c.setFont("Helvetica-Bold", 24)
    c.setFillColor(colors.black)
    c.drawString(2*cm, height - 3*cm, "Dustin's LinkedIn Brand Palette")
    c.setFont("Helvetica", 12)
    c.drawString(2*cm, height - 4*cm, "The 'Grounded Engineer' Theme")
    
    y_pos = height - 7*cm
    
    def draw_swatch(y, color, name, hex_code, usage):
        # Swatch rectangle
        c.setFillColor(color)
        c.rect(2*cm, y, 4*cm, 2.5*cm, fill=1, stroke=0)
        
        # Text details
        c.setFillColor(colors.black)
        c.setFont("Helvetica-Bold", 14)
        c.drawString(7*cm, y + 1.8*cm, name)
        c.setFont("Helvetica", 12)
        c.drawString(7*cm, y + 1.2*cm, f"Hex: {hex_code}")
        c.setFont("Helvetica-Oblique", 10)
        c.setFillColor(colors.darkgrey)
        c.drawString(7*cm, y + 0.6*cm, usage)

    draw_swatch(y_pos, COLOR_BG_PRIMARY, "Primary / Background", "#116578", "Main color for slides & profile picture background")
    y_pos -= 3.5*cm
    
    draw_swatch(y_pos, COLOR_BG_SECONDARY, "Secondary / Box BG", "#307785", "Background for code blocks, quotes, or secondary elements")
    y_pos -= 3.5*cm
    
    draw_swatch(y_pos, COLOR_ACCENT, "Accent / Highlights", "#E65F45", "Buttons, arrows, key numbers, emphasis (matches hair/beard)")
    y_pos -= 3.5*cm
    
    draw_swatch(y_pos, COLOR_TEXT, "Text / Content", "#F0F7F8", "Headlines and body text on dark backgrounds (Off-White)")
    
    c.showPage()
    
    # --- PAGE 2: CAROUSEL MOCKUP ---
    
    # Background
    c.setFillColor(COLOR_BG_PRIMARY)
    c.rect(0, 0, width, height, fill=1, stroke=0)
    
    # Mockup Content
    # "Header" area
    c.setFillColor(COLOR_ACCENT)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(2*cm, height - 2*cm, "GEN AI ENGINEERING")
    
    # Main Headline
    c.setFillColor(COLOR_TEXT)
    c.setFont("Helvetica-Bold", 32)
    # Breaking headline into lines manually for simplicity
    c.drawString(2*cm, height - 4*cm, "Wie man AI-Projekte")
    c.drawString(2*cm, height - 5.2*cm, "wirklich skaliert.")
    
    # Subtitle / Hook
    c.setFont("Helvetica", 16)
    c.setFillColor(COLOR_TEXT)
    c.drawString(2*cm, height - 7*cm, "Kein Hype. Nur echte Engineering-Praxis.")
    
    # Accent Element (Line)
    c.setStrokeColor(COLOR_ACCENT)
    c.setLineWidth(4)
    c.line(2*cm, height - 8*cm, 5*cm, height - 8*cm)
    
    # Secondary Box (Content Area)
    box_y = height - 16*cm
    c.setFillColor(COLOR_BG_SECONDARY)
    # Rounded rect simulation (just rect for now)
    c.roundRect(2*cm, box_y, width - 4*cm, 6*cm, 10, fill=1, stroke=0)
    
    # Text inside box
    c.setFillColor(COLOR_TEXT)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(3*cm, box_y + 5*cm, "Die Realität:")
    c.setFont("Helvetica", 12)
    c.drawString(3*cm, box_y + 4*cm, "80% der PoCs schaffen es nie in Produktion.")
    c.drawString(3*cm, box_y + 3*cm, "Warum? Weil die Infrastruktur fehlt.")
    
    # Accent Button
    c.setFillColor(COLOR_ACCENT)
    c.roundRect(width - 7*cm, 3*cm, 5*cm, 1.5*cm, 8, fill=1, stroke=0)
    c.setFillColor(COLOR_TEXT)
    c.setFont("Helvetica-Bold", 12)
    c.drawCentredString(width - 4.5*cm, 3.5*cm, "SWIPE ->")

    # Portrait Image
    # Try to load the cleaned image
    image_path = r"C:\git_repos\_personal\linkedin-posts\assets\portrait_116578_clean.png"
    if os.path.exists(image_path):
        # Draw image at bottom left
        # Aspect ratio preservation logic simplified: assume roughly square-ish or portrait
        img_width = 8*cm
        img_height = 8*cm # approximate
        c.drawImage(image_path, 0, 0, width=img_width, height=img_height, mask='auto', preserveAspectRatio=True, anchor='sw')
        
    # --- PAGE 3: VARIATION TESTS ---
    c.showPage()
    
    # Background for whole page to test contrast
    c.setFillColor(COLOR_BG_PRIMARY)
    c.rect(0, 0, width, height, fill=1, stroke=0)
    
    c.setFillColor(COLOR_TEXT)
    c.setFont("Helvetica-Bold", 20)
    c.drawString(2*cm, height - 3*cm, "Box & Accent Variations")
    c.setFont("Helvetica", 12)
    c.drawString(2*cm, height - 4*cm, "Testing contrast on #116578 Background")

    # --- SECTION A: BOX COLORS (HSL VARIATIONS) ---
    y_start = height - 6*cm
    c.setFont("Helvetica-Bold", 14)
    c.drawString(2*cm, y_start, "Option A: Box Color Tests (based on #116578)")
    
    # Base: #116578 -> H=189, S=0.75, L=0.27
    
    # 1. L-5% -> L=0.22 (Darker) -> approx #0D4D5C
    # 2. L+5% -> L=0.32 (Lighter) -> approx #157D94
    # 3. S+15% -> S=0.90 (Saturated) -> approx #07738A (More vivid)
    # 4. S-15% -> S=0.60 (Desaturated) -> approx #1C6E7F (Greyer)

    box_options = [
        {"name": "1. Darker (L-5%)", "hex": "#0D4D5C", "desc": "Subtle depth, recedes slightly."},
        {"name": "2. Lighter (L+5%)", "hex": "#157D94", "desc": "Classic card, stands out."},
        {"name": "3. Saturated (S+15%)", "hex": "#07738A", "desc": "Vivid, electric teal look."},
        {"name": "4. Desaturated (S-15%)", "hex": "#1C6E7F", "desc": "Calmer, more sophisticated/grey."}
    ]
    
    y = y_start - 1.5*cm
    for opt in box_options:
        # Draw the box
        box_color = colors.HexColor(opt["hex"])
        c.setFillColor(box_color)
        c.roundRect(2*cm, y - 1.8*cm, 6*cm, 1.8*cm, 6, fill=1, stroke=0)
        
        # Text inside box
        c.setFillColor(COLOR_TEXT)
        c.setFont("Helvetica-Bold", 10)
        c.drawString(2.5*cm, y - 0.8*cm, opt["name"])
        c.setFont("Helvetica", 9)
        c.drawString(2.5*cm, y - 1.3*cm, "Sample Text content.")
        
        # Meta info
        c.setFillColor(COLOR_TEXT)
        c.setFont("Helvetica-Bold", 11)
        c.drawString(9*cm, y - 0.6*cm, f"{opt['name']}")
        c.setFont("Helvetica", 10)
        c.drawString(9*cm, y - 1.0*cm, f"Hex: {opt['hex']}")
        c.setFont("Helvetica-Oblique", 9)
        c.drawString(9*cm, y - 1.4*cm, opt["desc"])
        
        y -= 2.5*cm

    # --- SECTION B: ACCENT COLORS (Compact) ---
    y_start = y - 1*cm
    c.setFillColor(COLOR_TEXT)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(2*cm, y_start, "Option B: Accent (Rust Tones)")
    
    accent_options = [
        {"name": "1. Burnt Orange (Orig)", "hex": "#E65F45", "desc": "Matches hair."},
        {"name": "3. Deep Rust", "hex": "#C05640", "desc": "Darker, earthier."}
    ]
    
    y = y_start - 2*cm
    for opt in accent_options:
        acc_color = colors.HexColor(opt["hex"])
        c.setFillColor(acc_color)
        c.roundRect(2*cm, y, 4*cm, 1.0*cm, 6, fill=1, stroke=0)
        
        c.setFillColor(colors.white)
        c.setFont("Helvetica-Bold", 10)
        c.drawCentredString(4*cm, y + 0.35*cm, "ACTION")
        
        # Meta info
        c.setFillColor(COLOR_TEXT)
        c.setFont("Helvetica-Bold", 11)
        c.drawString(7*cm, y + 0.6*cm, f"{opt['name']} ({opt['hex']})")
        
        y -= 1.5*cm

    c.save()
    print(f"PDF generated: {output_filename}")

if __name__ == "__main__":
    create_brand_pdf(r"C:\git_repos\_personal\linkedin-posts\assets\Dustin_Brand_Guide.pdf")
