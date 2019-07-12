import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from
    "mdbreact";
import { OutlinedButton } from "../layout/Button"
import "../../style/carousel.css"

const Carousel = (props) => (
    <MDBView>
        <MDBCarousel
            activeItem={1}
            length={props.list.length + 2}
            showControls={true}
            showIndicators={true}
            interval={false}
            className="z-depth-1"
        >
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                    <MDBView>
                        <div className="carouselBackground">
                            <div className="carouselContent text-center">
                                {props.children}
                            </div>
                        </div>
                    </MDBView>
                </MDBCarouselItem>
                {props.list.map((ele, index) => (
                    <MDBCarouselItem itemId={index + 2} key={index}>
                        <MDBView>
                            <div className="carouselBackground">
                                <div className="carouselContent text-center">
                                    <h1>{ele.question}</h1>
                                    <h4>{ele.sub}</h4>
                                    <input type="text" name={ele.name} onChange={props.onChange} id="exampleForm2" className="form-control text-center answer"></input>
                                </div>
                            </div>
                        </MDBView>
                    </MDBCarouselItem>
                ))}
                <MDBCarouselItem itemId={props.list.length + 2}>
                    <MDBView>
                        <div className="carouselBackground">
                            <div className="carouselContent text-center">
                                <h1>Almost There!</h1>
                                <h4 className="mb-3">Click Sign Up.</h4>
                                <OutlinedButton
                                    onClick={props.onClick}
                                    value="Sign Up" />
                            </div>
                        </div>
                    </MDBView>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    </MDBView>
);

export default Carousel;
