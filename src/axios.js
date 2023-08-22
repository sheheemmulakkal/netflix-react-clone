import axios from "axios";
import { BASE_URL } from "./Constants/Constant";

const instance = axios.create({
    baseURL: BASE_URL
  });

  instance.defaults.headers.common['Content-Type'] = 'application/json'
  instance.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWUxMTcyOTg5Y2QyNzkzMDY4ZjFhZDk4NDhkZWU5NSIsInN1YiI6IjY0ZTM2MTU1Yjc3ZDRiMTE0MDFiZjE3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Jc3VZtJHTf7UfcDWUfepaN756wsqU3-5Gf2TuAilh8'

export default instance