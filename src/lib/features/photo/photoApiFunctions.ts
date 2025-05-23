import { makeRequest } from "@/lib/helpers/makeRequest";

const base_url = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

export const getRandomImage = async () => {
  const res = await makeRequest({
    method: "GET",
    maxBodyLength: Infinity,
    url: `${base_url}/images/random`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
export const getPublicImages = async ({
  collection, // for authenticated user only
  topic,
  keyword,
  uploadedWithin,
  sortBy,
  page = 1, // Default to first page
  limit = 10, // Default to 10 items per page
}: {
  collection?: string;
  topic?: string;
  keyword?: string;
  uploadedWithin?: string;
  sortBy?: string;
  page?: number;
  limit?: number;
}) => {
  const res = await makeRequest({
    method: "GET",
    maxBodyLength: Infinity,
    url: `${base_url}/images/public`,
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      collection,
      topic,
      keyword,
      uploadedWithin,
      sortBy,
      page,
      limit,
    },
  });
  return res;
};
export const getTopics = async () => {
  const res = await makeRequest({
    method: "GET",
    maxBodyLength: Infinity,
    url: `${base_url}/topics`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
