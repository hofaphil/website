import React from "react"

export interface Props {
  text: string
  children: React.ReactNode
  icon?: string
}

export default function DropdownButton(props: Props) {
  return (
    <div className="dropdown btn-group">
      <button className={"btn btn-outline-light btn-lg m-1 dropdown-toggle"} data-bs-toggle="dropdown" aria-expanded="false">
        {!!props.icon &&
          <i className={"me-2 bi " + props.icon} aria-hidden="true"></i>
        }
        {props.text}
      </button>
      <ul className="dropdown-menu">
        {props.children}
      </ul>
    </div>
  )
}