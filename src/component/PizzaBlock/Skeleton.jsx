import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={475}
    viewBox="0 0 280 475"
    backgroundColor="#f3eded"
    foregroundColor="#c7c6c6"
    {...props}
  >
    <circle cx="137" cy="150" r="120" />
    <rect x="1" y="287" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="334" rx="10" ry="10" width="280" height="88" />
    <rect x="65" y="352" rx="0" ry="0" width="2" height="0" />
    <rect x="0" y="428" rx="10" ry="10" width="84" height="30" />
    <rect x="82" y="454" rx="0" ry="0" width="5" height="0" />
    <rect x="126" y="428" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
