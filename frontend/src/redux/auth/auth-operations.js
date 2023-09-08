import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://your-pet-shw3.onrender.com';
axios.defaults.baseURL = 
'https://cloud.mongodb.com/v2/64ae5fbc11a4a25a827f1cd4#/metrics/replicaSet/64ae6a8a2596314f8d79387b/explorer/your_pet';


const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post(
                '/users/auth/register',
                credentials
            );
           
            token.set(data.token);
            
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/auth/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
       
        return thunkAPI.rejectWithValue(error.message);
    }
});

const fetchCurrentUser = createAsyncThunk(
    'auth/current',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
           
            return thunkAPI.rejectWithValue();
        }

        token.set(persistedToken);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const fetchUpdateUser = createAsyncThunk(
    'auth/update',
    async (updatedData, thunkAPI) => {
        try {
            const { data } = await axios.patch('/users/update', updatedData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);



const operations = {
    register,
    logIn,
    fetchCurrentUser,
    logOut,
    fetchUpdateUser,
   
};

export default operations;
