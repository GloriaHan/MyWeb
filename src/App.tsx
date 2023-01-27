import React from "react";
import Routings from "routes";
import { AppPage, AppHeader } from "App.style";

function App(): JSX.Element {
  return (
    <AppPage>
      <AppHeader>test</AppHeader>
      <main>
        <Routings />
      </main>
    </AppPage>
  );
}

export default App;
