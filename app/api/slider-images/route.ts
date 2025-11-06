import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public', 'imageSlider');
    
    // Check if directory exists
    if (!fs.existsSync(imagesDirectory)) {
      return NextResponse.json({ images: [] });
    }

    // Read all files in the directory
    const files = fs.readdirSync(imagesDirectory);
    
    // Filter for image files only
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
    });

    // Map to public URLs
    const images = imageFiles.map(file => `/imageSlider/${file}`);

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error reading slider images:', error);
    return NextResponse.json({ images: [] });
  }
}

