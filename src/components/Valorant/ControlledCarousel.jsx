import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel({ requestedWeapon }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Filter skins based on conditions
  const filteredSkins = requestedWeapon.skins.filter(
    (skin) =>
      skin.displayIcon && // Check if displayIcon is available
      skin.displayName !== 'Random Favorite Skin' && // Exclude skins with this displayName
      skin.displayName !== `Standard ${requestedWeapon.displayName}` // Exclude skins with this displayName
  );

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
      {filteredSkins.map((skin, idx) => (
        <Carousel.Item key={idx} className="custom-carousel-item">
          <img
            className="d-block w-100 custom-carousel-image"
            src={skin.displayIcon}
            alt={skin.displayName}
          />
          <Carousel.Caption>
            <h3>{skin.displayName}</h3>
            {/* Additional captions or details can be added here */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;


