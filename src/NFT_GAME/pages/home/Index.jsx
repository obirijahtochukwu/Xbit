import React from "react";
import {
  AboutTheGameComponent,
  ChooseYourWarriorComponent,
  ClosedBetaComponent,
  HeaderComponent,
  NextPhaseComponent,
  OurActivityComponent,
  TrailerGalleryComponent,
  WhatIsKatanaComponent,
} from "./components/firstSection/Index";
import SecondSection from "./components/secondSection/Index";

export default function Index() {
  return (
    <div>
      {/* FIRST SECTION */}
      <HeaderComponent />
      <WhatIsKatanaComponent />
      <AboutTheGameComponent />
      <TrailerGalleryComponent />
      <ClosedBetaComponent />
      <OurActivityComponent />
      <ChooseYourWarriorComponent />
      <NextPhaseComponent />

      {/* SECOND SECTION */}
      <SecondSection />
    </div>
  );
}
