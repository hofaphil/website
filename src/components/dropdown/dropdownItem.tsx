import React from "react"

export interface Props {
  text: string
  link: string
  icon?: string
  blank?: boolean
}

export default function DropdownItem(props: Props) {
  return (
    <li>
      <a className="dropdown-item" href={props.link} target={props.blank ? "_blank" : "_self"} rel="noreferrer">
        {!!props.icon &&
          <i className={"me-2 bi " + props.icon} aria-hidden="true"></i>
        }
        {props.text}
      </a>
    </li>
  )
}