import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { api, unsplash } from "./AxiosService.js";

class BackgroundsService {
  async getImages() {
    let res = await unsplash.get();
    console.log("[Images]", res.request.responseURL);
    ProxyState.image = res.request.responseURL;
    console.log("[ProxyState.image]", ProxyState.image);
  }
}

export const backgroundsService = new BackgroundsService();
