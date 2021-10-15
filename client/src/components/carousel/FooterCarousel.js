import React from 'react';
import {useState} from 'react';
import {Carousel} from 'react-bootstrap';


export default function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/vuluu/image/upload/v1634095545/CarProject/imgCarousel/footer2_d9rsdi.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/vuluu/image/upload/v1634095545/CarProject/imgCarousel/footer1_coa7qo.png"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}
