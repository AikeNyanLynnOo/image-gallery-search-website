import axios from "axios";

// axios.defaults.withCredentials = true; // for server-side cookie
export const makeRequest = async (config: any) => {
  try {
    const response = await axios(config);
    return {
      status: response.status,
      statusText: response.statusText,
      success: (response.data && response.data.success) || false,
      message: (response.data && response.data.message) || "Custom Message",
      data: (response.data && response.data.data) || null,
    };
  } catch (error: any) {
    if (error && error.response) {
      const { status, statusText, data } = error.response;
      return {
        status,
        statusText,
        success: false,
        message: data.message || statusText || "Custom Error Message",
        data: data || null,
      };
    }
  }
};
