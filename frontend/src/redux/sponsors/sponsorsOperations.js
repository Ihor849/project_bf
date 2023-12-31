import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:5000';
const fetchSponsors = createAsyncThunk(
    'sponsors/sponsorsAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/sponsors');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
const operations = {
    fetchSponsors
};
export default operations;