import React from "react";
import HelpModal from "../components/HelpModal";

// The component itself (exported as default)
const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <HelpModal />
    </div>
  );
};

// Lazy load the AboutPage using React.lazy
export const AboutRoute = createLazyFileRoute("/about")({
  component: React.lazy(() => import("./about.lazy.jsx")), // Dynamically imports the default export from this file
});

export default AboutPage; // Keep default export for the AboutPage component
