import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ArtistTitle } from "../artist/ArtistTitle";
import { TrackTitle } from "../track/TrackTitle";

export const AlbumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="artist.id" reference="Artist" label="artist">
          <SelectInput optionText={ArtistTitle} />
        </ReferenceInput>
        <DateTimeInput label="releaseDate" source="releaseDate" />
        <TextInput label="title" source="title" />
        <ReferenceArrayInput
          source="tracks"
          reference="Track"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TrackTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
