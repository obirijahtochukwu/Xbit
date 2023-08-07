import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.scss";
import firstSectionStyle from "../../firstSection/index.module.scss";
import { Face } from "@mui/icons-material";
import { FaBars, FaBloggerB, FaGamepad, FaTimes } from "react-icons/fa";
import { GrDocumentStore } from "react-icons/gr";
import { TbSocial } from "react-icons/tb";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { GiLevelEndFlag } from "react-icons/gi";
import { BsInfoSquare } from "react-icons/bs";

export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);

  const links = [
    {
      icon: <BsInfoSquare className={styles.icon} />,
      text: "About",
      url: "#About",
      hid: true,
    },
    {
      icon: <FaBloggerB className={styles.icon} />,
      text: "Buy NFTs",
      url: "#Buy NFTs",
      hid: false,
    },
    {
      icon: <GrDocumentStore className={styles.icon} />,
      text: "Documents",
      url: "#Documents",
      hid: false,
    },
    {
      icon: <FaGamepad className={styles.icon} />,
      text: "Game",
      url: "#Game",
      hid: false,
    },
    {
      icon: <TbSocial className={styles.icon} />,
      text: "Social media",
      url: "#Social media",
      hid: true,
    },
    {
      icon: <BsFillCollectionPlayFill className={styles.icon} />,
      text: "Play",
      url: "#Play",
      hid: false,
    },
    {
      icon: <GiLevelEndFlag className={styles.icon} />,
      text: "Ranking",
      url: "#Ranking",
      hid: false,
    },
  ];

  const ref = useRef(null);
  useEffect(() => {
    const leave = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setSideBar(false);
      }
    };
    document.addEventListener("mousedown", leave);
  }, [ref]);

  useEffect(() => {
    if (sideBar) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [sideBar]);

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
      <nav className={`${styles.sm} ${styles.nav}`}>
        <img src="/NFT_GAME/media/image 1 (1).svg" alt="" />
        {sideBar ? (
          <FaTimes
            onClick={() => setSideBar(!sideBar)}
            style={{ cursor: "pointer" }}
            className={`${styles.sm} ${styles.navIcon}`}
          />
        ) : (
          <FaBars
            onClick={() => setSideBar(!sideBar)}
            style={{ cursor: "pointer" }}
            className={`${styles.sm} ${styles.navIcon}`}
          />
        )}

        <article
          ref={ref}
          className={`custom-scrollbar ${sideBar ? styles.show : ""} ${
            styles.head
          }`}
        >
          <img src="/NFT_GAME/media/image 1 (1).svg" alt="" />
          <main className={styles.main}>
            {links.map(({ text, url, hid, icon }) => {
              return (
                <a
                  style={{ textDecoration: "none" }}
                  href={url}
                  className={`${hid && styles.hid} text-white`}
                >
                  {/* <FaBars /> */}
                  {icon}
                  <div className="">{text}</div>
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
      </nav>
    </>
  );
}
