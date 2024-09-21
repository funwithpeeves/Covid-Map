import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../utils/api";

export const getData = createAsyncThunk(
    "covid/getData",
    async ({ code }) => {
        const params = { iso: code };

        const req1 = api.get("https://covid-19-statistics.p.rapidapi.com/reports", { params });

        const req2 = axios.get(`https://restcountries.com/v3.1/alpha/${code}`);

        const responses = await Promise.all([req1, req2]);

        const covid = {
            ...responses[0].data.data[0],
            ...responses[0].data.data[0].region,
        };

        delete covid.cities;
        delete covid.region;

        return { covid, country: responses[1].data[0] };
    }
)