import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getCars = createAsyncThunk('cars/getcars', async () => {
	const res = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
	return res.data
})

const carSlice = createSlice({
	name: 'cars',
	initialState: {
		isLoading: false,
		errors: null,
		cars: []
	},
	reducers: {
		filterTipeDriver: (state, action) => {
			state.cars = state.cars.filter(car => {
				if(car.available.toString() === action.payload) return true
			})
		},
		filterJumlahPenumpang: (state, action) => {
			state.cars = state.cars.filter(car => {
				if(action.payload <= car.capacity) return true
			})
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCars.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getCars.rejected, (state, action) => {
				state.isLoading = false
				state.errors = action.error.message
			})
			.addCase(getCars.fulfilled, (state, action) => {
				state.isLoading = false
				state.cars = action.payload
			})
	}
})
export const {filterTipeDriver, filterJumlahPenumpang} = carSlice.actions
export default carSlice.reducer