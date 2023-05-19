import axios from "axios";

const baseURL = "https://api.green-api.com";

export const getStateInstance = async (
  idInstance: string,
  apiTokenInstance: string
) => {
  try {
    const response = await axios.get(
      `${baseURL}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
