import "./menu.scss"

export default function Menu(props) {
  return (
    <div className={"menu " + (props.menuOpen && "active")}>
    <ul>
        <li onClick={()=>props.setmenuOpen(false)}>
            <a href="#intro">Home</a>
        </li>
        <li onClick={()=>props.setmenuOpen(false)}>
            <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>props.setmenuOpen(false)}>
            <a href="#work">Works</a>
        </li>
        <li onClick={()=>props.setmenuOpen(false)}>
            <a href="#testimoniols">Testimoniols</a>
        </li>
        <li onClick={()=>props.setmenuOpen(false)}>
            <a href="#contact">Contact</a>
        </li>
    </ul>
    </div>
  )
}
