#!/usr/bin/env bash

set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
source_file="$project_root/resume/Laxman_Acharya_Resume.tex"
resume_build_dir="$(mktemp -d)"

cleanup() {
  rm -rf -- "$resume_build_dir"
}
trap cleanup EXIT

for command_name in tectonic pdftoppm cwebp; do
  if ! command -v "$command_name" >/dev/null 2>&1; then
    echo "Missing required command: $command_name" >&2
    exit 1
  fi
done

tectonic -X compile --outdir "$resume_build_dir" "$source_file"

compiled_pdf="$resume_build_dir/Laxman_Acharya_Resume.pdf"
install -m 0644 "$compiled_pdf" "$project_root/public/resume.pdf"
install -m 0644 "$compiled_pdf" "$project_root/public/Laxman_Acharya_Resume.pdf"

pdftoppm \
  -f 1 \
  -singlefile \
  -png \
  -r 180 \
  "$compiled_pdf" \
  "$resume_build_dir/resume-preview"

cwebp \
  -quiet \
  -q 88 \
  -metadata none \
  "$resume_build_dir/resume-preview.png" \
  -o "$project_root/public/Laxman_Acharya_Resume_Preview.webp"

echo "Built resume PDF and preview from $source_file"
