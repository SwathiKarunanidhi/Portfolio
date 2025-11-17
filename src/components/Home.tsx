import { motion } from "framer-motion";
import { useState } from "react";
import { getAnimationConfig } from "../hooks/getAnimationConfig";
import { useTypeWriter } from "../hooks/useTypeWriter";

const Home = () => {
  const [showDetails, setShowDetails] = useState(false);
  const typedText = useTypeWriter(0, "Hi There!", 300);
  const typedTextIntro = useTypeWriter(2000, "I'm Swathi", 300, () =>
    setShowDetails(true)
  );

  return (
    <>
      <div className="container-fluid px-4 py-5 my-5 text-center">
        <h2 className="display-2 fw-bold">
          <span>{typedText}</span>{" "}
          <span className="text-primary">{typedTextIntro}</span>
        </h2>
        {showDetails && (
          <>
            <motion.div
              {...getAnimationConfig()}
              className="lc-block col-lg-6 mx-auto mb-5"
            >
              <p className="lead">Full Stack Web Application Developer</p>
            </motion.div>
            <motion.div
              className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"
              {...getAnimationConfig(1)}
            >
              <button className="btn btn-primary btn-lg px-4 gap-3">
                Contact Me
              </button>
              <button className="btn btn-outline-secondary btn-lg px-4">
                More About Me
              </button>
            </motion.div>
            <motion.div
              className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"
              {...getAnimationConfig(2)}
            >
              <img src="/assests/peaceful_coder.svg" alt="coder illustration" />
            </motion.div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
