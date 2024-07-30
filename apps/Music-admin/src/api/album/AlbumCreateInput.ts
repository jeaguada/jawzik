import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { TrackCreateNestedManyWithoutAlbumsInput } from "./TrackCreateNestedManyWithoutAlbumsInput";

export type AlbumCreateInput = {
  artist?: ArtistWhereUniqueInput | null;
  releaseDate?: Date | null;
  title?: string | null;
  tracks?: TrackCreateNestedManyWithoutAlbumsInput;
};
