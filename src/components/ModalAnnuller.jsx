// BookingModal.jsx
import { Modal, Button, Group } from '@mantine/core';

function BookingModal({ opened, onClose, onConfirm, title, bodyContent }) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={title}
      centered
      styles={{
        modal: { width: '500px' }, // Set consistent modal width
        closeButton: { right: '10px', top: '10px' }, // Optional: close button positioning
      }}
    >
      <div style={{ marginBottom: '20px' }}>{bodyContent}</div>
      <Group mt="xl" justify="flex-end">
        <Button variant="default" onClick={onClose} style={{ marginRight: '10px' }}>
          Annuller
        </Button>
        <Button color="red" onClick={onConfirm}>
          Bekræft
        </Button>
      </Group>
    </Modal>
  );
}

export default BookingModal;
