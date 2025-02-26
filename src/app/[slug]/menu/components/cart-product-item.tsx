import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

import { CartProduct } from "../contexts/cart";


interface CartItemProps {
    product: CartProduct;
}

const CartProductItem = ({ product }: CartItemProps) => {
    return ( 
        <div className="flex items-center justify-between">
            {/* ESQUERDA */}
            <div className="relative h-20 w-20">
                <Image src={product.imageUrl} alt={product.name} fill/>
            </div>
            <div className="space-y-1">
                <p className="text-xs">{product.name}</p>
                <p className="text-sm font-semibold">{formatCurrency(product.price)}</p>
                {/* QUANTIDADE */}
                <div className="flex items-center gap-1">
                    <Button className="h-7 w-7 rounded-lg" variant="outline">
                        <ChevronLeftIcon size={16}/>
                    </Button>
                    <p className="w-8 text-xs">{product.quantity}</p>
                    <Button className="h-7 w-7 rounded-lg" variant="destructive">
                        <ChevronRightIcon size={16}/>
                    </Button>
                </div>
            </div>

        </div>
     );
}
 
export default CartProductItem;