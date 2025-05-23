import { makeRequest } from "@/lib/helpers/makeRequest";

const base_url = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
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

export const signup = async ({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  const res = await makeRequest({
    method: "POST",
    maxBodyLength: Infinity,
    url: `${base_url}/auth/signup`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      firstName,
      lastName,
      email,
      password,
    },
  });
  return res;
};
