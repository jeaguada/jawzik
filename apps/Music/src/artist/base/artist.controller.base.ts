/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ArtistService } from "../artist.service";
import { ArtistCreateInput } from "./ArtistCreateInput";
import { Artist } from "./Artist";
import { ArtistFindManyArgs } from "./ArtistFindManyArgs";
import { ArtistWhereUniqueInput } from "./ArtistWhereUniqueInput";
import { ArtistUpdateInput } from "./ArtistUpdateInput";
import { AlbumFindManyArgs } from "../../album/base/AlbumFindManyArgs";
import { Album } from "../../album/base/Album";
import { AlbumWhereUniqueInput } from "../../album/base/AlbumWhereUniqueInput";
import { TrackFindManyArgs } from "../../track/base/TrackFindManyArgs";
import { Track } from "../../track/base/Track";
import { TrackWhereUniqueInput } from "../../track/base/TrackWhereUniqueInput";

export class ArtistControllerBase {
  constructor(protected readonly service: ArtistService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Artist })
  async createArtist(@common.Body() data: ArtistCreateInput): Promise<Artist> {
    return await this.service.createArtist({
      data: data,
      select: {
        bio: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Artist] })
  @ApiNestedQuery(ArtistFindManyArgs)
  async artists(@common.Req() request: Request): Promise<Artist[]> {
    const args = plainToClass(ArtistFindManyArgs, request.query);
    return this.service.artists({
      ...args,
      select: {
        bio: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Artist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async artist(
    @common.Param() params: ArtistWhereUniqueInput
  ): Promise<Artist | null> {
    const result = await this.service.artist({
      where: params,
      select: {
        bio: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Artist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateArtist(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() data: ArtistUpdateInput
  ): Promise<Artist | null> {
    try {
      return await this.service.updateArtist({
        where: params,
        data: data,
        select: {
          bio: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Artist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteArtist(
    @common.Param() params: ArtistWhereUniqueInput
  ): Promise<Artist | null> {
    try {
      return await this.service.deleteArtist({
        where: params,
        select: {
          bio: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/albums")
  @ApiNestedQuery(AlbumFindManyArgs)
  async findAlbums(
    @common.Req() request: Request,
    @common.Param() params: ArtistWhereUniqueInput
  ): Promise<Album[]> {
    const query = plainToClass(AlbumFindManyArgs, request.query);
    const results = await this.service.findAlbums(params.id, {
      ...query,
      select: {
        artist: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        releaseDate: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/albums")
  async connectAlbums(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: AlbumWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      albums: {
        connect: body,
      },
    };
    await this.service.updateArtist({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/albums")
  async updateAlbums(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: AlbumWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      albums: {
        set: body,
      },
    };
    await this.service.updateArtist({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/albums")
  async disconnectAlbums(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: AlbumWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      albums: {
        disconnect: body,
      },
    };
    await this.service.updateArtist({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/tracks")
  @ApiNestedQuery(TrackFindManyArgs)
  async findTracks(
    @common.Req() request: Request,
    @common.Param() params: ArtistWhereUniqueInput
  ): Promise<Track[]> {
    const query = plainToClass(TrackFindManyArgs, request.query);
    const results = await this.service.findTracks(params.id, {
      ...query,
      select: {
        album: {
          select: {
            id: true,
          },
        },

        artist: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        duration: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/tracks")
  async connectTracks(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: TrackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tracks: {
        connect: body,
      },
    };
    await this.service.updateArtist({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/tracks")
  async updateTracks(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: TrackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tracks: {
        set: body,
      },
    };
    await this.service.updateArtist({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/tracks")
  async disconnectTracks(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: TrackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tracks: {
        disconnect: body,
      },
    };
    await this.service.updateArtist({
      where: params,
      data,
      select: { id: true },
    });
  }
}