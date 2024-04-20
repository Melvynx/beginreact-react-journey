export const ReactSvg = ({ size, ...props }) => {
  return (
    <svg
      viewBox="-10.5 -9.45 21 18.9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="text-sm me-0 text-link dark:text-link-dark flex origin-center transition-all ease-in-out"
      style={{
        color: "#149ECA",
        width: size,
        height: size,
      }}
      {...props}
    >
      <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
      <g stroke="currentColor" stroke-width="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  );
};
