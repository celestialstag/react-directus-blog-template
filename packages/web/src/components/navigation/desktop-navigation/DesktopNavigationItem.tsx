import React, { forwardRef } from "react";

import { BoxProps, Flex } from "@mantine/core";

type DesktopNavigationItemProps = BoxProps & {
  children: React.ReactNode;
};

export const DesktopNavigationItem = forwardRef<
  HTMLDivElement,
  DesktopNavigationItemProps
>((props, ref) => {
  return (
    <Flex
      {...props}
      ref={ref}
      align="center"
      py={0}
      sx={{
        ":hover": {
          backgroundColor: "titleBar.hoverBackground",
          color: "titleBar.hoverForeground",
          cursor: "pointer",
        },
        a: { ":hover": { textDecoration: "none" } },
        ":first-of-type": { marginLeft: 0 },
        ":last-of-type": { marginRight: 0 },
      }}
    >
      {props.children}
    </Flex>
  );
});
