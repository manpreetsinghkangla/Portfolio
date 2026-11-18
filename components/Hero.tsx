import HeroCanvas from "./HeroCanvas";
import CVButton from "./CVButton";
export default function Hero() {
  return (
    <section id="home"><HeroCanvas />
<div className="wrap">
<p className="mono">AI / Machine Learning / Research</p>
<h1 className="name" aria-label="Manpreet Singh"><span><em>MANPREET</em></span><span><em>SINGH</em></span></h1>
<p className="hl">Building Intelligent Systems. <span>Exploring Medical AI.</span></p>
<p className="sub">I explore deep learning and intelligent systems, with a research focus on multi-scale representation learning, computational pathology, and interpretable AI.<br /><span className="mono">AI/ML Researcher · Computer Vision · Medical AI</span></p>
<div className="row"><a className="btn p" href="#research">Explore Research</a><a className="btn" href="#projects">View Projects</a><CVButton /></div>
<div className="soc"><a href="https://github.com/manpreetsinghkangla" rel="noopener">GitHub ↗</a><a href="https://linkedin.com/in/manpreet-singh0786" rel="noopener">LinkedIn ↗</a><a href="mailto:manpreetsinghkangla@gmail.com">Email ↗</a></div>
</div></section>
  );
}
