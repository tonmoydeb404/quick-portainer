import localStorageKeys from "@/config/local-storage-keys";
import useLocalStorageArray from "@/hooks/use-local-storage-array";
import { LoginPayload, LoginResponse } from "@/types/api";
import useSWRMutation from "swr/mutation";
import { mutationFetcher } from "./fetcher";

export const usePortainerLogin = () => {
  const { insert } = useLocalStorageArray(localStorageKeys.SAVED_URLS);
  return useSWRMutation<LoginResponse, Error, string, LoginPayload>(
    "/api/auth",
    mutationFetcher("POST"),
    {
      onSuccess: (data) => {
        localStorage.setItem(localStorageKeys.AUTH_TOKEN, data.jwt);
        insert(localStorage.getItem(localStorageKeys.CURRENT_URL));
      },
      onError: (error) => {
        localStorage.removeItem(localStorageKeys.AUTH_TOKEN);
      },
    }
  );
};
