export interface Reserva {
    tipoHabitacion: "standard" | "suite";
    pax: number;
    noches: number;
};

export const preciosHabitaciones = {
    standard: { precioBase: 100, iva: 0.21 },
    suite: { precioBase: 150, iva: 0.21 }
};

export const reservas: Reserva[] = [
    {
        tipoHabitacion: "standard",
        pax: 2,
        noches: 3,
    },
    {
        tipoHabitacion: "suite",
        pax: 1,
        noches: 4,
    }
];