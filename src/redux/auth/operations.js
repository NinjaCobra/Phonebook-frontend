import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.defaults.baseURL = 'http://localhost:3001';

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// const instance = axios.create({
//     baseURL: process.env.REACT_APP_API_URL
// })

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const resp = await axios.post('/users/register', credentials);

      // After successful registration, add the token to the HTTP header if we need to
      // setAuthHeader(resp.data.token);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * GET @ /users/verify
 */
export const verify = createAsyncThunk(
  'auth/verify',
  async ({ code }, thunkAPI) => {
    try {
      const resp = await axios.get(`/users/verify/${code}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/verify
 */
export const resendVerify = createAsyncThunk(
  'auth/resendVerify',
  async (credentials, thunkAPI) => {
    try {
      const resp = await axios.post('/users/verify', credentials);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const resp = await axios.post('/users/login', credentials);

      // After successful login, add the token to the HTTP header
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('No valid token');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(token);
      const resp = await axios.get('/users/current');
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PATCH @ /users/avatars
 * body: { avatar }
 */

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (credentials, thunkAPI) => {
    try {
      const resp = await axios.patch('/users/avatars', credentials);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PATCH @ /users
 * body: { subscription }
 */

export const updateSubscription = createAsyncThunk(
  'auth/updateSubscription',
  async (subscription, thunkAPI) => {
    try {
      const resp = await axios.patch('/users', subscription);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
