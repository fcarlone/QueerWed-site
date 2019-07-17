import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from
    "mdbreact";
import { OutlinedButton } from "../layout/Button"
import "../../style/carousel.css"

const Carousel = (props) => (
    <MDBView>
        <MDBCarousel
            activeItem={1}
            length={props.list.length + 3}
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
                                <h1>Hi, Welcome to <span className="title-font"><strong>QueerWed!</strong></span></h1>
                                <h3> If either you or your partner is a member of LGBTQIA+ community, please proceed!</h3>
                                <br></br>
                                <p className="mb-0">Neither my partner nor I are part of this community.</p>
                                <a className="white-text" href="/">Take me to the home > </a>
                            </div>
                        </div>
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                        <div className="carouselBackground">
                            <div className="carouselContent text-center">
                                {props.children}
                            </div>
                        </div>
                    </MDBView>
                </MDBCarouselItem>

                {props.list.map((ele, index) => (
                    <MDBCarouselItem itemId={index + 3} key={index}>
                        <MDBView>
                            <div className="carouselBackground">
                                <div className="carouselContent text-center">
                                    <h1>{ele.question}</h1>
                                    <h3>{ele.sub}</h3>
                                    <input type="text" name={ele.name} onChange={props.onChange} id="exampleForm2" className="form-control text-center answer"></input>
                                </div>
                            </div>
                        </MDBView>
                    </MDBCarouselItem>
                ))}
                <MDBCarouselItem itemId={props.list.length + 3}>
                    <MDBView>
                        <div className="carouselBackground">
                            <div className="carouselContent text-center">
                                <h1>Almost There!</h1>
                                <h3 className="mb-3">Click Sign Up.</h3>
                                <OutlinedButton onClick={props.onClick}><b>Sign Up</b>
                                </OutlinedButton>
                            </div>
                        </div>
                    </MDBView>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    </MDBView>
);

export default Carousel;
