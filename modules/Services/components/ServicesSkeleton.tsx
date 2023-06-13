import React from 'react';


export const ServicesSkeleton = () => {
    return (
        <div className=" w-full container">
            <div className="p-4 shadow sk-wrapper w-full  mb-[50px]">
                <div className="animate-pulse  flex space-x-4 items-center">
                    <div className="rounded-sm sk-item h-[400px] w-[50%]"></div>
                    <div className="rounded-sm sk-item h-[400px] w-[50%]"></div>
                </div>
            </div>
        </div>

    );
};
