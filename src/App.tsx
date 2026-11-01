import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Landing from "./pages/Landing";
import GrimoireOpening from "./components/Grimoire/GrimoireOpening";
import PortfolioHome from "./pages/PortfolioHome";
import "./index.css";

function App() {
  const [grimoireOpened, setGrimoireOpened] = useState(false);
  const [openingComplete, setOpeningComplete] = useState(false);

  return (
    <AnimatePresence mode="wait">

      {!grimoireOpened && (
        <motion.div
          key="landing"
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <Landing
            onOpen={() => setGrimoireOpened(true)}
          />
        </motion.div>
      )}

      {grimoireOpened && !openingComplete && (
        <GrimoireOpening
          key="opening"
          onComplete={() => setOpeningComplete(true)}
        />
      )}

      {openingComplete && (
  <motion.div
    key="portfolio"
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      duration: 1.2,
    }}
  >
    <PortfolioHome />
  </motion.div>
)}

    </AnimatePresence>
  );
}

export default App;