import { SortOrder } from "../../util/SortOrder";

export type TrackOrderByInput = {
  albumId?: SortOrder;
  artistId?: SortOrder;
  createdAt?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
