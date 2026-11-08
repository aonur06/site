import os
import zipfile
import time

def make_zip(source_dir, output_zip_path):
    print(f"Creating zip archive at: {output_zip_path}")
    start_time = time.time()
    
    ignore_dirs = {
        "node_modules",
        ".next",
        ".git",
        ".gemini",
        ".cache",
    }
    
    temp_zip = output_zip_path + ".tmp"
    if os.path.exists(temp_zip):
        os.remove(temp_zip)

    file_count = 0
    total_size = 0

    image_exts = {".jpg", ".jpeg", ".png", ".webp", ".ico", ".svg"}
    with zipfile.ZipFile(temp_zip, "w", zipfile.ZIP_DEFLATED, compresslevel=1) as zipf:
        for root, dirs, files in os.walk(source_dir):
            dirs[:] = [d for d in dirs if d not in ignore_dirs]
            
            for file in files:
                if file.endswith(".tmp") or file.endswith(".zip"):
                    continue
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, source_dir)
                ext = os.path.splitext(file)[1].lower()
                # Use STORED for already-compressed images for 10x faster packaging
                if ext in image_exts:
                    zipf.write(file_path, arcname, compress_type=zipfile.ZIP_STORED)
                else:
                    zipf.write(file_path, arcname, compress_type=zipfile.ZIP_DEFLATED, compresslevel=1)
                file_count += 1
                total_size += os.path.getsize(file_path)

    if os.path.exists(output_zip_path):
        os.remove(output_zip_path)
    os.rename(temp_zip, output_zip_path)

    elapsed = time.time() - start_time
    zip_size_mb = os.path.getsize(output_zip_path) / (1024 * 1024)
    print(f"Done in {elapsed:.1f}s! Packed {file_count} files ({total_size / (1024*1024):.1f} MB uncompressed) into {zip_size_mb:.1f} MB.")

if __name__ == "__main__":
    src = r"C:\Users\User\.gemini\antigravity\scratch\tekin-mimarlik-guncel"
    dst = r"C:\Users\User\Desktop\tekin-mimarlik-guncel.zip"
    make_zip(src, dst)
