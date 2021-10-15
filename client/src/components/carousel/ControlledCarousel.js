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
            src="http://hyundaimotorvn.com/wp-content/uploads/2019/12/5-1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://hyundaimotorvn.com/wp-content/uploads/2019/12/2-1.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://hyundaimotorvn.com/wp-content/uploads/2019/12/3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}
