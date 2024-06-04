"use client";

import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariant,
} from "../../utils/motion.js";

const Hero = () => {
  return (
    <section className="py-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto"
      >
        <div className="flex flex-col justify-center items-center">
          <motion.h1
            variants={textVariant(1.1)}
            className="hover:italic font-bold uppercase text-6xl md:text-9xl"
          >
            Brew
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="hover:italic font-bold uppercase text-6xl md:text-9xl"
          >
            <h1 className="">Alchemy</h1>
          </motion.div>
        </div>
        <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="">
          <img
            src="/cover.png"
            alt="hero cover"
            className="w-full h-[350px] md:h-[520px] object-cover rounded-l-[34px] md:rounded-l-[48px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
