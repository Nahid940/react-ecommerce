export const addItemToCart=(cartitems,cartItemToAdd)=>
{
    const existingCartItem=cartitems.find(cartitem=>(
        cartitem.productID==cartItemToAdd.productID
        )
    )
    if(existingCartItem)
    {
        return cartitems.map(cartitem=>
            (
                cartitem.productID===cartItemToAdd.productID?
                {...cartitem,quantity:cartitem.quantity+1}:
                cartitem
            )
        )
    }

    return [...cartitems,{...cartItemToAdd,quantity:1}]
}