export interface Props {
  link: string
  src: string
  alt: string
}

export default function Badge(props: Props) {
  return (
    <div className="mx-auto m-1" style={{maxWidth: "25rem"}}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img className="img-fluid" src={props.src} alt={props.alt} style={{width: "60%", height: "60%"}}/>
      </a>
    </div>
  )
}