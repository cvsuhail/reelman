import "./globals.css";
import { Navigation } from "./Navigation";

export const metadata = {
  title: "ReelMan Uniforms | Premium Uniform Solutions in Abu Dhabi",
  description: "ReelMan is Abu Dhabi's leading uniform tailoring company, delivering exceptional quality workwear and professional attire across the UAE. From corporate offices to construction sites, we design and manufacture uniforms that blend comfort, durability, and style.",
  keywords: ["uniform suppliers Abu Dhabi", "corporate uniforms UAE", "school uniform tailoring", "medical scrubs Abu Dhabi", "chef coats supplier", "security guard uniforms", "construction workwear UAE", "custom embroidery services", "hotel staff uniforms", "restaurant uniform manufacturer", "industrial safety wear", "bulk uniform orders", "uniform company Abu Dhabi", "professional workwear UAE", "custom t-shirt printing"],
  openGraph: {
    title: "ReelMan Uniforms | Premium Uniform Solutions in Abu Dhabi",
    description: "ReelMan is Abu Dhabi's leading uniform tailoring company, delivering exceptional quality workwear and professional attire across the UAE. From corporate offices to construction sites, we design and manufacture uniforms that blend comfort, durability, and style.",
    images: ["/images/logo.png"],
    
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
