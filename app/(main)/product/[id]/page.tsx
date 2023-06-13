import { getProductById } from "@/modules/Products/api";
import { ProductDetail } from "@/modules/Products/components/ProductDetail/ProductDetail";
import ProductReviewed from "@/modules/Products/components/ProductSlider/ProductReviewed";
import { BannerLottie } from "@/components/BannerLottie/BannerLottie";
import support from "@/src/lottie/support.json";
import price from "@/src/lottie/price.json";
import ScrollUp from "@/components/ui/ScrollUp/ScrollUp";

export async function generateMetadata({ params }: any): Promise<any> {
    const product = await getProductById(params.id);
    return { title: product.title, description: product.description };
}

export default async function Page({ params }: any) {
    const product = await getProductById(params.id);

    return (
        <div className={"mt-[25px] lg:mt-[50px]"}>
            <ScrollUp />
            <ProductDetail product={product} />
            <BannerLottie
                isMargin={true}
                json={price}
                background={"var(--price)"}
                title={"Нашли дешевле? Снизим цену специально для вас"}
                linkName="Техподдержка"
                link={"mailto:info@my-mark.ru"}
            />
            <ProductReviewed
                title={"Просмотренные товары"}
                nextName={"reviewedNext"}
                prevName={"reviewedPrev"}
            />
            <BannerLottie
                json={support}
                background={"var(--support)"}
                title={"Круглосуточная служба поддержки"}
                linkName="Перейти"
                link={"mailto:info@my-mark.ru"}
            />
        </div>
    );
}
