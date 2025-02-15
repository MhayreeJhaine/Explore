import axios from "axios";

const api_url = "https://restcountries.com/v3.1/all";

const fetchCountries = async () => {
  try {
    const response = await axios.get(api_url);
    return response.data;
  } catch (error) {
    console.log("Error fetching countries data!", error);
    throw error;
  }
};
export default fetchCountries;
