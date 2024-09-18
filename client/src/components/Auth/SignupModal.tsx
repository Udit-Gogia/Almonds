import { CircularButton } from "../Buttons/CircularButton/CircularButton";
import { Modal } from "../Shared/Modal";

export const SignupModal = () => {
  return (
    <Modal
      Button={
        <section className="mt-8">
          <CircularButton label="Get started..." />
        </section>
      }
      ModalContent={
        <div className="bg-black px-8 py-10 rounded-2xl flex flex-col gap-4 min-w-[40vw]">
          <div className="p-4 flex flex-col gap-2">
            <p className="font-bold text-2xl text-primaryWhite poppins">
              Create your account
            </p>
            <p className="text-primaryGray">
              Welcome! Please fill in the details to get started.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-8">
              <input
                type="text"
                id="first_name"
                className="bg-black border-b-2 border-primaryGray focus:outline-none text-primaryWhite text-sm  w-full pl-0 p-2"
                placeholder="First name "
                required
              />
              <input
                type="text"
                id="last_name"
                className="bg-black border-b-2 border-primaryGray focus:outline-none text-primaryWhite text-sm  w-full pl-0 p-2"
                placeholder="Last name "
                required
              />
              <input
                type="text"
                id="first_name"
                className="bg-black border-b-2 border-primaryGray focus:outline-none text-primaryWhite text-sm  w-full pl-0 p-2"
                placeholder="First name "
                required
              />
              <input
                type="text"
                id="first_name"
                className="bg-black border-b-2 border-primaryGray focus:outline-none text-primaryWhite text-sm  w-full pl-0 p-2"
                placeholder="First name "
                required
              />
            </div>
          </div>
        </div>
      }
    ></Modal>
  );
};
