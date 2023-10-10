import React from 'react'
import '../../css/contact.css';

const Contact = () => {
  return (
    <div>
      <div id="contact-container">
        <div id="contact">
            <h1>Contact <span>Us</span></h1>
            <p><i className="material-icons" style={{color: " rgb(11, 123, 29)"}}>email</i><b> Email:</b> Master-shopping@gmail.com </p>
            <p><i className="material-icons" style={{color: " rgb(11, 123, 29)"}}>local_phone</i><b> Phone:</b> +962 796681834 </p>
            <p><i className="material-icons" style={{color: " rgb(11, 123, 29)"}}>location_on</i><b> Main Address:</b> Jordan . aqaba </p>
            {/* <p><i className="material-icons" style={{color: "#149BBB"}}>local_printshop</i><b> Fax:</b> 232412</p> */}
        </div>
          <div id="teaminfo">
              <h1>Our <span>Team</span></h1>
              <div className="infomembers">
                  <h3><u>Randah Alwageei  </u></h3>
                  <p><i className="material-icons" style={{color: " rgb(11, 123, 29)"}}>email</i><b> Email:</b> Randah@gmail.com</p>
              </div>
              <div className="infomembers">
                  <h3><u>Batool Aljonidee</u></h3>
                  <p><i className="material-icons" style={{color: " rgb(11, 123, 29)"}}>email</i><b> Email:</b> Batool@gmail.com</p>
              </div>
              <div className="infomembers">
                  <h3><u>Mohammed Mahasneh</u></h3>
                  <p><i className="material-icons" style={{color: " rgb(11, 123, 29)"}}>email</i><b> Email:</b> Mohammed@gmail.com</p>
              </div>
              <div className="infomembers">
                  <h3><u>Omar Salah</u></h3>
                  <p><i className="material-icons" style={{color: " rgb(11, 123, 29)"}}>email</i><b> Email:</b> Omar@gmail.com</p>
              </div>
              <div className="infomembers">
                  <h3><u>Alhareth Alalawneh</u></h3>
                  <p><i className="material-icons" style={{color: " rgb(11, 123, 29)"}}>email</i><b> Email:</b> Alhareth@gmail.com</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Contact