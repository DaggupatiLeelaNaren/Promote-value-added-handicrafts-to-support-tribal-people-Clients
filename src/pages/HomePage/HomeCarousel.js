import Carousel from 'react-bootstrap/Carousel';
import './HomeCarousel.css'
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wp-assets.rooftopapp.com/wp-content/uploads/2023/04/Tribal-Art-3.jpg.webp"
          alt="First slide"
          style={{ height: '300px', objectFit: 'cover' }} // Optional style to match the CSS
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tiimg.tistatic.com/fp/1/007/182/tribal-art-wall-hanging-handicrafts-216.jpg"
          alt="Second slide"
          style={{ height: '300px', objectFit: 'cover' }} // Optional style to match the CSS
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/ancient-wood-statue-ornate-design-hindu-god-generated-by-ai_188544-47632.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727481600&semt=ais_hybrid"
          alt="Third slide"
          style={{ height: '300px', objectFit: 'cover' }} // Optional style to match the CSS
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
