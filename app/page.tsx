import fs from "fs";
import path from "path";
import HomeClient from "@/components/HomeClient";

export default function Home() {
  // Logic to find unused images
  const imgDirectory = path.join(process.cwd(), "public/img");
  const allImages = fs.readdirSync(imgDirectory).filter(file => file.match(/\.(jpg|jpeg|png|webp)$/i));
  
  // Define images that are already used (manually identified from codebase search)
  const usedImages = [
    "Hands holding tiny plastic pellets.jpg",
    "Group of students discussing environment.jpg",
    "Sustainable lifestyle products minimal.jpg",
    "Ocean water surface with plastic debris.jpg",
    "Sea nurdles plastic pellets on shore.jpg",
    "Microplastics on beach sand macro.jpg",
    "Pristine coastline drone photography.jpg",
    "Inside of computer hardware textures.jpg",
    "Electronic waste circuit board macro.jpg",
    "Repairing old electronics close-up.jpg"
  ];

  const unusedImages = allImages
    .filter(img => !usedImages.includes(img))
    .map(img => `/img/${img}`);

  return <HomeClient unusedImages={unusedImages} />;
}