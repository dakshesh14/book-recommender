import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const apiFetcher = async <T>(url: string) => {
  const response = await axios.get<T>(baseUrl + url);
  return response.data;
};
