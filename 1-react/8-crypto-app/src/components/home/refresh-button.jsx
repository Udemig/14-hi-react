import React from "react";
import { RefreshCw } from "lucide-react";

const RefreshButton = ({ fetchCoins, disabled }) => {
  console.log("refresh render oldu");

  return (
    <button
      onClick={() => fetchCoins(true)}
      disabled={disabled}
      className="p-3 bg-blue-600 rounded-lg text-white gocer:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
    >
      <RefreshCw className="size-5" />
    </button>
  );
};

export default React.memo(RefreshButton);
