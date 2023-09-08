import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://your-pet-shw3.onrender.com';
// axios.defaults.baseURL = 'mongodb://localhost:27017/your_pet';
const fetchNews = createAsyncThunk(
    'news/newsAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/news');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
const operations = {
    fetchNews
};
export default operations;