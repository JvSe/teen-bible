import { Button, ButtonProps, Icon, Colors } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";


type SocialButtonProps = ButtonProps & {
  children: ReactNode;
  icon: ElementType;
  colorIcon?: string;
}

export function SocialButton({ children, icon, colorIcon, ...rest }: SocialButtonProps) {
  return (
    <Button
      w="full"
      transition="ease 0.2s"
      _hover={{
        filter: 'brightness(0.8)'
      }}
      {...rest}
    >
      <>
        <Icon as={icon} color={colorIcon && colorIcon} fontSize="xl" mr={2} />
        {children}
      </>
    </Button>
  )
}