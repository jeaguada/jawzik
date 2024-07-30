import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ALBUM_TITLE_FIELD } from "../album/AlbumTitle";
import { ARTIST_TITLE_FIELD } from "../artist/ArtistTitle";

export const TrackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="album" source="album.id" reference="Album">
          <TextField source={ALBUM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="artist" source="artist.id" reference="Artist">
          <TextField source={ARTIST_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
