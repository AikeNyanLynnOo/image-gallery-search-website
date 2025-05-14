import axios from "axios";

export const makeRequest = async (config) => {
  try {
    const response = await axios(config);
    return {
      status: response.status,
      statusText: response.statusText,
      success: (response.data && response.data.success) || false,
      message: (response.data && response.data.message) || "Custom Message",
      data: (response.data && response.data.data) || null,
    };
  } catch (error) {
    if (error && error.response) {
      console.log("Error response>>", error.response);
      const { status, statusText } = error.response;
      return {
        status,
        statusText,
        success: false,
        message: statusText || "Custom Error",
        data: (error.response.data && error.response.data.data) || null,
      };
    }
  }
};
