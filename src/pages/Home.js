import React from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Home() {
	return (
		<>
			<Helmet>
				<title>Binar Rent Car | Home</title>
				<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
				<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
			</Helmet>
			<div className="container-fluid p-0">
				<Header />
				<section id="our-services" className="pt-5 mt-5">
					<div className="row justify-content-center ps-sm-5">
						<div className="col-sm-6 mb-4 mt-5 d-flex justify-content-center">
							<img className="scale d-inline-block ps-3 w-75" src="img/service.png" />
						</div>
						<div className="col-md-5 ps-sm-0 ps-5 pe-5 mt-5">
							<h2 className="fw-bold">
								Best Car Rental for any kind of trip in (Lokasimu)!
							</h2>
							<p className="pt-4">
								Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
							</p>
							<ul type="none" style={{marginLeft: '-32px'}}>
								<li className="pb-3">
									<img src="img/list.png" className="d-inline pe-2" />
									<span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
								</li>
								<li className="pb-3">
									<img src="img/list.png" className="d-inline pe-2" />
									<span>Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
								</li>
								<li className="pb-3">
									<img src="img/list.png" className="d-inline pe-2" />
									<span>Sewa Mobil Jangka Panjang Bulanan</span>
								</li>
								<li className="pb-3">
									<img src="img/list.png" className="d-inline pe-2" />
									<span>Gratis Antar - Jemput Mobil di Bandara</span>
								</li>
								<li className="pb-3">
									<img src="img/list.png" className="d-inline pe-2" />
									<span>Layanan Airport Transfer / Drop In Out</span>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section id="why-us" className="pt-5 mt-5">
					<div className="row text-sm-start text-center ps-sm-5 ms-sm-5">
						<h2 className="fw-bold">Why Us?</h2>
						<p>Mengapa harus pilih Binar Car Rental?</p>
					</div>
					<div className="row mt-3 px-5 ms-sm-5">
						<div className="col-md-3 pb-4">
							<div className="card px-3 pt-3 scale">
								<div className="ps-3">
									<img className="svg-icon" src="img/jempol.svg" alt="jempol" />
								</div>
								<div className="card-body">
									<h3 className="card-title fw-bold">Mobil Lengkap</h3>
									<p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih, dan terawat.</p>
								</div>
							</div>
						</div>
						<div className="col-md-3 pb-4">
							<div className="card px-3 pt-3 scale">
								<div className="ps-3">
									<img className="svg-icon" src="img/price.svg" alt="jempol" />
								</div>
								<div className="card-body">
									<h3 className="card-title fw-bold">Harga Murah</h3>
									<p className="card-text">
										Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-3 pb-4">
							<div className="card px-3 pt-3 scale">
								<div className="ps-3">
									<img className="svg-icon" src="img/24hrs.svg" alt="jempol" />
								</div>
								<div className="card-body">
									<h3 className="card-title fw-bold">Layanan 24 Jam</h3>
									<p className="card-text">
										Siap melayani kebuthan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-3 pb-4">
							<div className="card px-3 pt-3 scale">
								<div className="ps-3">
									<img className="svg-icon" src="img/professional.svg" alt="jempol" />
								</div>
								<div className="card-body">
									<h3 className="card-title fw-bold">Sopir Professional</h3>
									<p className="card-text">
										Sopir yang professional, berpengalaman, jujur, ramah, dan selalu tepat waktu.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="testimonial" className="pt-5 mt-5">
					<div className="row">
						<h2 className="fw-bold text-center">Testimonial</h2>
						<p className="text-center">Berbagai review positif dari pelanggan kami</p>
					</div>
					<div className="row mt-2 d-flex justify-content-center px-3 px-sm-0">
						<div className="gallery js-flickity" data-flickity-options="{&quot;wrapAround&quot;: true }">
							<div className="gallery-cell rounded-3">
								<div className="row px-4 py-5 p-sm-5 ">
									<div className="col-md-3 pb-4 pb-sm-0 d-flex justify-content-center d-sm-flex align-items-sm-center">
										<img className src="img/avatar.png " alt="" />
									</div>
									<div className="col-md-9 px-4">
										<div className="d-flex justify-content-center d-sm-inline">
											<img src="img/star1.png" />
											<img src="img/star1.png" />
											<img src="img/star1.png" />
											<img src="img/star1.png" />
											<img src="img/star1.png" />
										</div>
										<p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corrupti molestiae illum, libero est cum quibusdam eius, doloribus velit sequi unde expedita consequatur officiis eligendi rem accusantium! Alias, veniam praesentium?</p>
										<p className="fw-medium">Alvin Ardi 21, Sidoarjo</p>
									</div>
								</div>
							</div>
							<div className="gallery-cell rounded-3">
								<div className="row px-4 py-5 p-sm-5">
									<div className="col-md-3 pb-4 pb-sm-0 d-flex justify-content-center d-sm-flex align-items-sm-center">
										<img className="rounded-circle" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" style={{width: '80px', height: '80px'}} />
									</div>
									<div className="col-md-9 px-4">
										<div className="d-flex justify-content-center d-sm-inline">
											<img src="img/star1.png" />
											<img src="img/star1.png" />
											<img src="img/star1.png" />
											<img src="img/star1.png" />
										</div>
										<p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corrupti molestiae illum, libero est cum quibusdam eius, doloribus velit sequi unde expedita consequatur officiis eligendi rem accusantium! Alias, veniam praesentium?</p>
										<p className="fw-medium">Foo Barr 42, Surabaya</p>
									</div>
								</div>
							</div>
							<div className="gallery-cell rounded-3">
								<div className="row px-4 py-5 p-sm-5">
									<div className="col-md-3 pb-4 pb-sm-0 d-flex justify-content-center d-sm-flex align-items-sm-center">
										<img className src="img/avatar2.png " alt="" />
									</div>
									<div className="col-md-9 px-4">
										<div className="d-flex justify-content-center d-sm-inline">
											<img src="img/star1.png" />
											<img src="img/star1.png" />
											<img src="img/star1.png" />
										</div>
										<p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corrupti molestiae illum, libero est cum quibusdam eius, doloribus velit sequi unde expedita consequatur officiis eligendi rem accusantium! Alias, veniam praesentium?</p>
										<p className="fw-medium">Elissa, Bromo</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="sewa-mobil" className="pt-5 mt-5">
					<div className="row d-flex justify-content-center px-4">
						<div className="col-md-10 biru p-sm-5 p-4 text-white rounded-4 mt-5">
							<h1 className="fw-bold text-center w-100">
								Sewa Mobil di (Lokasimu) Sekarang
							</h1>
							<p className="mt-5 text-center w-50 mx-auto">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia pariatur consequuntur eius reiciendis facere porro est sed? Quas ut sint reiciendis maiores, eaque nesciunt eligendi?
							</p>
							<div className="d-flex justify-content-center my-5 mb-sm-0">
								<Link to={'/car'} type="button" className="btn btn-success text-white scale">Mulai Sewa Mobil</Link>
							</div>
						</div>
					</div>
				</section>
				<section id="faq" className="pt-5 mt-5">
					<div className="row d-flex justify-content-center">
						<div className="col-md-5">
							<h2 className="fw-bold ps-5">
								Frequently Asked Question
							</h2>
							<p className="ps-5">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
						</div>
						<div className="col-md-6 px-4">
							<div className="accordion" id="accordionExample">
								<div className="accordion-item border border-2 scale rounded-2">
									<h2 className="accordion-header" id="headingOne">
										<a className="accordion-button collapsed text-decoration-none bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={{fontSize: '14px'}}>
											Apa saja syarat yang dibutuhkan?
										</a>
									</h2>
									<div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, minima maxime. Fugit repellat, earum libero architecto exercitationem ex amet animi, quasi, dignissimos eaque debitis? Corporis voluptas molestiae animi ipsum eos.
										</div>
									</div>
								</div>
								<div className="accordion-item mt-3 border border-2 scale rounded-2">
									<h2 className="accordion-header" id="headingTwo">
										<a className="accordion-button collapsed text-decoration-none bg-white text-dark" id="sembarang" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{fontSize: '14px'}}>
											Berapa hari minimal sewa mobil lepas kunci?
										</a>
									</h2>
									<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nisi cupiditate provident delectus ad velit quam. Dolorum minima architecto veniam alias at sint itaque iusto. Quasi, beatae amet! Aut, qui?
										</div>
									</div>
								</div>
								<div className="accordion-item mt-3 border border-2 scale rounded-2">
									<h2 className="accordion-header" id="headingThree">
										<a className="accordion-button collapsed text-decoration-none bg-white text-dark" id="sembarang" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{fontSize: '14px'}}>
											Berapa hari sebelumnya sebaiknya booking sewa mobil?
										</a>
									</h2>
									<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, perferendis quae excepturi iste optio debitis quaerat reiciendis obcaecati! Quae vitae aliquid error enim, dolorum explicabo!
										</div>
									</div>
								</div>
								<div className="accordion-item mt-3 border border-2 scale rounded-2">
									<h2 className="accordion-header" id="headingFour">
										<a className="accordion-button collapsed text-decoration-none bg-white text-dark" id="sembarang" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{fontSize: '14px'}}>
											Apakah ada biaya antar-jemput?
										</a>
									</h2>
									<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tenetur libero voluptates corporis ex neque nesciunt temporibus repudiandae non.
										</div>
									</div>
								</div>
								<div className="accordion-item mt-3 border border-2 scale rounded-2">
									<h2 className="accordion-header" id="headingFive">
										<a className="accordion-button collapsed text-decoration-none bg-white text-dark" id="sembarang" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{fontSize: '14px'}}>
											Bagaimana jika terjadi kecelakaan?
										</a>
									</h2>
									<div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel optio eos quas, itaque illo tempore architecto et doloremque id? Est qui eum, esse nihil possimus non corrupti odio corporis!
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>

		</>
	)
}
