import Carousel from 'react-bootstrap/Carousel';

function CarouselDiv() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://opencart.mahardhi.com/MT04/jewels/image/cache/catalog/banners/mainbanner1-1920x800.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://opencart.mahardhi.com/MT04/jewels/image/cache/catalog/banners/mainbanner2-1920x800.jpg"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
     
    </Carousel>
  );
}

export default CarouselDiv;