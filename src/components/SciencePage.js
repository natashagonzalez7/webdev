import React, { useState } from 'react';
import hairImage from '../images/hair.webp';

function SciencePage() {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div>
      <main>
        <h1 className="title">The Science of Curly Hair</h1>
        <section className="science-content">
          <div className="science-image">
            <img
              src={hairImage}
              alt="The science behind curly hair"
              className={isZoomed ? "zoomed" : ""}
              onClick={toggleZoom}
            />
            <p>“The mechanism which curly and wavy hair develops is not clearly defined, but there are several theories about this phenomenon. The hair shaft curvature was believed to be determined by the shape of the hair follicle, but now it is believed that it also results from variations in the content and distribution of cortical cells.” – Marta</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SciencePage;
