import React from 'react'

export default function Footer() {
	return (
		<>
			<footer id="footer">
				<div className="row ps-4 px-sm-5 mx-sm-5" style={{marginTop: '100px'}}>
					<div className="col-md-4 pb-3">
						<p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
						<p>binarcarrental@gmail.com</p>
						<p>081-233-334-808</p>
					</div>
					<div className="col-md-2 pb-3">
						<a className="text-decoration-none text-dark" href="#our-services">
							<p className="d-block pb-1 scale">Our Services</p>
						</a>
						<a href="#why-us" className="text-decoration-none text-dark">
							<p className="d-block pb-1 scale">Why Us</p>
						</a>
						<a href="#testimonial" className="text-decoration-none text-dark">
							<p className="d-block pb-1 scale">Testimonial</p>
						</a>
						<a href="#faq" className="text-decoration-none text-dark">
							<p className="d-block pb-1 scale">FAQ</p>
						</a>
					</div>
					<div className="col-md-4 pb-3">
						<p>Connect With Us</p>
						<a href="#" className="pe-3"><img className="scale2" src="img/fb.svg" alt="" /></a>
						<a href="#" className="pe-3"><img className="scale2" src="img/ig.svg" alt="" /></a>
						<a href="#" className="pe-3"><img className="scale2" src="img/twitter.svg" alt="" /></a>
						<a href="#" className="pe-3"><img className="scale2" src="img/mail.svg" alt="" /></a>
						<a href="#" className="pe-3"><img className="scale2" src="img/twitch.svg" alt="" /></a>
					</div>
					<div className="col-md-2 pb-3">
						<p>Copyright Binar 2022</p>
						<a href="#header" className="btn btn-primary scale" />
					</div>
				</div>
			</footer>
		</>
	)
}
