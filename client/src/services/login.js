import axios from "axios";

const baseUrl = "/api/usuarios";

const login = async (credentials) => {
  const { data } = await axios.post(baseUrl, credentials);
  console.log(data);
  return data;
};

export default { login };
