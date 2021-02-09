import React from "react";
import "./styles.scss";

const allSizes = ["XS", "S", "M", "L", "XL", "XXL"];

function SizePanel({ sizes, setSelectedSize, selectedSize }) {
  if (!Array.isArray(sizes) || sizes.length < 1) return null;
  return (
    <div className="size-panel">
      {allSizes.map((size) => {
        if (sizes.includes(size)) {
          return (
            <div
              className={
                size === selectedSize
                  ? "size-panel__size active"
                  : "size-panel__size"
              }
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </div>
          );
        } else if (!sizes.includes(size)) {
          return <div className="size-panel__size unavailable">{size}</div>;
        }
      })}
    </div>
  );
}

export default SizePanel;

// {
//   sizes.map((size) => {
//     return (
//       <div
//         className={
//           size === selectedSize ? "size-panel__size active" : "size-panel__size"
//         }
//         onClick={() => setSelectedSize(size)}
//       >
//         {size}
//       </div>
//     );
//   });
// }
