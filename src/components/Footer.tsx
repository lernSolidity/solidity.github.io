import React from "react"
import styles from "./Footer.module.css"
import sce from "./sce.png"
import youTube from "./youtube.png"
import discord from "./discord.png"

const ADDRESS = "0xAE10F380F3d2A9CFb3eD957ad5829ec15A1c7e80"

function Footer() {
  return (
    <div className={styles.component}>
      <div className={styles.row}>
        <img src={sce} alt="SimpleKI" className={styles.sce} />
        <a href="https://zerogasnft.simpleki.de/" target="__blank">
          ZeroGasNFT von SimpleKI
        </a>
      </div>
      <div className={styles.social}>
        <div className={styles.row}>
          <img src={discord} alt="discord" className={styles.discord} />
          <a href="https://discord.gg/bt8FK2wkcW" target="__blank">
            Discord
          </a>
        </div>
        <div className={styles.row}>
          <img src={youTube} alt="youtube" className={styles.youTube} />
          <a
            href="https://www.youtube.com/c/simpleki"
            target="__blank"
          >
            YouTube
          </a>
        </div>
      </div>
      <div className={styles.row}>
        Falls du meine Arbeit unterstützen möchtest
        {/* <span role="img" aria-label="smiley"> */}
          🙂
        {/* </span> */}
      </div>
      <div className={styles.row}>
        <a href={`https://etherscan.io/address/${ADDRESS}`} target="__blank">
          {ADDRESS.slice(0, 6)}...{ADDRESS.slice(-6, -1)}
        </a>
      </div>
      <div className={styles.row}>
        dein Ethereum Spende wird genutzt für Serverkosten uvm.
      </div>
      <div className={styles.row}>
          Danke
      </div>
      <div className={styles.row}>
        <a href="mailto:kontakt@lernsolidity.de">
        kontakt@lernsolidity.de
        </a>
      </div>
      {/* <div className={styles.row}>
        <a
          href="https://github.com/solidity-by-example/solidity-by-example.github.io"
          target="__blank"
        >
          Quellecode
        </a>
        <div className={styles.bar}>|</div>
        <a
          href="https://github.com/solidity-by-example/solidity-by-example.github.io/blob/gh-pages/LICENSE"
          target="__blank"
        >
          Lizense
        </a>
      </div> */}
    </div>
  )
}

export default Footer
