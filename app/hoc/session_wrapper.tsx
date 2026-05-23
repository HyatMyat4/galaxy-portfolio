"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

const SectionWrapper = (Component: React.JSX.Element | any, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer("", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={``}
      >
        <span id={idName}>&nbsp;</span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
