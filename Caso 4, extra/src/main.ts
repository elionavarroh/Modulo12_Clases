import {
    reservas
} from './model';

import {
    ClienteParticular,
    TourOperador
} from './motor';

const clienteReserva = new ClienteParticular(reservas);
console.log(`Subtotal Cliente Particular: ${clienteReserva.calcularSubtotal().toFixed(2)} €`);
console.log(`Total Cliente Particular: ${clienteReserva.calcularTotal().toFixed(2)} €`);

const tourReserva = new TourOperador(reservas);
console.log(`Subtotal Tour Operador: ${tourReserva.calcularSubtotal().toFixed(2)} €`);
console.log(`Total Tour Operador: ${tourReserva.calcularTotal().toFixed(2)} €`);
