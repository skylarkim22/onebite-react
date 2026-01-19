import { useEffect } from "react";

export default function Even() {
  useEffect(() => {
    // unmounted
    return () => {
      console.log("unmouted");
    };
  }, []);
  return <div>짝수입니다.</div>;
}
