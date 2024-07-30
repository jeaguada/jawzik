/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AlbumWhereUniqueInput } from "../../album/base/AlbumWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  Min,
  Max,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { ArtistWhereUniqueInput } from "../../artist/base/ArtistWhereUniqueInput";

@InputType()
class TrackCreateInput {
  @ApiProperty({
    required: false,
    type: () => AlbumWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AlbumWhereUniqueInput)
  @IsOptional()
  @Field(() => AlbumWhereUniqueInput, {
    nullable: true,
  })
  album?: AlbumWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ArtistWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ArtistWhereUniqueInput)
  @IsOptional()
  @Field(() => ArtistWhereUniqueInput, {
    nullable: true,
  })
  artist?: ArtistWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  duration?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { TrackCreateInput as TrackCreateInput };
