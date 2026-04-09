import argparse
import os
import sys
from dotenv import load_dotenv
from google import genai
from google.genai import types

def main():
    parser = argparse.ArgumentParser(description="Generate image using Gemini API")
    parser.add_argument("--prompt", help="Detailed prompt for the image")
    parser.add_argument(
        "--prompt-file",
        help="UTF-8 text file with the prompt (use instead of --prompt for long or multiline prompts)",
    )
    parser.add_argument("--output", required=True, help="Output path for the generated image")
    parser.add_argument("--reference", help="Path to a reference image")
    parser.add_argument("--aspect-ratio", default="1:1", choices=["1:1", "16:9", "4:3", "3:4", "9:16"])
    parser.add_argument(
        "--image-quality",
        default="1K",
        choices=["1K", "2K", "4K"],
        dest="image_quality",
        help="Resolution tier: default 1K for fast iteration; use 4K for final LinkedIn-ready output (maps to API image_size).",
    )
    
    args = parser.parse_args()

    if args.prompt_file:
        if args.prompt:
            print("Error: Use either --prompt or --prompt-file, not both.", file=sys.stderr)
            sys.exit(1)
        with open(args.prompt_file, encoding="utf-8") as f:
            prompt_text = f.read().strip()
        if not prompt_text:
            print("Error: --prompt-file is empty.", file=sys.stderr)
            sys.exit(1)
    elif args.prompt:
        prompt_text = args.prompt
    else:
        print("Error: Provide --prompt or --prompt-file.", file=sys.stderr)
        sys.exit(1)
    
    # Load environment variables from the root .env file
    load_dotenv()
    
    if not os.environ.get("GEMINI_API_KEY"):
        print("Error: GEMINI_API_KEY environment variable not set. Please check your .env file.", file=sys.stderr)
        sys.exit(1)
        
    client = genai.Client()
    
    contents = []
    if args.reference:
        if not os.path.exists(args.reference):
            print(f"Error: Reference image not found at {args.reference}", file=sys.stderr)
            sys.exit(1)
            
        try:
            from PIL import Image
            img = Image.open(args.reference)
            contents.append(img)
            print(f"Loaded reference image from {args.reference}")
        except ImportError:
            print("Error: Pillow library is required to load reference images. Run 'uv add pillow'.", file=sys.stderr)
            sys.exit(1)
        except Exception as e:
            print(f"Error loading reference image: {e}", file=sys.stderr)
            sys.exit(1)
            
    contents.append(prompt_text)
    
    print(
        f"Generating image to {args.output} with aspect ratio {args.aspect_ratio}, image quality {args.image_quality}..."
    )
    
    try:
        response = client.models.generate_content(
            model="gemini-3.1-flash-image-preview",
            contents=contents,
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE"],
                image_config=types.ImageConfig(
                    aspect_ratio=args.aspect_ratio,
                    image_size=args.image_quality,
                )
            )
        )
        
        saved = False
        for part in response.parts:
            if part.inline_data is not None:
                # Make sure the output directory exists
                os.makedirs(os.path.dirname(os.path.abspath(args.output)), exist_ok=True)
                
                image = part.as_image()
                image.save(args.output)
                print(f"Image successfully saved to {args.output}")
                saved = True
                
        if not saved:
            print("Error: API responded but no image data was found in the response.", file=sys.stderr)
            sys.exit(1)
            
    except Exception as e:
        print(f"Error generating image: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
