// Home.jsx
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import { useState, useRef } from "react";
import Terminal from "../components/terminal";

function InteractiveText({ children, onClick, fontSize = 2 }) {
  const ref = useRef();
  const { size, viewport, mouse } = useThree();

  // target position/rotation
  const target = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  // current (smoothed)
  const current = useRef({ x: 0, y: 0, rx: 0, ry: 0 });

  // map mouse (-1..1) to world offset
  const maxOffset = 1.2; // quanto o texto pode se deslocar
  const maxRot = 0.25; // rotação máxima em rad

  useFrame(() => {
    // mouse.x / mouse.y estão entre -1 e 1 (centro = 0)
    target.current.x = mouse.x * maxOffset * (viewport.width / size.width);
    target.current.y = mouse.y * maxOffset * (viewport.height / size.height);
    target.current.ry = -mouse.x * maxRot;
    target.current.rx = mouse.y * maxRot;

    // lerp smoothing
    const lerp = (a, b, t) => a + (b - a) * t;
    const t = 0.12; // suavidade
    current.current.x = lerp(current.current.x, target.current.x, t);
    current.current.y = lerp(current.current.y, target.current.y, t);
    current.current.rx = lerp(current.current.rx, target.current.rx, t);
    current.current.ry = lerp(current.current.ry, target.current.ry, t);

    if (ref.current) {
      ref.current.position.x = current.current.x;
      ref.current.position.y = current.current.y;
      ref.current.rotation.x = current.current.rx;
      ref.current.rotation.y = current.current.ry;
    }
  });

  return (
    <Text
      ref={ref}
      fontSize={fontSize}
      color="white"
      onClick={onClick}
      position={[0, 0, 0]}
      anchorX="center"
      anchorY="middle"
      maxWidth={20}
    >
      {children}
    </Text>
  );
}

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <div className="relative flex items-center justify-center py-12">
      {/* Container menor: largura máxima e altura limitada */}
      <div className="w-full max-w-4xl h-[28rem]">
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 50 }}
          gl={{ alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={0.6} />

        <InteractiveText onClick={() => setShowTerminal(true)} fontSize={1.2}>
          K A I O B A
        </InteractiveText>

        <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {showTerminal && (
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
          {/* wrapper para posicionar o terminal mais abaixo e permitir clique apenas no terminal */}
          <div className="pointer-events-auto mt-36 w-full max-w-4xl px-6 flex justify-center">
            <div className="rounded-lg p-4 flex items-center justify-center w-full">
              <div className="w-full">
                <Terminal onClose={() => setShowTerminal(false)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
