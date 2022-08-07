import React from "react";
import styles from "./Linklist.module.css";

interface Props {
    name: string;
    listWithLinks: {
        name: string
        component: string
        link: string
        style: string
    }[];
}

export function LinkList({name, listWithLinks}:Props) {
  return (
    <div className={styles.container}>
      <span className="block uppercase text-gray-600 text-md lg:text-lg font-mono font-semibold mb-4 underline">
      {name}
      </span>
      <ul className="list-unstyled">
        {listWithLinks.map((item:any) => {
          return (
            <li
              key={item.name}
              className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}