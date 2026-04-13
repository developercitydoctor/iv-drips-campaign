import "./ServicesSection.scss";
import { drips } from "../../../Datasets/dripsDataset";
import { useDripDetailModal } from "../../../Context/DripDetailModalContext";

const ServicesSection = () => {
  const { openDripDetail } = useDripDetailModal();

  const handleDripClick = (dripId) => {
    openDripDetail(dripId);
  };

  return (
    <section id="services" className="services-section">
      <div className="services-wrapper">
        <div className="section-header">
          {/* <span className="section-badge">IV Drips at Home</span> */}
          <h1 className="section-title">UAE’s Leading IV Infusion Selection</h1>
          <p className="section-description">
          Access clinically formulated IV drips and nutrient infusions designed for hydration, recovery, performance, and wellness support, professionally delivered to your location.
          </p>
        </div>
        
        <div className="drips-container">
          <div className="drips-grid">
            {drips.map((drip) => (
              <div 
                key={drip.id} 
                className="drip-card"
                onClick={() => handleDripClick(drip.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="drip-image-wrapper">
                  <img src={drip.image} alt={drip.name.replace(" | ", " ")} className="drip-image" />
                </div>
                <div className="drip-content">
                  <h3 className="drip-name">
                  {drip.name.split(" | ").map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </h3>
                  <div className="drip-pricing">
                    <span className="drip-current-price"><span className="drip-price-currency">AED</span> {drip.currentPrice}</span>
                    <span className="drip-original-price">{drip.originalPrice}</span>
                  </div>
                  <button 
                    className="btn drip-book-btn" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDripClick(drip.id);
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
