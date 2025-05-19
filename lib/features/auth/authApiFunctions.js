import { makeRequest } from "@/lib/helpers/makeRequest";

const base_url = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

export const login = async ({ email, password }) => {
  console.log("requesting>>", {
    email,
    password,
  });
  const res = await makeRequest({
    method: "POST",
    maxBodyLength: Infinity,
    url: `${base_url}/auth/signin`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email,
      password,
    },
  });
  return res;
};
