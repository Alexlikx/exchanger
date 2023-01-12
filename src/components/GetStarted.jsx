import styles from "../style";
import { arrowUp } from "../assets";
import { motion } from "framer-motion";

const GetStarted = () => (
  <motion.a
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    href="#exchange"
    transition={{ duration: 0.4, delay: 0.9 }}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  </motion.a>
);

export default GetStarted;
