import React from "react";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import slider from "./../../assets/slider/slider-01.jpg";
import sliderTwo from "./../../assets/slider/slider-02.jpg";
import sliderThree from "./../../assets/slider/slider-03.jpg";
import video from "./../../assets/menu/video.jpg";
import menuOne from "./../../assets/menu/menu-1.jpg"
import menuTwo from "./../../assets/menu/menu-2.jpg"
import menuThree from "./../../assets/menu/menu-3.jpg"
import menuFour from "./../../assets/menu/menu-4.jpg"
import menuFive from "./../../assets/menu/menu-5.jpg"
import menuSix from "./../../assets/menu/menu-6.jpg"
import menuSeven from "./../../assets/menu/menu-7.jpg"
import menuEight from "./../../assets/menu/menu-8.jpg"
import "./Home.css";
import {
  FaRegWindowMinimize,
  FaCoffee,
  FaHamburger,
  FaUtensils,
} from "react-icons/fa";
const Home = () => {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={slider} alt="First slide" />
            <Carousel.Caption>
              <h3 className="fw-bolder fs-1  lh-base">
                Welcome to <br />
                Food<span className="text-danger">Hut</span> Restaurant
              </h3>
              <p>
                Taste your favourite dish from our Restaurant. <br />
                It's taste will always remind you of us.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sliderTwo} alt="Second slide" />

            <Carousel.Caption>
              <h3 className="fw-bolder fs-1 lh-base">
                Welcome to <br />
                Food<span className="text-danger">Hut</span> Restaurant
              </h3>
              <p>
                Taste your favourite dish from our Restaurant. <br />
                It's taste will always remind you of us.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sliderThree}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="fw-bolder fs-1 lh-base">
                Welcome to <br />
                Food<span className="text-danger">Hut</span> Restaurant
              </h3>
              <p>
                Taste your favourite dish from our Restaurant. <br />
                It's taste will always remind you of us.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* //Food menu section */}

      <section>
        <p className="text-danger text-center fs-3 fw-bold mt-5 ">
          <FaRegWindowMinimize className="mb-3" /> Food Menu{" "}
          <FaRegWindowMinimize className="mb-3" />
        </p>
        <h2 className="text-dark fs-1 fw-bold mt-3 text-center mb-5">
          Most Popular Items
        </h2>

        <Container>
          <Row>
            <Col lg={6}>
            <Row className="mb-4">
            <div className="d-flex justify-content-between bg-light sm-mx-2">
           <div className="d-flex">
           <img src={menuOne} alt="" className=" img-fluid "/>
            <h4 className="mt-2 ms-3">Chicken Platter</h4>
           </div>
            <h4 className="m-2">$250</h4>
            </div>
            </Row>
            <Row className="mb-4">
            <div className="d-flex justify-content-between bg-light sm-mx-2">
           <div className="d-flex">
           <img src={menuTwo} alt="" className=" img-fluid "/>
            <h4 className="mt-2 ms-3">Beef Steak Soup</h4>
           </div>
            <h4 className="m-2">$180</h4>
            </div>
            </Row>
            <Row className="mb-4">
            <div className="d-flex justify-content-between bg-light sm-mx-2">
           <div className="d-flex">
           <img src={menuThree} alt="" className=" img-fluid "/>
            <h4 className="mt-2 ms-3">Pizza</h4>
           </div>
            <h4 className="m-2">$110</h4>
            </div>
            </Row>
            <Row className="mb-4">
            <div className="d-flex justify-content-between bg-light sm-mx-2">
           <div className="d-flex">
           <img src={menuFour} alt="" className=" img-fluid "/>
            <h4 className="mt-2 ms-3">Beef Steak</h4>
           </div>
            <h4 className="m-2">$150</h4>
            </div>
            </Row>

              
            </Col>

            <Col lg={6}>
            <Row className="mb-4">
            <div className="d-flex justify-content-between bg-light sm-mx-2">
           <div className="d-flex">
           <img src={menuFive} alt="" className=" img-fluid "/>
            <h4 className="mt-2 ms-3">BreakFast Combo</h4>
           </div>
            <h4 className="m-2">$320</h4>
            </div>
            </Row>
            <Row className="mb-4">
            <div className="d-flex justify-content-between bg-light sm-mx-2">
           <div className="d-flex">
           <img src={menuSix} alt="" className=" img-fluid "/>
            <h4 className="mt-2 ms-3">Chicken Fry</h4>
           </div>
            <h4 className="m-2">$80</h4>
            </div>
            </Row>
            <Row className="mb-4">
            <div className="d-flex justify-content-between bg-light sm-mx-2">
           <div className="d-flex">
           <img src={menuSeven} alt="" className=" img-fluid "/>
            <h4 className="mt-2 ms-3">Beef Pizza</h4>
           </div>
            <h4 className="m-2">$130</h4>
            </div>
            </Row>
            <Row className="mb-4">
            <div className="d-flex justify-content-between bg-light sm-mx-2">
           <div className="d-flex">
           <img src={menuEight} alt="" className=" img-fluid "/>
            <h4 className="mt-2 ms-3">Chicken curry</h4>
           </div>
            <h4 className="m-2">$120</h4>
            </div>
            </Row>              
            </Col>        
          </Row>
        </Container>
      </section>




      {/* Second section */}
      <section className="mt-5 mb-5">
        <div>
          <Container>
            <Row>
              <Col lg={6}>
                <img src={video} alt="" className=" img-fluid" />
              </Col>

              <Col lg={6} className="bg-dark text-white ">
              <div className="mt-4 ms-2 text-sm-left">
                  <h4>
                    Food<span className="text-danger">Hut</span>
                  </h4>
                  <h1>Book A Table Online</h1>

                  <Form>
                    <div className="d-flex  mt-3">
                      <div>
                        <Form.Group
                          className=" mb-3  me-5 "
                          controlId="formBasicEmail"
                        >
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                      </div>

                      <div>
                        <Form.Group
                          className=" mb-3 "
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-center mt-3">
                      <div>
                        <Form.Group
                          className=" mb-3  me-5 "
                          controlId="formBasicNumber"
                        >
                          <Form.Control type="number" placeholder="Date" />
                        </Form.Group>
                      </div>

                      <div>
                        <Form.Group
                          className=" mb-3 "
                          controlId="formBasicNumber"
                        >
                          <Form.Control
                            type="number"
                            placeholder="No. of people"
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control mt-3  w-75"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Special message"
                      ></textarea>
                    </div>
                    <Button
                      variant="danger"
                      className="w-50  mt-3 mb-1 text-center py-2 fs-5"
                    >
                      Book Now
                    </Button>{" "}
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Home;

