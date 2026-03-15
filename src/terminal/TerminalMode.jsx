import React, { useEffect, useRef, useState } from "react";
import { commandData } from "./CommandData";
import { isValidCommand, isGlowCommand } from "./data/commands";
import { terminalThemes } from "./data/themes";

const TerminalMode = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const runCommand = (cmd) => {
    const c = cmd.trim();
    if (!c) return;

    if (c === "clear") {
      setHistory([]);
      return;
    }

    if (c === "gui" || c === "gui on" || c === "gui off") {
      localStorage.setItem("ui-mode", "gui");
      window.location.reload();
      return;
    }

    if (isGlowCommand(c)) {
      const on = c === "glow on";
      document.documentElement.classList.toggle("glow-nav", on);
      setHistory((h) => [...h, { cmd: c, out: <div>{`Glow ${on ? "enabled" : "disabled"}`}</div> }]);
      return;
    }

    if (c === "themes") {
      const list = Object.keys(terminalThemes).map((k) => (
        <div key={k} className="flex gap-2 items-center">
          <span className="font-semibold">{terminalThemes[k].name}:</span>
          <span className="text-sm text-muted-foreground">{k}</span>
        </div>
      ));
      setHistory((h) => [...h, { cmd: c, out: <div className="mt-2">{list}</div> }]);
      return;
    }

    if (isValidCommand(c) && commandData[c]) {
      setHistory((h) => [...h, { cmd: c, out: commandData[c] }]);
      return;
    }

    setHistory((h) => [...h, { cmd: c, out: <div>Command not found: {c}</div> }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runCommand(input);
    setInput("");
  };

  return (
    <div className="w-full min-h-screen pt-16 pb-8 bg-black text-green-400 font-mono">
      <div className="max-w-4xl mx-auto px-4">
        <div className="rounded-md p-6 bg-black/80 border border-green-800">
          <div className="space-y-4 mb-4">
            {history.map((h, i) => (
              <div key={i} className=""> 
                <div className="text-sm text-green-300">$ {h.cmd}</div>
                <div className="pt-2 text-sm text-foreground/90">{h.out}</div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-green-300 mr-2">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type 'help' for commands"
              className="flex-1 bg-transparent outline-none text-green-200 placeholder:text-green-600"
              autoComplete="off"
            />
            <button type="submit" className="ml-2 px-3 py-1 bg-green-800/30 rounded">Enter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TerminalMode;
