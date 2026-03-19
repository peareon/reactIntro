
export interface AlbumInterface {
  idAlbum: number,
  strAlbum: string,
  strArtist: string,
  intYearReleased: string,
  strAlbum3DThumb: string
};

export interface AlbumDetailInterface{
  strArtist: string,
  strAlbumStripped: string,
  intYearReleased: string,
  strGenre: string,
  strAlbumThumb: string,
  intSales: string
}

export type AlbumList = AlbumInterface[];

export interface LibraryList{
  library: AlbumInterface[];
} 