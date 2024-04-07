import { makeRequest } from "./makeRequest";

export const getCollections = async (params) => {
  const res = await makeRequest({
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.API_URL}/collections`,
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      client_id: process.env.ACCESS_ID,
      ...params,
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
    params: {
      client_id: process.env.ACCESS_ID,
      ...params,
    },
  });
  return res;
};
export const getRandomPhoto = async (params) => {
  const res = await makeRequest({
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.API_URL}/photos/random`,
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      count: 1, // default
      orientation: "landscape",
      client_id: process.env.ACCESS_ID,
      ...params,
    },
  });
  return res;
};
export const getPhotos = async ({ params, ENV }) => {
  if (params.collection) {
    params.count = 30;
  }
  const res = await makeRequest({
    method: "get",
    maxBodyLength: Infinity,
    url: `${ENV.API_URL}${
      (params.collection && `/photos/random`) || "/search/photos"
    }`,
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      client_id: ENV.ACCESS_ID,
      ...params,
    },
  });
  return res;
};
