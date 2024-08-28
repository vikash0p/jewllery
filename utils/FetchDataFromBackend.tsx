import axios from "axios";

const baseUrl: string = "https://backendjewellery.onrender.com";

export const getJewelleryData = async () => {
  try {
    const response = await axios.get(`${baseUrl}/jewellery`);
    return response.data;
  } catch (error) {
    console.error("Error fetching jewellery data:", error);
    throw error; // Optional: rethrow the error if you want to handle it further up the call chain
  }
};
