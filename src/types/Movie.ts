interface PosterURLs {
  '92': string;
  '154': string;
  '185': string;
  '342': string;
  '500': string;
  '780': string;
  'original': string;
}


export default interface Movie {
  imdbID: string;
  title: string;
  year: string;
  posterURLs: PosterURLs;
}
  