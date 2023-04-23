const dev = process.env.NODE_ENV !== "production";

export const API_URL = dev
  ? "http://localhost:3000"
  : "https://frc6070.ca";
