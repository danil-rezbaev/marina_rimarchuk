import {createAsyncThunk} from "@reduxjs/toolkit";
import {HttpResponse} from "../types";
import axios from "../../axios";

export const customAsyncThunk = <T extends Record<string, any>>(path: string, method: 'post' | 'get' | 'delete' | 'patch', args?: any) => createAsyncThunk<HttpResponse<T>>
(path, async (_, {rejectWithValue}) => {
	return axios[method](`/${path}`, args)
		.then((el) => el.data)
		.catch((err) => {
			console.log({err})
			const {statusMessage, errorMessage} = err.response.data;
			return rejectWithValue(err.data);
		});
})