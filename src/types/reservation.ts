import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod"; 

export const ReservationSchema: ZodType<FormData> = z
.object({
  id: z.string(),
  guestName:z.string().min(2, "Imię i nazwisko musi mieć co najmniej 2 znaki"),
  checkInDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Podaj poprawną datę zameldowania",
  }), 
  checkOutDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Podaj poprawną datę wymeldowania",
  }),
  roomNumber: z.string().optional(),
  status: z.enum([
    "Reserved",
    "Due In",
    "In House",
    "Due Out",
    "Checked Out",
    "Canceled",
    "No Show",
  ]),
  notes: z.string().optional(),
  email: z.string().optional().refine((val) => val === undefined || val === "" || z.string().email().safeParse(val).success, {
    message: "Podaj poprawny adres e-mail",
  }),
 });

export type ReservationStatus = 
  | 'Reserved' 
  | 'Due In' 
  | 'In House' 
  | 'Due Out' 
  | 'Checked Out' 
  | 'Canceled' 
  | 'No Show';

export interface Reservation {
  id: string;
  guestName: string;
  checkInDate: string;
  checkOutDate: string;
  status: ReservationStatus;
  roomNumber?: number;
  notes?: string;
  email?: string;
} 

export interface ReservationResponse {
  id: string;
  guestName: string;
  checkInDate: string;
  checkOutDate: string;
  status: string;
  roomNumber?: number;
  notes?: string;
  email?: string;
}


export type FormData = {
  id: string;
  guestName: string;
  checkInDate: string;
  checkOutDate: string;
  status: ReservationStatus;
  roomNumber?: string;
  notes?: string;
  email?: string;
};

export type FormFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  value?: string;
  options?: string[]
};


export type ValidFieldNames =
  // "id"
  | "guestName"
  | "checkInDate"
  | "checkOutDate"
  | "status"
  | "roomNumber"
  | "notes"
  | "email";
