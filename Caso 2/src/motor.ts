import {
  Reserva
} from "./model";

// Clase para las reservas
export class HotelReserva {
  reservas: Reserva[];

  constructor(reservas: Reserva[]) {
    this.reservas = reservas;
  };

  calcularSubtotal(): number {
    let subtotal = 0;
    this.reservas.forEach(reserva => {
      subtotal += 100 * reserva.noches; // En este caso, es 100€ cucalquier habitación
    });
    return subtotal;
  };

  calcularTotal(): number {
    const subtotal = this.calcularSubtotal();
    const descuento = subtotal * 0.15; // Hacemos un 15% de descuento sobre el subtotal en vez de calcular el IVA como en el 'caso 1'
    const total = subtotal - descuento; // El total es el subtotal menos el descuento del 15%
    return total;
  };
};
