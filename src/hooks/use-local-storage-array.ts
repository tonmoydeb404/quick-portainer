import { useEffect, useState } from "react";

function useLocalStorageArray<T>(key: string, initialValue: T[] = []) {
  const [items, setItems] = useState<T[]>(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(items));
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  }, [items, key]);

  const insert = (item: T) => {
    setItems((prev) => [...prev, item]);
  };

  const removeAtIndex = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return { items, insert, removeAtIndex };
}

export default useLocalStorageArray;
