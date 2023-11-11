export interface Props {
  link: string
  text?: string
  icon?: string
  blank?: boolean
}

export default function Button(props: Props) {
  return (
    <a className={"btn btn-outline-light m-1"} href={props.link} target={props.blank ? "_blank" : "_self"} rel="noreferrer">
      {!!props.icon &&
        <i className={"me-2 bi " + props.icon} aria-hidden="true"></i>
      }
      {props.text}
    </a>
  )
}