import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ARTIST_TITLE_FIELD } from "./ArtistTitle";
import { ALBUM_TITLE_FIELD } from "../album/AlbumTitle";

export const ArtistShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bio" source="bio" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Album" target="artistId" label="Albums">
          <Datagrid rowClick="show">
            <ReferenceField
              label="artist"
              source="artist.id"
              reference="Artist"
            >
              <TextField source={ARTIST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="releaseDate" source="releaseDate" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Track" target="artistId" label="Tracks">
          <Datagrid rowClick="show">
            <ReferenceField label="album" source="album.id" reference="Album">
              <TextField source={ALBUM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="artist"
              source="artist.id"
              reference="Artist"
            >
              <TextField source={ARTIST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="duration" source="duration" />
            <TextField label="ID" source="id" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
