import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#003366",
          borderRadius: "6px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: 28,
            height: 28,
          }}
        >
          {/* Outer ring */}
          <div
            style={{
              position: "absolute",
              width: 24,
              height: 24,
              borderRadius: "50%",
              border: "1.5px solid rgba(0, 168, 232, 0.6)",
            }}
          />
          {/* Middle ring */}
          <div
            style={{
              position: "absolute",
              width: 16,
              height: 16,
              borderRadius: "50%",
              border: "1.5px solid rgba(232, 101, 26, 0.7)",
            }}
          />
          {/* Inner ring */}
          <div
            style={{
              position: "absolute",
              width: 8,
              height: 8,
              borderRadius: "50%",
              border: "1px solid rgba(0, 168, 232, 0.5)",
            }}
          />
          {/* Center dot */}
          <div
            style={{
              position: "absolute",
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "#E8651A",
            }}
          />
          {/* Crosshair horizontal */}
          <div
            style={{
              position: "absolute",
              width: 28,
              height: 1,
              background: "rgba(0, 168, 232, 0.3)",
            }}
          />
          {/* Crosshair vertical */}
          <div
            style={{
              position: "absolute",
              width: 1,
              height: 28,
              background: "rgba(0, 168, 232, 0.3)",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
