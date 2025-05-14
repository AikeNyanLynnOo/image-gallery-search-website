import { makeRequest } from "./makeRequest";

export const getRandomImage = async (params) => {
  const res = await makeRequest({
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.API_URL}/images/random`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
export const getPublicImages = async ({
  collection,
  topic,
  keyword,
  dateRange,
  sortBy,
  page = 1, // Default to first page
  limit = 10, // Default to 10 items per page
}) => {
  const res = await makeRequest({
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.API_URL}/images/public`,
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      collection,
      topic,
      keyword,
      dateRange,
      sortBy,
      page,
      limit,
    },
  });
  return res;
};
export const getTopics = async (params) => {
  const res = await makeRequest({
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.API_URL}/topics`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
