import SectionTitle from "../components/sectionTitle";
import { motion } from "framer-motion";
import kaioPhoto from "../assets/kaio.jpg";

export default function About() {
  return (
    <motion.section className="py-20 max-w-6xl mx-auto px-6"
      initial={{ opacity: 0, y: 50 }}   
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 0.8, ease: "easeOut" }}>
      {/* Título da seção */}
      <SectionTitle
        title="Sobre mim"
        subtitle="Desenvolvedor back-end apaixonado por criar soluções eficientes e escaláveis."
      />

      {/* Conteúdo da About */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        
        {/* Foto ou avatar */}
        <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-800 rounded-full overflow-hidden flex-shrink-0">
          {/* Aqui você pode colocar sua imagem */}
          <img
            src={kaioPhoto}
            alt="Kaioba"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto de apresentação */}
        <div className="text-gray-300 space-y-4 text-justify">
          <p>
            Olá! Sou Kaio, mas pode me chamar de <span className="text-blue-400 font-semibold">Kaioba</span>. 
            Sou desenvolvedor de software com foco em back-end, criando soluções escaláveis e bem estruturadas.
          </p>
          <p>
            Tenho experiência em desenvolvimento de APIs, integração de sistemas e arquitetura de software. 
            Além disso, já atuei como QA, o que me dá uma visão ampla sobre qualidade, testes e entrega de software confiável.
          </p>
          <p>
            Estou sempre aprendendo novas tecnologias e buscando formas de entregar soluções mais eficientes e robustas.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
