import { useEffect, useState } from "react";

const useLocalStorage = <T>(key: string) => {
  const [value, setValue] = useState<T>(
    JSON.parse(localStorage.getItem(key) || "null")
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return { value, setValue };
};

export default useLocalStorage;
