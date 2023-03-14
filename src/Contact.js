import React from 'react';
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// import { useState } from 'react';

// import axios from 'axios';
// import axios from 'axios';
// import { ToastContainer,toast } from 'react-toastify';
// import 'rect-toastify/dist/ReactToastify.css';





export const Confirm = () => {
  return (
	window.alert("Are you sure to submit ?")
  )
}




// window.confirm("Are you sure to submit ?");
export const Contact = () => {
	



	return (


		<>
			<section id="contact">
				<div className="section-content">
					<h1 className="section-header contact-h4">Get in <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
					<h4 className="contact-h4">Contact with us for more information about Todo app.For further details please stay tunned.</h4>
				</div>
				<div className="contact-section">
					<div className="container ">
						<form   autoComplete='off' onSubmit={Confirm} >
							<div className="col-md-6 form-line">
								<div className="form-group">
									<label >Your name</label>
									<input type="text" className="form-control" id="name" name="data[name]"  placeholder=" Enter Name" required 
									/>
								</div>
								<div className="form-group">
									<label >Email Address</label>
									<input type="email" className="form-control"   id="email" name="data[email]" placeholder=" Enter Email id" required
									/>
								</div>
								<div className="form-group">
									<label >Mobile No.</label>
									<input type="tel" className="form-control" id="message" name="data[message]"  placeholder=" Enter 10-digit mobile no."required 
									/>
									 {/* <label for="message">Message</label>
    <textarea rows="4" placeholder="Your Message" id="message" name="data[message]" minlength="10px" maxlength="100px" required></textarea>
								</div> */}
								</div>
							</div>
							<div className="">
								
							<div>
								<br/>
							<button type="submit" id="submit" name="submit" className='btn btn-success mt-3 m-3 '>Success</button>
							
								<br/>	<br/>	<br/>	

								</div>

							</div>
						</form>
					</div>
				</div>
			</section>
		</>


	)


		}



export default Contact;


