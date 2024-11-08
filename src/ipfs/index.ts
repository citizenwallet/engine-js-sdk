import { getEnv } from "../utils/env";

export const downloadJsonFromIpfs = async <T>(uri: string): Promise<T> => {
  let url = uri;
  if (!url.startsWith("http")) {
    const baseUrl = getEnv("IPFS_URL");
    if (!baseUrl) {
      throw new Error("IPFS_URL is not set");
    }

    url = `${baseUrl}/${url}`;
  }

  const response = await fetch(url);
  const json = await response.json();

  return json;
};
