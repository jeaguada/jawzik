import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ALBUM_TITLE_FIELD } from "./AlbumTitle";
import { ARTIST_TITLE_FIELD } from "../artist/ArtistTitle";

export const AlbumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="artist" source="artist.id" reference="Artist">
          <TextField source={ARTIST_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="releaseDate" source="releaseDate" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Track" target="albumId" label="Tracks">
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
