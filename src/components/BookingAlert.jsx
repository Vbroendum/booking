import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';


export default BookingAlert

function BookingAlert() {
  const icon = <IconInfoCircle />;
  return (
    <Alert variant="white" color="gray" radius="xs" title="" icon={icon}>
      Hvis under 6 personer, kan klasselokaler ikke bookes
    </Alert>
  );
}