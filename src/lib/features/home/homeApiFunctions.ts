import { makeRequest } from "@/lib/helpers/makeRequest";

const base_url = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

export const getHomeData = async () => {
  const res = await makeRequest({
    method: "GET",
    maxBodyLength: Infinity,
    url: `${base_url}/home`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const searchHomePage = async ({ query }: { query: string }) => {
  const res = await makeRequest({
    method: "GET",
    maxBodyLength: Infinity,
    url: `${base_url}/home/search`,
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      query,
    },
  });
  return res;
};
