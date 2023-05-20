import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `BrainBounce | ${title}`;
  }, [title]);
};

export default useTitle;
