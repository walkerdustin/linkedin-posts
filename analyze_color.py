from PIL import Image
from collections import Counter

def get_bg_color(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGB")
        width, height = img.size
        
        # Sample pixels from the top-left corner (safe bet for background)
        # Taking a 50x50 patch
        box = (0, 0, 50, 50)
        region = img.crop(box)
        pixels = list(region.getdata())
        
        most_common = Counter(pixels).most_common(1)[0][0]
        hex_color = '#{:02x}{:02x}{:02x}'.format(*most_common)
        return hex_color
    except Exception as e:
        return str(e)

# Path to the image
image_path = r"C:\Users\dustin.walker\.cursor\projects\c-git-repos-personal-linkedin-posts\assets\c__Users_dustin.walker_AppData_Roaming_Cursor_User_workspaceStorage_d5a4ce7b7593ca2f68398c5723c63de0_images_image-0ed3853e-dc35-4c30-b9eb-7e2f2f224463.png"

print(f"Dominant Color: {get_bg_color(image_path)}")
