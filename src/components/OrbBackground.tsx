"use client";

import Orb from "./Orb";

export default function OrbBackground() {
  return (
    <Orb
      hue={0}
      hoverIntensity={0.2}
      rotateOnHover={true}
      forceHoverState={false}
      backgroundColor="#ffffff"
    />
  );
}
