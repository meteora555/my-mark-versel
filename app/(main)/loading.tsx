import {BannerSkeleton} from "@/modules/Banner/components/BannerSkeleton";
import {ServicesSkeleton} from "@/modules/Services/components/ServicesSkeleton";
import {CategoriesSkeleton} from "@/modules/Categories/components/CategoriesSkeleton";
import {ProductCardSkeleton} from "@/modules/Products/components/ProductCard/ProductCardSkeleton";

export default function Loading() {
    return (
        <>
            <BannerSkeleton/>
            <ServicesSkeleton/>
            <CategoriesSkeleton/>
        </>
    );
}
