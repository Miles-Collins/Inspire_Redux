import { Image } from "./Models/Image.js";
import Value from "./Models/Value.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";

class AppState extends EventEmitter {
  user = {};
  profile = {};
  /** @type {Value[]} */
  values = [];
  /** @type {import('./Models/Image').Image} */
  // @ts-ignore
  image = {};
  quote = {};
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
