import "./ProcessSection.scss";
import { FaWhatsapp } from "react-icons/fa";

const steps = [
  {
    id: 1,
    stepNumber: "1",
    title: "Call or WhatsApp",
    description: "Call or WhatsApp us at +971 50 970 0564 to book your IV drip session."
  },
  {
    id: 2,
    stepNumber: "2",
    title: "Share Your Location",
    description: "Send your address and preferred time. We confirm instantly."
  },
  {
    id: 3,
    stepNumber: "3",
    title: "Nurse at Your Door",
    description: "Licensed nurses arrive in 30-60 minutes for safe IV drips."
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="process-section">
      <div className="section-container">
        <div className="process-wrapper">
          <h1 className="process-title">Relief Is 3 Steps Away</h1>
          <p className="section-description">
            Premium IV therapy delivered safely, conveniently, and professionally to your doorstep, designed around your wellness goals.
          </p>
          
          <div className="steps-grid">
            {steps.map((step) => (
              <div key={step.id} className="step-card">
                <div className="step-label">{step.stepNumber}</div>
                {/* <div className="step-content"> */}
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                {/* </div> */}
              </div>
            ))}
          </div>

          {/* <div className="whatsapp-booking-wrapper">
            <a href="https://wa.me/971503890119" className="btn book-now-btn" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="btn-icon" />
              Book instantly via WhatsApp
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
