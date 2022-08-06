import React from "react"
import Example from "../../components/Example"
import html, { version, title, description } from "./index.html"
import style from "../index.module.css"
interface Path {
  path: string
  title: string
}

interface Props {
  prev: Path | null
  next: Path | null
}

const ExamplePage: React.FC<Props> = ({ prev, next }) => {
  return (
    <>
    <Example
      version={version}
      title={title}
      description={description}
      html={html}
      prev={prev}
      next={next}
    />
    <div className={style.cardForImage}>
      <p>Ausführung Foo</p>
    <img src="/foo.png" alt="SimpleKI" className={style.img} />
    </div>
    <div className={style.cardForImage}>
      <p>Ausführung Bar</p>
    <img src="./bar.png" alt="SimpleKI" className={style.img} />
    </div>
    </>
  )
}

export default ExamplePage
