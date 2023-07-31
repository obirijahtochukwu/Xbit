import React from "react";
import {
  AboutTheGameComponent,
  ClosedBetaComponent,
  HeaderComponent,
  OurActivityComponent,
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
      <ClosedBetaComponent />
      <OurActivityComponent />
    </div>
  );
}
