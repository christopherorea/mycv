
import type { PortfolioData } from "@/lib/types";
import jsonData from "../data.json";

// Cast the imported JSON data to the PortfolioData type to ensure type safety.
const portfolioData: PortfolioData = jsonData as PortfolioData;

// Export the entire typed data object.
export const PORTFOLIO_DATA: PortfolioData = portfolioData;
