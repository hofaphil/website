import React from "react"

export interface Props {
  text: string
  children: React.ReactNode
  icon?: string
}

export default function DropdownButton(props: Props) {
  return (
    <button className={"btn btn-outline-light btn-lg m-1 dropdown-toggle"} data-bs-toggle="dropdown" aria-expanded="false">
      {!!props.icon &&
        <i className={"me-2 bi " + props.icon} aria-hidden="true"></i>
      }
      {props.text}
      <ul className="dropdown-menu">
        {props.children}
      </ul>
    </button>
  )
}