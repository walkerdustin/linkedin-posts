import os
from rembg import remove, new_session
from PIL import Image, ImageFilter
import numpy as np

def clean_edges(img, erosion_size=2):
    """
    Schrumpft den Alpha-Kanal (Maske) um 'erosion_size' Pixel, 
    um dunkle Ränder (Halos) zu entfernen.
    """
    # Split channels
    r, g, b, a = img.split()
    
    # Filter the alpha channel: MinFilter erodes (shrinks) the white area
    # Eine Größe von 3 bedeutet 1 Pixel Radius (3x3 Matrix)
    # Eine Größe von 5 bedeutet 2 Pixel Radius
    kernel_size = (erosion_size * 2) + 1
    new_a = a.filter(ImageFilter.MinFilter(kernel_size))
    
    # Optional: Weichzeichnen der Kante, damit es nicht "scherenschnittartig" aussieht
    new_a = new_a.filter(ImageFilter.GaussianBlur(radius=0.5))
    
    return Image.merge("RGBA", (r, g, b, new_a))

def process_image(input_path, hex_colors, output_dir):
    print(f"Lade Bild: {input_path}")
    original_img = Image.open(input_path).convert("RGBA")
    
    # Use a specific model that is often better for human details (u2net_human_seg)
    # or just standard u2net. Standard is usually fine, but let's try standard first.
    session = new_session("u2net") 

    print("Entferne Hintergrund mit AI...")
    try:
        # alpha_matting=True kann bei Haaren helfen, ist aber rechenintensiv
        # Wir verlassen uns hier lieber auf die manuelle Erosion danach.
        no_bg_img = remove(original_img, session=session)
    except Exception as e:
        print(f"Fehler bei rembg: {e}")
        return

    # --- FIX: HALO REMOVAL ---
    print("Entferne Ränder/Halos (Erosion)...")
    # Wir erodieren um 2 Pixel (Wert anpassbar, falls zu viel weggeschnitten wird)
    clean_img = clean_edges(no_bg_img, erosion_size=2)

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    processed_files = []

    for hex_color in hex_colors:
        bg_color = hex_color.lstrip('#')
        rgb_tuple = tuple(int(bg_color[i:i+2], 16) for i in (0, 2, 4))
        
        new_bg = Image.new("RGBA", original_img.size, rgb_tuple + (255,))
        
        # Composite with the cleaned image
        combined = Image.alpha_composite(new_bg, clean_img)
        final_img = combined.convert("RGB")
        
        # Save file with suffix "_clean"
        filename = f"portrait_{hex_color.replace('#', '')}_clean.png"
        output_path = os.path.join(output_dir, filename)
        final_img.save(output_path)
        
        print(f"Gespeichert: {output_path}")
        processed_files.append(output_path)

    return processed_files

# Configuration
input_image_path = r"C:\git_repos\_personal\linkedin-posts\teal_background_cropped.PNG"
if not os.path.exists(input_image_path):
     # Fallback logic
    possible_paths = [
        r"C:\Users\dustin.walker\.cursor\projects\c-git-repos-personal-linkedin-posts\assets\c__git_repos__personal_linkedin-posts_teal_background_cropped.png",
        "teal_background_cropped.PNG"
    ]
    for p in possible_paths:
        if os.path.exists(p):
            input_image_path = p
            break

target_colors = ["#116578", "#307785"]
output_directory = r"C:\git_repos\_personal\linkedin-posts\assets"

if os.path.exists(input_image_path):
    process_image(input_image_path, target_colors, output_directory)
else:
    print(f"Error: Input file not found.")
