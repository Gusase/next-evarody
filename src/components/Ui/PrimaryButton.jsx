// app/page.tsx
import { Button } from "@nextui-org/button";

import React from "react";

const PrimaryButton = ({ children, className, load, disable, handleClick }) => {
  return (
    <Button
      className={className}
      disableRipple
      isLoading={load}
      isDisabled={disable}
      onClick={handleClick}
      role="button"
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
