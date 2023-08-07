import React from "react";
import styles from "./index.module.scss";
import firstSectionStyle from "../../firstSection/index.module.scss";

export default function Navbar() {
  const links = [
    { text: "About", url: "#About", hid: true },
    { text: "Buy NFTs", url: "#Buy NFTs", hid: false },
    { text: "Documents", url: "#Documents", hid: false },
    { text: "Game", url: "#Game", hid: false },
    { text: "Social media", url: "#Social media", hid: true },
    { text: "Play", url: "#Play", hid: false },
    { text: "Ranking", url: "#Ranking", hid: false },
  ];

  return (
    <>
      <article className={`${styles.md} ${styles.header}`}>
        <img src="/NFT_GAME/media/image 1 (1).svg" alt="" />
        <main className={styles.main}>
          {links.map(({ text, url, hid }) => {
            return (
              <a
                style={{ textDecoration: "none" }}
                href={url}
                className={`${hid && styles.hid} text-white`}
              >
                {text}
              </a>
            );
          })}
        </main>
        <div className={`${firstSectionStyle.btn_Header}`}>
          <div className="">{"MARKETPLACE"}</div>
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
      </article>
    </>
  );
}
