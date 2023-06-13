import React from 'react';

export const CategoriesSkeleton = () => {
    const skeletons = Array.from({length: 4}).map((e, index) => (
        <div key={index} className="animate-pulse w-[20%] flex flex-col justify-center items-center">
            <div className="rounded-sm sk-item h-[350px] w-[100%]"></div>
            <div className="h-[30px] sk-item mt-5  w-[80%]"></div>
        </div>
    ));
    return (
        <div className='container'>
            <div className="p-4 shadow flex justify-between mb-[50px] sk-wrapper  w-full ">
                {skeletons}
            </div>
        </div>
    );
};
