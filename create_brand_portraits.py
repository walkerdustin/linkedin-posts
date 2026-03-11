import os
from rembg import remove
from PIL import Image
import numpy as np

def process_image(input_path, hex_colors, output_dir):
    # 1. Load the image
    print(f"Lade Bild: {input_path}")
    original_img = Image.open(input_path).convert("RGBA")
    
    # 2. Remove background using AI (rembg)
    print("Entferne Hintergrund mit AI (kann beim ersten Mal etwas dauern)...")
    try:
        no_bg_img = remove(original_img)
    except Exception as e:
        print(f"Fehler bei rembg: {e}")
        return

    # Ensure output directory exists
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    processed_files = []

    # 3. Create versions for each color
    for hex_color in hex_colors:
        # Create a solid color background image of the same size
        bg_color = hex_color.lstrip('#')
        rgb_tuple = tuple(int(bg_color[i:i+2], 16) for i in (0, 2, 4))
        
        # Create new background layer
        new_bg = Image.new("RGBA", original_img.size, rgb_tuple + (255,))
        
        # Paste the cutout on top
        # (The cutout has transparency in the alpha channel)
        combined = Image.alpha_composite(new_bg, no_bg_img)
        
        # Convert to RGB (remove alpha) for saving as PNG/JPG
        final_img = combined.convert("RGB")
        
        # Save file
        filename = f"portrait_{hex_color.replace('#', '')}.png"
        output_path = os.path.join(output_dir, filename)
        final_img.save(output_path)
        
        print(f"Gespeichert: {output_path}")
        processed_files.append(output_path)

    return processed_files

# Configuration
input_image_path = r"C:\git_repos\_personal\linkedin-posts\teal_background_cropped.PNG"
# Use assets folder for the image if not found in root (fallback logic)
if not os.path.exists(input_image_path):
    # Try the one in assets that user provided context for
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
    print(f"Error: Input file not found at {input_image_path}")
