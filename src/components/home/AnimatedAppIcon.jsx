import { motion, useReducedMotion } from "framer-motion";
import { Cpu, Factory, Gauge, Truck, Hammer, Package, FlaskConical } from "lucide-react";
import { cn } from "../../utils/cn";

const icons = { cpu: Cpu, factory: Factory, gauge: Gauge, truck: Truck, hammer: Hammer, package: Package, flask: FlaskConical };

function LiveCpu({ className }) {
  return (
    <div className={cn("relative flex h-5 w-5 items-center justify-center", className)}>
      <motion.span
        className="absolute inset-0 rounded-[3px] border border-amber-400/50"
        animate={{ opacity: [0.35, 0.9, 0.35], scale: [0.92, 1, 0.92] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute h-1 w-1 rounded-full bg-amber-300"
        animate={{ opacity: [1, 0.25, 1], scale: [1, 1.35, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      />
      <Cpu className="relative h-5 w-5 text-amber-400" strokeWidth={1.75} />
    </div>
  );
}

function LiveFactory({ className }) {
  return (
    <div className={cn("relative flex h-5 w-5 items-end justify-center", className)}>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-amber-300/70"
          style={{ width: 3, height: 3, left: 4 + i * 4, top: 0 }}
          animate={{ y: [0, -7], opacity: [0.75, 0], scale: [0.6, 1.1] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.45, ease: "easeOut" }}
        />
      ))}
      <motion.div
        animate={{ scaleY: [1, 1.04, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ originY: 1 }}
      >
        <Factory className="h-5 w-5 text-amber-400" strokeWidth={1.75} />
      </motion.div>
    </div>
  );
}

function LiveGauge({ className }) {
  return (
    <motion.div
      className={className}
      animate={{ rotate: [-14, 14, -14] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      style={{ originX: 0.5, originY: 0.72 }}
    >
      <Gauge className="h-5 w-5 text-amber-400" strokeWidth={1.75} />
    </motion.div>
  );
}

function LiveTruck({ className }) {
  return (
    <motion.div
      className={cn("relative", className)}
      animate={{ x: [-2, 2, -2] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <Truck className="h-5 w-5 text-amber-400" strokeWidth={1.75} />
      <motion.span
        className="absolute -bottom-0.5 left-1 h-0.5 w-1 rounded-full bg-amber-400/80"
        animate={{ opacity: [0.2, 0.7, 0.2], x: [0, 3, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

function LiveHammer({ className }) {
  return (
    <motion.div
      className={className}
      animate={{ rotate: [-18, 6, -18] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      style={{ originX: 0.25, originY: 0.85 }}
    >
      <Hammer className="h-5 w-5 text-amber-400" strokeWidth={1.75} />
    </motion.div>
  );
}

function LivePackage({ className }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -2.5, 0], rotate: [0, 2, 0, -2, 0] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <Package className="h-5 w-5 text-amber-400" strokeWidth={1.75} />
    </motion.div>
  );
}

function LiveFlask({ className }) {
  return (
    <motion.div
      className={cn("relative", className)}
      animate={{ rotate: [-4, 4, -4] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      style={{ originX: 0.5, originY: 0.9 }}
    >
      <FlaskConical className="h-5 w-5 text-amber-400" strokeWidth={1.75} />
      <motion.span
        className="absolute left-1/2 top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-amber-300/80"
        animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

const liveIcons = {
  cpu: LiveCpu,
  factory: LiveFactory,
  gauge: LiveGauge,
  truck: LiveTruck,
  hammer: LiveHammer,
  package: LivePackage,
  flask: LiveFlask,
};

export default function AnimatedAppIcon({ type, className }) {
  const reduceMotion = useReducedMotion();
  const Static = icons[type] ?? Factory;
  const Live = liveIcons[type] ?? LiveFactory;

  if (reduceMotion) {
    return <Static className={cn("h-5 w-5 text-amber-400", className)} strokeWidth={1.75} />;
  }

  return (
    <div className={cn("relative", className)}>
      <Live />
    </div>
  );
}
