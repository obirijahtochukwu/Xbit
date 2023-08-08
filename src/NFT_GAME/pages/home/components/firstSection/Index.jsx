import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import Navbar from "../layout/header/Index";
import ReactElasticCarousel from "react-elastic-carousel";
import { BsPauseCircleFill } from "react-icons/bs";

export const HeaderComponent = () => {
  const buttons = [
    { text: "MINT NFTS" },
    { text: "BUY TOKEN" },
    { text: "STAKING HERE" },
  ];

  return (
    <div className={styles.HeaderComponent}>
      <Navbar />
      <video
        allowFullScreen
        autoPlay="true"
        controls=""
        muted
        loop
        width={"100%"}
        height={"100%"}
        className={styles.video}
      >
        <source
          src="/NFT_GAME/media/WhatsApp Video 2023-08-06 at 1.11.44 AM.mp4"
          type="video/mp4"
        />
      </video>
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

          <main
            style={{ flexWrap: "wrap", width: "100%", justifyContent: "start" }}
            className={styles.btns_Header}
          >
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
  const ref = React.useRef(null);

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
        backgroundImage:
          "linear-gradient(0deg, rgba(12, 12, 12, 0.00) 0%, rgba(0, 0, 0, 0.52) 100%),url('/NFT_GAME/media/image 66.svg')",
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
                <div
                  style={{ gap: "0px", width: "fit-content" }}
                  className={styles.btn_Header}
                >
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
  const [play, setPlay] = useState({ 1: "false", 2: "false", 3: "false" });
  const [play2, setPlay2] = useState({ 1: "false", 2: "false", 3: "false" });
  const [current, setCurrent] = useState("0");
  const [active, setActive] = useState(1);
  const carousels = [
    {
      ref1: useRef(),
      ref: useRef(),
      xd: "0%",
      id: "1",
      img: "/NFT_GAME/video/WhatsApp Video 2023-08-07 at 9.19.52 AM.mp4",
    },
    {
      ref1: useRef(),
      ref: useRef(),
      xd: "25%",
      id: "2",
      img: "/NFT_GAME/video/WhatsApp Video 2023-08-07 at 9.12.33 AM.mp4",
    },
    {
      ref1: useRef(),
      ref: useRef(),
      xd: "50%",
      id: "3",
      img: "/NFT_GAME/video/WhatsApp Video 2023-08-07 at 7.08.16 AM.mp4",
    },
  ];

  const ref = useRef();
  const carouselRef = useRef();

  const next = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const prev = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(carousels.length);
    }
  };
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 4 },
    { width: 768, itemsToShow: 5 },
  ];

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
          onClick={() => {
            if (active > 1) {
              setActive(active - 1);
            }
            carouselRef.current.slidePrev();
          }}
          style={{
            transform: "rotate(180deg)",
            visibility: active > 1 ? "" : "hidden",
          }}
          src="/NFT_GAME/media/Vector (19).svg"
          alt=""
        />
        <img
          onClick={() => {
            if (active < 3) {
              setActive(active + 1);
            }
            carouselRef.current.slideNext();
          }}
          src="/NFT_GAME/media/Vector (19).svg"
          alt=""
          style={{ visibility: active < 3 ? "" : "hidden" }}
        />
      </div>

      <article className={`${styles.sm} w-75 mx-auto`}>
        <ReactElasticCarousel
          ref={carouselRef}
          disableArrowsOnEnd={false}
          onNextStart={next}
          onPrevEnd={prev}
          showArrows={false}
          pagination={false}
          renderPagination={false}
          breakPoints={breakPoints}
        >
          {carousels.map(({ img, id, ref1 }) => {
            const idx = Number(id);

            return (
              <div className={styles.carousel_TrailerGalleryComponent}>
                <video
                  allowFullScreen
                  autoPlay=""
                  controls=""
                  muted
                  ref={ref1}
                  loop
                  className={styles.carouselImg_TrailerGalleryComponent}
                >
                  <source src={img} />
                </video>
                {active === Number(id) ? (
                  <>
                    {console.log(play?.[id])}
                    {play?.[id] === "false" ? (
                      <img
                        onClick={() => {
                          ref1.current.play();
                          setPlay({ ...play, [id]: "true" });
                        }}
                        src="/NFT_GAME/media/Group 1000001302.svg"
                        alt=""
                        className={styles.play_TrailerGalleryComponent}
                      />
                    ) : (
                      <BsPauseCircleFill
                        onClick={() => {
                          ref1.current.pause();
                          setPlay({ ...play, [id]: "false" });
                        }}
                        className={styles.pause_TrailerGalleryComponent}
                      />
                    )}
                  </>
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
        </ReactElasticCarousel>
      </article>
      <article className={`${styles.md} w-100 overflow-hidden`}>
        <main ref={ref} className={styles.carousels_TrailerGalleryComponent}>
          {carousels.map(({ img, id, ref }) => {
            return (
              <div className={styles.carousel_TrailerGalleryComponent}>
                <video
                  allowFullScreen
                  autoPlay=""
                  controls=""
                  muted
                  ref={ref}
                  loop
                  className={styles.carouselImg_TrailerGalleryComponent}
                  style={{
                    borderColor: active === Number(id) ? "" : "transparent",
                    width: active === Number(id) ? "54.167vw" : "",
                    height: active === Number(id) ? "31.302vw" : "",
                  }}
                >
                  <source src={img} />
                </video>
                {active === Number(id) ? (
                  <>
                    {play2?.[id] === "false" ? (
                      <img
                        onClick={() => {
                          ref.current.play();
                          setPlay2({ ...play, [id]: "true" });
                        }}
                        src="/NFT_GAME/media/Group 1000001302.svg"
                        alt=""
                        className={styles.play_TrailerGalleryComponent}
                      />
                    ) : (
                      <BsPauseCircleFill
                        onClick={() => {
                          ref.current.pause();
                          setPlay2({ ...play, [id]: "false" });
                        }}
                        className={styles.pause_TrailerGalleryComponent}
                      />
                    )}
                  </>
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

export const ClosedBetaComponent = () => {
  const downloads = [
    { img: "/NFT_GAME/media/Link ⏵ download_btn.png.svg" },
    { img: "/NFT_GAME/media/Link ⏵ play.png.svg" },
    { img: "/NFT_GAME/media/Link.svg" },
  ];

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(12, 12, 12, 0.00) 0%, rgba(0, 0, 0, 0.52) 100%),url('/NFT_GAME/media/image 66.svg')",
      }}
      className={styles.ClosedBetaComponent}
    >
      <header>
        <div className={styles.subtitle_ClosedBetaComponent}>Play Our</div>
        <div className={styles.title_ClosedBetaComponent}>closed beta now!</div>
        <div className={styles.text_ClosedBetaComponent}>Download Now :</div>
        <div className={styles.downloads_ClosedBetaComponent}>
          {downloads.map(({ img }) => {
            return <img src={img} alt="" />;
          })}
        </div>

        <div className={styles.durationBox_ClosedBetaComponent}>
          <img src="/NFT_GAME/media/Vector (20).svg" alt="" className="w-100" />
          <div className={styles.duration_ClosedBetaComponent}>
            <div>
              <div className={styles.durationTitle_ClosedBetaComponent}>
                The server are always Open between:
              </div>
              <div className={styles.durationText_ClosedBetaComponent}>
                2-4 Pm & 7-10pm CET Time
              </div>
            </div>
            <div className={styles.durationBtns__ClosedBetaComponent}>
              {["1vs1", "3vs3"].map((item) => {
                return (
                  <div className={styles.durationBtn__ClosedBetaComponent}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <img src="/NFT_GAME/media/Vector (20).svg" alt="" className="w-100" />
        </div>
      </header>

      <main className={styles.key_ClosedBetaComponent}>
        <aside className={styles.aside_ClosedBetaComponent}>
          <div className={styles.asideKey_ClosedBetaComponent}>
            <img src="/NFT_GAME/media/key.png.svg" alt="" />
            <div className="">
              For our closed beta you need to have{" "}
              <span className="yellow">a whitelist key.</span>
            </div>
          </div>
          <div className={styles.asideTwitch_ClosedBetaComponent}>
            <div className="">You can win a key on our discord join here</div>
            <img src="/NFT_GAME/media/.svg" alt="" />
          </div>
          <div className={styles.noKey_ClosedBetaComponent}>
            *If you don't have key, no worries read below
          </div>
          <div className={styles.info_ClosedBetaComponent}>
            hold Tokens or NFTs to participate in our closed beta: In order to
            get access to the closed beta,
          </div>
          <div className={styles.infoSmall_ClosedBetaComponent}>
            you have to fulfil any one of the requirements below:
          </div>
          <div className={styles.or1_ClosedBetaComponent}>
            <div className="">
              Hold <span className="yellow">500k</span> $KATA TOKENS
            </div>
            <img src="/NFT_GAME/media/pseudo (2).svg" alt="" />
          </div>
          <div className={styles.or_ClosedBetaComponent}>
            <img src="/NFT_GAME/media/ot.png.svg" alt="" className="w" />
            <div className="">
              <button className={styles.btn_Header}>Buy Here</button>
            </div>
          </div>
          <div className={styles.or2_ClosedBetaComponent}>
            <div className="">
              Hold{" "}
              <span className="yellow">1 Takeru Genesis Collection NFT</span>
            </div>
            <div className="">
              <img src="/NFT_GAME/media/pseudo (3).svg" alt="" />
            </div>
          </div>
          <div className={styles.or_ClosedBetaComponent}>
            <img src="/NFT_GAME/media/ot.png.svg" alt="" className="w" />
            <div className="">
              <button className={styles.btn_Header}>Buy Here</button>
            </div>
          </div>
          <div className={styles.or3_ClosedBetaComponent}>
            <div className="">
              Hold one of the below combinations for the
              <br />
              <span className="yellow">
                GameZone Sword or Bluezilla Axe NFT's:
              </span>
            </div>
            <div className="">
              <img src="/NFT_GAME/media/pseudo (4).svg" alt="" />
            </div>
          </div>
          <div className={styles.or_ClosedBetaComponent}>
            <img src="/NFT_GAME/media/ot.png.svg" alt="" className="w" />
            <div className="">
              <button className={styles.btn_Header}>Buy Here</button>
            </div>
          </div>

          <footer className={styles.ors_ClosedBetaComponent}>
            {[
              { text: "Immortal", id: "1x" },
              { text: "Legendary", id: "1x " },
              { text: " Common", id: "5x" },
              { text: " Mystical", id: "2x" },
              { text: " Rare", id: "3x" },
            ].map(({ text, id }) => {
              return (
                <div className="">
                  <span className="yellow">{id}</span> {text}
                </div>
              );
            })}
          </footer>
        </aside>

        <img
          src="/NFT_GAME/media/Group 1000001316.svg"
          alt=""
          className={styles.keyImg_ClosedBetaComponent}
        />
      </main>
    </div>
  );
};

export const OurActivityComponent = () => {
  const [active, setActive] = useState(2);

  const downloads = [
    { img: "/NFT_GAME/media/Link ⏵ download_btn.png.svg" },
    { img: "/NFT_GAME/media/Link ⏵ play.png.svg" },
    { img: "/NFT_GAME/media/Link.svg" },
  ];

  const carousels = [
    {
      id: "1",
      text: "Tokyo Game Show 2022 | Katana Inu in Japan | Gamers loved our game",
      desc: "The Katana Inu Team was from 15-18 August in #Tokyo Japan at Tokyo-Game Show. #tokyogameshow2022 #tgs We had a great time and the Japanese gamers fell in love with our game.",
      img: "/NFT_GAME/media/6ef30ae04590f268bdada545b52602c1.png",
    },
    {
      id: "2",
      text: "Blockchain Economy July 2022 in Istanbul",
      desc: "The Katana Inu Team was in Istanbul from 27-29 July at Blockchain Summit.We had a great time and meet a lot of potential partners, exchanges and influencers.",
      img: "/NFT_GAME/media/div.ytp-cued-thumbnail-overlay-image.svg",
    },
    {
      id: "3",
      text: "World BlockChain summit March 2022 at Atlantis Hotel in Dubai",
      desc: "The Katana Inu Team was on 23-24 March at World Blockchain Summit in Dubai and 16-17 March 2022 Crypto Expo Dubai.We had a great time and met a lot of potential partnerships and investors.",
      img: "/NFT_GAME/media/e03023849099bef40407d74c753615bb.jpg",
    },
  ];

  const carouselRef = useRef();

  const next = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const prev = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(carousels.length);
    }
  };
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 4 },
    { width: 768, itemsToShow: 5 },
  ];

  return (
    <div className={styles.OurActivityComponent}>
      <header>
        <div className={styles.text_ClosedBetaComponent}>Download Now :</div>
        <div className={styles.downloads_ClosedBetaComponent}>
          {downloads.map(({ img }) => {
            return <img src={img} alt="" />;
          })}
        </div>
        <div className={styles.subtitle_OurActivityComponent}>
          FULL OF ACTION
        </div>
        <div className={styles.title_OurActivityComponent}>
          Our Activity on Events
        </div>
      </header>

      <div className={`${styles.md} ${styles.control_TrailerGalleryComponent}`}>
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
          onClick={() =>
            active < carousels.length ? setActive(active + 1) : null
          }
          src="/NFT_GAME/media/Vector (19).svg"
          alt=""
          style={{ visibility: active < carousels.length ? "" : "hidden" }}
        />
      </div>

      <article className={`${styles.md} w-100 overflow-hidden`}>
        <main
          style={{
            transform: active === 1 ? "translate(15%)" : "translate(-20%)",
          }}
          className={styles.carousels_OurActivityComponent}
        >
          {/* PREVIOUS CAROUSEL */}
          {carousels.map(({ img, id, text, desc }) => {
            const val = Number(id);
            if (val === active - 1) {
              return (
                <div
                  className={`${styles.carousel_OurActivityComponent} close`}
                >
                  <div
                    style={{
                      width: active === Number(id) ? "54.167vw" : "39.375vw",
                      height: active === Number(id) ? "31.302vw" : "20.625vw",
                      backgroundImage: `url('${img}')`,
                    }}
                    className={styles.carouselImg_OurActivityComponent}
                  ></div>

                  <div
                    className={`${styles.carouselTitle_OurActivityComponent} ${styles.inactive}`}
                  >
                    {text}
                  </div>
                  <div className={styles.text_OurActivityComponent}>{desc}</div>
                </div>
              );
            }
          })}

          {/* ACTIVE CAROUSEL */}
          {carousels.map(({ img, id, text, desc }) => {
            if (active === Number(id)) {
              return (
                <div
                  className={`active ${styles.carousel_OurActivityComponent}`}
                >
                  <div
                    style={{
                      width: active === Number(id) ? "54.167vw" : "39.375vw",
                      height: active === Number(id) ? "31.302vw" : "20.625vw",
                      backgroundImage: `url('${img}')`,
                    }}
                    className={styles.carouselImg_OurActivityComponent}
                  >
                    <div className={styles.carouselHeader_OurActivityComponent}>
                      <img
                        src="/NFT_GAME/media/Link - Photo image of Katana Inu.svg"
                        alt=""
                        className={
                          styles.carouselHeaderImg_OurActivityComponent
                        }
                      />
                      <div
                        className={
                          styles.carouselHeaderTitle_OurActivityComponent
                        }
                      >
                        Katana Inu at Blockchain Economy in Istanbul 2022 | +
                        Speech from Founder
                      </div>
                      <div className={styles.share_OurActivityComponent}>
                        <img src="/NFT_GAME/media/ytp-id-8.svg" alt="" />
                        <div className="">Share</div>
                      </div>
                    </div>
                  </div>
                  {active === Number(id) ? (
                    <img
                      src="/NFT_GAME/media/Group 1000001324.svg"
                      alt=""
                      className={styles.play_OurActivityComponent}
                    />
                  ) : (
                    ""
                  )}
                  <div className={styles.carouselTitle_OurActivityComponent}>
                    {text}
                  </div>
                  <div className={styles.text_OurActivityComponent}>{desc}</div>
                </div>
              );
            }
          })}

          {/* NEXT CAROUSEL */}
          {carousels.map(({ img, id, text, desc }) => {
            const val = Number(id);
            if (val === active + 1) {
              return (
                <div className={`${styles.carousel_OurActivityComponent} open`}>
                  <img
                    style={{
                      width: active === Number(id) ? "54.167vw" : "39.375vw",
                      height: active === Number(id) ? "31.302vw" : "20.625vw",
                    }}
                    src={img}
                    alt=""
                    className={styles.carouselImg_OurActivityComponent}
                  />
                  {active === Number(id) ? (
                    <img
                      src="/NFT_GAME/media/Group 1000001302.svg"
                      alt=""
                      className={styles.play_OurActivityComponent}
                    />
                  ) : (
                    ""
                  )}
                  <div
                    className={`${styles.carouselTitle_OurActivityComponent} ${styles.inactive}`}
                  >
                    {text}
                  </div>
                  <div className={styles.text_OurActivityComponent}>{desc}</div>
                </div>
              );
            }
          })}
        </main>
      </article>

      <div style={{ width: "90%" }} className={`${styles.sm} mx-auto`}>
        <ReactElasticCarousel
          ref={carouselRef}
          disableArrowsOnEnd={false}
          onNextStart={next}
          onPrevEnd={prev}
          // showArrows={false}
          pagination={false}
          renderPagination={false}
          breakPoints={breakPoints}
        >
          {carousels.map(({ img, id, text, desc }) => {
            return (
              <div className={`active ${styles.carousel_OurActivityComponent}`}>
                <div
                  style={{
                    backgroundImage: `url('${img}')`,
                  }}
                  className={styles.carouselImg_OurActivityComponent}
                >
                  <div className={styles.carouselHeader_OurActivityComponent}>
                    <img
                      src="/NFT_GAME/media/Link - Photo image of Katana Inu.svg"
                      alt=""
                      className={styles.carouselHeaderImg_OurActivityComponent}
                    />
                    <div
                      className={
                        styles.carouselHeaderTitle_OurActivityComponent
                      }
                    >
                      Katana Inu at Blockchain Economy in Istanbul 2022 | +
                      Speech from Founder
                    </div>
                    <div className={styles.share_OurActivityComponent}>
                      <img src="/NFT_GAME/media/ytp-id-8.svg" alt="" />
                      <div className="">Share</div>
                    </div>
                  </div>
                </div>
                <img
                  src="/NFT_GAME/media/Group 1000001324.svg"
                  alt=""
                  className={styles.play_OurActivityComponent}
                />

                <div className={styles.carouselTitle_OurActivityComponent}>
                  {text}
                </div>
                <div className={styles.text_OurActivityComponent}>{desc}</div>
              </div>
            );
          })}
        </ReactElasticCarousel>
      </div>
    </div>
  );
};

export const ChooseYourWarriorComponent = () => {
  const [active, setActive] = useState(2);

  const carousels = [
    {
      id: "1",
      text: "Kape",
      img: "/NFT_GAME/media/Img - A 3D model of a car. Use mouse, touch or arrow keys to move. ⏵ image.svg",
    },
    {
      id: "2",
      text: "Kape",
      img: "/NFT_GAME/media/Img - A 3D model of a car. Use mouse, touch or arrow keys to move. ⏵ image (1).svg",
    },
    {
      id: "3",
      text: "Kape",
      img: "/NFT_GAME/media/Img - A 3D model of a car. Use mouse, touch or arrow keys to move. ⏵ image (2).svg",
    },
  ];

  const carouselRef = useRef();

  const next = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const prev = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(carousels.length);
    }
  };
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 4 },
    { width: 768, itemsToShow: 5 },
  ];

  return (
    <article
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(12, 12, 12, 0.00) 0%, rgba(0, 0, 0, 0.52) 100%), url('/NFT_GAME/media/Section.svg')",
      }}
      className={styles.ChooseYourWarriorComponent}
    >
      <div className={styles.subtitle_OurActivityComponent}>
        READY TO SLASH?
      </div>
      <div className={styles.title_OurActivityComponent}>
        Choose your warrior
      </div>

      <section className={styles.section_ChooseYourWarriorComponent}>
        <img
          onClick={() => (active > 1 ? setActive(active - 1) : null)}
          style={{
            transform: "rotate(180deg)",
            visibility: active > 1 ? "" : "hidden",
          }}
          src="/NFT_GAME/media/Vector (19).svg"
          alt=""
          className={styles.control_ChooseYourWarriorComponent}
        />

        <main className={styles.main_ChooseYourWarriorComponent}>
          {active === 1 && (
            <div
              src={"img"}
              alt=""
              className={`${styles.md} ${styles.carouselImg_ChooseYourWarriorComponent}`}
            />
          )}
          {/* PREVIOUS CAROUSEL */}
          {carousels.map(({ img, id }) => {
            const val = Number(id);
            if (val === active - 1) {
              return (
                <div
                  className={`active ${styles.md} ${styles.carousel_ChooseYourWarriorComponent}`}
                >
                  <img
                    src={img}
                    alt=""
                    className={styles.carouselImg_ChooseYourWarriorComponent}
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
                  className={`active ${styles.carousel_ChooseYourWarriorComponent}`}
                >
                  <img
                    src={img}
                    alt=""
                    className={`${styles.carouselImg_ChooseYourWarriorComponent} ${styles.active}`}
                  />

                  <div
                    className={styles.carouselTitle_ChooseYourWarriorComponent}
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
                  className={`active ${styles.md} ${styles.carousel_ChooseYourWarriorComponent}`}
                >
                  <img
                    src={img}
                    alt=""
                    className={styles.carouselImg_ChooseYourWarriorComponent}
                  />
                </div>
              );
            }
          })}
          {active === carousels.length && (
            <div
              src={"img"}
              alt=""
              className={`${styles.md} ${styles.carouselImg_ChooseYourWarriorComponent}`}
            />
          )}
        </main>

        <img
          onClick={() =>
            active < carousels.length ? setActive(active + 1) : null
          }
          src="/NFT_GAME/media/Vector (19).svg"
          alt=""
          style={{ visibility: active < carousels.length ? "" : "hidden" }}
          className={styles.control_ChooseYourWarriorComponent}
        />
      </section>
    </article>
  );
};

export const NextPhaseComponent = () => {
  return (
    <section
      style={{
        backgroundImage:
          "conic-gradient(from 180deg at 50.00% 50.00%, rgba(0, 0, 0, .8) 0deg, rgba(0, 0, 0, .8) 180deg), url('/NFT_GAME/media/36c97bb96e3f9290d71fc44ecb4f3a88.png')",
      }}
      className={styles.NextPhaseComponent}
    >
      <div
        style={{ textAlign: "start" }}
        className={styles.subtitle_OurActivityComponent}
      >
        Next Phase
      </div>
      <div className={styles.text_NextPhaseComponent}>
        Closed Alpha Starting May 15th, 2023
      </div>
      <div className={styles.desc_NextPhaseComponent}>
        Exciting news for gamers as the Closed Alpha for a highly anticipated
        game is set to begin on May 15th, 2023. Closed Alpha testing is a
        crucial stage in game development as it allows developers to test.
      </div>

      <div style={{ width: "fit-content" }} className={styles.btn_Header}>
        Sign Up For Alpha
      </div>
    </section>
  );
};
