import React from "react";
// import axios from "axios";
import { LinkedButton, LinkedOutlinedButton } from "../layout/Button.js"
import { MDBView, MDBMask } from "mdbreact";


class Loading extends React.Component {
  render() {
    return (
      <>
        {/* <MDBView src="https://johngress.com/wp-content/uploads//2012/09/ChicagoGayWeddingPhotographer11.jpg"> */}
        {/* <MDBView src="https://johngress.com/wp-content/uploads//2012/09/ChicagoGayWeddingPhotographer11.jpg"> */}
        <MDBView src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-196-eye-ae-003430041.jpg?auto=format&bg=F4F4F3&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-1.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1200&s=a46a57a75bdc89cfc399beb2bb69cf9d">
          {/* <MDBView src="https://image.freepik.com/free-photo/newlywed-gay-couple-dancing-wedding-celebration_53876-46945.jpg"> */}

          <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
            <p className="queerwed">QueerWed</p>
            <br></br>
            <h4><p className="description">An LGBTQIA+ space to plan weddings</p>
            <p className="description">and promote solidarity and commerce within our community.</p></h4>
            <br />
            <div>
              <LinkedButton
                value="Find A Couple"
                width="200px"
                float="left"
                href="/website/find"
              />
              <LinkedButton
                value="Sign Up"
                width="200px"
                float="left"
                href="/signup"
              />
              <LinkedOutlinedButton
                value="Are You A Vendor?"
                width="200px"
                float="left"
                href="/login/vendor"
              />
            </div>
          </MDBMask>
        </MDBView>
     
       <section id="services">
       <div class="container ">
   
   
   
         <div class="row">
   
           <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
   
             <h4 class="title"><i class="fa fa-pencil-square-o" aria-hidden="true"></i><a href="/planning"> Plan</a></h4>
   
             <p class="description">Stay organized with your To Do List, Guest List, Favorite Vendor List and Registry </p>
           </div>
           <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
             <div class="icon"><i class="ion-ios-bookmarks-outline"></i></div>
   
             <h4 class="title"> <i class="fa fa-handshake-o" aria-hidden="true"></i>
               <a href="/team"> Community Power</a></h4>
             <p class="description">Connect with LGBTQIA+ Photographers, DJs, Florists, Caterers, and more</p>
           </div>
   
           <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
             <div class="icon"><i class="ion-ios-people-outline"></i></div>
   
             <h4 class="title">
               <i class="fa fa-heart" aria-hidden="true"></i>
               <a href="/website/create"> Share & Celebrate</a></h4>
             <p class="description">Create a website for your wedding details to share information, updates, and photos
               with guests</p>
           </div>
   
         </div>
         
       </div>
     </section>
     </>
    );
  }
}
export default Loading;
