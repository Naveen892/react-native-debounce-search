import { useEffect } from "react";

const useDebounce = (value, callback, delay) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      if (callback) {
        callback(value);
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, callback]);
};

export default useDebounce;
