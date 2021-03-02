import React, { useState } from 'react';
import {useHistory, Link as RouterLink} from 'react-router-dom';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import '../css/styles.css';





function Home() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let history = useHistory();

  const handleClick1 = () => history.push('/aboutus');



  function toAboutUs() {
    history.push("/aboutus"); 

  }
  
  function toSignIN() {
    history.push("/signin"); 

  }
  function toSignUP(){
    history.push("/signup")
  }
    return (
      <div>

<header className="header-container">
    <div className="header-content">
      {/* Image and text  */}
      <div className="header-brand">
        <div className="hamburger-btn"></div><a href="#" ><img draggable="false" className="brand" src="Images\pattayar logo.png" alt="airtel" /></a>
      </div>
      <div className="header-main">
        <div className="header-main-actions-container">
          <div className="header-main-actions-list-content">

            {/* Services  */}
            <div className="actions-list-container">
              <h3 className="actions-heading">FINANCIAL SERVICES</h3>
              <ul className="actions-list">
                <li><a className="no-dec" href="">Company Registrations</a></li>
                <li><a href="">GST</a></li>
                <li><a href="">ESI/PF Regulation</a></li>
                <li><a href="">FMCG</a></li>
                <li><a href="">Copyrights</a></li>
                <li><a href="">CMA Reports</a></li>
                <li><a href="">Finance Reports</a></li>
              </ul>
            </div>

            {/* GST Package  */}
            <div className="actions-list-container">
              <h3 className="actions-heading">GST PACKAGES</h3>
              <ul className="actions-list">
                <li><a href="broadband-bill-payc848.html?icid=header">Package 1</a></li>
                <li><a href="broadband/indexc848.html?icid=header">Package 2</a></li>
                <li><a href="broadband/indexc848.html?icid=header">Package 3</a></li>
              </ul>
            </div>

            <div className="actions-list-container">
              <h3 className="actions-heading">TECH SERVICES</h3>
              <ul className="actions-list">
                <li><a href="">Service 1</a></li>
                <li><a href="">Service 2</a></li>
                <li><a href="">Service 3</a></li>
                <li><a href="">Service 4</a></li>
                <li><a href="">Service 5</a></li>
              </ul>
            </div>

            {/* HR Solutions  */}
            <div className="actions-list-container">
              <h3 className="actions-heading">HR SOLUTIONS</h3>
              <ul className="actions-list">
                <li><a href="">item 1</a></li>
                <li><a href="">Item 2</a></li>
                <li><a href="">Item 3</a></li>
              </ul>
            </div>


            {/* Workshops and Seminars  */}
            <div className="actions-list-container">
              <h3 className="actions-heading">WORKSHOPS AND SEMINARS</h3>
              <ul className="actions-list">
                <li><a href="">Courses</a></li>
                <li><a href="">FAQs</a></li>
              </ul>
            </div>


            <div className="actions-list-container">
              <h3 className="actions-heading">
                  {/* <a href="about-us.html">ABOUT US</a> */}
                  <a onClick={toAboutUs}>AboutUS</a>
              </h3>
            </div>
          </div>
        </div>

        {/* Quick actions  */}
        <div className="business-quick-actions">
          <div className="other-services"><a data-analytics="" href="" target="_blank">18009293009</a> <a href="" target="_blank">info@pattayar.com</a></div>
          <span className="divider"></span>
          <a href="" target="_blank">Careers</a> <a href="" target="_blank">Partners</a>
        </div>

      </div>
      <div className="header-right">
          {/* <a className="actions-heading" href="register.html"> */}
          <a onClick={toSignUP} className="actions-heading"> 
              <img draggable="false" src="https://assets.airtel.in/static-assets/new-home/img/login-user.svg?v=1612334153284" alt="login" /> Register
          </a>  
      </div>
      <div className="header-right">
          {/* <a className="actions-heading" href="login.html"> */}
          <a onClick={toSignIN} className="actions-heading">    
              <img draggable="false" src="https://assets.airtel.in/static-assets/new-home/img/login-user.svg?v=1612334153284" alt="login" /> Login</a>
      </div>
    </div>
  </header>

  <div className="main-container">
    <div className="ie-container">
      <div className="ie-content">
        <p>Few features will not be supported on this browser. Switch to a different browser for a better experience.</p><button>Got It!</button>
      </div>
    </div>

    <div className="moe-popup-container" style={{display:'none'}}>
      <div className="moe-upper-section">
        <div className="moe-left-section"><img src="Images\pattayar logo.png" /></div>
        <div className="moe-right-section">
          <div className="moe-text-container">
            <h3>We’ve got all you need; Coupons, Discounts and More!</h3>
            <p>You can turn these off anytime you want</p>
          </div>
        </div>
      </div>
      <div className="moe-action-btn-container"><button className="moe-btn moe-btn-block">Don't Allow</button> <button className="moe-btn moe-btn-allow">Allow</button></div>
    </div>

    <div className="upper-section">

      {/* Main header  */}
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video src="Images\180405_FinancialCharts_14.mp4" autoPlay muted loop data-bs-interval="100000" className="d-block w-100"></video>
            <div className="carousel-caption d-block position">
              <h1>MAIN BANNER 1</h1>
            </div>
          </div>
          <div className="carousel-item">
            <video src="Images\06_1596083776.mp4" autoPlay muted loop data-bs-interval="100000" className="d-block w-100"></video>
            <div className="carousel-caption d-block position">
              <h1>MAIN BANNER 2</h1>
            </div>
          </div>
        </div>
        <section className="recharge-main">
          <article>
            <div className="recharge-left my-auto">
              {/* <h4 style="text-align: left; line-height: 30px;">Simplifying Financial Livesfor Indians</h4> */}
              <h4 style={{textAlign: 'left', lineHeight: '30px'}}>Simplifying Financial Lives <br /> for Indians</h4>
            </div>
            <div className="recharge-right">
              <div className="recharge-form my-auto"><label className="form-group">
                  <input id="quickRechargeInput" type="tel" autoComplete="off" placeholder="Enter GSTIN" name="recharge" lob="Prepaid" maxLength="10" />
                </label> <button id="quickRechargeBtn" type="button" className="submit-button" name="recharge" lob="Prepaid">RENEW</button></div>
              <div className="error-msg" id="errorMsg"></div>
            </div>
          </article>
        </section>
      </div>

      {/* Services  */}
      <section className="experience-our-services">

        <article className="column">
          <h4 className="text-uppercase mb-30">Experience our top financial Services</h4>
          <div className="quick-actions-container">

            



      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
          <Link
              component={RouterLink}
              to="/checkout"
              >
            Include Service
            </Link>
            </Button>
        </Modal.Footer>
      </Modal>
            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>Company <br /> Registrations</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>GST</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>ESI/PF <br /> Regulation</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>FMCG</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>Copyrights</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>CMA <br />Reports</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>Company <br /> Registrations</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>GST</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>ESI/PF <br /> Regulation</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>FMCG</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>Copyrights</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>CMA <br />Reports</p>
            </Button>

  
            
            </div>

          <div className="quick-actions-more">More</div>
        </article>
      </section>

      {/* Services  */}
      <section className="experience-our-services gold">

        <article className="column">
          <h4 className="text-uppercase mb-30">Experience our top tech Services</h4>
          <div className="quick-actions-container">

          <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>Company <br /> Registrations</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>GST</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>ESI/PF <br /> Regulation</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>FMCG</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>Copyrights</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>CMA <br />Reports</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>Company <br /> Registrations</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>GST</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>ESI/PF <br /> Regulation</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>FMCG</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>Copyrights</p>
            </Button>

            <Button className="square no-dec" href="" onClick={handleShow}  startIcon={<MonetizationOnIcon />} fontSize="large">
              <p>CMA <br />Reports</p>
            </Button>
            </div>

          <div className="quick-actions-more">More</div>
        </article>
      </section>

      {/* GST Plans  */}
      <section className="postpaid-main">
        <article className="column">
          <div className="postpaid-flex">
            <div className="left"><span className="heading">GST PACKAGES</span>
              <h4>Lorem ipsum dolord<br />sit amet, consectetur<span style={{color: '#e40000'}}><span className="rupee-symbol"> ₹</span>XYZ</span></h4>
              <p>Excepteur sint occaecat cupidatat non proident,<br class="hidden-xs" />sunt in culpa qui officia</p><span className="choose">Choose from our</span> <span className="best-selling-plan"> Range of GST Packages</span>
            </div>
          </div>
          <div className="blocks-main">
            <div className="block">
              <p>Package 1</p>
              <h4><span className="rupee-symbol">Pack</span>1</h4>
              <Button color="primary" variant="contained" 
          component="a" href="/pricing">
                Enquire now
              </Button>
            </div>
            <div className="block">
              <p>Package 2</p>
              <h4><span className="rupee-symbol">Pack</span>2</h4>
              <Button variant="contained" color="primary" href="/pricing">
                Enquire now
              </Button>  
            </div>
            <div className="block"><img draggable="false" src="Images\show-more.svg" alt="show more" /><span className="view-more">
                    <Button href="/pricing">
                    View<br />More 
              </Button>
                  
                  </span>
            </div>
          </div><img className="girl-img" draggable="false" src="Images\GST-01.png" alt="airtel postpaid" />
        </article>
      </section>

      {/* HR Services */}
      {/* <section className="international-roaming-main pattern" style="background-color: black !important;"> */}
      <section className="international-roaming-main pattern">
        <article>
          <div className="embed-responsive left">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
          </div>
          <div className="right"><span className="heading">HR SERVICES</span>
            <h4>Your HR operations--supercharged through our expertise.</h4><span className="view-roaming-pack"><a href="https://www.airtel.in/mnp/?icid=port_to_airtel_banner" data-analytics="porttoairtel banner-view postpaid plans">LEARN
                HOW&nbsp;→</a></span>
          </div>
        </article>
      </section>

      {/* Tech Services */}
      {/* Workshops and seminars  */}
      <section className="airtel-xstream-main">
        <div className="airtel-xstream-inner"><img className="xstream-logo" draggable="false" src="Images\pattayar logo.png" alt="xstream" />
          <h4>WORKSHOPS AND SEMINARS</h4><span className="xstream-banner"><img draggable="false" src="Images\workshops-seminars-01.png" width="1000px" padding="50px" alt="airtel xstream banner" /></span>
        </div>
        <div className="airtel-xstream-blocks-inner-main">
          <div className="airtel-xstream-blocks">
            <p>Upcoming Workshops</p><img draggable="false" src="https://assets.airtel.in/static-assets/new-home/img/xstream-box.jpg?v=1612334153284" alt="xstream box" /> <a className="buy-now-btn"
              href="https://www.airtel.in/xstream/box?icid=xstream_banner">Enroll Now</a>
          </div>
          <div className="airtel-xstream-blocks">
            <p>Upcoming Seminars</p><img draggable="false" src="https://assets.airtel.in/static-assets/new-home/img/xstream-fiber.jpg?v=1612334153284" alt="xstream fiber" /><a className="buy-now-btn"
              href="https://www.airtel.in/broadband/?icid=xstream_banner">Enroll Now</a>
          </div>
          <div className="airtel-xstream-blocks last">
            <p>FAQ</p><img draggable="false" src="https://assets.airtel.in/static-assets/new-home/img/xstream-app.jpg?v=1612334153284" alt="xstream app" /> <a className="buy-now-btn" target="_blank"
              href="https://www.airtelxstream.in/?shortlink=xstreamapp&amp;pid=SMS&amp;c=website&amp;is_retargeting=true&amp;icid=xstream_banner">Enroll More</a>
          </div>
        </div>
      </section>


      {/* Video section  */}
      <section className="postpaid-main no bg-color-beige">
        <article className="column">
          {/* <h4 className="text-uppercase mb-30" style="font-size: 34px; font-weight: 600;">KNOWLEDGE BANK</h4> */}
          <h4 className="text-uppercase mb-30" style={{ fontSize: '34px', fontWeight: '600'}}>KNOWLEDGE BANK</h4>
          <div className="postpaid-flex">
            <div className="left"><span className="heading">FEATURED VIDEOS</span></div>
          </div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card h-50 mx-auto">
                <div className="card-body">
                  <h5><a href="https://youtu.be/MO7Rek2Rf_0"><strong>Video Title 1</strong></a></h5>
                  <p className="video-data">Published on May 15, 2018</p>
                </div>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MO7Rek2Rf_0?rel=0&controls=0&showinfo=0" frameBorder="0" allow="autoPlay; encrypted-media" allowFullScreen></iframe>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-50 mx-auto">
                <div className="card-body">
                  <h5><a href="https://youtu.be/MO7Rek2Rf_0"><strong>Video Title 2</strong></a></h5>
                  <p className="video-data">Published on May 15, 2018</p>
                </div>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MO7Rek2Rf_0?rel=0&controls=0&showinfo=0" frameBorder="0" allow="autoPlay; encrypted-media" allowFullScreen></iframe>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-50 mx-auto">
                <div className="card-body">
                  <h5><a href="https://youtu.be/MO7Rek2Rf_0"><strong>Video Title 3</strong></a></h5>
                  <p className="video-data">Published on May 15, 2018</p>
                </div>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MO7Rek2Rf_0?rel=0&controls=0&showinfo=0" frameBorder="0" allow="autoPlay; encrypted-media" allowFullScreen></iframe>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-50 mx-auto">
                <div className="card-body">
                  <h5><a href="https://youtu.be/MO7Rek2Rf_0"><strong>Video Title 4</strong></a></h5>
                  <p className="video-data">Published on May 15, 2018</p>
                </div>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MO7Rek2Rf_0?rel=0&controls=0&showinfo=0" frameBorder="0" allow="autoPlay; encrypted-media" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="left">
            <button type="button" className="btn btn-bootstrap btn-danger">VIEW MORE VIDEOS&nbsp;→</button>
          </div>
        </article>
      </section>



      {/* Blog section */}

      <section className="postpaid-main no1 bg-color-beige">
        <article className="column">
          <div className="postpaid-flex">
            <div className="left"><span className="heading">FEATURED BLOGS</span></div>
          </div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card h-50 mx-auto">
                <div className="card-body">
                  <h5><a href="https://youtu.be/MO7Rek2Rf_0"><strong>Blog Title 1</strong></a></h5>
                  <p className="video-data">Published on May 15, 2018</p>
                </div>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MO7Rek2Rf_0?rel=0&controls=0&showinfo=0" frameBorder="0" allow="autoPlay; encrypted-media" allowFullScreen></iframe>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-50 mx-auto">
                <div className="card-body">
                  <h5><a href="https://youtu.be/MO7Rek2Rf_0"><strong>Blog Title 2</strong></a></h5>
                  <p className="video-data">Published on May 15, 2018</p>
                </div>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MO7Rek2Rf_0?rel=0&controls=0&showinfo=0" frameBorder="0" allow="autoPlay; encrypted-media" allowFullScreen></iframe>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-50 mx-auto">
                <div className="card-body">
                  <h5><a href="https://youtu.be/MO7Rek2Rf_0"><strong>Blog Title 3</strong></a></h5>
                  <p className="video-data">Published on May 15, 2018</p>
                </div>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MO7Rek2Rf_0?rel=0&controls=0&showinfo=0" frameBorder="0" allow="autoPlay; encrypted-media" allowFullScreen></iframe>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-50 mx-auto">
                <div className="card-body">
                  <h5><a href="https://youtu.be/MO7Rek2Rf_0"><strong>Blog Title 4</strong></a></h5>
                  <p className="video-data">Published on May 15, 2018</p>
                </div>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MO7Rek2Rf_0?rel=0&controls=0&showinfo=0" frameBorder="0" allow="autoPlay; encrypted-media" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="left">
            <Button variant="contained" color="secondary" href="/blog" >
              VIEW MORE BLOGS&nbsp;→
              </Button>
          </div>
        </article>
      </section>
      </div>

      <WhatsAppWidget phoneNumber='919600150396' />



      {/* Original Postpaid  */}

      <footer className="footer-container">
        <div className="upper-section">
          <div className="left-container">
            <div className="quick-actions-list-container">
              <h3 className="quick-actions-heading">Quick Access</h3>
              <ul className="quick-actions-list">
                <li><a target="_blank" href="">Company Registrations</a></li>
                <li><a target="_blank" href="">GST</a></li>
                <li><a target="_blank" href="">ESI/PF Regulation</a></li>
                <li><a target="_blank" href="">FMCG</a></li>
                <li><a target="_blank" href="">Copyrights</a></li>
                <li><a target="_blank" href="">CMA Reports</a></li>
                <li><a target="_blank" href="">Finance Reports</a></li>
                <li><a target="_blank" href="">Workshops and Seminars</a></li>
                <li><a target="_blank" href="">HR Solutions</a></li>
              </ul>
            </div>

            <div className="quick-actions-list-container">
              <h3 className="quick-actions-heading">Help at Hand</h3>
              <ul className="quick-actions-list">
                <li><a target="_blank" href="">FAQ</a></li>
                <li><a target="_blank" href="">Contact</a></li>
              </ul>
            </div>

            <div className="quick-actions-list-container">
              <h3 className="quick-actions-heading">About Pattayar</h3>
              <ul className="quick-actions-list">
                <li><a href="about-us.html">Company</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Partner</a></li>
                <li><a href="">Business</a></li>
              </ul>
            </div>

          </div>
          <div className="right-container"><button className="scroll-to-top">Back to top <img src="https://assets.airtel.in/static-assets/new-home/img/back-to-top.svg?v=1612334153284" alt="back to top" /></button>
            <ul className="social">
              <li><a target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li>
              <li><a target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
              <li><a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
              <li><a target="_blank" href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="bottom-section">
          <div className="important-links">
            <div className="links-container"><a target="_self" href="" data-analytics="footer|footer-important alerts">IMPORTANT ALERTS</a> <a target="_self" href=""
                data-analytics="footer|footer-privacy policy">PRIVACY POLICY</a> <a target="_self" href="" data-analytics="footer|footer-cookie notice">COOKIE NOTICE</a> <a target="_self"
                href="" data-analytics="footer|footer-telemarketer registration">DLT Registration for Commercial Communication </a><a target="_self" href=""
                data-analytics="footer|footer-do not disturb list">DO NOT
                DISTURB LIST</a> <a target="_self" href="" data-analytics="footer|footer-list/contact us">CONTACT US</a></div>

          </div>
          <div>© 2021 Pattayar. All Rights Reserved.</div>
        </div>
      </footer>
        
      </div>

      </div>

    );
  }

  export default Home;