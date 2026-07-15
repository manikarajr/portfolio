import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface ContainerOwnProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

type ContainerProps = ContainerOwnProps & Omit<ComponentPropsWithoutRef<"div">, keyof ContainerOwnProps>;

export function Container({ children, className, as: Tag = "div", ...props }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-content px-6 sm:px-8 lg:px-12", className)} {...props}>
      {children}
    </Tag>
  );
}
