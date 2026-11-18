export type Status = "i" | "o" | "p";
export const LABEL: Record<Status, string> = { i: "Implemented", o: "Ongoing", p: "Planned" };
export const STAGES: { title: string; status: Status; note: string }[] = [
  { title: "Histopathology Images", status: "i", note: "DLBCL-Morph dataset used as the image source for the dissertation." },
  { title: "Patch / Region Extraction", status: "i", note: "Slides are divided into regions that feed the feature extractor in the preliminary pipeline." },
  { title: "Multi-Scale Feature Representation", status: "p", note: "In design: combining cellular-level, local tissue-level and global architectural information." },
  { title: "Deep Feature Extraction", status: "i", note: "ResNet-50 feature extraction is built as part of the preliminary pipeline." },
  { title: "MIL / Attention Aggregation", status: "i", note: "A CLAM-style attention-based MIL baseline is built for slide-level prediction." },
  { title: "Cross-Scale Feature Fusion", status: "p", note: "In design: feature-integration strategies across scales will be compared." },
  { title: "Recurrence Prediction", status: "o", note: "Ongoing: slide-level recurrence prediction, with synthetic image generation (diffusion, StyleGAN2-ADA) being run to counter class imbalance." },
  { title: "Explainability & Evaluation", status: "p", note: "Planned: baseline comparisons, experimental analysis and ablation studies across scales and fusion strategies. Interpretability analysis is a stated research goal." },
];
