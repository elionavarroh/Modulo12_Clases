console.log("Iniciando el cálculo de reservas...");

import { 
    reservasTour 
} from "./model";

import { 
    HotelReserva 
} from "./motor";

const reservaHotel = new HotelReserva(reservasTour);
const subtotal = reservaHotel.calcularSubtotal();
const total = reservaHotel.calcularTotal();

console.log(`Subtotal: ${subtotal.toFixed(2)} €`);
console.log(`Total con IVA: ${total.toFixed(2)} €`);
