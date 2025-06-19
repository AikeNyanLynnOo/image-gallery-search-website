// src/lib/features/collection/collectionApiFunctions.ts

import { makeRequest } from "@/lib/helpers/makeRequest";

const base_url = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

export interface CollectionParams {
  page: number;
  limit: number;
  keyword?: string;
  imageCount?: string;
  dateCreated?: string;
  sortBy?: string;
}

export const getCollectionsData = async (params: CollectionParams): Promise<any> => {
  const res = await makeRequest({
    method: "GET",
    maxBodyLength: Infinity,
    url: `${base_url}/collections/page`,
    headers: {
      "Content-Type": "application/json",
    },
    params: params,
  });
  return res;
}; 