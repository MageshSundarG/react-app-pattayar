import zIndex from '@material-ui/core/styles/zIndex';
import React from 'react';
import {useHistory} from 'react-router-dom';
import '../css/app.css';




function AboutUS() {

  let history = useHistory();

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
         


<div id="dialogModal" style={{zIndex: '1040', backgroundColor: '#d4d4d4', opacity: '.95' , position : 'fixed', height: '100%' , width: '100%' , overflow : 'scroll', display: 'none'}}>
  <div className="modal-content" style={{marginLeft:'10%' , marginRight: '10%'}}>
    <div className="modal-header">
      <a className="close" onclick="closeDialog();"><i className="icon-outlined-cross"></i></a>
    </div>
    <div className="modal-body">
      <h5 className="modal-title"></h5>
      <div></div>
    </div>
    <div className="modal-footer text-center">
      <a className="btn btn-lg btn-burple" onclick="closeDialog();" style={{float : 'none'}}></a>
    </div>
  </div>
</div>

<div id="topElement">
  <div ui-view="" className="content-wrap">
    <div ui-view="header">


      <header className="header-container" id="myHeader">
        <div className="header-content"><input checked="checked" className="hamburger-input" type="checkbox" />
          <div className="header-brand"><img alt="hamburger menu" className="hamburger" src="https://assets.airtel.in/static-assets/new-home/img/nav-menu.svg" /> <img alt="airtel" className="brand"
              src="PATTAYAR-New Dev copy.png" /></div>

          <div className="header-main">
            <div className="header-main-actions-container">
              <div className="actions-list-container"><input checked="checked" type="checkbox" />
                <h3 className="actions-heading">FINANCIAL SERVICES</h3>

                <ul className="actions-list">
                  <li><a href="#">Company Registrations</a></li>
                  <li><a href="#">GST</a></li>
                  <li><a href="#">ESI/PF Regulations</a></li>
                  <li><a href="#">FMCG</a></li>
                  <li><a href="#">Copyrights</a></li>
                  <li><a href="#">CMA Reports</a></li>
                  <li><a href="#">Finance Reports</a></li>
                </ul>
              </div>

              <div className="actions-list-container"><input checked="checked" type="checkbox" />
                <h3 className="actions-heading">GST PACKAGES</h3>

                <ul className="actions-list">
                  <li><a href="#">Package 1</a></li>
                  <li><a href="#">Package 2</a></li>
                  <li><a href="#">Package 3</a></li>
                </ul>
              </div>

              <div className="actions-list-container"><input checked="checked" type="checkbox" />
                <h3 className="actions-heading">TECH SERVICES</h3>

                <ul className="actions-list">
                  <li><a href="#">service 1</a></li>
                  <li><a href="#">Service 2</a></li>
                  <li><a href="#">Service 3</a></li>
                  <li><a href="#">Service 4</a></li>
                  <li><a href="#">View Plans</a></li>
                </ul>
              </div>

              <div className="actions-list-container"><input checked="checked" type="checkbox" />
                <h3 className="actions-heading">HR SERVICES</h3>

                <ul className="actions-list">
                  <li><a href="#">item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                </ul>
              </div>

              <div className="actions-list-container"><input checked="checked" type="checkbox" />
                <h3 className="actions-heading">WORKSHOPS AND SEMINARS</h3>

                <ul className="actions-list">
                  <li><a href="#">Seminars</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>

              <div className="actions-list-container"><input checked="checked" type="checkbox" />
                <h3 onClick={toAboutUs} className="actions-heading">ABOUT US</h3>


</div> 

                <div className="actions-list-container"><a onClick={toSignIN} className="actions-heading no-arrow" href=""><img alt="get app" src="https://assets.airtel.in/static-assets/new-home/img/get-app.svg" /> Get App </a></div>
              </div>

              <div className="business-quick-actions">
                <div className="other-services"><a href="">18009296009</a> <a href="">info@pattayar.in</a></div>
                <a className="active">Careers</a> <a href="">Partners</a>
              </div>
            </div>

            <div className="header-right"> 
            <a onClick={toSignUP} className="actions-heading no-arrow" href=""> <img alt="login" draggable="false" src="https://assets.airtel.in/static-assets/new-home/img/login-user.svg" /> Login </a></div>
          </div>
      </header>

      {/* <script type="text/javascript">
        window.onscroll = function() {
          myFunction()
        };
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;

        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classNameList.add("sticky");
          } else {
            header.classNameList.remove("sticky");
          }
        }
      </script> */}


    </div>

    <div ui-view="sidebar"></div>
    <div ui-view="content">








    <body>

       {/* Top section  */}
      <section>
        <div className="header-section">
          <div className="row about-us-banner">
            <div className="col-xl-4">
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" className="about-img-1 mx-auto" alt="" />
            </div>
            <div className="col-xl-4 about-us-header">
              <img src="PATTAYAR-New Dev copy.png" className="about-us-header-logo" alt="Pattayar Logo" />
              <br/>
              <h1>Our focus is</h1>
              <p>Winning customers for life by delivering exceptional business services and solutions across all the major verticals</p>
            </div>
            <div className="col-xl-4">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="about-img-2 mx-auto" alt="" />
            </div>
          </div>
        </div>
      </section>

       {/* About Pattayar  */}
      <section>
        <div className="about-pattayar-section">
          <div className="row">
            <div className="col-xl-8 about-pattayar-text">
              <h1>About Pattayar</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="col-xl-4 about-pattayar-img">
            </div>
          </div>
        </div>
      </section>

       {/* Mission vision and values  */}
      <section>
        <div className="mission-vision-values">
          <div className="row">
            <div className="col-xl-8 mission-vision-cards">
              <div className="row row-cols-1 row-cols-md-3 g-3">
                <div className="col">
                  <div className="card h-100">
                    <img src="https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Mission</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src="https://images.unsplash.com/photo-1545935950-b7a28791ad7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Vision</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src="https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Objectives</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 my-auto">
              <h1>Our Mission, Vision, and Objective</h1>
            </div>
          </div>
        </div>
      </section>

       {/* Growth journey  */}


       {/* The team  */}
      <section>
        <div className="the-team">
          <div className="row">
            <h1>Meet the people that help make it all happen!</h1>
            <div className="row row-cols-1 row-cols-md-5 g-5">
              <div className="col">
                <div className="card h-100">
                  <div className="team-1"></div>
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <h6>Designation</h6>
            
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="team-2"></div>
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <h6>Designation</h6>
  
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="team-3"></div>
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <h6>Designation</h6>
            
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="team-4"></div>
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <h6>Designation</h6>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="team-5"></div>
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <h6>Designation</h6>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </body>
    </div>
          


</div>
</div>
</div>



);
}

export default AboutUS;      