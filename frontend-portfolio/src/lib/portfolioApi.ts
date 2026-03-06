const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export async function fetchPortfolioData<T>(endpoint: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
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
