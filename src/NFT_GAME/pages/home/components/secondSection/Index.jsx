import React from "react";
import styles from "./index.module.scss";
import {
  DifferentRarityComponent,
  DifferentRarityTwoComponent,
  EcosystemFeaturesComponent,
  GamePartnersComponent,
  InfluencerComponent,
  PartnersComponent,
  UltimateJourneyComponent,
  UltimateUtilityComponent,
} from "./components/Index";

export default function SecondSection({ chidren }) {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(12, 12, 12, 0.50) 0%, rgba(0, 0, 0, 0.52) 100%), url('/NFT_GAME/media/image 68.svg')",
      }}
      className={styles.container}
    >
      {chidren}
      <UltimateUtilityComponent />
      <EcosystemFeaturesComponent />
      <UltimateJourneyComponent />
      <DifferentRarityComponent />
      <DifferentRarityTwoComponent />
      <InfluencerComponent />
      <PartnersComponent />
      <GamePartnersComponent />
    </div>
  );
}
