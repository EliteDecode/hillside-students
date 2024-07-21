import axios from "axios";

export const API_URL = "https://backend.hust.edu.ng/hust/api/v1/student";

// export const API_URL = "http://localhost:5000/hust/api/v1/student";

//Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);

  return response.data;
};

//verify

const verify = async (data) => {
  const response = await axios.get(
    `${API_URL}/verify/${data.id}/${data.string}`
  );

  return response.data;
};

//logout

const logout = async () => {
  localStorage.removeItem("hust_student");
};

//login

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);

  if (response.data) {
    localStorage.setItem("hust_student", JSON.stringify(response.data));
  }
  return response.data;
};

//update

const update = async (studentData, studentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `${API_URL}/edit-student/${studentId}`,
    studentData,
    config
  );
  console.log(response);

  if (response.data) {
    localStorage.setItem("hust_student", JSON.stringify(response.data));
  }
  return response.data;
};

const singleStudent = async (studentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/${studentId}`, config);
  console.log(response.data);
  return response.data;
};

const authService = {
  register,
  update,
  logout,
  verify,
  login,
  singleStudent,
};

export default authService;
