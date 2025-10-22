import "./works.css";
import { WorksPageSection } from "./WorksPageSection";

export const metadata = {
  title: 'ReelMan | Leading Uniform Solutions in Abu Dhabi',
  description: "ReelMan is Abu Dhabi's leading uniform tailoring company, delivering exceptional quality workwear and professional attire across the UAE. From corporate offices to construction sites, we design and manufacture uniforms that blend comfort, durability, and style.",
  openGraph: {
    title: 'Works',
  },
}

const Works = () => {

  return (
    <WorksPageSection />
  );
};

export default Works;