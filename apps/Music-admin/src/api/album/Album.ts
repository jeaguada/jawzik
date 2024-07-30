import { Artist } from "../artist/Artist";
import { Track } from "../track/Track";

export type Album = {
  artist?: Artist | null;
  createdAt: Date;
  id: string;
  releaseDate: Date | null;
  title: string | null;
  tracks?: Array<Track>;
  updatedAt: Date;
};
