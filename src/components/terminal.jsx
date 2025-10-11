import ReactConsole from "react-console-emulator";

export default function Terminal({ onClose }) {
  const commands = {
    whoami: {
      description: "Sobre o Kaioba",
      fn: () => "Sou Kaioba — desenvolvedor de software",
    },
    skills: {
      description: "Habilidades principais",
      fn: () => "React, Node.js, Tailwind, Three.js, Git, Vite",
    },
    projects: {
      description: "Abre a seção de projetos",
      fn: () => {
        window.location.href = "/pages/projects";
      },
    },
    exit: {
      description: "Fecha o terminal",
      fn: () => {
        onClose();
        return "Fechando terminal...";
      },
    },
  };

  // Mostrar a mensagem de boas-vindas apenas uma vez por sessão.
  // Isso evita que bibliotecas que imprimem a mensagem no mount (ex.: em StrictMode) mostrem duas vezes.
  const defaultWelcome = "Bem-vindo ao terminal do Kaioba 💻\nDigite 'help' para ver os comandos disponíveis.";
  let welcomeMessage = "";
  try {
    // eslint-disable-next-line no-undef
    if (typeof window !== "undefined") {
      // usa uma flag global simples
      // eslint-disable-next-line no-undef
      if (!window.__terminalWelcomeShown) {
        // eslint-disable-next-line no-undef
        window.__terminalWelcomeShown = true;
        welcomeMessage = defaultWelcome;
      }
    } else {
      welcomeMessage = defaultWelcome;
    }
  } catch (e) {
    welcomeMessage = defaultWelcome;
  }

  return (
    <div className="w-full md:w-[90%] h-[60vh] text-sm">
      <ReactConsole
        commands={commands}
        welcomeMessage={welcomeMessage}
        promptLabel="> "
      />
    </div>
  );
}
