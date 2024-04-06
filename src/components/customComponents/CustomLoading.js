import PuffLoader from "react-spinners/PuffLoader";

export const CustomLoading = () => {
  return (
    <div className="z-20 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-slate-50">
      <PuffLoader color="#36d7b7" />
    </div>
  );
};
