// eslint-disable-next-line no-unused-vars
import React from "react";

const Triangle = () => {
    return (
        <div className="flex flex-col items-center mt-8 relative">
            <div className="flex">
                <div className="mx-2 bg-gray-400 w-28 h-14 relative">
                    <div className="absolute top-0 left-[40%] w-full h-full border-l-4 border-red-400 skew-x-[45deg]"></div>
                </div>
                <div className="mx-2 bg-gray-400 w-28 h-14 relative">
                    {/* <div className="absolute top-0 left-0 w-full h-full border-l-4 border-red-400 skew-x-[45deg]"></div> */}
                </div>
                <div className="mx-2 bg-gray-400 w-28 h-14 relative">
                    {/* <div className="absolute top-0 left-0 w-full h-full border-l-4 border-red-400 skew-x-[45deg]"></div> */}
                </div>
                <div className="mx-2 bg-gray-400 w-28 h-14 relative">
                    {/* <div className="absolute  top-0 right-0  h-full border-l-4 border-red-400 -skew-x-[45deg]"></div> */}
                </div>
            </div>
            <div className="flex mt-2">
                <div className="mx-2 bg-gray-400 w-28 h-14 relative">
                    <div className="absolute top-[-20%] left-[-26%] w-full h-full border-l-4 border-red-400 skew-x-[45deg]"></div>
                </div>
                <div className="mx-2 bg-gray-400 w-28 h-14 relative">
                    {/* <div className="absolute  top-0 right-0  h-full border-l-4 border-red-400 -skew-x-[45deg]"></div> */}
                </div>
            </div>
            <div className="flex mt-2">
                <div className="mx-2 bg-gray-400 w-28 h-14 relative">
                    {/* <div className="absolute left-[50%] w-full h-1/2 border-l-4 border-red-400 skew-x-[45deg]  "></div> */}
                    {/* <div className="absolute left-[50%] w-full h-1/2 border-l-4 border-red-400 -skew-x-[45deg]  "></div> */}
                </div>
            </div>
        </div>
    );
};

export default Triangle;
