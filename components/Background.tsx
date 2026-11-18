import Skills from "./Skills";
export default function Background() {
  return (
    <section id="background"><div className="wrap">
<p className="mono rv">05 / Background</p><h2 className="rv">EDUCATION &amp; EXPERIENCE</h2>
<div className="tl rv">
<div><p className="mono ac">2022 – 2027 (Expected)</p><h3>Chandigarh University, India</h3><p className="lead">Integrated B.E. + M.E. in Computer Science and Engineering · CGPA 7.6 / 10</p>
<div className="cw"><span>Artificial Intelligence</span><span>Machine Learning</span><span>Deep Learning</span><span>Computer Vision</span><span>Natural Language Processing</span><span>Data Mining</span><span>Data Analytics</span><span>Database Management Systems</span><span>Data Structures &amp; Algorithms</span><span>Probability and Statistics</span></div></div>
<div><p className="mono ac">May 2024</p><h3>Software Development Intern · Zion Technology</h3><p className="lead">Developed application features using Python, JavaScript, SQL, and APIs; assisted with debugging, testing, and database operations.</p></div>
</div>

<h2 className="rv" style={{marginTop:"70px",fontSize:"clamp(28px,4vw,44px)"}}>TECHNICAL SKILLS</h2>
<Skills />

<h2 className="rv" style={{marginTop:"80px",fontSize:"clamp(28px,4vw,44px)"}}>ACHIEVEMENTS &amp; CERTIFICATIONS</h2>
<div className="ach rv">
<div><p className="mono ac">2022</p><h3>First Prize — State-Level Science Exhibition</h3><p className="lead" style={{marginTop:"10px"}}>Renewable-energy concept integrating a Solar Tree and Enlil Wind Turbine design.</p></div>
<div><p className="mono">Certifications</p><ul><li>Oracle Certified Generative AI Professional <span>2025</span></li><li>NPTEL Elite — Cloud Computing <span>2024</span></li><li>Meta — Introduction to Databases <span>2024</span></li></ul></div>
</div></div></section>
  );
}
