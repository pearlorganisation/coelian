"use client";
// -----------------------------------------------Imports--------------------------------------------------
import { forwardRef, useImperativeHandle, useRef } from "react";
// --------------------------------------------------------------------------------------------------------

const Corporate = (props, ref) => {
  // -----------------------------------------------States--------------------------------------------------
  // --------------------------------------------------------------------------------------------------------
  // -----------------------------------------------Hooks--------------------------------------------------
  const corporateRef = useRef();
  // --------------------------------------------------------------------------------------------------------
  // ---------------------------------------------Functions--------------------------------------------------
  // --------------------------------------------------------------------------------------------------------
  // ---------------------------------------------useEffect--------------------------------------------------
  // --------------------------------------------------------------------------------------------------------
  useImperativeHandle(
    ref,
    () => {
      return {
        reference: corporateRef.current,
      };
    },
    []
  );

  return (
    <div
      className="corporate border border-green-500"
      ref={corporateRef}
    >
      Corporate
    </div>
  );
};

export default forwardRef(Corporate);
