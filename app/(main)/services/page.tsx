import React from "react";
import {Services} from "@/modules/Services/components/Services";
import {getServices} from "@/modules/Services/api";
import {Title} from "@/components/ui/Title/Title";

export default async function Page() {
    const services = await getServices();
    return (
        <div className={'mt-[25px] lg:mt-[50px]'}>
            <div className={'container'}>
                <Title className={'mb-[25px]'}>Услуги</Title>
            </div>
            <Services services={services}/>
        </div>
    )
}
