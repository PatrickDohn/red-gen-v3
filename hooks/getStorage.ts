// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStorage = (key: string, defaultValue: any) => {
    if (typeof window === "undefined") return defaultValue;
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  };