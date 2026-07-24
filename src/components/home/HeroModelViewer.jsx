import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroModelViewer() {
  const modelRef = useRef(null);

  useEffect(() => {
    const viewer = modelRef.current;
    if (!viewer) return;

    const fitModel = () => {
      if (typeof viewer.updateFraming === "function") {
        viewer.updateFraming();
      }

      const orbit = viewer.getCameraOrbit?.();
      if (orbit) {
        // Pull camera back so the model has breathing room when rotating
        // (values < 1 zoom in and crop; > 1 gives margin).
        orbit.radius *= 1.18;
        viewer.cameraOrbit = orbit.toString();

        const lockedRadius = `${orbit.radius}m`;
        viewer.minCameraOrbit = `auto auto ${lockedRadius}`;
        viewer.maxCameraOrbit = `auto auto ${lockedRadius}`;
      }

      const fov = "48deg";
      viewer.fieldOfView = fov;
      viewer.minFieldOfView = fov;
      viewer.maxFieldOfView = fov;
    };

    viewer.addEventListener("load", fitModel);
    if (viewer.loaded) fitModel();

    return () => viewer.removeEventListener("load", fitModel);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="hero-model-wrap relative flex min-h-0 items-center justify-center overflow-visible lg:max-h-[min(86vh,760px)]"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[min(55vw,420px)] w-[min(55vw,420px)] rounded-full bg-amber-400/15 blur-[60px] lg:h-[min(48vh,480px)] lg:w-[min(48vh,480px)] lg:blur-[80px]" />
      </div>

      <div className="hero-model-stage relative w-full max-w-[min(88vw,420px)] sm:max-w-[min(72vw,500px)] lg:max-w-[min(74vh,700px)]">
        <div className="hero-model-canvas relative aspect-square w-full">
          <div className="pointer-events-none absolute inset-[8%] rounded-full border border-amber-200/30" />
          <div className="pointer-events-none absolute inset-[18%] rounded-full border border-dashed border-amber-300/20" />

          <model-viewer
            ref={modelRef}
            src="/model.glb"
            alt="Nexara Traders mechanical coupling 3D model"
            loading="eager"
            camera-controls
            disable-zoom
            disable-pan
            touch-action="pan-y"
            auto-rotate
            rotation-per-second="12deg"
            shadow-intensity="1"
            shadow-softness="0.8"
            exposure="1.05"
            environment-image="neutral"
            camera-orbit="45deg 70deg auto"
            field-of-view="48deg"
            interaction-prompt="none"
            className="hero-model-viewer"
          >
            <div slot="poster" className="hero-model-poster" aria-hidden />
          </model-viewer>
        </div>
      </div>
    </motion.div>
  );
}
