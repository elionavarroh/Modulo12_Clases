import {
  Reserva,
  preciosHabitaciones
} from "./model";

// Clase para la base de la reserva
export class BaseReserva {
  reservas: Reserva[];

  constructor(reservas: Reserva[]) {
    this.reservas = reservas;
  };

  calcularSubtotal(): number {
    let subtotal = 0;
    this.reservas.forEach(reserva => {
      let habitacion = preciosHabitaciones[reserva.tipoHabitacion];
      subtotal += habitacion.precioBase * reserva.noches;
    });
    return subtotal;
  };

  calcularTotal(): number {
    let subtotal = this.calcularSubtotal();
    return subtotal * (1 + preciosHabitaciones['standard'].iva);
  };
};

// Clase para el cliente particular
export class ClienteParticular extends BaseReserva {
  calcularSubtotal(): number {
    let subtotal = super.calcularSubtotal();
    this.reservas.forEach(reserva => {
      let adicionales = reserva.pax > 1 ? (reserva.pax - 1) * 40 * reserva.noches : 0;
      subtotal += adicionales;
    });
    return subtotal;
  };
};

// Clase para el tour 
export class TourOperador extends BaseReserva {
  calcularSubtotal(): number {
    let subtotal = super.calcularSubtotal();
    return subtotal * 0.85;  // Aplicamos un 15% de descuento
  };

  calcularTotal(): number {
    return this.calcularSubtotal();  // En este caso, no se aplica el IVA adicional para el tour operador
  };
};
