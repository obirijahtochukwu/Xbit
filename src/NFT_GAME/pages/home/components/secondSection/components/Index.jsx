import React, { useState } from "react";
import firstSectionStyle from "../../firstSection/index.module.scss";
import styles from "./index.module.scss";

export const UltimateUtilityComponent = () => {
  const tokens = [
    {
      name: "NFTs",
      desc: "NFTs are an essential part of the Katana Inu ecosystem. People can buy and sell NFTs using Kata- tokens.",
      img: "/NFT_GAME/media/coin_icon01.png.svg",
    },
    {
      name: "Staking Rewards",
      desc: "Earn passive income by staking your tokens on staking.katanainu.com",
      img: "/NFT_GAME/media/coin_icon02.png.svg",
    },
    {
      name: "Tournaments",
      desc: "Want to be a part of Global Tournaments?Participate and compete globally.Here, the Winner takes all.",
      img: "/NFT_GAME/media/coin_icon03.png.svg",
    },
    {
      name: "NFT Marketplace",
      desc: "Trade and get trading fee discounts with kata tokens",
      img: "/NFT_GAME/media/coin_icon04.png.svg",
    },
  ];

  return (
    <div>
      <div className={firstSectionStyle.subtitle_OurActivityComponent}>
        THE ULTIMATE UTILITY
      </div>
      <div
        style={{ fontStyle: "normal", marginBottom: "0px" }}
        className={firstSectionStyle.title_OurActivityComponent}
      >
        $KATA token
      </div>
      <div className={styles.desc_UltimateUtilityComponent}>
        Kata tokens are the primary Katana Inu game currency.With it, you can
        buy in-game items, pay the entry fee to participate in tournaments and
        get discounts on trading fees.You will also need to hold Kata tokens to
        earn in the game.
      </div>

      <main className={styles.main_UltimateUtilityComponent}>
        <img
          src="/NFT_GAME/media/coinkata.png.svg"
          alt=""
          className={styles.img_UltimateUtilityComponent}
        />
        <aside
          style={{ backgroundImage: "url('/NFT_GAME/media/pseudo (5).svg')" }}
          className={styles.aside_UltimateUtilityComponent}
        >
          <div className={styles.tokens_UltimateUtilityComponent}>
            {tokens.map(({ name, desc, img }) => {
              return (
                <div className={styles.token_UltimateUtilityComponent}>
                  <div className="">
                    <img src={img} alt="" />
                  </div>
                  <div className="">
                    <div className={styles.tokenName_UltimateUtilityComponent}>
                      {name}
                    </div>
                    <div className={styles.tokenDesc_UltimateUtilityComponent}>
                      {desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>
      </main>
    </div>
  );
};

export const EcosystemFeaturesComponent = () => {
  const [activeTab, setactiveTab] = useState(0);

  const buttons = [
    { text: "Genesis Takeru" },
    { text: "Champion NFT" },
    { text: "Staking NFT" },
    { text: "Forging NFTs NFT" },
    { text: "3D Weapons" },
  ];

  const infos = [
    {
      text: "- Stake your NFT and get $Kata rewards or NFTs. Click here: soon",
    },
    {
      text: "- Get most of the in-game weapons for free.You can claim it here: soon",
    },
    { text: "- Get a 50% Battlepass discount by connecting with your wallet." },
    { text: "- Tournament Entry Tickets Raffles" },
    { text: "- Secret benefits of 10 or more genesis Holders" },
    { text: "- Access to closed Beta" },
    { text: "- Early Access to all upcoming events" },
  ];

  const button2 = [
    { text: "Claim" },
    { text: "stake" },
    { text: "Battlepass" },
  ];

  return (
    <article>
      <div className={firstSectionStyle.subtitle_OurActivityComponent}>
        ECOSYSTEM FEATURES
      </div>
      <div
        style={{ marginBottom: "0px" }}
        className={firstSectionStyle.title_OurActivityComponent}
      >
        What makes us unique
      </div>

      <header className={`${firstSectionStyle.btns_Header}`}>
        {buttons.map(({ text }, index) => {
          return (
            <div
              style={{
                background: index === activeTab ? "#8C5400" : "",
                transition: "all 0.2s ease-in-out",
              }}
              onClick={() => setactiveTab(index)}
              className={firstSectionStyle.btn_Header}
            >
              {text}
            </div>
          );
        })}
      </header>

      <main className={`${styles.main_EcosystemFeaturesComponent}`}>
        <img
          src="/NFT_GAME/media/Group 1000001361.svg"
          alt=""
          className={styles.img_EcosystemFeaturesComponent}
        />
        <aside className={styles.aside_EcosystemFeaturesComponent}>
          <div className={styles.asideTitle_EcosystemFeaturesComponent}>
            Benefits of Genesis NFT Takeru Collection
          </div>
          <main className={styles.infos_EcosystemFeaturesComponent}>
            {infos.map(({ text }) => {
              return <div className={""}>{text}</div>;
            })}
          </main>
          <article>
            <footer
              className={`${firstSectionStyle.btns_Header} ${styles.btns_Header} mx-0 flex-wrap`}
            >
              {button2.map(({ text }) => {
                return (
                  <div
                    style={{ background: "transparent", borderColor: "white" }}
                    className={firstSectionStyle.btn_Header}
                  >
                    {text}
                  </div>
                );
              })}
            </footer>
            <div className="my-3"></div>
            <div
              style={{ width: "fit-content" }}
              className={firstSectionStyle.btn_Header}
            >
              <div className="">{"Red more"}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
              >
                <path
                  d="M8.75 0.74342L7.86875 1.63395L12.6063 6.42763H0V7.69079H12.6063L7.86875 12.4845L8.75 13.375L15 7.05921L8.75 0.74342Z"
                  fill="white"
                />
              </svg>
            </div>
          </article>
        </aside>
      </main>
    </article>
  );
};

export const UltimateJourneyComponent = () => {
  const phases = [
    {
      title: "PHASE 1",
      steps: [
        { text: "Website launch", img: true },
        { text: "Social Media Launch", img: true },
        { text: "Audit Launch", img: true },
        { text: "NFT-Marketplace Development", img: true },
        { text: "Whitepaper Launch", img: true },
        { text: "Coinmarketcap Listing", img: true },
        { text: "Coingecko Listing", img: true },
        { text: "Seed Sale", img: true },
        { text: "Private sale 1", img: true },
        { text: "Public Sale", img: true },
      ],
    },
    {
      title: "PHASE 2",
      steps: [
        { text: "Game-Development", img: true },
        { text: "Game Trailer", img: true },
        { text: "E-commerce launch", img: false },
        { text: "Several Updates", img: true },
        { text: "Crypto Expo Dubai", img: true },
        { text: "2D NFT collections", img: true },
        { text: "Charity Auction", img: true },
        { text: "Partnership Co-operation", img: true },
        { text: "CEX listing", img: true },
      ],
    },
    {
      title: "PHASE 3",
      steps: [
        { text: "More Partnership Co-operations", img: true },
        { text: "Expand marketing strategy", img: false },
        { text: "Create more 3D Game NFTs", img: true },
        { text: "Big game trailer", img: true },
        { text: "Game Demo", img: true },
        { text: "More CEX listing", img: true },
        { text: "Game Blog Website", img: false },
        { text: "Cross chain P2E Marketplace", img: true },
      ],
    },
    {
      title: "PHASE 4",
      steps: [
        { text: "Beta Game Launch for PC", img: false },
        { text: "Charity Projects", img: false },
        { text: "More Listings", img: false },
        { text: "More Co-operations", img: false },
      ],
    },
  ];

  return (
    <article className={styles.UltimateJourneyComponent}>
      <div className={firstSectionStyle.subtitle_OurActivityComponent}>
        THE Ultimate Journey
      </div>
      <div className={styles.title_UltimateJourneyComponent}>
        Katana Inu Roadmap
      </div>

      <main className={styles.phases_UltimateJourneyComponent}>
        {phases.map(({ title, steps }) => {
          return (
            <div className={styles.phase_UltimateJourneyComponent}>
              <div className={styles.phaseSubtitle_UltimateJourneyComponent}>
                {title}
              </div>
              <div className={styles.phasetitle_UltimateJourneyComponent}>
                {title}
              </div>

              <section className={styles.steps_UltimateJourneyComponent}>
                {steps.map(({ text, img }) => {
                  return (
                    <div className={styles.step_UltimateJourneyComponent}>
                      <div>
                        <img
                          src={img ? "/NFT_GAME/media/pseudo (6).svg" : ""}
                          alt=""
                          style={{ backgroundColor: !img ? "" : "transparent" }}
                        />
                      </div>
                      <div className="">{text}</div>
                    </div>
                  );
                })}
              </section>
            </div>
          );
        })}
      </main>

      <div className={styles.desc_UltimateJourneyComponent}>
        Our goal is to create a blockchain gaming ecosystem with real-world
        utility and value. With this ambitious project, we can reach the Moon!
        Our team, contributors, and investors have laid out Key Milestones that
        will put us on a track to success.
      </div>
    </article>
  );
};

export const DifferentRarityComponent = () => {
  const [active, setActive] = useState(3);

  const carousels = [
    {
      id: "1",
      img: "/NFT_GAME/media/model-viewer (1).svg",
    },
    {
      id: "2",
      img: "/NFT_GAME/media/model-viewer (1).svg",
    },
    {
      id: "3",
      img: "/NFT_GAME/media/model-viewer (2).svg",
    },
    {
      id: "4",
      img: "/NFT_GAME/media/model-viewer (3).svg",
    },
    {
      id: "5",
      img: "/NFT_GAME/media/model-viewer (4).svg",
    },
    {
      id: "6",
      img: "/NFT_GAME/media/model-viewer.svg",
    },
  ];

  return (
    <article>
      <div className={firstSectionStyle.subtitle_OurActivityComponent}>
        DIFFERENT RARITY WEAPONS
      </div>
      <div className={firstSectionStyle.title_OurActivityComponent}>
        IN-GAME ITEMS
      </div>

      <section className={styles.section_DifferentRarityComponent}>
        <img
          onClick={() => (active > 1 ? setActive(active - 1) : null)}
          style={{
            transform: "rotate(180deg)",
            visibility: active > 1 ? "" : "hidden",
          }}
          src="/NFT_GAME/media/Vector (19).svg"
          alt=""
          className={styles.control_DifferentRarityComponent}
        />

        <main
          className={`${styles.md} ${styles.main_DifferentRarityComponent}`}
        >
          {active < 3 && (
            <div
              src={"img"}
              alt=""
              className={styles.carouselImg_DifferentRarityComponent}
            />
          )}
          {active < 3 && (
            <div
              src={"img"}
              alt=""
              className={styles.carouselImg_DifferentRarityComponent}
            />
          )}
          {/* PREVIOUS CAROUSEL */}
          {carousels.map(({ img, id }) => {
            const val = Number(id);
            if (val < active && val >= active - 2) {
              return (
                <div
                  className={`active ${styles.carousel_DifferentRarityComponent}`}
                >
                  <img
                    src={img}
                    alt=""
                    className={styles.carouselImg_DifferentRarityComponent}
                  />
                </div>
              );
            }
          })}
          {/* ACTIVE CAROUSEL */}
          {carousels.map(({ img, id, text }) => {
            if (active === Number(id)) {
              return (
                <div
                  className={`active ${styles.carousel_DifferentRarityComponent}`}
                >
                  <img
                    src={img}
                    alt=""
                    className={`${styles.carouselImg_DifferentRarityComponent} ${styles.active}`}
                  />

                  <div
                    className={styles.carouselTitle_DifferentRarityComponent}
                  >
                    {text}
                  </div>
                </div>
              );
            }
          })}
          {/* NEXT CAROUSEL */}
          {carousels.map(({ img, id, text }) => {
            const val = Number(id);
            if (val > active && val < active + 3) {
              return (
                <div
                  className={`active ${styles.carousel_DifferentRarityComponent}`}
                >
                  <img
                    src={img}
                    alt=""
                    className={styles.carouselImg_DifferentRarityComponent}
                  />
                </div>
              );
            }
          })}
          {active > carousels.length - 2 && (
            <div
              src={"img"}
              alt=""
              className={styles.carouselImg_DifferentRarityComponent}
            />
          )}
          {active > carousels.length - 2 && (
            <div
              src={"img"}
              alt=""
              className={styles.carouselImg_DifferentRarityComponent}
            />
          )}
        </main>

        <main
          className={`${styles.sm} ${styles.main_DifferentRarityComponent}`}
        >
          {/* ACTIVE CAROUSEL */}
          {carousels.map(({ img, id, text }) => {
            if (active === Number(id)) {
              return (
                <div
                  className={`active ${styles.carousel_DifferentRarityComponent}`}
                >
                  <img
                    src={img}
                    alt=""
                    className={`${styles.carouselImg_DifferentRarityComponent} ${styles.active}`}
                  />

                  <div
                    className={styles.carouselTitle_DifferentRarityComponent}
                  >
                    {text}
                  </div>
                </div>
              );
            }
          })}
        </main>

        <img
          onClick={() =>
            active < carousels.length ? setActive(active + 1) : null
          }
          src="/NFT_GAME/media/Vector (19).svg"
          alt=""
          style={{ visibility: active < carousels.length ? "" : "hidden" }}
          className={styles.control_DifferentRarityComponent}
        />
      </section>
      <div
        style={{ marginTop: "0px" }}
        className={firstSectionStyle.subtext_OurActivityComponent}
      >
        DADAO IMMORTAL
      </div>
    </article>
  );
};

export const DifferentRarityTwoComponent = () => {
  const [active, setActive] = useState(2);

  const carousels = [
    {
      id: "1",
      img: "/NFT_GAME/media/shiba_inu_Viewport_137 1.svg",
    },
    {
      id: "2",
      img: "/NFT_GAME/media/shiba_inu_Viewport_114 1.svg",
    },
    {
      id: "3",
      img: "/NFT_GAME/media/shiba_inu_Viewport_077 1.svg",
    },
    {
      id: "4",
      img: "/NFT_GAME/media/shiba_inu_Viewport_137 1.svg",
    },
    {
      id: "5",
      img: "/NFT_GAME/media/shiba_inu_Viewport_114 1.svg",
    },
    {
      id: "6",
      img: "/NFT_GAME/media/shiba_inu_Viewport_077 1.svg",
    },
  ];

  const buttons = [{ text: "MINT NFTS NOW" }, { text: "Go to Marketplace" }];

  return (
    <article
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(9, 0, 0, 0.09) 0%, rgba(0, 0, 4, 0.09) 100%), url('/NFT_GAME/media/image 75.svg')",
        backgroundColor: "transparent",
        paddingBottom: "0px",
      }}
      // style={{  }}
      className={firstSectionStyle.ChooseYourWarriorComponent}
    >
      <div className={firstSectionStyle.subtitle_OurActivityComponent}>
        DIFFERENT RARITY WEAPONS
      </div>
      <div className={firstSectionStyle.title_OurActivityComponent}>
        IN-GAME ITEMS
      </div>

      <section
        className={`${styles.md} ${firstSectionStyle.section_ChooseYourWarriorComponent}`}
      >
        <img
          onClick={() => (active > 1 ? setActive(active - 1) : null)}
          style={{
            // transform: "scale(4)",
            visibility: active > 1 ? "" : "hidden",
            transform: "rotate(-0deg) scale(2)",
          }}
          src="/NFT_GAME/media/Vector 1.svg"
          alt=""
          className={firstSectionStyle.control_ChooseYourWarriorComponent}
        />

        <main className={firstSectionStyle.main_ChooseYourWarriorComponent}>
          {active === 1 && (
            <div
              src={"img"}
              alt=""
              className={
                firstSectionStyle.carouselImg_ChooseYourWarriorComponent
              }
            />
          )}
          {/* PREVIOUS CAROUSEL */}
          {carousels.map(({ img, id }) => {
            const val = Number(id);
            if (val === active - 1) {
              return (
                <div
                  className={`active ${firstSectionStyle.carousel_ChooseYourWarriorComponent}`}
                >
                  <img
                    src={img}
                    alt=""
                    className={
                      firstSectionStyle.carouselImg_ChooseYourWarriorComponent
                    }
                  />
                </div>
              );
            }
          })}
          {/* ACTIVE CAROUSEL */}
          {carousels.map(({ img, id, text }) => {
            if (active === Number(id)) {
              return (
                <div
                  className={`active ${firstSectionStyle.carousel_ChooseYourWarriorComponent}`}
                >
                  <img
                    src={img}
                    alt=""
                    className={`${firstSectionStyle.carouselImg_ChooseYourWarriorComponent} ${firstSectionStyle.active}`}
                  />

                  <div
                    className={
                      firstSectionStyle.carouselTitle_ChooseYourWarriorComponent
                    }
                  >
                    {text}
                  </div>
                </div>
              );
            }
          })}
          {/* NEXT CAROUSEL */}
          {carousels.map(({ img, id, text }) => {
            const val = Number(id);
            if (val === active + 1) {
              return (
                <div
                  className={`active ${firstSectionStyle.carousel_ChooseYourWarriorComponent}`}
                >
                  <img
                    src={img}
                    alt=""
                    className={
                      firstSectionStyle.carouselImg_ChooseYourWarriorComponent
                    }
                  />
                </div>
              );
            }
          })}
          {active === carousels.length && (
            <div
              src={"img"}
              alt=""
              className={
                firstSectionStyle.carouselImg_ChooseYourWarriorComponent
              }
            />
          )}
        </main>

        <img
          onClick={() =>
            active < carousels.length ? setActive(active + 1) : null
          }
          src="/NFT_GAME/media/Vector 1.svg"
          alt=""
          style={{
            visibility: active < carousels.length ? "" : "hidden",
            transform: "rotate(180deg) scale(2)",
          }}
          className={firstSectionStyle.control_ChooseYourWarriorComponent}
        />
      </section>
      <section
        className={`${styles.sm} ${firstSectionStyle.section_ChooseYourWarriorComponent}`}
      >
        <img
          onClick={() => (active > 1 ? setActive(active - 1) : null)}
          style={{
            // transform: "scale(4)",
            visibility: active > 1 ? "" : "hidden",
            transform: "rotate(-0deg) scale(2)",
          }}
          src="/NFT_GAME/media/Vector 1.svg"
          alt=""
          className={firstSectionStyle.control_ChooseYourWarriorComponent}
        />

        <main className={firstSectionStyle.main_ChooseYourWarriorComponent}>
          {/* ACTIVE CAROUSEL */}
          {carousels.map(({ img, id, text }) => {
            if (active === Number(id)) {
              return (
                <div
                  className={`active ${firstSectionStyle.carousel_ChooseYourWarriorComponent}`}
                >
                  <img
                    src={img}
                    alt=""
                    className={`${firstSectionStyle.carouselImg_ChooseYourWarriorComponent} ${firstSectionStyle.active}`}
                  />

                  <div
                    className={
                      firstSectionStyle.carouselTitle_ChooseYourWarriorComponent
                    }
                  >
                    {text}
                  </div>
                </div>
              );
            }
          })}
        </main>

        <img
          onClick={() =>
            active < carousels.length ? setActive(active + 1) : null
          }
          src="/NFT_GAME/media/Vector 1.svg"
          alt=""
          style={{
            visibility: active < carousels.length ? "" : "hidden",
            transform: "rotate(180deg) scale(2)",
          }}
          className={firstSectionStyle.control_ChooseYourWarriorComponent}
        />
      </section>
      <div className={firstSectionStyle.subtext_OurActivityComponent}>
        DADAO IMMORTAL
      </div>

      <header className={`${firstSectionStyle.btns_Header} flex-wrap `}>
        {buttons.map(({ text }) => {
          return <div className={firstSectionStyle.btn_Header}>{text}</div>;
        })}
      </header>
    </article>
  );
};

export const InfluencerComponent = () => {
  const influencers = [
    { img: "/NFT_GAME/media/Ellipse 1609.svg", name: "pnbrock" },
    { img: "/NFT_GAME/media/Ellipse 1609 (1).svg", name: "The Game" },
    { img: "/NFT_GAME/media/Ellipse 1609 (2).svg", name: "Tpain" },
    { img: " /NFT_GAME/media/Ellipse 1609 (3).svg", name: "Designer" },
  ];

  return (
    <article className={styles.InfluencerComponent}>
      <div className={firstSectionStyle.subtitle_OurActivityComponent}>
        INFLUENCER/CELEBRITIES
      </div>
      <div
        style={{ marginBottom: "0px" }}
        className={firstSectionStyle.title_OurActivityComponent}
      >
        PROMOTED KATANA INU
      </div>

      <main className={styles.influencers_InfluencerComponent}>
        {influencers.map(({ img, name }) => {
          return (
            <div className="">
              <img
                src={img}
                className={styles.influencerImg_InfluencerComponent}
                alt=""
              />
              <div className="">{name}</div>
              <div className={styles.influencerSocial_InfluencerComponent}>
                <img src="/NFT_GAME/media/Vector (21).svg" alt="" />
                <img src="/NFT_GAME/media/Vector (22).svg" alt="" />
                <img src="/NFT_GAME/media/Vector (23).svg" alt="" />
              </div>
            </div>
          );
        })}
      </main>
    </article>
  );
};

export const PartnersComponent = () => {
  const partners = [
    {
      logos: [
        "/NFT_GAME/media/Link ⏵ partner_01.png.svg",
        "/NFT_GAME/media/Link ⏵ newtribe.png.svg",
        "/NFT_GAME/media/Link ⏵ partner_02.png.svg",
        "/NFT_GAME/media/Link ⏵ partner_03.png.svg",
        "/NFT_GAME/media/Link ⏵ 21.jpg (1).svg ",
      ],
    },
    {
      logos: [
        "/NFT_GAME/media/Link ⏵ partner_04.png.svg",
        "/NFT_GAME/media/Link ⏵ 316.png.svg",
        " /NFT_GAME/media/Link ⏵ partner_05.png.svg",
        " /NFT_GAME/media/Link ⏵ partner_06.png.svg",
        " /NFT_GAME/media/Link ⏵ partner_14.png.svg",
      ],
    },
    {
      logos: [
        " /NFT_GAME/media/Link ⏵ partner_07.png.svg",
        "/NFT_GAME/media/Link ⏵ partner_08.png.svg",
        "/NFT_GAME/media/Link ⏵ lvtcap.png.svg ",
        "/NFT_GAME/media/Link ⏵ partner_09.png.svg",
        "/NFT_GAME/media/Link ⏵ girans.jpg.svg",
      ],
    },
    {
      logos: [
        "/NFT_GAME/media/Link ⏵ partner_10.png.svg",
        "/NFT_GAME/media/Link ⏵ metirx.jpg.svg",
        "/NFT_GAME/media/Link ⏵ vaspertime.jpg.svg",
        "/NFT_GAME/media/Link ⏵ masterven.png.svg",
        "/NFT_GAME/media/Link ⏵ partner_11.png.svg",
      ],
    },
    {
      logos: [
        "/NFT_GAME/media/Link ⏵ partner_13.png.svg",
        "/NFT_GAME/media/Link ⏵ bluewheel.png.svg",
        "/NFT_GAME/media/Link ⏵ partner_15.png.svg",
        "/NFT_GAME/media/Link ⏵ partner_12.png.svg",
      ],
    },
  ];

  return (
    <article className={styles.PartnersComponent}>
      <div
        style={{ marginBottom: "0px" }}
        className={firstSectionStyle.title_OurActivityComponent}
      >
        PARTNERS & BACKERS
      </div>
      <main className={styles.partners_PartnersComponent}>
        {partners.map(({ logos }, index) => {
          return (
            <div
              className={`${
                (index === partners.length - 1 && styles.hidMd) ||
                (index > 1 && styles.hidSm)
              } ${styles.partner_PartnersComponent}`}
            >
              {logos.map((item) => {
                return <img src={item} alt="" />;
              })}
            </div>
          );
        })}
      </main>
    </article>
  );
};

export const GamePartnersComponent = () => {
  const partners = [
    " /NFT_GAME/media/Group 1000001436.svg",
    " /NFT_GAME/media/eb.png.svg",
    " /NFT_GAME/media/Group 1000001435.svg",
    " /NFT_GAME/media/ffd.png.svg",
    " /NFT_GAME/media/gangs.png.svg",
    " /NFT_GAME/media/FGG_Logo.png.svg",
    " /NFT_GAME/media/long1.png.svg",
    " /NFT_GAME/media/meme-lordz-logo_402x.png.svg",
    " /NFT_GAME/media/Metarun.png.svg",
    " /NFT_GAME/media/emblem+white.png.svg",
    " /NFT_GAME/media/TankMetaverse.png.svg",
    " /NFT_GAME/media/LOGO11.png.svg",
    " /NFT_GAME/media/luxpad.png.svg",
    "/NFT_GAME/media/cyber.png.svg",
    // " /NFT_GAME/media/Horizontal%20Logo%20200x88.svg",
    " /NFT_GAME/media/hololoot.png.svg",
    " /NFT_GAME/media/metaverser.png.svg",
  ];

  return (
    <article className={styles.GamePartnersComponent}>
      <div
        style={{ marginBottom: "0px" }}
        className={firstSectionStyle.title_OurActivityComponent}
      >
        GAME PARTNERS
      </div>
      <div
        style={{ marginBottom: "0px" }}
        className={firstSectionStyle.text_OurActivityComponent}
      >
        Katana Inu has partnered with the following companies.
      </div>
      <main className={styles.partners_GamePartnersComponent}>
        {partners.map((item) => {
          return <img src={item} alt="" />;
        })}
      </main>
    </article>
  );
};
