import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AlbumServiceBase } from "./base/album.service.base";

@Injectable()
export class AlbumService extends AlbumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
