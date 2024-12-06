import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';


export default BookingAlert
function BookingAlert() {
  const icon = <IconInfoCircle />;
  return (
    <Alert variant="outline" color="gray" icon={icon} style={{ marginTop: "24px", width: "100%", alignItems: "center" }}>
      Hvis under 6 personer, kan klasselokaler ikke bookes
    </Alert>
  );
}