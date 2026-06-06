import { siteConfig } from "@/config/site";

const OPENSRS_API_URL =
  process.env.OPENSRS_API_URL ?? "https://horizon.opensrs.net:55443";

/**
 * OpenSRS API integration placeholder.
 * Reseller ID: 8849320
 * Docs: https://opensrs.com/integrations/
 */
export const opensrsConfig = {
  resellerId: siteConfig.resellerId,
  apiUrl: OPENSRS_API_URL,
  username: process.env.OPENSRS_USERNAME ?? "",
  apiKey: process.env.OPENSRS_API_KEY ?? "",
};

export async function searchDomains(query: string) {
  // TODO: Implement OpenSRS domain lookup
  return {
    query,
    available: [`${query}.com`, `${query}.net`],
    unavailable: [`${query}.org`],
  };
}

export async function registerDomain(domain: string, years = 1) {
  // TODO: Implement OpenSRS domain registration
  return { domain, years, status: "pending" as const };
}

export async function renewDomain(domain: string, years = 1) {
  return { domain, years, status: "pending" as const };
}

export async function transferDomain(domain: string, authCode: string) {
  return { domain, authCode, status: "pending" as const };
}

export async function updateDNS(domain: string, records: unknown[]) {
  return { domain, records, status: "updated" as const };
}
