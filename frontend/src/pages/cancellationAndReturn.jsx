import React from "react";

const CancellationRefund = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
      <h1>Cancellation and Refund Policy</h1>
      <p>
        Welcome to <strong>Nmart</strong>, your trusted clothing and army
        products store. These terms govern cancellations, returns, and refunds
        for purchases made on our platform. By shopping with us, you agree to
        the following policies designed to provide a fair and transparent
        shopping experience.
      </p>

      <h2>Order Cancellations</h2>
      <ul>
        <li>
          <strong>Before Dispatch:</strong> Customers may cancel their order
          within <strong>24 hours</strong> of placing it or before it has been
          dispatched. A full refund will be issued to the original payment
          method.
        </li>
        <li>
          <strong>After Dispatch:</strong> Once an order has been shipped, it
          cannot be canceled. However, you may initiate a return after delivery
          (see Returns section).
        </li>
      </ul>

      <h2>Returns</h2>
      <p>
        We want you to be completely satisfied with your purchase. If you are
        not happy with an item, you may request a return under the following
        conditions:
      </p>
      <ul>
        <li>
          <strong>Eligibility:</strong> Items must be unused, unworn, and in
          their original packaging with all tags intact.
        </li>
        <li>
          <strong>Time Frame:</strong> Returns must be requested within{" "}
          <strong>7 days</strong> of delivery.
        </li>
        <li>
          <strong>Non-Returnable Items:</strong> For hygiene and safety reasons,
          certain items such as undergarments, socks, tactical gear (like
          helmets, gloves, or combat accessories) cannot be returned unless they
          are defective.
        </li>
        <li>
          <strong>Shipping:</strong> Return shipping costs will be the
          responsibility of the customer, unless the item is defective or
          incorrect.
        </li>
      </ul>

      <h2>Refunds</h2>
      <p>
        Once your return is received and inspected, we will notify you of the
        status of your refund. If approved:
      </p>
      <ul>
        <li>Refunds will be processed to your original payment method.</li>
        <li>
          It may take <strong>7–10 business days</strong> for the refund to
          reflect, depending on your bank or payment provider.
        </li>
      </ul>

      <h2>Exchanges</h2>
      <p>
        We currently allow size and color exchanges for clothing products,
        subject to stock availability. If your requested size or variant is
        unavailable, we will issue a refund instead.
      </p>

      <h2>Cancellations by Nmart</h2>
      <p>
        In rare cases, we may need to cancel your order due to unforeseen
        circumstances such as stock unavailability or logistical issues. In such
        cases, you will be notified promptly and receive a full refund.
      </p>

      <h2>Contact Us</h2>
      <p>
        For cancellations, returns, or refund requests, please email us at{" "}
        <a href="mailto:shop.sharmamart@gmail.com">
          shop.sharmamart@gmail.com
        </a>
        . Our support team will be happy to assist you.
      </p>
    </div>
  );
};

export default CancellationRefund;
