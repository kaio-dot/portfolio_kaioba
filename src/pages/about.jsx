import SectionTitle from "../components/sectionTitle";
import { motion } from "framer-motion";
import kaioPhoto from "../assets/kaio.jpg";
// ícones das tecnologias (react-icons - Simple Icons)
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiCss3,
  SiPhp,
  SiLaravel,
  SiDart,
  SiPython,
  SiFlutter,
  SiDocker,
  SiSharp,
  SiKubernetes,
  SiPostman,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiRedis,
  SiRabbitmq,
  SiGit,
  SiGithub,
  SiFirebase,
  SiElasticsearch,
  SiPostgresql,
  SiLinux
} from "react-icons/si";

export default function About() {
  // lista de stacks/tecnologias para renderizar os ícones
  const stacks = [
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "CSS3", icon: SiCss3 },
    { name: "PHP", icon: SiPhp },
    { name: "Laravel", icon: SiLaravel },
    { name: "Dart", icon: SiDart },
    { name: "Python", icon: SiPython },
    { name: "Flutter", icon: SiFlutter },
    { name: "Docker", icon: SiDocker },
    { name: "CSharp", icon: SiSharp },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Postman", icon: SiPostman },
    { name: "MySQL", icon: SiMysql },
    { name: "SQLite", icon: SiSqlite },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Redis", icon: SiRedis },
    { name: "RabbitMQ", icon: SiRabbitmq },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Firebase", icon: SiFirebase },
    { name: "Elasticsearch", icon: SiElasticsearch },
    { name: "Linux", icon: SiLinux },
    { name: "PostgreSQL", icon: SiPostgresql }
  ];

  return (
    <motion.section className="py-20 max-w-6xl mx-auto px-6"
      initial={{ opacity: 0, y: 50 }}   
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 0.8, ease: "easeOut" }}>
      {/* Título da seção */}
      <SectionTitle
        title="Sobre mim"
        subtitle="Desenvolvedor back-end apaixonado por criar soluções escaláveis e eficientes."
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
            Sou desenvolvedor de software com foco em back-end, criando soluções eficientes e bem estruturadas.
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

      {/* Tecnologias */}

      <div className="mt-10">
        <SectionTitle title="Tecnologias" subtitle="Algumas das stacks que eu uso" />

        <div className="mt-4">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center">
            {stacks.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.name} className="flex flex-col items-center text-center text-gray-300">
                  <div className="p-3 rounded-lg bg-gray-800/60 hover:bg-gray-700 transition">
                    <Icon className="text-4xl text-blue-400" />
                  </div>
                  <span className="mt-2 text-xs">{s.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </motion.section>
  );
}
