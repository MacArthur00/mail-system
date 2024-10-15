//import { useState } from "react";
import { X, Info, Check } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function Modal({ isErrorModal, message, isModalOpen, closeModal }) {
    /* const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
    }; */

    return (
        <div>
            {/* Modal */}
            {isModalOpen && (
                <div
                    id="popup-modal"
                    tabIndex="-1"
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button
                                onClick={closeModal}
                                type="button"
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <X className="h-5 w-5" /> 
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-4 md:p-5 text-center">
                                {!isErrorModal && <Check className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />}
                                {isErrorModal && <Info className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />}
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    {message}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
