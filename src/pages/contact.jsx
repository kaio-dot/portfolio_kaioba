export default function Contact() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Contato</h1>
      <p className="text-gray-300 mb-4">
        Mande um alô se quiser conversar sobre projetos, oportunidades ou tecnologia.
      </p>
      <ul className="space-y-2 text-gray-300">
        <li>Email: <a className="text-blue-400 hover:underline" href="mailto:kaiolyandev@gmail.com">kaiolyandev@gmail.com</a></li>
        <li>LinkedIn: <a className="text-blue-400 hover:underline" href="https://www.linkedin.com/in/kaioba-dev" target="_blank" rel="noreferrer">kaioba-dev</a></li>
        <li>GitHub: <a className="text-blue-400 hover:underline" href="https://github.com/kaio-dot" target="_blank" rel="noreferrer">kaio-dot</a></li>
      </ul>
    </section>
  );
}