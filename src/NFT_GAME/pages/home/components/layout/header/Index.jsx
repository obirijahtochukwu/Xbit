import React from "react";
import styles from "./index.module.scss";
import firstSectionStyle from "../../firstSection/index.module.scss";

export default function Navbar() {
  const links = [
    { text: "About", url: "#About" },
    { text: "Buy NFTs", url: "#Buy NFTs" },
    { text: "Documents", url: "#Documents" },
    { text: "Game", url: "#Game" },
    { text: "Social media", url: "#Social media" },
    { text: "Play", url: "#Play" },
    { text: "Ranking", url: "#Ranking" },
  ];

  return (
    <article className={styles.header}>
      <img src="/NFT_GAME/media/image 1 (1).svg" alt="" />
      <main className={styles.main}>
        {links.map(({ text, url }) => {
          return (
            <a
              style={{ textDecoration: "none" }}
              href={url}
              className="text-white"
            >
              {text}
            </a>
          );
        })}
      </main>
      <div className={firstSectionStyle.btn_Header}>
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
  );
}
