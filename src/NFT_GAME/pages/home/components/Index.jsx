import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

export const HeaderComponent = () => {
  const buttons = [
    { text: "MINT NFTS" },
    { text: "BUY TOKEN" },
    { text: "STAKING HERE" },
  ];

  return (
    <div
      style={{
        backgroundImage:
          "conic-gradient(from 180deg at 50.00% 50.00%, rgba(4, 5, 7, 0.15) 0deg, rgba(4, 5, 7, 0.15) 180deg), url('/NFT_GAME/media/Rectangle 496.svg')",
      }}
      className={styles.HeaderComponent}
    >
      <div
        style={{
          backgroundImage: "url('/NFT_GAME/media/title.svg')",
        }}
        className={styles.imgTitle}
      ></div>

      <main className={styles.btns_Header}>
        {buttons.map(({ text }) => {
          return (
            <div className={styles.btn_Header}>
              <div className="">{text}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export const WhatIsKatanaComponent = () => {
  const logos = [
    { img: "/NFT_GAME/media/download.svg.svg" },
    { img: "/NFT_GAME/media/Link ⏵ brand_logo02.png.svg" },
    { img: "/NFT_GAME/media/Link ⏵ brand_logo03.png.svg" },
  ];

  const about = [
    {
      text: "Katana Inu is a crypto based (NFT) PC game with high quality graphics and limited NFTs. It is a third-person game that focuses on fast-paced sword and spell fighting.",
    },
    {
      text: "The goal is to attract web2 gamers to come over to web3 for the mass adoption and compete with big, well known games. The focus is Fun2Play and Play-To-Earn/Own. Katana Inu is not a Pay2Win game. All Skins and Spells are cosmetics. Having rankings, collecting rare NFTs, participating in tournaments and playing in eSports leagues.",
    },
    { text: "For more information just ask us." },
  ];

  const buttons = [
    { text: "Join Discord" },
    { text: "Join Telegram" },
    { text: "Visit our Twitter" },
  ];

  return (
    <div
      style={{
        backgroundImage: "url('/NFT_GAME/media/pseudo (1).svg')",
      }}
      className={styles.WhatIsKatanaComponent}
    >
      <main className={styles.logos}>
        {logos.map(({ img }) => {
          return <img src={img} alt="" />;
        })}
      </main>

      <article className={styles.box_WhatIsKatanaComponent}>
        <img
          src="/NFT_GAME/media/wikata.png.svg"
          alt=""
          className={styles.img_WhatIsKatanaComponent}
        />

        <div>
          <div className={styles.title_WhatIsKatanaComponent}>
            What is Katana Inu?
          </div>
          <div className={styles.answers_WhatIsKatanaComponent}>
            {about.map(({ text }, index) => {
              return (
                <div className={styles.answer_WhatIsKatanaComponent}>
                  <img
                    src={
                      index < 2 ? "/NFT_GAME/media/Group 1000001351.svg" : ""
                    }
                    alt={styles._WhatIsKatanaComponent}
                  />
                  <div className={styles._WhatIsKatanaComponent}>{text}</div>
                </div>
              );
            })}
          </div>

          <main className={styles.btns_Header}>
            {buttons.map(({ text }) => {
              return (
                <div className={styles.btn_Header}>
                  <div style={{ textTransform: "uppercase" }} className="">
                    {text}
                  </div>
                </div>
              );
            })}
          </main>
        </div>
      </article>
    </div>
  );
};

export const AboutTheGameComponent = () => {
  const cards = [
    {
      img: "/NFT_GAME/media/Group 49566.svg",
      title: "PLAYER-DRIVEN ECONOMY",
      desc: "The entire economy is driven by resource gathering, looting and crafting. Different resources are found in different areas and events. Player-run cities will be vibrant centers of commerce.",
    },
    {
      img: "/NFT_GAME/media/Group 1000001464.svg",
      title: "EVER-CHANGING WORLD",
      desc: "New zones, dungeons, bosses and events spawn based on the mass cooperation of the players. Work together to move the world forward!",
    },
    {
      img: "/NFT_GAME/media/Group 49562.svg",
      title: "RAID BOSSES PVP SIEGES",
      desc: "Huge roaming world bosses and raid dungeons await the most powerful adventurers. Engage in PvP by sieging fortresses and territory from rival guilds!",
    },
  ];

  const buttons = [
    { text: "Apply as ambassador" },
    { text: "Apply as influencer" },
  ];

  const mints = [
    {
      title: "WEAPONS",
      desc: "You can now mint our in-game NFTs and fight in our Katana Inu game with rare and legendary NFTs.",
      img: "/NFT_GAME/media/Group 1000001289.svg",
    },
    {
      title: "SKINS",
      desc: "You can now mint our in-game NFTs and fight in our Katana Inu game with rare and legendary NFTs.",
      img: "/NFT_GAME/media/Group 1000001295.svg",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: "url('/NFT_GAME/media/image 66.svg')",
      }}
      className={styles.AboutTheGameComponent}
    >
      <div className={styles.title_AboutTheGameComponent}>ABOUT THE GAME</div>
      <div className={styles.text_AboutTheGameComponent}>
        World Eternal Online is a new sandbox MMO with a player-driven economy.
        Players are invited to slay huge raid bosses and conquer territory in
        this dynamic, ever-changing world.
      </div>

      <article className={styles.cards_AboutTheGameComponent}>
        {cards.map(({ img, title, desc }, index) => {
          return (
            <div className={styles.card_AboutTheGameComponent}>
              <img
                src={img}
                alt=""
                className={`${styles.cardImg_AboutTheGameComponent} ${
                  index === 0 && styles.top
                }`}
              />
              <div className={styles.cardSubtitle_AboutTheGameComponent}>
                Features
              </div>
              <div className={styles.cardTitle_AboutTheGameComponent}>
                {title}
              </div>
              <div className={styles.cardDesc_AboutTheGameComponent}>
                {desc}
              </div>
            </div>
          );
        })}
      </article>

      <main className={styles.btns_Header}>
        {buttons.map(({ text }) => {
          return (
            <div className={styles.btn_Header}>
              <div style={{ textTransform: "uppercase" }} className="">
                {text}
              </div>
            </div>
          );
        })}
      </main>

      <section className={styles.mints_AboutTheGameComponent}>
        {mints.map(({ title, desc, img }) => {
          return (
            <div className={styles.mint_AboutTheGameComponent}>
              <img
                src="/NFT_GAME/media/pin.png.svg"
                alt=""
                className={styles.mintLogo_AboutTheGameComponent}
              />{" "}
              <span className={styles.mintText_AboutTheGameComponent}>
                MINTING
              </span>
              <div className={styles.mintTitle__AboutTheGameComponent}>
                {title}
              </div>
              <div className={styles.mintDesc__AboutTheGameComponent}>
                <div className="">{desc}</div>
                <div style={{ gap: "0px" }} className={styles.btn_Header}>
                  <div>
                    {"mint weapons "}{" "}
                    <span className={styles.mintsmall_AboutTheGameComponent}>
                      (Coming Soon)
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="white"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <img
                src={img}
                alt=""
                className={styles.mintImg__AboutTheGameComponent}
              />
            </div>
          );
        })}
      </section>

      <main className={styles.btns_Header}>
        {buttons.map(({ text }) => {
          return (
            <div className={styles.btn_Header}>
              <div style={{ textTransform: "uppercase" }} className="">
                {text}
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export const TrailerGalleryComponent = () => {
  const [current, setCurrent] = useState("0");
  const [active, setActive] = useState(1);
  const carousels = [
    {
      xd: "0%",
      id: "1",
      img: "/NFT_GAME/media/6d0e24b50fddd43ef43d04108e058479.jpg",
    },
    { xd: "25%", id: "2", img: "/NFT_GAME/media/trailer00.png.svg" },
    {
      xd: "50%",
      id: "3",
      img: "/NFT_GAME/media/e9d80f1f7ece68cbc1fe018dc0e6b50a.png",
    },
  ];

  const ref = useRef();

  useEffect(() => {
    const items = carousels.find((item) => item.id === String(active));
    // console.log(carousels);
    console.log(String(active));
    setCurrent(items.xd);
  }, [active]);

  useEffect(() => {
    ref.current.style.transition = `0.4s`;
    ref.current.style.transform = `translateX(${`-${current}`})`;
  }, [current]);

  return (
    <article className={styles.TrailerGalleryComponent}>
      <div className={styles.control_TrailerGalleryComponent}>
        <img
          onClick={() => (active > 1 ? setActive(active - 1) : null)}
          style={{
            transform: "rotate(180deg)",
            visibility: active > 1 ? "" : "hidden",
          }}
          src="/NFT_GAME/media/Vector (19).svg"
          alt=""
        />
        <img
          onClick={() => (active < 3 ? setActive(active + 1) : null)}
          src="/NFT_GAME/media/Vector (19).svg"
          alt=""
          style={{ visibility: active < 3 ? "" : "hidden" }}
        />
      </div>

      <article className="w-100 overflow-hidden">
        <main ref={ref} className={styles.carousels_TrailerGalleryComponent}>
          {carousels.map(({ img, id }) => {
            return (
              <div className={styles.carousel_TrailerGalleryComponent}>
                <img
                  style={{
                    width: active === Number(id) ? "54.167vw" : "",
                    height: active === Number(id) ? "31.302vw" : "",
                  }}
                  src={img}
                  alt=""
                  className={styles.carouselImg_TrailerGalleryComponent}
                />
                {active === Number(id) ? (
                  <img
                    src="/NFT_GAME/media/Group 1000001302.svg"
                    alt=""
                    className={styles.play_TrailerGalleryComponent}
                  />
                ) : (
                  ""
                )}
                {active === Number(id) ? (
                  <div className={styles.title_TrailerGalleryComponent}>
                    Gameplay trailer
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </main>
      </article>
      <img
        src="/NFT_GAME/media/gallery_img.png.svg"
        alt=""
        className={styles.bg_TrailerGalleryComponent}
      />
    </article>
  );
};
