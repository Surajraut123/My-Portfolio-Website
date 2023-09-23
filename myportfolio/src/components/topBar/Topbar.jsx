import "./Topbar.scss";


export default function Topbar(props) {
  return (
    //work like if condition : if(props.menuOpen is true then make class as active)
    <div className={"topbar " + (props.menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Suraj.
          </a>
          {/* <div className="itemContainer">
            <img src={img2} alt="" className="icons" />
            <span>+91 787-500-1058</span>
          </div>
          <div className="itemContainer">
            <img src={img1} alt="" className="icons" />
            <span>surajraut347@gmail.com</span>
          </div> */}
        </div>
        <div className="right">
          <div className="navbar">
            <ul className="nav-data">
              <li id="nav">
                <a className = "content" href="#intro">Home</a>
              </li>
              <li id="nav">
                <a className = "content" href="#portfolio">Portfolio</a>
              </li>
              <li id="nav">
                <a className = "content" href="#work">Work</a>
              </li>
              <li id="nav">
                <a className = "content" href="#container1">Beyond Code</a>
              </li>
              <li id="nav">
                <a className = "content" href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div
            className="hamburger"
            onClick={() => props.setmenuOpen(!props.menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
