import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { TrackUpdateManyWithoutAlbumsInput } from "./TrackUpdateManyWithoutAlbumsInput";

export type AlbumUpdateInput = {
  artist?: ArtistWhereUniqueInput | null;
  releaseDate?: Date | null;
  title?: string | null;
  tracks?: TrackUpdateManyWithoutAlbumsInput;
};
