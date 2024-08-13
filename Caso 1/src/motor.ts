import {
  Reserva
} from "./model";

//Clase para representar la habitación
export class Habitacion {
  nombre: string;
  precioBase: number;
  iva: number;

  constructor(nombre: string, precioBase: number, iva: number) {
    this.nombre = nombre;
    this.precioBase = precioBase;
    this.iva = iva;
  }
}

// Clase para organizar las reservas de hotel y calcular el dinero de estas con sus tipos y costos adicionales.
export class HotelReserva {
  reservas: Reserva[];
  habitaciones: { [key: string]: Habitacion };
  cargoPersonaAdicional: number;

  constructor(reservas: Reserva[]) {
    console.log('Constructor llamado');
    this.reservas = reservas;
    this.habitaciones = {
      standard: new Habitacion("standard", 100, 0.21), // Al ser la habitación standard, cada noche son 100€
      suite: new Habitacion("suite", 150, 0.21), // Al ser la habitación suite, cada noche son 150€
    };
    this.cargoPersonaAdicional = 40;
  };

  // Clase para calcular el subtotal
  calcularSubtotal = (): number => {
    let subtotal = 0;

    this.reservas.forEach((reserva) => {
      const habitacion = this.habitaciones[reserva.tipoHabitacion];
      const personasAdicionales = reserva.pax - 1;
      const costoAdicional = personasAdicionales * this.cargoPersonaAdicional;
      const costoPorNoche = habitacion.precioBase + costoAdicional;
      subtotal += costoPorNoche * reserva.noches;
    });

    return subtotal;
  };

  // Clase para calcular el total incluyendo el IVA
  calcularTotal = (): number => {
    const subtotal = this.calcularSubtotal();
    const total = subtotal * (1 + this.habitaciones["standard"].iva); // Añadimos el IVA al subtotal
    return total;
  };
};

