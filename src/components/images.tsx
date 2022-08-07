import React from "react";
import style from "../pages/index.module.css"

export function Images({}) {
  return <>    <div className={style.cardForImage}>
      <p>Ausführung Foo</p>
    <img src="/foo.png" alt="SimpleKI" className={style.img} />
    </div>
    <div className={style.cardForImage}>
      <p>Ausführung Bar</p>
    <img src="./bar.png" alt="SimpleKI" className={style.img} />
    </div></>;
}
  