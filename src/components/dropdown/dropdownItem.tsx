export interface Props {
  text: string
  link: string
  icon?: string
  blank?: boolean
}

export default function DropdownItem(props: Readonly<Props>) {
  return (
    <li className="m-2">
      <a className="dropdown-item" href={props.link} target={props.blank ? "_blank" : "_self"} rel="noreferrer" style={{borderRadius: "0.375rem"}}>
        {!!props.icon &&
          <i className={"me-2 bi " + props.icon} aria-hidden="true"></i>
        }
        {props.text}
      </a>
    </li>
  )
}