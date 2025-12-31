"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./ModelViewerScene"), { ssr: false });

export default function ModelViewer() {
  return <Scene />;
}
