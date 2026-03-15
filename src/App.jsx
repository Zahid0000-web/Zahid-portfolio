import { useState } from "react";
import Navbar from "./data/components/Navbar";
import TerminalMode from "./terminal/TerminalMode";
import GlobalBackground from "./data/components/Background";
import BottomNavBar from "./data/components/BottomNavBar";

const App = () => {
  const [activeSection, setActiveSection] = useState("");
  const [terminalMode, setTerminalMode] = useState(false);

  return (
    <div className="w-full max-h-fit overflow-hidden text-foreground relative">
      {!terminalMode && <GlobalBackground />}

      <Navbar terminalMode={terminalMode} setTerminalMode={setTerminalMode} />

      {!terminalMode ? (
        !activeSection ? (
          <BottomNavBar />
        ) : (
          <></>
        )
      ) : (
        <TerminalMode />
      )}
    </div>
  );
};

export default App;
