import React from "react"
import SEO from "../components/SEO"
import styles from "./index.module.css"
import youTube from "../components/youtube.png"

interface Route {
  path: string
  title: string
}

const SOL_ROUTES: Route[] = [
  {
    path: "hello-world",
    title: "Hello World",
  },
  {
    path: "first-app",
    title: "Deine erste App!",
  },
  {
    path: "primitives",
    title: "Welche primitiven Data Typen gibt es?",
  },
  {
    path: "variables",
    title: "Variablen",
  },
  {
    path: "constants",
    title: "Konstanten",
  },
  {
    path: "immutable",
    title: "Was ist veränderbar?",
  },
  {
    path: "state-variables",
    title: "Wie lese oder schreibt man in Zustandsvariablen?",
  },
  {
    path: "ether-units",
    title: "Was ist Ether und Wei?",
  },
  {
    path: "gas",
    title: "Was ist Gas und Gas Preis?",
  },
  // Flow control
  {
    path: "if-else",
    title: "If / Else",
  },
  {
    path: "loop",
    title: "For und While Loop",
  },
  // collection data types
  {
    path: "mapping",
    title: "Mapping",
  },
  {
    path: "array",
    title: "Array",
  },
  // custom data types
  {
    path: "enum",
    title: "Enum",
  },
  {
    path: "structs",
    title: "Structs",
  },
  {
    path: "data-locations",
    title: "Speicherorte - Was ist Storage, Memory und Calldata?",
  },
  // function
  {
    path: "function",
    title: "Funktionen",
  },
  {
    path: "view-and-pure-functions",
    title: "View und Pure Funktionen",
  },
  {
    path: "error",
    title: "Error",
  },
  {
    path: "function-modifier",
    title: "Funktions Modifier",
  },
  {
    path: "events",
    title: "Events",
  },
  // inheritance
  {
    path: "constructor",
    title: "Konstruktur | Constructor",
  },
  {
    path: "inheritance",
    title: "Vererbung | Inheritance",
  },
  {
    path: "shadowing-inherited-state-variables",
    title: "Shadowing vererbter Zustandsvariablen",
  },
  {
    path: "super",
    title: "Calling Parent Contracts",
  },
  {
    path: "visibility",
    title: "Visibility",
  },
  {
    path: "interface",
    title: "Interface",
  },
  // send / receive ether
  {
    path: "payable",
    title: "Payable",
  },
  {
    path: "sending-ether",
    title: "Sending Ether - Transfer, Send, and Call",
  },
  {
    path: "fallback",
    title: "Fallback",
  },
  // contract interaction
  {
    path: "call",
    title: "Call",
  },
  {
    path: "delegatecall",
    title: "Delegatecall",
  },
  {
    path: "function-selector",
    title: "Function Selector",
  },

  {
    path: "calling-contract",
    title: "Calling Other Contract",
  },
  {
    path: "new-contract",
    title: "Creating Contracts from a Contract",
  },
  // misc
  {
    path: "try-catch",
    title: "Try / Catch",
  },
  {
    path: "import",
    title: "Import",
  },
  {
    path: "library",
    title: "Library",
  },
  {
    path: "abi-decode",
    title: "ABI Decode",
  },
  // crypto
  {
    path: "hashing",
    title: "Hashing with Keccak256",
  },
  {
    path: "signature",
    title: "Verifying Signature",
  },
  {
    path: "gas-golf",
    title: "Gas Optimizations",
  },
]

const APP_ROUTES: Route[] = [
  {
    path: "ether-wallet",
    title: "Ether Wallet",
  },
  {
    path: "multi-sig-wallet",
    title: "Multi Sig Wallet",
  },
  {
    path: "merkle-tree",
    title: "Merkle Tree",
  },
  {
    path: "iterable-mapping",
    title: "Iterable Mapping",
  },
  {
    path: "erc20",
    title: "ERC20",
  },
  {
    path: "erc721",
    title: "ERC721",
  },
  {
    path: "create2",
    title: "Precompute Contract Address with Create2",
  },
  {
    path: "minimal-proxy",
    title: "Minimal Proxy Contract",
  },
  {
    path: "upgradeable-proxy",
    title: "Upgradeable Proxy",
  },
  {
    path: "deploy-any-contract",
    title: "Deploy Any Contract",
  },
  {
    path: "write-to-any-slot",
    title: "Write to Any Slot",
  },
  {
    path: "uni-directional-payment-channel",
    title: "Uni-directional Payment Channel",
  },
  {
    path: "bi-directional-payment-channel",
    title: "Bi-directional Payment Channel",
  },
  {
    path: "english-auction",
    title: "English Auction",
  },
  {
    path: "dutch-auction",
    title: "Dutch Auction",
  },
  {
    path: "crowd-fund",
    title: "Crowd Fund",
  },
  {
    path: "multi-call",
    title: "Multi Call",
  },
  {
    path: "multi-delegatecall",
    title: "Multi Delegatecall",
  },
  {
    path: "time-lock",
    title: "Time Lock",
  },
]

