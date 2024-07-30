import { Album } from "../album/Album";
import { Track } from "../track/Track";

export type Artist = {
  albums?: Array<Album>;
  bio: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  tracks?: Array<Track>;
  updatedAt: Date;
};
