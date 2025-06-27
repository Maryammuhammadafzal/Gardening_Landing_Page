import Image from "next/image";
import AboutPage from "./about/page";
import ServicePage from "./services/page";
import ContactPage from "./contact/page";
import ValuePage from "./value/page";
import GalleryPage from "./gallery/page";

export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <AboutPage />
      <ServicePage />
      <ContactPage />
      <ValuePage />
      <GalleryPage />
    </div>
  );
}
