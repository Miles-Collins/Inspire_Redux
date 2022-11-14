import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { api } from "./AxiosService.js";

class QuotesService {
  async getQuote() {
    let res = await api.get("quotes");
    ProxyState.quote = new Quote(res.data);
    console.log("[QUOTES]", res.data);
    console.log("[QUOTES]", ProxyState.quote);
  }
}

export const quotesService = new QuotesService();
