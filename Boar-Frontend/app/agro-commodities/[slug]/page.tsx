import { getProductBySlug } from "@/lib/products";
import ProductDetailClient from "@/components/agro-commodities/product-detail";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
    params: rawParams,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const params = await rawParams;
    const product = getProductBySlug(params.slug);

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: `${product.name} - Premium Export | BOAR Agro`,
        description: product.descriptionPhase1.substring(0, 160),
        openGraph: {
            title: `${product.name} | BOAR Agro`,
            description: product.descriptionPhase1,
            images: [product.image],
        },
    };
}

export default async function ProductPage({
    params: rawParams,
}: {
    params: Promise<{ slug: string }>;
}) {
    const params = await rawParams;
    const product = getProductBySlug(params.slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            <ProductDetailClient product={product} />
        </div>
    );
}
