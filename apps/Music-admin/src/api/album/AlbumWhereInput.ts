import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TrackListRelationFilter } from "../track/TrackListRelationFilter";

export type AlbumWhereInput = {
  artist?: ArtistWhereUniqueInput;
  id?: StringFilter;
  releaseDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  tracks?: TrackListRelationFilter;
};
