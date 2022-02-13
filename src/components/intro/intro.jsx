import "./intro.scss"

export default function Intro() {
  return (
  <div className="intro" id="intro">
    <div className="left">
    <div className="imgContainer">
      <img  src="assets\profile-pic.png" alt="" id="harsh"/>
    </div>
    </div>
    <div className="right">
      <div className="wrapper">
       <h2>Hi There, I'm</h2>
       <h1>Harsh Doiphode</h1>
       <h3>Freelance <span>Web Developer</span></h3>
       </div>
       <a href="#portfolios">
         <img src="assets/down.png" alt=""/>
       </a>
    </div>

  </div>
  )
}
