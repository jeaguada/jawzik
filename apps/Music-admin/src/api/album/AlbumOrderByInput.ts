import { SortOrder } from "../../util/SortOrder";

export type AlbumOrderByInput = {
  artistId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  releaseDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
