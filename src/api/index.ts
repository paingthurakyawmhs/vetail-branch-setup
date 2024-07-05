import { token } from "@/store/client/store";
import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://mysterious.shopdoora.com/vetailAuth/api/",
});

export const authJsonHeader = (file?: boolean) => {
  return {
    "Content-Type": file ? "multipart/form-data" : "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };
};
