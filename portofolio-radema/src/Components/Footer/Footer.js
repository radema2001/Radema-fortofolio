import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="8">
            <h5 className="title">About</h5>
            <p>
              website ini merupakan portofolio saya dan masih dalam tahap
              pengembangan
            </p>
          </MDBCol>
          <MDBCol md="4">
            <ul>
              <li className="list-unstyled title">Reach me out</li>
              <li className="list-unstyled">
                <a href="mailto:rademapanjaitan09@gmail.com?Subject=Mau%20tanya">
                  <i class="fa fa-envelope" aria-hidden="true">
                    {" "}
                    Gmail
                  </i>
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://wa.me/6282267041718">
                  <i class="fa fa-whatsapp" aria-hidden="true">
                    Whatsapp
                  </i>
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.instagram.com/rademapanjaitan02_/">
                  <i className="fa fa-instagram">Instagram</i>
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/radema-panjaitan-a69263181/">
                  <i class="fa fa-linkedin-square" aria-hidden="true">
                    Linkedin
                  </i>
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="#"> Radema Panjaitan</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
