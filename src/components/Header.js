import {useState} from "react";
import {Link} from "react-router-dom";

export default function Header() {
	const [nav, setNav] = useState(false)
	return (
		<>
			{
				nav && <div id="focus-sidenav" />
			}
			<header id="header" className="abu-abu pt-3">
				<div className="row mb-5 ps-sm-5 px-3">
					<div className="col">
						<nav id="nav-satu" className="d-sm-flex justify-content-sm-between d-none pt-3 pe-5">
							<a href="#footer" className="btn btn-primary scale mt-1" />
							<div className="d-flex">
								<a className="text-decoration-none text-dark px-3 pt-2 scale2" href="/#our-services">Our Services</a>
								<a className="text-decoration-none text-dark px-3 pt-2 scale2" href="/#why-us">Why Us</a>
								<a className="text-decoration-none text-dark px-3 pt-2 scale2" href="/#testimonial">Testimonial</a>
								<a className="text-decoration-none text-dark px-3 pt-2 scale2" href="/#faq">FAQ</a>
								<a href="#" className="btn btn-success scale">Register</a>
							</div>
						</nav>
						<nav id="nav-dua" className="pt-3 ps-2 d-flex justify-content-between d-sm-none">
							<div>
								<a href="#footer" className="btn btn-primary mt-1" />
							</div>
							<div>
								{
									nav &&
									<div id="mySidenav" className="sidenav">
										<a href="#" className="closebtn" onClick={() => setNav(false)}>×</a>
										<a href="#" className="fw-bold fs-3">BCR</a>
										<a href="/#our-services">Our Service</a>
										<a href="/#why-us">Why Us</a>
										<a href="/#testimonial">Testimonial</a>
										<a href="/#faq">FAQ</a>
										<a href="/#register" className="d-inline-block btn btn-success p-2 ms-4 mt-3 text-white ">Register</a>
									</div>
								}
								<div className="d-inline pt-5">
									<div className="container-fluid d-inline px-1 " style={{fontSize: '30px', cursor: 'pointer'}} onClick={() => setNav(true)}>☰</div>
								</div>
							</div>
						</nav>
					</div>
				</div>
				<div className="row ps-sm-5 ps-4 position">
					<div className="col-md-6">
						<h1 className="fw-bolder mb-5">Sewa &amp; Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
						<p>
							Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhan untuk sewa mobil selama 24 jam.
						</p>
						<Link to={'/car'} className="btn btn-success fw-bold text-white scale mb-5">Mulai Sewa Mobil</Link>
					</div>
					<div className="col-md-6">
						<img className="scale img-fluid" src="img/car.png" alt="car" />
					</div>
				</div>
			</header>
		</>
	)
}
