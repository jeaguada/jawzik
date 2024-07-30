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
import { AlbumCreateNestedManyWithoutArtistsInput } from "./AlbumCreateNestedManyWithoutArtistsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { TrackCreateNestedManyWithoutArtistsInput } from "./TrackCreateNestedManyWithoutArtistsInput";

@InputType()
class ArtistCreateInput {
  @ApiProperty({
    required: false,
    type: () => AlbumCreateNestedManyWithoutArtistsInput,
  })
  @ValidateNested()
  @Type(() => AlbumCreateNestedManyWithoutArtistsInput)
  @IsOptional()
  @Field(() => AlbumCreateNestedManyWithoutArtistsInput, {
    nullable: true,
  })
  albums?: AlbumCreateNestedManyWithoutArtistsInput;

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
  bio?: string | null;

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
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => TrackCreateNestedManyWithoutArtistsInput,
  })
  @ValidateNested()
  @Type(() => TrackCreateNestedManyWithoutArtistsInput)
  @IsOptional()
  @Field(() => TrackCreateNestedManyWithoutArtistsInput, {
    nullable: true,
  })
  tracks?: TrackCreateNestedManyWithoutArtistsInput;
}

export { ArtistCreateInput as ArtistCreateInput };
