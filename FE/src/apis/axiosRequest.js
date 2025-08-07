import axios from 'axios';

const baseURL = import.meta.env.VITE_REQUEST_API_URL;

const axiosRequest = axios.create({
  baseURL,
});

//accessToken 재발급 함수
const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    const res = await axios.get(`${baseURL}/token/access`, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    const { accessToken: newAccessToken } = res.data.accessToken;
    localStorage.setItem('accessToken', newAccessToken);
    return newAccessToken;
  } catch (err) {
    console.error(err);
  }
};

//요청 보낼 때 headers에 accessToken 추가
axiosRequest.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

axiosRequest.interceptors.response.use(
  response => {
    return response;
  },
  //응답으로 오류가 반환됐을 때
  async error => {
    const { config, response } = error;
    const originalRequest = config;
    //accessToken이 만료됐을 경우
    if (response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      //새로운 accessToken 발급
      const newAccessToken = await refreshAccessToken();
      //새로운 토큰 저장
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      //재발급받은 토큰으로 재요청
      return axiosRequest(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosRequest;
