import { AlbumUpdateManyWithoutArtistsInput } from "./AlbumUpdateManyWithoutArtistsInput";
import { TrackUpdateManyWithoutArtistsInput } from "./TrackUpdateManyWithoutArtistsInput";

export type ArtistUpdateInput = {
  albums?: AlbumUpdateManyWithoutArtistsInput;
  bio?: string | null;
  name?: string | null;
  tracks?: TrackUpdateManyWithoutArtistsInput;
};
