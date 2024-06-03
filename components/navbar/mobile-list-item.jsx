import { motion } from "framer-motion";
import Link from "next/link";
import { mobileListVariants } from "../../utils/motion.js";

const MobileListItem = ({ title, href }) => (
  <motion.div variants={mobileListVariants}>
    <Link href={href}>{title}</Link>
  </motion.div>
);

export default MobileListItem;
