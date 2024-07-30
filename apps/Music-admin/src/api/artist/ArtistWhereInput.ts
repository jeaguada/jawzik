import { AlbumListRelationFilter } from "../album/AlbumListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TrackListRelationFilter } from "../track/TrackListRelationFilter";

export type ArtistWhereInput = {
  albums?: AlbumListRelationFilter;
  bio?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  tracks?: TrackListRelationFilter;
};
