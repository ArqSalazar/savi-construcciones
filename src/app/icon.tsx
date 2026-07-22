import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0a0a0a",
                    borderRadius: 12,
                    color: "#fff",
                    fontSize: 34,
                    fontWeight: 900,
                    fontStyle: "italic",
                }}
            >
                S<span style={{ color: "#1d4ed8" }}>.</span>
            </div>
        ),
        { ...size }
    );
}
