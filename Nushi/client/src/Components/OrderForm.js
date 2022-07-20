import React, { useState, useEffect } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import OrderCart from "../Components/OrderCart";
import "react-day-picker/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, editOrder } from "../actions/orders";
import { changeAmmount, resetAmmounts } from "../actions/products";

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from "react-day-picker/moment";

import "moment/locale/es";

function OrderForm({ currentId, setCurrentId }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    client: "",
    email: "",
    phone: "",
    date: "",
    deliveryAddress: { address: "", location: "" },
    time: "",
    status: "",
  });
  const clear = () => {
    setFormData({
      client: "",
      email: "",
      phone: "",
      date: "",
      deliveryAddress: { address: "", location: "" },
      time: "",
      status: "",
    });
  };
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const selectedOrder = useSelector((state) =>
    currentId ? state.orders.find((o) => o._id === currentId) : null
  );
  useEffect(() => {
    if (selectedOrder) {
      setFormData({
        client: selectedOrder.client,
        email: selectedOrder.email,
        phone: selectedOrder.phone,
        date: selectedOrder.date,
        deliveryAddress: selectedOrder.deliveryAddress,
        time: selectedOrder.time,
        status: selectedOrder.status,
      });
      dispatch(resetAmmounts());
      selectedOrder.productsInfo.map((p) =>
        dispatch(changeAmmount(p.name, p.selectedAmmount))
      );
    }
  }, [currentId, dispatch]);

  const isFormValid = () => {
    const { client, email, phone, date, deliveryAddress, time, status } =
      formData;
    return (
      client && email && phone && date && deliveryAddress && time && status
    );
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
        if (currentId) {
          const productsInfo = cart.map((product) => {
            return {
              name: product.name,
              selectedAmmount: product.selectedAmmount,
            };
          });
          const priceTotal = cart
            .map((product) => {
              return product.price * product.selectedAmmount;
            })
            .reduce((a, b) => a + b, 0);
          const editedOrder = {
            ...formData,
            productsInfo: productsInfo,
            priceTotal: priceTotal,
          };
          dispatch(editOrder(currentId, editedOrder));
        } else {
          const orderData = { ...formData, products: cart };
          dispatch(createOrder(orderData));
        }
        setTimeout(() => {
          dispatch(resetAmmounts());
          setCurrentId(null);
          clear();
        }, 500);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="OrderForm">
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

      <select onChange={(e) => dispatch(changeAmmount(e.target.value, "more"))}>
        <option value="" selected disabled hidden>
          Agregar productos
        </option>
        {products.map((product) => (
          <option key={product._id} value={product.name}>
            {product.name}
          </option>
        ))}
      </select>
      <OrderCart />

      <select
        style={{ width: "30%" }}
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
      >
        <option value="" selected disabled hidden>
          Status
        </option>
        <option value="pending">Pendiente</option>
        <option value="confirmed">Confirmado</option>
        <option value="finished">Completado</option>
      </select>
      <div>
        <button className="submit-form" action="submit">
          {currentId ? "Editar pedido" : "Agregar pedido"}
        </button>
        {currentId ? (
          <button
            className="clear-id"
            action="button"
            onClick={() => {
              clear();
              dispatch(resetAmmounts());
              setCurrentId(null);
            }}
          >
            Cancelar
          </button>
        ) : null}
      </div>
    </form>
  );
}

export default OrderForm;
