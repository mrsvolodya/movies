import { useEffect } from "react";

type KeyListenerOptions = {
  key: string;
  handler: (e: KeyboardEvent) => void;
};

export function useKeyListener({ key, handler }: KeyListenerOptions) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === key) {
        handler(e);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, handler]);
}
