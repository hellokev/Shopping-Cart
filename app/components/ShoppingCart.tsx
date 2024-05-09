import React from "react";
import Badge from "@material-ui/core/Badge";
import { useState } from 'react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Shop from "../shop/page";

export default function ShoppingCart() {
    interface ShopProps {
        onCount: number;
        onItemPress: (count: number) => void;
    }
    
    const [itemCount, setItemCount] = useState(0);

    const handleItemPress = () => {
        setItemCount(itemCount + 1);
      };

    return (
        <div>
            <div>
                <Badge color="secondary" badgeContent={itemCount} overlap="rectangular">
                    <ShoppingCartIcon />
                </Badge>
            </div>
            <Shop onCount={itemCount} onItemPress={handleItemPress}/>
        </div>
    );
}
