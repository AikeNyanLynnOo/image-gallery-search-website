import axios from "axios";

export const makeRequest = async (config) => {
  try {
    const response = await axios(config);
    return {
      status: response.status,
      statusText: response.statusText,
      success:
        parseInt(response.status) >= 200 && parseInt(response.status) < 300
          ? true
          : false,
      message: response.statusText || "Custom Message",
      data: response.data || null,
    };
  } catch (error) {
    if (error && error.response) {
      const { status, statusText } = error.response;
      return {
        status,
        statusText,
        success: false,
        message: statusText || "Custom Error",
        data: null,
      };
    }
  }
};
