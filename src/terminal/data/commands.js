export const isValidCommand = (cmd) => {
  return [
    "whoami",
    "about",
    "projects",
    "themes",
    "skills",
    "contact",
    "gui",
    "help",
    "clear",
    "glow on",
    "glow off",
  ].includes(cmd);
};

export const isGlowCommand = (cmd) => cmd === "glow on" || cmd === "glow off";
