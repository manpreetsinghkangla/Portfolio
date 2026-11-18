import ResearchPipeline from "./ResearchPipeline";
export default function Research() {
  return (
    <section id="research"><div className="wrap">
<p className="mono rv">02 / Research</p><h2 className="rv">RESEARCH</h2>
<p className="lead rv">Investigating intelligent systems for complex visual and scientific problems.</p>
<article className="feat rv">
<p className="mono ac">Master’s Dissertation · Computational Pathology · 2025 – Present</p>
<h3 style={{fontSize:"clamp(26px,4vw,42px)",lineHeight:"1.1",margin:"14px 0"}}>Multi-Scale Deep Learning for DLBCL Recurrence Prediction</h3>
<p className="lead">Developing a multi-scale deep learning framework for recurrence prediction in Diffuse Large B-Cell Lymphoma using histopathological images (DLBCL-Morph dataset). The research aims to integrate cellular-level, local tissue-level, and global architectural information to better represent pathological patterns.</p>
<ol className="obj"><li>Multi-scale feature representation</li><li>Histopathological image analysis</li><li>Multiple Instance Learning</li><li>Attention-based feature aggregation</li><li>Synthetic data augmentation</li><li>Robust prediction under data scarcity</li><li>Model evaluation and ablation studies</li></ol>
<h3 style={{fontSize:"18px"}}>Research pipeline <span className="mono">— select a stage</span></h3>
<div className="leg mono"><span className="s-i">Implemented groundwork</span><span className="s-o">Ongoing</span><span className="s-p">Planned / in design</span></div>
<ResearchPipeline />
<div className="tags"><span>PyTorch</span><span>Python</span><span>ResNet</span><span>Multiple Instance Learning</span><span>Attention Mechanisms</span><span>Computer Vision</span><span>Synthetic Data Generation</span></div>
</article>
<h3 className="rv" style={{marginTop:"80px",fontSize:"28px"}}>Research interests</h3>
<div className="ri rv">
<div><h3>Computational Pathology</h3><p>Deep learning-based analysis of histopathological images and pathological morphology.</p></div>
<div><h3>Multi-Scale Representation Learning</h3><p>Learning meaningful features across different spatial scales and levels of visual information.</p></div>
<div><h3>Medical Image Analysis</h3><p>Developing machine learning approaches for complex medical imaging tasks.</p></div>
<div><h3>Multiple Instance Learning &amp; Attention</h3><p>Weakly supervised learning, attention-based aggregation, and slide-level prediction.</p></div>
<div><h3>Explainable AI</h3><p>Making model decisions more transparent, interpretable, and scientifically meaningful.</p></div>
<div><h3>Generative AI &amp; Synthetic Data</h3><p>Exploring generative models for data augmentation, diversity, and robustness.</p></div>
<div><h3>Transformers &amp; Representation Learning</h3><p>Exploring advanced architectures for learning contextual and complex representations.</p></div>
</div>
</div></section>
  );
}
