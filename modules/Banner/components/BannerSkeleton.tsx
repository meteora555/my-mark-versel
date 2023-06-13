import React from "react";

export const BannerSkeleton = () => {
    return (
        <div className="container">
            <div className=" p-4 sk-wrapper  w-full mb-[50px]">
                <div className="animate-pulse flex space-x-4 items-center">
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-10 sk-item  rounded"></div>
                        <div className="space-y-10">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-5 sk-item rounded col-span-2"></div>
                                <div className="h-5 sk-item rounded col-span-1"></div>
                            </div>
                            <div className="h-[60px] sk-item rounded-[25px] w-[50%]"></div>
                        </div>
                    </div>
                    <div className="rounded-sm sk-item h-[350px] w-[50%]"></div>
                </div>
            </div>
        </div>
    );
};
