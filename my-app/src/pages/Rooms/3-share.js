// function Share3() {
//   return (
//     <>
//       <h3> 3 Sharing</h3>
//       <p>
//         Join thousands of people at the Isha Yoga Center, a powerful space for
//         inner transformation, for the celebrations
//       </p>
//     </>
//   );
// }

// export default Share3;

import Carousel from 'react-bootstrap/Carousel';
// import image from './imag.jpg';

function Share3() {
  return (
    <Carousel>
      <Carousel.Item>
        <image text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <image text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <image text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Share3;