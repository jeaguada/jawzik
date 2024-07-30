import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AlbumTitle } from "../album/AlbumTitle";
import { TrackTitle } from "../track/TrackTitle";

export const ArtistEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="albums"
          reference="Album"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AlbumTitle} />
        </ReferenceArrayInput>
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="name" source="name" />
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
