
import { useForm } from "react-hook-form";
import { FormData, ReservationSchema } from "../../types/reservation"; 
import ReservationFormField from "./ReservationFormField/ReservationFormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const addStatusOptions = ["Reserved", "Due In"];
const editStatusOptions = [
  "Reserved",
  "Due In",
  "In House",
  "Due Out",
  "Checked Out",
  "Canceled",
  "No Show",
];

    function ReservationForm({ isEditing, reservationId }: { isEditing: boolean, reservationId?: string }) {
        const {
          register,
          handleSubmit,
          formState: { errors },
          setError,
          reset,
        } = useForm<FormData>({
            resolver: zodResolver(ReservationSchema), 
          });

          const [reservationData, setReservationData] = useState<FormData | null>(null);

          useEffect(() => {
            if (isEditing && reservationId) {
                fetchReservation(reservationId).then((data: FormData | undefined) => {
                    if (data) {
                        setReservationData(data);
                        reset(data);
                    }
                });
            }
        }, [isEditing, reservationId, reset]);
    
        const fetchReservation = async (id: string): Promise<FormData | undefined> => {
            const response = await fetch('/src/data/reservations.json');
            const data: FormData[] = await response.json();
            const reservation = data.find((reservation: FormData) => reservation.id === id);
            return reservation;
        };
          
      
        const onSubmit = async (data: FormData) => {
            console.log("SUCCESS", data);
        }
      
        return (
            <form onSubmit={handleSubmit(onSubmit)}>

                <ReservationFormField
                label="Imię i nazwisko"
                  type="text"
                  placeholder="Imię i nazwisko"
                  name="guestName"
                  register={register}
                  error={errors.guestName}
                />
      
                <ReservationFormField
                label="Przyjazd"
                  type="date"
                  placeholder="Przyjazd"
                  name="checkInDate"
                  register={register}
                  error={errors.checkInDate}
                />
      
                <ReservationFormField
                label="Wyjazd"
                  type="date"
                  placeholder="Wyjazd"
                  name="checkOutDate"
                  register={register}
                  error={errors.checkOutDate}
                />
      
                <ReservationFormField
                  label="Status"
                  type="select"
                  placeholder="Status"
                  name="status"
                  register={register}
                  error={errors.status}
                  options={isEditing ? editStatusOptions : addStatusOptions}
                />

                <ReservationFormField
                label="Pokój"
                  type="number"
                  placeholder="Pokój"
                  name="roomNumber"
                  register={register}
                  error={errors.roomNumber}
                />

                <ReservationFormField
                label="Notatka"
                  type="textarea"
                  placeholder="Notatka"
                  name="notes"
                  register={register}
                  error={errors.notes}
                />

                <ReservationFormField
                label="E-mail"
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  register={register}
                  error={errors.email}
                />
                <button type="submit" className="submit-button btn btn-primary">
                  Zapisz
                </button>
            </form>
        );
      }
      
      export default ReservationForm;
