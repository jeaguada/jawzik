import { Album } from "../album/Album";
import { Artist } from "../artist/Artist";

export type Track = {
  album?: Album | null;
  artist?: Artist | null;
  createdAt: Date;
  duration: number | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
