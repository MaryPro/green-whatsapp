import axios from "axios";

const idInstance = localStorage.getItem("idInstance");
const apiTokenInstance = localStorage.getItem("apiTokenInstance");
const baseURL = "https://api.green-api.com";

export const sendMessage = async (phoneNumber: string, message: string) => {
  try {
    const response = await axios.post(
      `${baseURL}/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
      {
        chatId: `${phoneNumber}@c.us`,
        message: message,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMessage = async () => {
  try {
    const response = await axios.get(
      `${baseURL}/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteMessage = async (receiptId: string) => {
  try {
    await axios.delete(
      `${baseURL}/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`
    );
  } catch (error) {
    console.error(error);
  }
};
