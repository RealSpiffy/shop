import React from "react";
import styles from "./styles.module.scss";

export enum Backgrounds {
  Red = "#f00",
  Green = "#0f0",
  Blue = "#00f",
  Yellow = "#ff0",
}

interface StorybookDemoProps {
  background: Backgrounds;
  color: string;
  text: string;
  borderRadius?: number;
  size: number;
}

export const StorybookDemo = ({
  background,
  color,
  text,
  borderRadius,
  size,
}: StorybookDemoProps) => {
  return (
    <div
      className={styles.outer}
      style={
        {
          "--size": `${size ?? 0}px`,
          backgroundColor: background,
          borderRadius,
          color,
        } as React.CSSProperties
      }
    >
      {text}
    </div>
  );
};
