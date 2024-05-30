"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { exploreRecipes } from "../../utils/card.js";
import { fadeIn, staggerContainer } from "../../utils/motion.js";
import { TypingText } from "../components/custom-effect/text.jsx";
import { ExploreCard } from "../components/custom-effect/explore-card.jsx";

const Explore = () => {
  const [active, setActive] = useState("method-2");

  return (
    <section id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-[1280px] mx-auto flex flex-col"
      >
        <TypingText
          title="# Recipe"
          textStyles="text-2xl font-bold uppercase text-center"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-2xl mt-2 text-center"
        >
          <span className="text-2xl mt-2 text-center">
            Select your favored method
          </span>
        </motion.p>
        <div className="w-full mt-12 flex flex-row gap-4">
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
