import React from "react";
import Badge from "@material-ui/core/Badge";
import { useState } from 'react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function ShoppingCart({ onAddToCart }: { onAddToCart: (newCount: number) => void }) {
    const [itemCount, setItemCount] = useState(0);

    const handleAddToCart = () => {
        setItemCount(itemCount + 1);
        onAddToCart(itemCount + 1); // Notify the parent component about the updated count
    };
 
    return (
        <div>
            <div>
                <Badge color="secondary" badgeContent={itemCount}>
                    <ShoppingCartIcon />{" "}
                </Badge>
                <button onClick={handleAddToCart}></button>
            </div>
        </div>
    );
}
