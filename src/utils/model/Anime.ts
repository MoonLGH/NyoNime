interface AnimeI {
    title:string;
    url:string;
    id:string;
    thumbnail_url:string;
}

export class Anime implements AnimeI {
  title:string;
  url:string;
  id:string;
  thumbnail_url:string;
  constructor(title:string, url:string, id:string, thumb:string) {
    this.title = title;
    this.url = url;
    this.id = id;
    this.thumbnail_url = thumb;
  }

  public toJson():AnimeI {
    return {...this};
  }
}
