import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tachyon Medical Systems Pvt. Ltd.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #003366 0%, #001a33 50%, #00243d 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 900, letterSpacing: "-2px", display: "flex" }}>
          <span>T</span>
          <span style={{ color: "#E8651A" }}>A</span>
          <span>CHYON</span>
        </div>
        <div style={{ fontSize: 28, fontWeight: 600, color: "#00A8E8", marginTop: 8, letterSpacing: "4px" }}>
          MEDICAL SYSTEMS PVT. LTD.
        </div>
        <div style={{ fontSize: 24, color: "#94a3b8", marginTop: 32, maxWidth: 700, textAlign: "center" }}>
          Premium Medical Equipment Solutions Since 1992
        </div>
        <div style={{ display: "flex", gap: 40, marginTop: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: 36, fontWeight: 800 }}>30+</span>
            <span style={{ fontSize: 14, color: "#94a3b8" }}>Years Experience</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: 36, fontWeight: 800 }}>1150+</span>
            <span style={{ fontSize: 14, color: "#94a3b8" }}>Machines Installed</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: 36, fontWeight: 800 }}>8+</span>
            <span style={{ fontSize: 14, color: "#94a3b8" }}>Countries Served</span>
          </div>
        </div>
        <div style={{ fontSize: 18, color: "#00A8E8", marginTop: 40 }}>
          www.tachyonmed.com
        </div>
      </div>
    ),
    { ...size }
  );
}
