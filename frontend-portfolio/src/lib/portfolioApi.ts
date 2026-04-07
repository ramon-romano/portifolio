const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export async function fetchPortfolioData<T>(endpoint: string, fallback: T, lang: string = "pt"): Promise<T> {
  try {
    const url = new URL(`${API_BASE_URL}${endpoint}`);
    url.searchParams.append("lang", lang);

    const response = await fetch(url.toString(), {
      cache: "no-store",
    });

    if (!response.ok) {
      return fallback;
    }

    return (await response.json()) as T;
  } catch {
    return fallback;
  }
}
