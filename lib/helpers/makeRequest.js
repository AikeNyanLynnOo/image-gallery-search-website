import axios from "axios";

export const makeRequest = async (config) => {
  try {
    // console.log("Config>>", config);
    const response = await axios(config);
    // console.log("Response>>>", response);
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
    console.log(`Error Response ${JSON.stringify(error)}`);
    // console.log(`Error Response ${JSON.stringify(error)}`);
    if (error && error.response) {
      console.log(
        "Error Response",
        error.response.status,
        error.response.statusText
      );
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
