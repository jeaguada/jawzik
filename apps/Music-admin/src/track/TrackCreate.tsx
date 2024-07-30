import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AlbumTitle } from "../album/AlbumTitle";
import { ArtistTitle } from "../artist/ArtistTitle";

export const TrackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="album.id" reference="Album" label="album">
          <SelectInput optionText={AlbumTitle} />
        </ReferenceInput>
        <ReferenceInput source="artist.id" reference="Artist" label="artist">
          <SelectInput optionText={ArtistTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="duration" source="duration" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
