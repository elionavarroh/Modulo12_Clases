import {
    reservas
} from './model';

import {
    ClienteParticular,
    TourOperador
} from './motor';

const clienteReserva = new ClienteParticular(reservas);
console.log(`Total Cliente Particular: ${clienteReserva.calcularTotal().toFixed(2)} €`);

const tourReserva = new TourOperador(reservas);
console.log(`Total Tour Operador: ${tourReserva.calcularTotal().toFixed(2)} €`);
