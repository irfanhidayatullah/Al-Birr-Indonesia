"use client";

import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FC, PropsWithChildren } from "react";

interface ButtonProps extends ChakraButtonProps, PropsWithChildren {
  href: string;
}

const Button: FC<ButtonProps> = ({ href, children, ...rest }) => {
  const router = useRouter();

  return (
    <ChakraButton onClick={() => router.push(href)} {...rest}>
      {children}
    </ChakraButton>
  );
};

export default Button;
