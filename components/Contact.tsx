import ContactForm from "./ContactForm";
import CVButton from "./CVButton";
export default function Contact() {
  return (
    <section id="contact"><div className="wrap">
<p className="mono rv">07 / Contact</p><h2 className="rv">Let’s explore what intelligent systems can do.</h2>
<p className="lead rv" style={{marginInline:"auto"}}><a href="mailto:manpreetsinghkangla@gmail.com" className="ac">manpreetsinghkangla@gmail.com</a></p>
<div className="row rv"><a className="btn p" href="mailto:manpreetsinghkangla@gmail.com">Email</a><a className="btn" href="https://linkedin.com/in/manpreet-singh0786" rel="noopener">LinkedIn</a><a className="btn" href="https://github.com/manpreetsinghkangla" rel="noopener">GitHub</a><CVButton /></div>
<ContactForm />
</div></section>
  );
}
