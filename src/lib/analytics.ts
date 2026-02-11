/**
 * Registra un evento de escaneo QR.
 * Por ahora loguea en consola; se puede expandir para enviar
 * a un servicio de analíticas externo.
 */
export interface QrScanEvent {
  slug: string;
  target: string;
  timestamp: string;
  userAgent: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referrer?: string;
}

export function buildScanEvent(
  slug: string,
  target: string,
  request: Request,
): QrScanEvent {
  const url = new URL(request.url);

  return {
    slug,
    target,
    timestamp: new Date().toISOString(),
    userAgent: request.headers.get("user-agent") ?? "unknown",
    utmSource: url.searchParams.get("utm_source") ?? undefined,
    utmMedium: url.searchParams.get("utm_medium") ?? undefined,
    utmCampaign: url.searchParams.get("utm_campaign") ?? undefined,
    referrer: request.headers.get("referer") ?? undefined,
  };
}

export function logScanEvent(event: QrScanEvent): void {
  console.log("[QR Scan]", JSON.stringify(event));
}
