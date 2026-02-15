import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #003366 0%, #001a33 100%)",
          borderRadius: "36px",
        }}
      >
        {/* Outer ring */}
        <div
          style={{
            position: "absolute",
            width: 130,
            height: 130,
            borderRadius: "50%",
            border: "3px solid rgba(0, 168, 232, 0.5)",
            display: "flex",
          }}
        />
        {/* Middle ring */}
        <div
          style={{
            position: "absolute",
            width: 90,
            height: 90,
            borderRadius: "50%",
            border: "3px solid rgba(232, 101, 26, 0.6)",
            display: "flex",
          }}
        />
        {/* Inner ring */}
        <div
          style={{
            position: "absolute",
            width: 50,
            height: 50,
            borderRadius: "50%",
            border: "2px solid rgba(0, 168, 232, 0.4)",
            display: "flex",
          }}
        />
        {/* Center dot */}
        <div
          style={{
            position: "absolute",
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#E8651A",
            display: "flex",
          }}
        />
        {/* Crosshair H */}
        <div
          style={{
            position: "absolute",
            width: 150,
            height: 1,
            background: "rgba(0, 168, 232, 0.25)",
            display: "flex",
          }}
        />
        {/* Crosshair V */}
        <div
          style={{
            position: "absolute",
            width: 1,
            height: 150,
            background: "rgba(0, 168, 232, 0.25)",
            display: "flex",
          }}
        />
        {/* Brand text */}
        <div
          style={{
            position: "absolute",
            bottom: 16,
            fontSize: 14,
            fontWeight: 800,
            color: "white",
            letterSpacing: "2px",
            display: "flex",
          }}
        >
          TACHYON
        </div>
      </div>
    ),
    { ...size }
  );
}
