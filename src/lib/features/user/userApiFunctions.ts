import { makeRequest } from "@/lib/helpers/makeRequest";
import { getCookie } from "cookies-next";

const base_url = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";

export const getUserProfile = async () => {
  const accessToken = getCookie(ACCESS_TOKEN);

  const res = await makeRequest({
    method: "GET",
    url: `${base_url}/profile`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
