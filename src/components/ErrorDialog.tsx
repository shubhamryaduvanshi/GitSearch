import { AiOutlineCloseCircle } from "solid-icons/ai";

interface Props {
    message: string;
    closeModal: () => void;
}

export const ErrorDialog = ({message,closeModal}:Props) => {
  return (
    <div class="dialog-overlay">
      <div class="dialog mt-20">
        <div class="bg-red-500 p-2 text-md  text-white font-medium flex justify-between items-center">
          <span> Error !</span>
          <div class="cursor-pointer" onClick={closeModal}>
            <AiOutlineCloseCircle size={22} />
          </div>
        </div>
        <div class="p-2 text-md">{message}</div>
      </div>
    </div>
  );
};
