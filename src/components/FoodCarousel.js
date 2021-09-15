import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./FoodCarousel.css";
const FoodCarousel = () => {
    return ( 
        <div className="foodcarousel">
            <Carousel>
                <Carousel.Item>
                    <img style={{'height':"70vh", 'width':"90vw"}}  className="" src={'assets/img/pizza.jpeg'} />
                    <Carousel.Caption>
                        <Row>
                        <Col md={6}></Col>
                        <Col md={6}>
                            <h3>Pizza</h3>
                        <p>Pizza is an Italian dish consisting of a usually round, 
                            flattened base of leavened wheat-based dough topped with tomatoes, cheese, 
                            and often various other ingredients, which is then baked at a high temperature, 
                            traditionally in a wood-fired oven.</p>
                        </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{'height':"70vh", 'width':"90vw"}}  className="" src={'assets/img/donut.jpg'} />
                    <Carousel.Caption>
                        <Row>
                            <Col md={6}>
                                <h3>Donuts</h3>
                        <p>A donut is a small fried cake of sweetened dough, 
                            typically in the shape of a ball or ring.</p>
                            </Col>
                            <Col md={6}></Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{'height':"70vh", 'width':"90vw"}}  className="" src={'assets/img/burger.jpg'} />
                    <Carousel.Caption>
                        <Row>
                            <Col md={6}></Col>
                            <Col md={6}>
                                <h3>Burger</h3>
                        <p>A burger is a dish consisting of a flat round cake of minced beef, 
                            or sometimes another savoury ingredient, 
                            that is fried or grilled and served in a split bun or roll with various condiments and toppings.</p>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{'height':"70vh", 'width':"90vw"}}  className="" src={'assets/img/cupcake.png'} />
                    <Carousel.Caption>
                        <Row>
                            <Col md={6}>
                                <h3>Cupcake</h3>
                        <p>
                        A cupcake 
                         is a small cake designed to serve one person,
                          which may be baked in a small thin paper or aluminum cup.
                            </p>
                            </Col>
                            <Col md={6}></Col>
                            
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>
        </div>
     );
}
 
export default FoodCarousel;