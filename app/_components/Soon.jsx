import Image from "next/image";
import React from "react";

function Soon() {
  return (
    <div className="flex items-center justify-center mt-20">
      <Image src="/images/soon.png" alt="soon" width={600} height={600} />
    </div>
  );
}

export default Soon;
