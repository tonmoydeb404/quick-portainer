import localStorageKeys from "@/config/local-storage-keys";

type Options<T> = { arg: T };
export const mutationFetcher =
  <T,>(method: string) =>
  async (url: string, options: Options<T>) => {
    const { arg } = options;
    const baseUrl = localStorage.getItem(localStorageKeys.CURRENT_URL);
    const authToken = localStorage.getItem(localStorageKeys.AUTH_TOKEN);

    if (!baseUrl) {
      throw new Error("No current URL saved");
    }

    const api = `${baseUrl}${url}`;
    const response = await fetch(api, {
      method: method,
      body: JSON.stringify(arg),
      headers: {
        "Content-Type": "application/json",
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
    });
    if (!response.ok) throw new Error("Failed to fetch");
    return response.json();
  };
