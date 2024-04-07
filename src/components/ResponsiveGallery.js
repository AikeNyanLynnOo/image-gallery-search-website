import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// The number of columns change by resizing the window
// export const ResponsiveGallery = ({ children }) => {
//   return (
//      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
//       <Masonry>{children}</Masonry>
//     </ResponsiveMasonry>
//   );
// };

export default class MyWrapper extends React.Component {
  render() {
    return (
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
      >
        <Masonry gutter="8px">{this.props.children}</Masonry>
      </ResponsiveMasonry>
    );
  }
}
