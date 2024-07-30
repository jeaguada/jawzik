/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Track as PrismaTrack,
  Album as PrismaAlbum,
  Artist as PrismaArtist,
} from "@prisma/client";

export class TrackServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TrackCountArgs, "select">): Promise<number> {
    return this.prisma.track.count(args);
  }

  async tracks(args: Prisma.TrackFindManyArgs): Promise<PrismaTrack[]> {
    return this.prisma.track.findMany(args);
  }
  async track(args: Prisma.TrackFindUniqueArgs): Promise<PrismaTrack | null> {
    return this.prisma.track.findUnique(args);
  }
  async createTrack(args: Prisma.TrackCreateArgs): Promise<PrismaTrack> {
    return this.prisma.track.create(args);
  }
  async updateTrack(args: Prisma.TrackUpdateArgs): Promise<PrismaTrack> {
    return this.prisma.track.update(args);
  }
  async deleteTrack(args: Prisma.TrackDeleteArgs): Promise<PrismaTrack> {
    return this.prisma.track.delete(args);
  }

  async getAlbum(parentId: string): Promise<PrismaAlbum | null> {
    return this.prisma.track
      .findUnique({
        where: { id: parentId },
      })
      .album();
  }

  async getArtist(parentId: string): Promise<PrismaArtist | null> {
    return this.prisma.track
      .findUnique({
        where: { id: parentId },
      })
      .artist();
  }
}
