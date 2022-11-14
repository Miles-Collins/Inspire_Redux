import { ProxyState } from "../AppState.js";
import { backgroundsService } from "../Services/BackgroundsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawBackground() {
  let image = ProxyState.image;
  if (image) {
    document.body.style.backgroundImage = `url(${image})`;
    document.body.style.backgroundSize = `cover`;
    document.body.style.backgroundPosition = `center`;
    console.log("[IMAGE]", image);
  }
}

export class BackgroundController {
  constructor() {
    console.log("Hello from the console.");
    ProxyState.on("image", _drawBackground);
    this.getImages();
  }

  async getImages() {
    try {
      await backgroundsService.getImages();
    } catch (error) {
      console.error("[Getting Images]", error);
      // @ts-ignore
      Pop.error(`Error ${error.message}`, error.message);
    }
  }
}
