import axios from "axios";

const httpClient = async ({
  method,
  url,
  data = null,
  params = {},
  headers = {},
}) => {
  try {
    const response = await axios({
      method,
      url: `${url}`,
      data,
      params,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });

    return response.data;
  } catch (error) {
    console.error("HTTP Error:", error.response || error.message);
    throw error.response || error;
  }
};

export default httpClient;
