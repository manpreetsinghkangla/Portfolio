export default function Projects() {
  return (
    <section id="projects"><div className="wrap">
<p className="mono rv">03 / Projects</p><h2 className="rv">SELECTED WORK</h2>
<article className="pj big rv">
<div className="pv"><svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Abstract multi-scale tiling of a tissue slide"><g fill="none" stroke="#38d6ff" strokeOpacity=".35"><rect x="40" y="30" width="320" height="240"/><path d="M40 110h320M40 190h320M147 30v240M253 30v240"/><rect x="147" y="110" width="106" height="80" stroke="#8b7bff" strokeOpacity=".9" strokeWidth="1.5"/><rect x="173" y="130" width="54" height="40" stroke="#38d6ff" strokeOpacity=".9" strokeWidth="1.5"/></g><g fill="#38d6ff"><circle cx="200" cy="150" r="3"/><circle cx="188" cy="142" r="2"/><circle cx="212" cy="158" r="2"/></g></svg><span className="mono" style={{position:"relative",background:"var(--bg)",padding:"4px 10px"}}>replace with figure</span></div>
<div className="pb"><p className="mono ac">01 · Research / Medical AI</p><h3 style={{fontSize:"28px",marginTop:"8px"}}>Multi-Scale Medical Image Learning for DLBCL Recurrence Prediction</h3>
<p>Research-oriented deep learning pipeline for histopathological image analysis, integrating ResNet-based feature extraction, Multiple Instance Learning, attention-based aggregation, and exploration of synthetic image augmentation.</p>
<ul><li>ResNet-50 deep feature extraction</li><li>CLAM-style attention MIL baseline for slide-level prediction</li><li>Diffusion and StyleGAN2-ADA synthetic image experiments</li></ul>
<div className="tags"><span>Python</span><span>PyTorch</span><span>ResNet</span><span>MIL</span><span>CLAM</span><span>Computer Vision</span></div></div>
</article>
<article className="pj rv">
<div className="pb"><p className="mono ac">02 · AI Engineering / Generative AI</p><h3 style={{fontSize:"28px",marginTop:"8px"}}>AI-Powered Text-to-SQL Data Assistant</h3>
<p>A secure AI-driven data assistant that transforms natural-language questions into SQL queries, executes database operations, and presents results through interactive visualizations.</p>
<ul><li>Natural language to SQL</li><li>Local LLM integration using Ollama</li><li>SQL validation and safety layer</li><li>Role-Based Access Control</li><li>Query execution and visualization</li></ul>
<div className="tags"><span>Python</span><span>FastAPI</span><span>Ollama</span><span>LLMs</span><span>PostgreSQL</span><span>SQLAlchemy</span><span>React</span></div></div>
<div className="pv"><svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Abstract query flow from text to database"><g fill="none" stroke="#8b7bff" strokeOpacity=".6"><rect x="40" y="110" width="90" height="80" rx="6"/><rect x="155" y="110" width="90" height="80" rx="6" stroke="#38d6ff"/><rect x="270" y="110" width="90" height="80" rx="6"/><path d="M130 150h25M245 150h25"/></g><g fill="#9299A8" fontFamily="monospace" fontSize="12" textAnchor="middle"><text x="85" y="154">NL</text><text x="200" y="154">SQL</text><text x="315" y="154">DB</text></g></svg></div>
</article>
<p className="mono rv" style={{marginTop:"20px"}}>Repository links will be added when public.</p>
</div></section>
  );
}
