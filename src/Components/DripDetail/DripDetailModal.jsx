import { useEffect, useCallback } from "react";
import DripDetail from "./DripDetail";
import { useDripDetailModal } from "../../Context/DripDetailModalContext";
import "./DripDetailModal.scss";

const DripDetailModal = () => {
  const { selectedDripId, closeDripDetail } = useDripDetailModal();

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") closeDripDetail();
    },
    [closeDripDetail]
  );

  useEffect(() => {
    if (selectedDripId == null) return undefined;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => {
      document.querySelector(".drip-detail-modal-overlay")?.scrollTo(0, 0);
    });
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedDripId, handleKeyDown]);

  if (selectedDripId == null) return null;

  return (
    <div
      className="drip-detail-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="IV drip details"
    >
      <button
        type="button"
        className="drip-detail-modal-close"
        onClick={closeDripDetail}
        aria-label="Close"
      >
        ×
      </button>
      <div
        className="drip-detail-modal-inner"
        onClick={(e) => e.stopPropagation()}
      >
        <DripDetail dripId={selectedDripId} variant="modal" />
      </div>
    </div>
  );
};

export default DripDetailModal;
