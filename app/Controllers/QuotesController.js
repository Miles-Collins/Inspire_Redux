import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawQuote() {
  let quote = ProxyState.quote;
  console.log(quote);
  let template =
    /*html*/
    `
  <div class="col-6 text-center text-light">
    <h5 id="show" class="textBorder">${quote.body} <br>
    -${quote.author}</h5>
  </div>
  `;
  // @ts-ignore
  document.getElementById("quote").innerHTML = template;
}

export class QuotesController {
  constructor() {
    ProxyState.on("quote", _drawQuote);
    this.getQuote();
  }

  async getQuote() {
    try {
      await quotesService.getQuote();
    } catch (error) {
      console.error(error);
      Pop.toast(error.message, "error");
    }
  }
}
