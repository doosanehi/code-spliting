import { useEffect } from "react";

const cache = new Map();

const DelayedPage = ({ id, delay, children }) => {
  let state = cache.get(id);
  if (!state) {
    state = new Promise((resolve) =>
      setTimeout(() => {
        cache.set(id, true);
        resolve(true);
      }, delay)
    );
    cache.set(id, state);
  }
  if (state !== true) throw state;

  useEffect(
    () => () => {
      cache.delete(id);
    },
    [id]
  );

  return <>{children}</>;
};

export default DelayedPage;
