import React from 'react';

import Redux from "./Store/index";
import Main from "./Component/Main";
import TextField from "./Component/TextFields";
import MainBoard from "./Component/MainBoard";

import {StatusBar } from "react-native";

export default function App() {
  
  return (
    <Redux>
      <StatusBar backgroundColor="#606060" />
      <Main>
        <TextField />
        <MainBoard />
      </Main>
    </Redux>
  );
}
