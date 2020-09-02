import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import React, { Component } from "react";
import { Carousel } from "primereact/carousel";
import "./CarouselBar.scss";
import Audi from "../../images/Audi.png";
import BMW from "../../images/BMW.png";
import Ford from "../../images/Ford.png";
import Mercedes from "../../images/Mercedes.png";
import Rafael from "../../images/indian.jpg";
import Jaguar from "../../images/Jaguar.png";
import Volks from "../../images/VW.png";

const carss = [
  {
    brand: "BMW",
    color: "red",
    year: 2012,
    image: BMW,
  },
  {
    brand: "AUDI",
    color: "red",
    year: 2012,
    image: Audi,
  },
  {
    brand: "MERCEDES",
    color: "black",
    year: 2009,
    image: Mercedes,
  },
  {
    brand: "JAGUAR",
    color: "green",
    year: 2013,
    image: Jaguar,
  },
  {
    brand: "FORD",
    color: "yellow",
    year: 2019,
    image: Ford,
  },
  {
    brand: "VW",
    color: "yellow",
    year: 2019,
    image: Volks,
  },
];

var sectionStyle = {
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0px -265px",
  backgroundSize: "cover",
  color: "white",
  fontWeight: "bold",
  backgroundImage: `url(${Rafael})`,
};
export class CarouselBar extends Component {
  constructor() {
    super();
    this.state = {
      cars: [],
    };

    this.responsiveOptions = [
      {
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: "768px",
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  componentDidMount() {
    this.setState({ cars: carss });
  }

  carTemplate(car) {
    return (
      <div>
        <div className="car-details">
          <div className="p-grid p-nogutter">
            <div className="carouselcardsize">
              <img src={car.image} alt={car.image} />
            </div>
            <div className="p-col-12 car-data">
              <h2>{car.brand}</h2>

              <div className="car-subtitle">
                <h2>
                  {car.year}|{car.color}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const customHeader = <h2>More than 500 Companies</h2>;

    return (
      <div id="carousel-id" className="carouselcard" style={sectionStyle}>
        <Carousel
          value={this.state.cars}
          itemTemplate={this.carTemplate}
          numVisible={5}
          numScroll={1}
          className="custom-carousel"
          responsiveOptions={this.responsiveOptions}
          header={customHeader}
          circular={true}
          autoplayInterval={3000}
        ></Carousel>
      </div>
    );
  }
}

export default CarouselBar;
