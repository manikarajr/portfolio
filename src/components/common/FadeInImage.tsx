import { useState, type ImgHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type FadeInImageProps = ImgHTMLAttributes<HTMLImageElement>;

/**
 * Drop-in replacement for <img> that fades the image in once it finishes
 * loading instead of popping in abruptly, with a neutral placeholder color
 * showing through until then. No wrapper element — same box as a plain img.
 */
export function FadeInImage({ className, onLoad, ...props }: FadeInImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      {...props}
      onLoad={(event) => {
        setLoaded(true);
        onLoad?.(event);
      }}
      className={cn(
        "bg-neutral-100 opacity-0 transition-opacity duration-700 motion-reduce:transition-none dark:bg-slate-800",
        loaded && "opacity-100",
        className,
      )}
    />
  );
}
