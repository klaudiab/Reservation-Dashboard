import Header from "../Header/Header";
import ReservationForm from "../ReservationForm/ReservationForm";

export default function AddReservationPage() {
    return (
        <div className="app-container">
          <Header />

          <div className="d-flex flex-column align-items-center justify-content-center">
            <ReservationForm isEditing={false}/>
          </div>
        </div>
      )
}