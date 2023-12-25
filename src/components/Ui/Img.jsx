import { Image } from "@nextui-org/react";

const Img = ({ src, alt, className, radius }) => {
  return (
    <Image
      width={"0"}
      height={"0"}
      alt={alt}
      sizes="100vw"
      style={{ width: "100%", height: "100%" }}
      className={className}
      classNames={{
        wrapper: "!max-w-full h-full",
      }}
      radius={radius}
      src={src}
    />
  );
};

export default Img;
