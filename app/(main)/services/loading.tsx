import {ServicesSkeleton} from "@/modules/Services/components/ServicesSkeleton";
import React from "react";

export default function Loading() {
    return (
        <div className={'mt-[50px]'}>
            <div className={'container'}>
                <div className="rounded-sm sk-item h-[45px] mb-[25px] w-[230px]"></div>
            </div>
            <ServicesSkeleton/>
        </div>
    )
}
