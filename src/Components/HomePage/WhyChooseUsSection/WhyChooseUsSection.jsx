import "./WhyChooseUsSection.scss";
import heroImage from "../../../assets/Images/image-1.png";
import { FaUserMd, FaClipboardCheck, FaPills, FaStopwatch, FaClock, FaGlobeAmericas } from "react-icons/fa";

import icon1 from "../../../assets/Icons/icon-1.png";
import icon2 from "../../../assets/Icons/icon-2.png";
import icon3 from "../../../assets/Icons/icon-3.png";
import icon4 from "../../../assets/Icons/icon-4.png";
import icon5 from "../../../assets/Icons/icon-5.png";
import icon6 from "../../../assets/Icons/icon-6.png";

const features = [
  {
    id: 1,
    icon: icon1,
    title: "Licensed Professionals",
    description: "All infusions given by licensed IV professionals for safe, expert care always."
  },
  {
    id: 2,
    icon: icon4,
    title: "Fast Appointments",
    description: "Flexible scheduling within 60 minutes in most areas."
  },
  {
    id: 3,
    icon: icon2,
    title: "Clinical Safety Standards",
    description: "Strict medical protocols and sterile equipment are used for every IV session."
  },
  {
    id: 4,
    icon: icon5,
    title: "Faster Than Visiting Clinics",
    description: "Skip travel, waiting rooms, and delays. Receive IV therapy at your location."
  },
  {
    id: 5,
    icon: icon3,
    title: "Pharma-Grade Ingredients",
    description: "Only approved, high-quality IV nutrients and medications are used."
  },
  {
    id: 6,
    icon: icon6,
    title: "UAE's Trusted Choice",
    description: "Chosen by residents and visitors for safe and reliable IV infusion therapy."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="why-choose-us-section">
      <div className="why-choose-us-wrapper">
        <div className="section-header">
          <h1 className="section-title">
            Why IVDrips.AE Is A<br />Trusted Choice
          </h1>
          <p className="section-description">
            Targeted IV infusion therapy delivered safely and professionally, focused on fast hydration, nutrient replenishment, and physical recovery.
          </p>
        </div>
        <div className="why-choose-us-content">
          <div className="hero-image-container">
            <img src={heroImage} alt="Nurse administering IV drip" className="hero-image" />
          </div>
          <div className="features-container">
            <div className="features-list">
              {features.map((feature) => {
                return (
                <div key={feature.id} className="feature-item">
                  <div className="feature-icon-wrapper">
                    <img src={feature.icon} alt={feature.title} className="feature-icon" />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              );
              })}
            </div>
            <div className="booking-wrapper">
              <a href="tel:+971503890119" className="btn book-now-btn">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="booking-wrapper-mobile">
        <a href="tel:+971503890119" className="btn book-now-btn">
          Call Now
        </a>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
