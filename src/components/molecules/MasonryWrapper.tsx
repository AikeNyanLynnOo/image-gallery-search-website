"use client";

import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function MasonryWrapper({ children }: any) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // or a skeleton loader

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3, 1200: 4 }}
    >
      <Masonry gutter="8px">{children}</Masonry>
    </ResponsiveMasonry>
  );
}
