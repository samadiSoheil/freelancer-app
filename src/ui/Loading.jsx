import { ThreeDots } from "react-loader-spinner";

export default function Loading({ height = "75", width = "40" }) {
  return (
    <>
      <ThreeDots
        height={height}
        width={width}
        radius="9"
        color="blue"
        wrapperStyle={{ display: "flex", justifyContent: "center" }}
      />
    </>
  );
}
