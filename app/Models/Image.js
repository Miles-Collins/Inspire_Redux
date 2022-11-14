export class Image {
  constructor(data) {
    this.author = data.author;
    this.image = data.imgUrl;
    this.largeImage = data.largeImgUrl;
    this.query = data.query;
    this.tags = data.tags;
    this.url = data.url;
  }
}
