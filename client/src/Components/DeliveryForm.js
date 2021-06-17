import React, { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import { resetAmmounts } from "../actions/products";
import { createOrder } from "../actions/orders";

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from "react-day-picker/moment";

import "moment/locale/es";

function DeliveryForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    client: "",
    email: "",
    phone: "",
    date: "",
    deliveryAddress: { address: "", location: "" },
    time: "",
    status: "pending",
  });
  const clear = () => {
    setFormData({
      client: "",
      email: "",
      phone: "",
      date: "",
      deliveryAddress: { address: "", location: "" },
      time: "",
      status: "pending",
    });
  };
  const cart = useSelector((state) => state.cart);
  const isFormValid = () => {
    const { client, email, phone, date, deliveryAddress, time } = formData;
    return client && email && phone && date && deliveryAddress && time;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return alert("Por favor completar el formulario!");
    } else if (!cart.length) {
      return alert("Por favor elegir un producto!");
    } else {
      var confirm = window.confirm(
        "Estas seguro que queres terminar tu pedido?"
      );
      if (confirm) {
        const orderData = { ...formData, products: cart };
        dispatch(createOrder(orderData));
        setTimeout(() => {
          clear();
          dispatch(resetAmmounts());
        }, 500);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="DeliveryForm">
      <input
        type="text"
        name="client"
        placeholder=" "
        value={formData.client}
        onChange={(e) => setFormData({ ...formData, client: e.target.value })}
      />
      <label for="client">Nombre</label>
      <input
        type="text"
        name="email"
        placeholder=" "
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <label for="email">E-mail</label>
      <input
        type="text"
        name="phone"
        placeholder=" "
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <label for="phone">Telefono</label>
      <input
        type="text"
        name="address"
        placeholder=" "
        value={formData.deliveryAddress.address}
        onChange={(e) =>
          setFormData({
            ...formData,
            deliveryAddress: {
              address: e.target.value,
              location: formData.deliveryAddress.location,
            },
          })
        }
      />
      <label for="address">Direccion</label>
      <input
        type="text"
        name="address-location"
        placeholder=" "
        value={formData.deliveryAddress.location}
        onChange={(e) =>
          setFormData({
            ...formData,
            deliveryAddress: {
              address: formData.deliveryAddress.address,
              location: e.target.value,
            },
          })
        }
      />
      <label for="address-location">Localidad</label>
      <div className="delivery-info">
        <DayPickerInput
          formatDate={formatDate}
          parseDate={parseDate}
          format="LL"
          value={formData.date}
          onDayChange={(day) => setFormData({ ...formData, date: day })}
          dayPickerProps={{
            locale: "es",
            localeUtils: MomentLocaleUtils,
            selectedDays: formData.date,
            disabledDays: {
              daysOfWeek: [1, 2, 3],
            },
          }}
          placeholder={"Fecha de entrega"}
        />
        <div className="time-picker">
          <select
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          >
            <option value="" selected disabled hidden>
              Horario
            </option>
            <option value="19hs-20hs">19hs a 20hs</option>
            <option value="20hs-21hs">20hs a 21hs</option>
            <option value="21hs-22hs">21hs a 22hs</option>
            <option value="22hs-23hs">22hs a 23hs</option>
          </select>
        </div>
      </div>
      <button className="submit-form" action="submit">
        Finalizar pedido!
      </button>
    </form>
  );
}

export default DeliveryForm;
