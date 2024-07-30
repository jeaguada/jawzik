import { AlbumWhereUniqueInput } from "../album/AlbumWhereUniqueInput";
import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TrackWhereInput = {
  album?: AlbumWhereUniqueInput;
  artist?: ArtistWhereUniqueInput;
  duration?: IntNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
