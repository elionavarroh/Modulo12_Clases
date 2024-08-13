import {
  Reserva,
  preciosHabitaciones
} from "./model";

export class BaseReserva {
  reservas: Reserva[];
  desayunoCosto: number = 15; // Cargo adicional por desayuno, por persona y noche

  constructor(reservas: Reserva[]) {
    this.reservas = reservas;
  };

  calcularSubtotal(): number {
    let subtotal = 0;
    this.reservas.forEach(reserva => {
      let habitacion = preciosHabitaciones[reserva.tipoHabitacion];
      let costoBase = habitacion.precioBase * reserva.noches;
      let costoDesayuno = reserva.desayuno ? reserva.pax * this.desayunoCosto * reserva.noches : 0;
      subtotal += costoBase + costoDesayuno;
    });
    return subtotal;
  };

  calcularTotal(): number {
    let subtotal = this.calcularSubtotal();
    return subtotal * (1 + preciosHabitaciones["standard"].iva); // Aplicamos IVA
  };
};

export class ClienteParticular extends BaseReserva {
  calcularSubtotal(): number {
    let subtotal = 0;
    this.reservas.forEach(reserva => {
      let habitacion = preciosHabitaciones[reserva.tipoHabitacion];
      let personasAdicionales = reserva.pax - 1;
      let costoAdicional = personasAdicionales * 40; // Costo adicional por persona extra
      let costoDesayuno = reserva.desayuno ? reserva.pax * this.desayunoCosto * reserva.noches : 0;
      let costoPorNoche = habitacion.precioBase + costoAdicional;
      subtotal += (costoPorNoche * reserva.noches) + costoDesayuno;
    });
    return subtotal;
  };
};

export class TourOperador extends BaseReserva {
  calcularSubtotal(): number {
    let subtotal = super.calcularSubtotal();
    return subtotal * 0.85; // Aplicamos de nuevo un 15% de descuento
  };

  calcularTotal(): number {
    return this.calcularSubtotal(); // No aplicamos IVA adicional para el tour operador
  };
};
