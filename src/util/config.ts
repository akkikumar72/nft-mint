function get(key: string) {
  const value = import.meta.env["VITE_" + key];
  if (!value) {
      console.error(`${key} is missing in configuration`);
  }
  return value as string;
}
export const Config = {
  API_KEY: get("API_KEY"),
};
