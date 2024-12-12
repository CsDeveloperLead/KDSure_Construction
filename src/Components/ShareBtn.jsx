import React, { useState } from 'react';
import { IoShareSocialOutline } from 'react-icons/io5';

const CopyLinkButton = ({ link }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCopy = () => {
        if (!link) {
            console.error("No link provided!");
            return;
        }

        navigator.clipboard.writeText(link).then(() => {
            // Show the modal
            setIsModalVisible(true);

            // Hide the modal after 2 seconds
            setTimeout(() => {
                setIsModalVisible(false);
            }, 1000);
        }).catch((err) => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <div>
            {/* Button */}
            <button
                onClick={handleCopy}
                className="w-auto h-auto p-2 px-5 rounded-md cursor-pointer flex items-center justify-center gap-2 text-[#1095D0] md:hover:bg-[#1096d05a] font-medium bg-[#1096d023] md:py-3 md:px-7 md:text-lg"
            >
                 <IoShareSocialOutline size={20} />
                Share
            </button>

            {/* Modal */}
            {isModalVisible && (
                <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <p className="text-gray-800">Link Copied!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CopyLinkButton;