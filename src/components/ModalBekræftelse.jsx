// BookingCancelledModal.jsx
import { Modal, Text, Button} from '@mantine/core';
import { useRouter } from '@tanstack/react-router';



function BookingCancelledModal({ opened, onClick }) {
  
  const router = useRouter ()

  return (
    <Modal
      opened={opened}
      onClick ={()=> router.navigate({to:'/startBooking'})} 
      title="Booking Annulleret"
      centered
      styles={{
        modal: { width: '500px' }, // Same width as the BookingModal
        closeButton: { right: '10px', top: '10px' }, // Optional: close button positioning
      }}
    >
      <Text style={{ marginBottom: '20px'}}>Din booking er blevet annulleret!</Text>
      <Button fullWidth color="blue" onClick={onClick}>
        Ny Booking
      </Button>
    </Modal>
  );
}

export default BookingCancelledModal;
