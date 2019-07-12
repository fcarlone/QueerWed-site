import React from "react";
import "../../../style/website/websiteNav.css";

function Nav(props) {
  return(
  <ul className="nav justify-content-center row">
    <li className="logo nav-item col-2 text-center">OUR WEDDING</li>
    <li className="detail nav-item col-2">
      <a className="nav-link js-scroll-trigger" href="#details">date &amp; location</a></li>
    <li className="registry nav-item col-2">
      <a className="nav-link js-scroll-trigger" href="#registry">registry</a></li>
    <li className="guestbook nav-item col-2">
      <a className="nav-link js-scroll-trigger" href="#guestbook">guest book</a></li>
    <li className="qa nav-item col-2">
      <a className="nav-link js-scroll-trigger" href="#faqs">faqs</a></li>
    <li className="rsvp nav-item col-2">
      <a className="nav-link js-scroll-trigger" href="#rsvp">rsvp</a></li>

    {/* <li className="guess nav-item col-4">{props.message}</li>
    <li className="score nav-item col-4">Score: {props.score}  |  Top score: {props.topScore} </li> */}
  </ul>
  )
}

export default Nav;