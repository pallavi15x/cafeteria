export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
    },
  },
};

export const mobileMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export const navItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Hero specific animations
export const coffeePourVariants = {
  hidden: { scaleY: 0, opacity: 0, originY: 1 },
  visible: { 
    scaleY: 1, 
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut", delay: 0.5 }
  }
};

export const milkSwirlVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -45 },
  visible: { 
    opacity: 0.8, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 2, ease: "easeInOut", delay: 1.5 }
  }
};

export const steamVariants = {
  hidden: { opacity: 0, y: 10, pathLength: 0 },
  visible: { 
    opacity: [0, 0.6, 0], 
    y: -30, 
    pathLength: 1,
    transition: { 
      duration: 3, 
      ease: "easeInOut", 
      delay: 2.5,
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};
