import React from "react";
import { colors } from "../theme";

export const PageIndicator: React.FC<{
  current: number;
  total: number;
}> = ({ current, total }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 44,
        right: 64,
        display: "flex",
        gap: 10,
        alignItems: "center",
      }}
    >
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          style={{
            width: i + 1 === current ? 28 : 10,
            height: 10,
            borderRadius: 5,
            backgroundColor:
              i + 1 === current ? colors.accent : "rgba(240, 247, 248, 0.2)",
            transition: "all 0.3s",
            boxShadow:
              i + 1 === current
                ? "0 0 12px rgba(192, 86, 64, 0.4)"
                : "none",
          }}
        />
      ))}
    </div>
  );
};
