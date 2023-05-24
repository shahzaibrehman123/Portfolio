import React from "react";
import "./BottomSection.css";
import { Icon } from "@iconify/react";

function BottomSection() {
  const cardsData = [
    {
      Icon: "uil:newspaper",
      heading: "UX & UI",
      description:
        "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    },
    {
      Icon: "mdi:web",
      heading: "Web & Mobiles App",
      description:
        "Transforming ideas into exceptional web and mobile app experiences.",
    },
    {
      Icon: "clarity:design-solid",
      heading: "Design & Creative",
      description:
        "Crafting visually stunning designs that connect with your audience.",
    },
    {
      Icon: "ri:hammer-fill",
      heading: "Development",
      description:
        "Bringing your vision to life with the latest technology and design trends.",
    },
  ];

  return (
    <div className="container">
      <div className="gradient-text">
        Collaborate with brands and agencies to create impactful results.
      </div>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <Icon className="card-image " color="grey" fontSize={40} icon={card.Icon} />
            <h3 className="card-heading">{card.heading}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BottomSection;
