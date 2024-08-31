import axios from "axios";

const baseUrl: string = "https://backendjewellery.onrender.com";

export const getJewelleryData = async () => {
  try {
    const response = await axios.get(`${baseUrl}/allJewellerys`);
    return response.data;

  } catch (error) {
    console.error("Error fetching jewellery data:", error);
    throw error; // Optional: rethrow the error if you want to handle it further up the call chain
  }
};

export const getJewelleryPaginationData = async ({page,limit}:{page:number, limit:number}) => {
  try {
    const response = await axios.get(`${baseUrl}/jewellery?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching jewellery data:", error);
    throw error; // Optional: rethrow the error if you want to handle it further up the call chain
  }
};

export const getSingleJewelleryData = async (id: string) => {
  try {
    const response = await axios.get( `${baseUrl}/jewellery/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching jewellery data:", error);
    throw error; // Rethrow the error for further handling
  }
};