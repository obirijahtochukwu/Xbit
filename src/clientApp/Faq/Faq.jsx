import * as React from "react";
import styles from "./faq.module.scss";
// import { Interface } from 'readline';

export const Faq = ({ title, description, showFaq, setShowFaq }) => {
  const ref = React.useRef(null);
  const textRef = React.useRef(null);
  const [textheight, setTextHeight] = React.useState(0);

  // THIS USEFFECT IS USED TO GET DIV HEIGHT
  React.useEffect(() => {
    setTextHeight(textRef.current?.scrollHeight);
    window.addEventListener("resize", () => {
      setTextHeight(textRef.current?.scrollHeight);
    });
    return () => {
      window.removeEventListener("resize", () => {
        console.log("ll");
      });
    };
  }, [window.innerWidth]);

  return (
    <main className={`${styles.faq} ${showFaq === title ? styles.show : ""}`}>
      <div
        onClick={() => {
          showFaq !== title ? setShowFaq(title) : setShowFaq("");
        }}
        style={{ cursor: "pointer" }}
        className="d-flex justify-content-between align-items-center"
      >
        <div
          className={`${styles.faqTitle} ${
            showFaq === title ? styles.show : ""
          }`}
        >
          {title}
        </div>
        {showFaq === title ? (
          <img
            onClick={() => {
              showFaq !== title ? setShowFaq(title) : setShowFaq("");
            }}
            src="/media/faqs/Line 3.svg"
            alt=""
            style={{ cursor: "pointer" }}
          />
        ) : (
          <img
            onClick={() => {
              showFaq !== title ? setShowFaq(title) : setShowFaq("");
            }}
            src="/media/faqs/download (5) 1.svg"
            alt=""
            style={{ cursor: "pointer" }}
          />
        )}
      </div>

      <div
        style={{
          height: showFaq === title ? `${textheight + 10}px` : "0px",
          paddingTop: showFaq === title ? "" : "0px",
        }}
        className={styles.description}
      >
        <img
          style={{ height: `${textheight}px` }}
          src="/media/faqs/Line 4.svg"
          alt=""
          className=""
        />
        <div ref={textRef} style={{ height: "fit-content" }} className="">
          {description}
        </div>
      </div>
    </main>
  );
};
