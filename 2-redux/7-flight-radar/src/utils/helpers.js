import { divIcon } from "leaflet";

export const getIcon = (direction) => {
  return divIcon({
    html: `
    <div style="transform: rotate(${direction - 45}deg)">
      <img src="/plane.svg" width="30px" height="30px" />
    </div>
    `,
    iconSize: [30, 30],
    className: "marker",
  });
};
