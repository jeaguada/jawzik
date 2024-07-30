import { AlbumWhereUniqueInput } from "../album/AlbumWhereUniqueInput";
import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";

export type TrackUpdateInput = {
  album?: AlbumWhereUniqueInput | null;
  artist?: ArtistWhereUniqueInput | null;
  duration?: number | null;
  title?: string | null;
};
