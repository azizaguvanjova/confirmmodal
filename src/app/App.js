import { AiOutlineWarning } from "react-icons/ai";

const App = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-red-500 overflow-hidden px-4">
      <div className="bg-white w-full sm:w-5/6 md:w-4/5 lg:w-3/6 rounded-lg shadow-[0_0_35px_rgba(0,0,0,0.5)] flex flex-col justify-center gap-8 p-8 sm:p-12 lg:p-16">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
          Delete User
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-center">
          Are you sure you want to delete{" "}
          <span className="font-bold">your account?</span>
        </p>

        <div className="bg-[#FFE9D9] border-l-[10px] border-[#FA703F] p-4">
          <div className="flex text-xl sm:text-2xl lg:text-3xl font-semibold items-center text-[#771505] mb-2">
            <AiOutlineWarning className="text-2xl sm:text-3xl lg:text-4xl" />
            <h2 className="ml-2 text-lg sm:text-xl lg:text-2xl">Warning</h2>
          </div>

          <p className="text-sm sm:text-lg lg:text-xl text-[#BC4C2E] font-medium">
            By deleting this account, you won't be able to access the system.
          </p>
        </div>

        <div className="flex justify-between flex-col sm:flex-row gap-4">
          <Button
            props={`text-base sm:text-xl lg:text-2xl border-2 py-3 px-4 sm:p-4 bg-[#101F20] text-white font-medium hover:bg-white hover:text-[#101F20] hover:border-[#101F20]`}
          >
            No, Cancel
          </Button>
          <Button
            props={`text-base sm:text-xl lg:text-2xl py-3 sm:py-5 px-4 border-2 border-black font-medium hover:bg-[#101F20] hover:text-white hover:border-white`}
          >
            Yes, Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;

function Button({ children, props }) {
  return <button className={`${props}`}>{children}</button>;
}
