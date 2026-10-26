"use client";

import React from "react";
import { AIBrain3D, AIBrain3DProps } from "./AIBrain3D";

export type NeuralBrainSceneProps = AIBrain3DProps;

export function NeuralBrainScene(props: NeuralBrainSceneProps) {
  return <AIBrain3D {...props} />;
}
