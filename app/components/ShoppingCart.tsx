import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
 
export default function ShoppingCart() {
    const [itemCount, setItemCount] = React.useState(0);
 
    return (
        <div>
            <div>
                <Badge color="secondary" badgeContent={itemCount}>
                    <ShoppingCartIcon />{" "}
                </Badge>
            </div>
        </div>
    );
}