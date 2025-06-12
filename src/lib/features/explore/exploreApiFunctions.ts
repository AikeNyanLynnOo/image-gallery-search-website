import { makeRequest } from "@/lib/helpers/makeRequest";

const base_url = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

interface ExploreParams {
  page: number;
  limit: number;
  uploadedWithin?: string;
  sortBy?: string;
  topic?: string;
}

export const getExploreData = async (params: ExploreParams) => {
  const res = await makeRequest({
    method: "GET",
    maxBodyLength: Infinity,
    url: `${base_url}/explore`,
    headers: {
      "Content-Type": "application/json",
    },
    params,
  });
  return res;
}; 