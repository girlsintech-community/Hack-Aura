# Batch convert and resize all PNG, JPG, JPEG images to WebP (max width 1200px, quality 80)
$folders = @("public", "src/assets", "src/assets/logos", "public/images", "public/images/teams")
$extensions = @("*.png", "*.jpg", "*.jpeg")

foreach ($folder in $folders) {
    foreach ($ext in $extensions) {
        Get-ChildItem -Path $folder -Recurse -Filter $ext | ForEach-Object {
            $input = $_.FullName
            $output = [System.IO.Path]::ChangeExtension($input, ".webp")
            magick "$input" -resize 1200x1200 -quality 80 "$output"
        }
    }
}
Write-Host "Conversion complete! All images are now .webp (max 1200px wide, quality 80)."