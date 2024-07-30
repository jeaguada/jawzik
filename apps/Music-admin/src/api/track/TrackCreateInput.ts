import { AlbumWhereUniqueInput } from "../album/AlbumWhereUniqueInput";
import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";

export type TrackCreateInput = {
  album?: AlbumWhereUniqueInput | null;
  artist?: ArtistWhereUniqueInput | null;
  duration?: number | null;
  title?: string | null;
};
