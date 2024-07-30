import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AlbumList } from "./album/AlbumList";
import { AlbumCreate } from "./album/AlbumCreate";
import { AlbumEdit } from "./album/AlbumEdit";
import { AlbumShow } from "./album/AlbumShow";
import { ArtistList } from "./artist/ArtistList";
import { ArtistCreate } from "./artist/ArtistCreate";
import { ArtistEdit } from "./artist/ArtistEdit";
import { ArtistShow } from "./artist/ArtistShow";
import { TrackList } from "./track/TrackList";
import { TrackCreate } from "./track/TrackCreate";
import { TrackEdit } from "./track/TrackEdit";
import { TrackShow } from "./track/TrackShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Music"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Album"
          list={AlbumList}
          edit={AlbumEdit}
          create={AlbumCreate}
          show={AlbumShow}
        />
        <Resource
          name="Artist"
          list={ArtistList}
          edit={ArtistEdit}
          create={ArtistCreate}
          show={ArtistShow}
        />
        <Resource
          name="Track"
          list={TrackList}
          edit={TrackEdit}
          create={TrackCreate}
          show={TrackShow}
        />
      </Admin>
    </div>
  );
};

export default App;
