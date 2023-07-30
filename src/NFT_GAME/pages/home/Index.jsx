import React from "react";
import {
  AboutTheGameComponent,
  HeaderComponent,
  TrailerGalleryComponent,
  WhatIsKatanaComponent,
} from "./components/Index";

export default function Index() {
  return (
    <div>
      <HeaderComponent />
      <WhatIsKatanaComponent />
      <AboutTheGameComponent />
      <TrailerGalleryComponent />
    </div>
  );
}
