import axios from "axios";

const api = axios.create({
  baseURL: 'https://covid-19-statistics.p.rapidapi.com/reports',
  headers: {
    'x-rapidapi-key': '25ea486370msheaf43ad37e37c3ap146ebbjsne38fad4550d5',
    'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
  },
});

export default api;