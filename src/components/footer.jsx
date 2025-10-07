export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        
        {/* Texto principal */}
        <p className="mb-3 md:mb-0">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Kaioba.dev</span> — Todos os direitos reservados.
        </p>

        {/* Links sociais */}
        <div className="flex space-x-5">
          <a
            href="https://github.com/kaio-dot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kaioba-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kaiolyandev@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
