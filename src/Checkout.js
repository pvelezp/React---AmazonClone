import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/kindle/merch/2020/SMP/FTV-FNK_HQP_Stick_480x95._CB434920070_.jpg"
          alt=""
        />

        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
            <p>
              You have no items in your basket.To buy one or more click "Add to
              Basket next to item"
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping list</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
