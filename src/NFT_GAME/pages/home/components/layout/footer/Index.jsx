import React from "react";
import styles from "./index.module.scss";

export default function Footer() {
  const socialIcons = [
    { icon: "/NFT_GAME/media/Vector (25).svg", url: "#" },
    { icon: "/NFT_GAME/media/Vector (24).svg", url: "#" },
    { icon: "/NFT_GAME/media/Vector (29).svg", url: "#" },
    { icon: "/NFT_GAME/media/Vector (28).svg", url: "#" },
    { icon: "/NFT_GAME/media/Vector (27).svg", url: "#" },
    { icon: "/NFT_GAME/media/Vector (26).svg", url: "#" },
  ];

  const links = [
    {
      title: "Products",
      subtext: [
        { text: "Pancakeswap", url: "#" },
        { text: "Uniswap", url: "#" },
        { text: "Whitepaper", url: "#" },
        { text: "Roadmap", url: "#" },
        { text: "Tokenomics", url: "#" },
        { text: "FAQ", url: "#" },
        { text: "Chainplay", url: "#" },
      ],
    },
    {
      title: "need help?",
      subtext: [
        { text: "Contact Us", url: "#" },
        { text: "Discord", url: "#" },
        { text: "Medium", url: "#" },
        { text: "Reddit", url: "#" },
        { text: "ChainVision Games", url: "#" },
        { text: "Privacy", url: "#" },
        { text: "Terms Of Service", url: "#" },
        { text: "Cookies Policy", url: "#" },
      ],
    },
  ];

  const posts = [
    {
      img: "/NFT_GAME/media/Link ⏵ crypto.jpg.svg",
      date: "Dec 20, 2021",
      desc: "METAVERSE GAME ANNOU...",
    },
    {
      img: "/NFT_GAME/media/Link ⏵ Katanainu.jpg.svg",
      date: "Dec 20, 2021",
      desc: "METAVERSE GAME ANNOU...",
    },
    {
      img: "/NFT_GAME/media/Link ⏵ Bitcoin.png.svg ",
      date: "Dec 20, 2021",
      desc: "METAVERSE GAME ANNOU...",
    },
  ];

  return (
    <>
      <div className={styles.footer}>
        <div className={"d-flex align-items-center"}>
          <img
            src="/NFT_GAME/media/Link ⏵ footer_logo.png.svg"
            alt=""
            className={styles.footerLogo}
          />
          <div className={styles.footerIcon}>
            {socialIcons.map(({ icon }) => {
              return <img src={icon} alt="" />;
            })}
          </div>
        </div>

        <main className="d-flex align-items-start justify-content-between">
          <section className={styles.mail}>
            <div className={styles.hint_mail}>Don't miss our latest news</div>
            <aside className={styles.box_mail}>
              <input type="text" placeholder="Email Address" />
              <div className="">
                <div className={styles.btn_mail}>Get News</div>
              </div>
            </aside>
            <div className={styles.hint_mail}>Disclaimer</div>
            <div className={styles.text_mail}>
              Nothing on this website constitutes financial advice, and it is
              always recommended to consult a qualified financial advisor before
              participating in any token or NFT purchases.
            </div>
          </section>
          {links.map(({ title, subtext }) => {
            return (
              <section className={styles.links_footer}>
                <div className={styles.hint_mail}>{title}</div>
                {subtext.map(({ text, url }) => {
                  return (
                    <a
                      href={`${url}`}
                      style={{ opacity: "0.69", textDecoration: "none" }}
                      className={styles.hint_mail}
                    >
                      {text}
                    </a>
                  );
                })}
              </section>
            );
          })}
          <section>
            <div className={styles.hint_mail}>Latest Posts</div>
            {posts.map(({ img, date, desc }) => {
              return (
                <div className={styles.post}>
                  <img src={img} alt="" />
                  <div className="">
                    <div style={{ opacity: "0.5" }} className="">
                      {date}
                    </div>
                    <div className={styles.postDesc}>`{desc}</div>
                  </div>
                </div>
              );
            })}
          </section>
        </main>
      </div>
      <div className={styles.footerText}>
        KATANA INU IS A PROJECT FROM{" "}
        <span className="yellow">CHAINVISION GAMES</span>
      </div>
    </>
  );
}
