import { motion } from "framer-motion";

const WelcomeText = () => {
  return (
    <div className="flex gap-2 items-center">
      <motion.h1
        initial={{ scale: 1 }}
        animate={{ scale: 1.25 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.75,
          delay: 1,
          repeatDelay: 7.5,
        }}
        className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white"
      >
        W
      </motion.h1>
      <motion.h1
        animate={{ scale: 1.2 }}
        initial={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.75,
          delay: 1.75,
          repeatDelay: 7.5,
        }}
        className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white"
      >
        E
      </motion.h1>
      <motion.h1
        animate={{ scale: 1.2 }}
        initial={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.75,
          delay: 3.5,
          repeatDelay: 7.5,
        }}
        className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white"
      >
        L
      </motion.h1>
      <motion.h1
        animate={{ scale: 1.2 }}
        initial={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.75,
          delay: 4.25,
          repeatDelay: 7.5,
        }}
        className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white"
      >
        C
      </motion.h1>
      <motion.h1
        animate={{ scale: 1.2 }}
        initial={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.75,
          delay: 5,
          repeatDelay: 7.5,
        }}
        className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white"
      >
        O
      </motion.h1>
      <motion.h1
        animate={{ scale: 1.2 }}
        initial={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.75,
          delay: 5.75,
          repeatDelay: 7.5,
        }}
        className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white"
      >
        M
      </motion.h1>
      <motion.h1
        animate={{ scale: 1.2 }}
        initial={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.75,
          delay: 6.5,
          repeatDelay: 7.5,
        }}
        className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white"
      >
        E
      </motion.h1>
      <motion.h1
        animate={{ scale: 1.2 }}
        initial={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.75,
          delay: 7.25,
          repeatDelay: 7.5,
        }}
        className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white"
      >
        !
      </motion.h1>
    </div>
  );
};

export default WelcomeText;
