"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion.js";
import { TypingText } from "../../components/custom-effect/text.jsx";

const About = () => {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-[1280px] py-16 mx-auto flex justify-center items-center flex-col"
      >
        <TypingText
          title="# About"
          textStyles="text-2xl font-bold uppercase"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-2xl mt-2 text-center"
        >
          <span className="font-extrabold uppercase">Ngopilu.</span> is your
          go-to for the finest filtered coffee recipes. Whether you're a
          seasoned barista or a home brewer, you can elevate your coffee game
          with our expertly curated methods. Experience the essence of coffee
          craftsmanship Using only premium beans and techniques, brew the
          perfect cup and make your daily routine a delightful ritual.
        </motion.p>
        <motion.p
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="text-2xl mt-2 text-center"
        >
          Let's explore the art of coffee brewing by scrolling down
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.6, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="mt-4"
        />
      </motion.div>
    </section>
  );
};

export default About;
