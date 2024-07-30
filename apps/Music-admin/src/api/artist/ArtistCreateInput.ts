import { AlbumCreateNestedManyWithoutArtistsInput } from "./AlbumCreateNestedManyWithoutArtistsInput";
import { TrackCreateNestedManyWithoutArtistsInput } from "./TrackCreateNestedManyWithoutArtistsInput";

export type ArtistCreateInput = {
  albums?: AlbumCreateNestedManyWithoutArtistsInput;
  bio?: string | null;
  name?: string | null;
  tracks?: TrackCreateNestedManyWithoutArtistsInput;
};
