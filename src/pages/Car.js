import {useState} from "react"
import {Helmet} from "react-helmet"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {useDispatch, useSelector} from "react-redux"
import {getCars} from "../slice/carSlice"
import {filterJumlahPenumpang, filterTipeDriver} from "../slice/carSlice"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Car() {
	const [focusForm, setFocusForm] = useState(false)
	const {cars, isFetch, isLoading, errors} = useSelector((state) => state.cars)
	const dispatch = useDispatch()

	const initialForm = {
		tipeDriver: null,
		tanggal: null,
		waktuJemput: null,
		jumlahPenumpang: null
	}
	const [formData, setFormData] = useState(initialForm)

	const handleChange = (e) => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value
		}));
	}
	const handleChangeTanggal = (date) => {
		const newDate = new Date(date)
		const formattedDate = `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`
		setFormData(prevState => ({
			...prevState,
			tanggal: formattedDate
		}));
	}
	const handleSearchCars = (e) => {
		e.preventDefault()
		dispatch(getCars()).then(() => {
			dispatch(filterTipeDriver(formData.tipeDriver))
			if(formData.jumlahPenumpang) dispatch(filterJumlahPenumpang(formData.jumlahPenumpang))
		})
	}

	return (
		<>
			<Helmet>
				<title>Binar Rent Car | List Cars</title>
			</Helmet>
			{
				focusForm && <div id="focus-form" />
			}
			<div className="container-fluid p-0">
				<Header />
				<section id="form-cars" className="position-relative d-flex justify-content-center">
					<div className="w-75 py-4 px-3 bg-white rounded-3 shadow-lg">
						<form id="form" onSubmit={handleSearchCars} className="row d-flex justify-content-sm-end" required>
							<div className="col-sm ms-sm-2 pe-sm-0">
								<label className="form-label">Tipe Driver</label>
								<select onChange={handleChange} onFocus={() => setFocusForm(true)} onBlur={() => setFocusForm(false)} id="tipeDriver" className="shadow-none form-select form-select-sm text-secondary text-opacity-75 input" name="tipeDriver" aria-label=".form-select-sm example" required>
									<option className="text-dark" value="">Pilih Tipe Driver</option>
									<option className="text-dark" value="true">Dengan Sopir</option>
									<option className="text-dark" value="false">Tanpa Sopir (Lepas Kunci)</option>
								</select>
							</div>
							<div className="col-sm pe-sm-0">
								<label htmlFor="tanggal" className="form-label">Tanggal</label>
								<DatePicker value={formData.tanggal} onBlur={() => setFocusForm(false)} onFocus={() => setFocusForm(true)} onChange={handleChangeTanggal} type="tanggal" name="tanggal" id="tanggal" className="shadow-none form-control text-secondary text-opacity-75 fi-calendar input" placeholderText="Pilih Tanggal" style={{fontSize: '12px'}} required />
							</div>
							<div className="col-sm mb-2 pe-sm-0">
								<label className="form-label">Waktu Jemput</label>
								<select onChange={handleChange} onFocus={() => setFocusForm(true)} onBlur={() => setFocusForm(false)} className="shadow-none form-select form-select-sm text-secondary text-opacity-75 fi-clock input" name="waktuJemput" id="waktuJemput" required>
									<option className value="">Pilih Waktu</option>
									<option className="text-dark" value="08:00">08.00 WIB</option>
									<option className="text-dark" value="09:00">09.00 WIB</option>
									<option className="text-dark" value="10:00">10.00 WIB</option>
									<option className="text-dark" value="11:00">11.00 WIB</option>
									<option className="text-dark" value="12:00">12.00 WIB</option>
								</select>
							</div>
							<div className="col-sm mb-2">
								<label className="form-label" htmlFor="jumlahPenumpang">Jumlah Penumpang (optional)</label>
								<input type="text" onChange={handleChange} onFocus={() => setFocusForm(true)} onBlur={() => setFocusForm(false)} name="jumlahPenumpang" id="jumlahPenumpang" className="shadow-none form-control text-secondary text-opacity-75 rounded-1 input fi-users" placeholder="Jumlah Penumpang" style={{fontSize: '12px'}} />
							</div>
							<div className="col-sm align-self-center d-sm-block d-flex justify-content-center mt-3">
								<button type="submit" className="btn btn-success">Cari Mobil</button>
							</div>
						</form>
					</div>
				</section>
				<section className="position-relative w-75 mx-auto">
					<div id="search-list" className="row">
						{
							errors && <h1 className="text-center">{errors}</h1>
						}
						{
							isLoading && <h1 className="text-center">Loading...</h1>
						}
						{
							isFetch && cars.length > 0 &&
							cars.map(car => (
								<div className="col-sm-4 mb-4">
									<div className="card px-3 scale border-1 border-opacity-10 shadow-lg " style={{height: '650px'}}>
										<div className="px-2 pt-4">
											<img className="img-fluid rounded-1" style={{width: '100%', height: '200px'}} src={car.image} alt="car" />
										</div>
										<div className="ms-auto me-3 mt-1">
											<p className={"fw-bolder bg-opacity-25 " + (car.available ? 'text-success' : 'text-danger')}>{car.available ? 'Dengan Sopir' : 'Tanpa Sopir'}</p>
										</div>
										<div className="card-body">
											<div className="row">
												<div className="row d-flex justify-content-around">
													<p className="fw-semibold">{car.manufacture}/{car.model}</p>
												</div>
												<h3 className="card-title fw-bolder">Rp {car.rentPerDay}/hari</h3>
												<p className="card-text">{car.description}</p>
											</div>
											<div className="row mt-4">
												<ul type="none">
													<li className="mb-3"><img className="me-2 " src="img/fi_users.svg" alt="" /> <span>{car.capacity} Orang</span></li>
													<li className="mb-3"><img className="me-2" src="img/fi_settings.svg" alt="" /> <span>{car.transmission}</span></li>
													<li className="mb-3"><img className="me-2" src="img/fi_calendar.svg" alt="" /> <span>Tahun {car.year}</span></li>
												</ul>
											</div>
											<div id="btn-pilih-mobil" className="row px-3 mb-auto">
												<button className="btn btn-success py-2 fw-semibold">Pilih Mobil</button>
											</div>
										</div>
									</div>
								</div>
							))
						}
						{
							isFetch && cars.length <= 0 &&
							<div className="d-flex justify-content-center">
								<span className="alert alert-danger">Data Mobil Tidak Ditemukan <img src="./img/triangel.svg" style={{fontSize: '20px'}} /></span>
							</div>
						}
					</div>
				</section >
				<Footer />
			</div >
		</>
	)
}
