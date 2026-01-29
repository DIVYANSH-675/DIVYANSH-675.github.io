
from PIL import Image
import os

base_path = "/home/ubuntu/.gemini/antigravity/brain/d450f2d6-87d8-404f-b9d5-2fc2783e5f1e/"
dest_path = "/home/ubuntu/3d-react-portfolio/src/assets/tech/"

# Mapping: dictionary of source_filename_suffix -> [list of names in order: TL, TR, BL, BR]
files = {
    "tech_icons_1_1769440950904.png": ["python_crop", "cpp", "pytorch_crop", "tensorflow"],
    "tech_icons_2_1769440969682.png": ["aws", "kubernetes", "pandas", "numpy"],
    "tech_icons_3_1769440989998.png": ["linux", "sklearn", "langchain", "sql"]
}

for filename, specific_names in files.items():
    full_path = os.path.join(base_path, filename)
    if not os.path.exists(full_path):
        print(f"File not found: {full_path}")
        continue

    img = Image.open(full_path)
    width, height = img.size
    print(f"Processing {filename} ({width}x{height})")
    
    # Calculate quadrant sizing
    mid_x = width // 2
    mid_y = height // 2
    
    # 0=TL, 1=TR, 2=BL, 3=BR
    quadrants = [
        (0, 0, mid_x, mid_y),
        (mid_x, 0, width, mid_y),
        (0, mid_y, mid_x, height),
        (mid_x, mid_y, width, height)
    ]
    
    for i, name in enumerate(specific_names):
        crop_area = quadrants[i]
        icon = img.crop(crop_area)
        
        # Save to assets
        save_path = os.path.join(dest_path, f"{name}.png")
        icon.save(save_path)
        print(f"Saved {name}.png to {save_path}")

# copy individual generations too if they exist
individual_files = {
    "logo_python_1769441032101.png": "python.png", 
    "logo_pytorch_1769441052533.png": "pytorch.png"
}

for src, dest in individual_files.items():
    full_src = os.path.join(base_path, src)
    if os.path.exists(full_src):
        img = Image.open(full_src)
        save_path = os.path.join(dest_path, dest)
        img.save(save_path)
        print(f"Saved individual {dest} to {save_path}")
