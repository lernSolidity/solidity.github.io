// import { LinkList } from "./LinkList";
import React from "react";
// import { BsTwitter } from "react-icons/bs";
// import BsTwitter
import { Twitter, Youtube, Discord, Instagram, Calendar2Day, Check2Square, Shop } from "react-bootstrap-icons";
import styles from "./NewFooter.module.css"
import stylesLink from "./Linklist.module.css";

interface Props {
    name: string;
    listWithLinks: Array<ArrayInhalt>;
}

interface ArrayInhalt {
  name: string,
  link: string
  // component: string |
  // style: string
}

function LinkList({name, listWithLinks}:Props) {
  return (
    <div className={stylesLink.container}>
      <span >
      {name}
      </span>
      <ul >
        {listWithLinks.map((item:any) => {
          return (
            <li
              key={item.name}
              
            >
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


const TwitterDict = {
  name: "Twitter",
  component: <Twitter />,
  link: "https://twitter.com/simpleki_eth",
  style: "text-blue-400",
};
const YoutubeDict = {
  name: "Youtube",
  component: <Youtube />,
  link: "https://www.youtube.com/c/simpleki",
  style: "text-red-600",
};
const InstagramDict = {
  name: "Instagram",
  component: <Instagram />,
  link: "https://www.instagram.com/simplek.i/",
  style: "text-[#8a3ab9]",
};
const CalendlyDict = {
  name: "Calendly",
  component: <Calendar2Day />,
  link: "https://calendly.com/simpleki/talk",
  style: "text-[#008800]",
};
const Voting = {
  name: "Abstimmung",
  component: <Check2Square />,
  link: "https://zerogasnft.simpleki.de/result",
  style: "text-[#888800]",
};
const DiscordDict = {
  name: "Discord",
  component: <Discord />,
  link: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbDV2MXY0WFVBcVRaSGF0T1N3UHJEWU91Qk9qd3xBQ3Jtc0tsRkZVMGVES1VYVVhOa3Y5Z0wtbDNOYTdOM1FZZE91ZUZBYUJFTTZKSVFYQ09vUVU0RGZwZkRZT25XeFc4U1ZOTDNMZ3dGNHcwMk5JMzdLWVhYVDRIMl9MQUlJdkdyZk9RYU93b1M5TmxIRDBlR3JTcw&q=https%3A%2F%2Fdiscord.gg%2F6kAdgEJaUz",
  style: "text-[#5865F2]",
};
const OpenseaDict = {
  name: "Zur Opensea Kollektion",
  component: <Shop />,
  link: "https://opensea.io/collection/simpleki-beta",
  style: "text-[#5865F2]",
};
const dictList = [YoutubeDict, TwitterDict, DiscordDict, InstagramDict, CalendlyDict];
const DatenschutzDict = {
  name: "Datenschutz",
  link: "/Datenschutz",
};
const ImpressumDict = {
  name: "Impressum",
  link: "/Impressum",
};
const KontaktDict = {
  name: "Kontakt",
  link: "/Kontakt",
};
const zeroGasList = [Voting,OpenseaDict];
const OtherLinksList = [
  DatenschutzDict,
  ImpressumDict,
  KontaktDict,
  
];

export function SocialButtons() {
  return (
    <div className={styles.containerbutton}>
      {dictList.map((item) => {
        return (
          <a key={item.name} href={item.link} >
            <button
              className={styles.buttonstyle}
              type="button"
            >
              {item.component}
            </button>
          </a>
        );
      })}
    </div>
  );
}

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.wave}>
        <svg
          viewBox="0 -20 700 110"
          width="100%"
          height="100"
          preserveAspectRatio="none"
        >
          <path
            transform="translate(0, -18)"
            d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700"
            className={styles.wavetop}
          />
          <path
            d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z"
            fill="#E6E7E9"
            className={styles.wavebottom}
          />
        </svg>
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.headings}>
            <h4 >Lern Solidity von SimpleKI</h4>
            <h5 >
              Smart Contracts schreiben lernen mit Beispielen 
            </h5>
            <SocialButtons />
          </div>
          <div className={styles.prelinks}>
            <div className={styles.orderlink}>
              {/* <LinkList name="ZeroGas" listWithLinks={zeroGasList} /> */}
              <LinkList name="Socials" listWithLinks={dictList} />
              <LinkList name="Other" listWithLinks={OtherLinksList} />
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.ending}>
          <div >
            <div >
              Copyright © {new Date().getFullYear()} LernSolidity by{" "}
              <a
                href="https://www.simpleki.de"
                className="text-gray-600 hover:text-gray-900"
              >
                SimpleKI
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}




export default Footer;