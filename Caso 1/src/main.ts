console.log("Iniciando el cálculo de reservas...");

import {
    reservas
} from "./model";

import {
    HotelReserva
} from "./motor";

const hotelReserva = new HotelReserva(reservas);
const subtotal = hotelReserva.calcularSubtotal();
const total = hotelReserva.calcularTotal();

console.log(`Subtotal: ${subtotal.toFixed(2)} €`);
console.log(`Total con IVA: ${total.toFixed(2)} €`);
