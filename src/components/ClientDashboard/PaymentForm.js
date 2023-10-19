import React, { useState } from "react";
import "./PaymentForm.css";
import { baseUrl } from "../../utils";
import axios from "axios";

function PaymentForm({
  totalAmount,
  onClose,
  bookingData,
  onUpdateSpaceStatus,
  setNotification,
}) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState([]);
  //   console.log(bookingData);
  const { id } = bookingData;

  const paymentDate = new Date().toISOString();

  const handlePaymentSubmit = () => {
    // Simulate payment processing (replace with actual payment integration)
    axios
      .post(
        `${baseUrl}/payments`,
        {
          amount: totalAmount,
          status: true,
          booking_id: id,
          payment_date: paymentDate,
          phone_number: phoneNumber,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        onUpdateSpaceStatus();
        console.log(response.data);
        onClose();
        setNotification("Payment successfully Received!");
        setTimeout(() => {
          setNotification(null);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error creating booking:");
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="payment-form">
      <h1>Payment</h1>
      <p>Total Amount: KSH {totalAmount}</p>{" "}
      {/* Replace with actual total amount */}
      <label>Phone Number:</label>
      <input
        type="text"
        placeholder="254123456789"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      {errors.map((error, index) => (
        <p key={index} className="payment-errors">
          {error}
        </p>
      ))}
      <button className="payment-btn btn-submit" onClick={handlePaymentSubmit}>
        Pay
      </button>
    </div>
  );
}

export default PaymentForm;
