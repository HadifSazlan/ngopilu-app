"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { exploreRecipes } from "../../utils/card.js";
import { fadeIn, staggerContainer } from "../../utils/motion.js";
import { TypingText } from "../../components/custom-effect/text.jsx";
import { ExploreCard } from "../../components/custom-effect/explore-card.jsx";

const Explore = () => {
  const [active, setActive] = useState("method-2");

  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-[1280px] mx-auto flex flex-col"
      >
        <TypingText
          title="# Recipe"
          textStyles="text-xl md:text-2xl font-bold uppercase text-center"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-2 text-center"
        >
          <span className="text-base md:text-2xl">
            Select your favored method
          </span>
        </motion.p>
        <div className="w-full mt-12 flex md:flex-row flex-col min-h-[70vh] gap-2 md:gap-4">
          {exploreRecipes.map((method, index) => (
            <ExploreCard
              key={method.id}
              {...method}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
