import SpinLoader from "./SpinLoader";

interface Props {
  type: string;
}
const Loaders = ({ type }: Props) => {
  return (
    <>
      {/* {type === "bounce" && <BallLoaders />} */}
      {type === "spin" && <SpinLoader />}
    </>
  );
};

export default Loaders;
