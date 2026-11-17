import React from 'react';
import "./ProjectList.scss";

export default function ProjectList({title,active,setSelected,id}) {
  
    return (
        <li>
        <button type="button" className={active ? "portfoliolist active" : "portfoliolist"} aria-pressed={active} onClick={() => setSelected(id)}>{title}</button>
      </li>
    )
}
