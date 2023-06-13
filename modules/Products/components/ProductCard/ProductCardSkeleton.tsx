import React from 'react';


export const ProductCardSkeleton = () => {
    return (
        <div className="animate-pulse w-[100%] p-4 shadow   sk-wrapper flex flex-col justify-center items-center">
            <div className="rounded-sm sk-item h-[200px] w-[80%]"></div>
            <div className="flex-1 space-y-6 mt-5 w-[80%]">
                <div className="h-2 sk-item rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 sk-item rounded col-span-2"></div>
                        <div className="h-2 sk-item rounded col-span-1"></div>
                    </div>
                    <div className="h-2 sk-item rounded"></div>
                    <div className='flex justify-between'>
                        <div className="h-8 w-[48%] sk-item rounded col-span-2"></div>
                        <div className="h-8 w-[48%] sk-item rounded col-span-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
