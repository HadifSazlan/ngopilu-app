"use client";

import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
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
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto"
      >
        <div className="flex flex-col justify-center items-center">
          <motion.h1
            variants={textVariant(1.1)}
            className="hover:italic font-bold uppercase text-9xl leading-[128px]"
          >
            Brew
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="hover:italic font-bold uppercase text-9xl leading-[128px]"
          >
            <h1 className="">Alchemy</h1>
          </motion.div>
        </div>
        <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="">
          <img
            src="/cover.png"
            alt="hero cover"
            className="w-full h-[450px] object-cover rounded-l-[48px]"
          />
          <div className="flex justify-end -mt-5 pr-[325px]">
            <motion.div
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <a href="#explore">
                <Button className="flex justify-center text-xl uppercase">
                  Explore
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