const HACK_ROUTES: Route[] = [
  {
    path: "re-entrancy",
    title: "Re-Entrancy",
  },
  {
    path: "overflow",
    title: "Arithmetic Overflow and Underflow",
  },
  {
    path: "self-destruct",
    title: "Self Destruct",
  },
  {
    path: "accessing-private-data",
    title: "Accessing Private Data",
  },
  {
    path: "delegatecall",
    title: "Delegatecall",
  },
  {
    path: "randomness",
    title: "Source of Randomness",
  },
  {
    path: "denial-of-service",
    title: "Denial of Service",
  },
  {
    path: "phishing-with-tx-origin",
    title: "Phishing with tx.origin",
  },
  {
    path: "hiding-malicious-code-with-external-contract",
    title: "Hiding Malicious Code with External Contract",
  },
  {
    path: "honeypot",
    title: "Honeypot",
  },
  {
    path: "front-running",
    title: "Front Running",
  },
  {
    path: "block-timestamp-manipulation",
    title: "Block Timestamp Manipulation",
  },
  {
    path: "signature-replay",
    title: "Signature Replay",
  },
  {
    path: "contract-size",
    title: "Bypass Contract Size Check",
  },
]

const TEST_ROUTES: Route[] = [
  {
    path: "echidna",
    title: "Echidna",
  },
]

const DEFI_ROUTES = [
  {
    path: "uniswap-v2",
    title: "Uniswap V2 Swap",
  },
  {
    path: "uniswap-v2-add-remove-liquidity",
    title: "Uniswap V2 Add Remove Liquidity",
  },
  {
    path: "uniswap-v2-optimal-one-sided-supply",
    title: "Uniswap V2 Optimal One Sided Supply",
  },
  {
    path: "uniswap-v3-swap",
    title: "Uniswap V3 Swap",
  },
  {
    path: "chainlink-price-oracle",
    title: "Chainlink Price Oracle",
  },
  {
    path: "staking-rewards",
    title: "Staking Rewards",
  },
  {
    path: "vault",
    title: "Vault",
  },
  {
    path: "constant-sum-amm",
    title: "Constant Sum AMM",
  },
  {
    path: "constant-product-amm",
    title: "Constant Product AMM",
  },
  {
    path: "stable-swap-amm",
    title: "Stable Swap AMM",
  },
]

export const ROUTES_BY_CATEGORY = [
  {
    title: "",
    routes: SOL_ROUTES.map((route) => ({
      ...route,
      path: `/${route.path}`,
    })),
  },
  // {
  //   title: "Applications",
  //   routes: APP_ROUTES.map((route) => ({
  //     ...route,
  //     path: `/app/${route.path}`,
  //   })),
  // },
  // {
  //   title: "Hacks",
  //   routes: HACK_ROUTES.map((route) => ({
  //     ...route,
  //     path: `/hacks/${route.path}`,
  //   })),
  // },
  // {
  //   title: "Tests",
  //   routes: TEST_ROUTES.map((route) => ({
  //     ...route,
  //     path: `/tests/${route.path}`,
  //   })),
  // },
  // {
  //   title: "DeFi",
  //   routes: DEFI_ROUTES.map((route) => ({
  //     ...route,
  //     path: `/defi/${route.path}`,
  //   })),
  // },
]

const ROUTES = ROUTES_BY_CATEGORY.map(({ routes }) => routes).flat()
const ROUTE_INDEX_BY_PATH = ROUTES.reduce((map, route: Route, i) => {
  // @ts-ignore
  map[route.path] = i
  return map
}, {})

export function getPrevNextPaths(path: string): {
  prev: Route | null
  next: Route | null
} {
  // @ts-ignore
  const index = ROUTE_INDEX_BY_PATH[path]
  if (index >= 0) {
    const prev = ROUTES[index - 1] || null
    const next = ROUTES[index + 1] || null
    return { prev, next }
  }
  return {
    prev: null,
    next: null,
  }
}

const UPDATES = [
  "2022/07/30 - Uniswap V3 swap examples",
  "2022/07/16 - Update ERC721",
  "2022/07/10 - Update StakingRewards",
]

export default function HomePage() {
  return (
    <div className={styles.component}>
      <SEO
        title="Lern Solidity  | 0.8.13"
        description="Lerne wie man Smart Contracts programmiert in der Programmiersprache Solidity anhand von Beispielen"
      />
      <h1 className={styles.header}>
        <a href="/">Lern die Solidity Bascis</a>
      </h1>
      <div className={styles.subHeader}>Solidity Version 0.8.13</div>
      <div className={styles.card}>

        <p>
          Lerne <a href="https://solidity.readthedocs.io">Solidity</a> mit einfach Beispielen. 
        </p>
        <p>
        Die Programmiersprache Solidity ist ein Mix aus Python, C++ oder Javascript. 
        </p>
        <p>
        Diese Seite richtet sich an Programmierer:innen, welche in einen der drei genannten Sprache schon Erfahrungen gesammelt haben.
        </p>
        <p> Mithilfe der Beispiele, findest du schnell, wie du eine For-Loop oder sonstiges in deinem Smart Contract implementierst </p>
        <p>
        Wir starten hier aber erstmal klassisch mit HelloWorld. 
        </p>
        <p>Viel Spass!</p>
      </div>
      <div className={styles.main}>
        {/* <div className={styles.youTube}>
          <img src={youTube} alt="logo" className={styles.youTubeLogo} />
          <a
            href="https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA"
            target="__blank"
          >
            Most code are explained here
          </a>
        </div> */}

        {/* <div className={styles.updates}>
          {UPDATES.map((text, i) => (
            <div key={i}>{text}</div>
          ))}
        </div> */}

        {ROUTES_BY_CATEGORY.map(({ routes, title }, i) => (
          <div key={i}>
            {title && <h3 className={styles.category}>{title}</h3>}

            <ul className={styles.list}>
              {routes.map(({ path, title }) => (
                <li className={styles.listItem} key={path}>
                  <a href={path}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
