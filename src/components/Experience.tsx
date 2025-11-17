import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <>
      <section>
        <div className="container-fluid px-4 py-5 my-5 text-center">
          <motion.h2 className="display-6 fw-bold mb-4">About Me</motion.h2>
          <motion.div>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Associate Analyst</h5>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
