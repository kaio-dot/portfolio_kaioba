import { FaGithub, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 texting-contact animate-slide-in">Contato</h1>
      <p className="text-gray-300 mb-4 texting-contact animate-slide-in">
        Mande um alô se quiser conversar sobre projetos, oportunidades ou tecnologia.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
        <a className="text-blue-400 hover:text-blue-300 transition-transform duration-300 hover:scale-105 animate-icons-slides-up" href="mailto:kaiolyandev@gmail.com">
          <FaEnvelope size={60} />
        </a>
        <a className="text-blue-400 hover:text-blue-300 transition-transform duration-300 hover:scale-105 animate-icons-slides-up" href="https://www.linkedin.com/in/kaioba-dev" target="_blank" rel="noreferrer">
          <FaLinkedinIn size={60} />
        </a>
        <a className="text-blue-400 hover:text-blue-300 transition-transform duration-300 hover:scale-105 animate-icons-slides-up" href="https://github.com/kaio-dot" target="_blank" rel="noreferrer">
          <FaGithub size={60} />
        </a>
      </div>
    </section>
  );
}