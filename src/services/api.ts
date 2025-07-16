import axios, {type AxiosInstance} from "axios"

const API_BASE_URL = 'http://localhost:8080/api/services/'
const API_TIMEOUT = 5000 // 5 seconds

// Create axios instance with default configuration
const apiClient: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: API_TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})

export default apiClient