import { useParams } from "react-router-dom";
import ReservationForm from "../ReservationForm/ReservationForm";
import Header from "../Header/Header";

export default function EditReservationPage() {
    const params = useParams<{ reservationId: string}>();
    
    return (
        <div className="app-container">
          <Header />
            <div className="d-flex flex-column align-items-center justify-content-center">
                <ReservationForm isEditing={true} reservationId={params.reservationId} />
            </div>
        </div>
    );
};
