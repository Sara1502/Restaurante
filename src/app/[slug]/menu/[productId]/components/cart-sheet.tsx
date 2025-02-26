import { useContext } from "react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import CartProductItem from "../../components/cart-product-item";
import { CartContext } from "../../contexts/cart";

const CartSheet = () => {
    const {isOpen, toggleCart, products} = useContext(CartContext);
    return ( 
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>sndkfjns</SheetTitle>
                    <SheetDescription>
                        ngkfdjngkjd
                    </SheetDescription>
                </SheetHeader>
                {products.map((product) => (
                    <CartProductItem key={product.id} product={product}/>
                ))}
            </SheetContent>
        </Sheet>
     );
};
 
export default CartSheet;