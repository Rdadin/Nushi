import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../actions/orders";
import { editOrder } from "../actions/orders";

function Order({ order, currentId, setCurrentId }) {
  const date = new Date(order.date);
  const dispatch = useDispatch();
  return (
    <div
      className={`Order ${order._id === currentId ? "id-match" : ""}`}
      style={
        order.status === "confirmed"
          ? { backgroundColor: "#8997b1" }
          : order.status === "finished"
          ? { backgroundColor: "#87b67e" }
          : { backgroundColor: "#98a368" }
      }
    >
      <div className="order-options">
        <div className="date">{date.toLocaleDateString("es-ES")}</div>
        <div className="time">{order.time}</div>
        <div className="edit-options">
          <button
            className="confirm"
            onClick={() => {
              if (order.status === "pending") {
                var confirmar = window.confirm("Confirmar Pedido?");
                if (confirmar) {
                  const editedOrder = { ...order, status: "confirmed" };
                  dispatch(editOrder(order._id, editedOrder));
                }
              } else if (order.status === "confirmed") {
                var desconfirmar = window.confirm(
                  "Marcar pedido como pendiente?"
                );
                if (desconfirmar) {
                  const editedOrder = { ...order, status: "pending" };
                  dispatch(editOrder(order._id, editedOrder));
                }
              }
            }}
          >
            <FontAwesomeIcon icon={faCheckCircle} />
          </button>
          <button
            className="delete"
            onClick={() => {
              var eliminar = window.confirm("Eliminar Pedido?");
              if (eliminar) {
                dispatch(deleteOrder(order._id));
              }
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          <button
            className="edit"
            onClick={() => {
              var editar = window.confirm("Editar Pedido?");
              if (editar) {
                setCurrentId(order._id);
              }
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
      </div>
      <div className="order-details">
        <div className="name">{order.client}</div>
        <div className="phone">{order.phone}</div>
        <div className="mail">{order.email}</div>
        <div className="address">
          {order.deliveryAddress.address}, {order.deliveryAddress.location}
        </div>
        <div className="products">
          {order.productsInfo.map((product) => {
            return (
              <p
                key={product.name}
              >{`${product.name} x${product.selectedAmmount}`}</p>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0",
          }}
        >
          {order.status === "confirmed" ? (
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                fontSize: "0.8rem",
                padding: "0.8rem",
              }}
              className="finish"
              onClick={() => {
                var finish = window.confirm("Pedido finalizado?");
                if (finish) {
                  const editedOrder = { ...order, status: "finished" };
                  dispatch(editOrder(order._id, editedOrder));
                }
              }}
            >
              FINALIZAR
            </button>
          ) : (
            " "
          )}

          <div className="total">{`$${order.priceTotal}`}</div>
        </div>
      </div>
    </div>
  );
}

export default Order;
