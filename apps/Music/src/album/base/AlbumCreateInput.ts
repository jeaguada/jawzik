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
import { ArtistWhereUniqueInput } from "../../artist/base/ArtistWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { TrackCreateNestedManyWithoutAlbumsInput } from "./TrackCreateNestedManyWithoutAlbumsInput";

@InputType()
class AlbumCreateInput {
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
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  releaseDate?: Date | null;

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

  @ApiProperty({
    required: false,
    type: () => TrackCreateNestedManyWithoutAlbumsInput,
  })
  @ValidateNested()
  @Type(() => TrackCreateNestedManyWithoutAlbumsInput)
  @IsOptional()
  @Field(() => TrackCreateNestedManyWithoutAlbumsInput, {
    nullable: true,
  })
  tracks?: TrackCreateNestedManyWithoutAlbumsInput;
}

export { AlbumCreateInput as AlbumCreateInput };