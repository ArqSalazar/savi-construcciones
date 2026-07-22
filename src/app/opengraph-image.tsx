import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SAVI Construcciones";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: "80px",
                    background: "linear-gradient(180deg, #ffffff 0%, #fbfbfc 60%, #ffffff 100%)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: 40,
                        fontWeight: 900,
                        letterSpacing: "-0.02em",
                        color: "#0a0a0a",
                        marginBottom: 24,
                    }}
                >
                    SAVI<span style={{ color: "#1d4ed8" }}>.</span>
                    <span style={{ fontSize: 16, fontWeight: 500, color: "#6b7280", marginLeft: 16, letterSpacing: "0.3em", textTransform: "uppercase" }}>
                        Construcciones
                    </span>
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 72,
                        fontWeight: 900,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.05,
                        color: "#0a0a0a",
                        textTransform: "uppercase",
                        maxWidth: 950,
                    }}
                >
                    Construimos Certeza.
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 26,
                        fontWeight: 300,
                        color: "#4b5563",
                        marginTop: 32,
                        maxWidth: 850,
                    }}
                >
                    Residencias premium, infraestructura industrial y estaciones de servicio en Sinaloa y Sonora.
                </div>
            </div>
        ),
        { ...size }
    );
}
