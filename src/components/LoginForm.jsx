import { PasswordInput, Input, Button, Checkbox, } from '@mantine/core';
import { useRouter } from '@tanstack/react-router';

export default LoginForm

function LoginForm() {
    const router = useRouter();

  return (
    <div style={{width: "100%", margin: "24px", alignContent: "center"}}>
        <h1>EFIF</h1>
        <h3>Log på</h3>
      
      <div>
        <Input.Wrapper style={{marginBottom: "24px" }} required label="Brugernavn">
        <Input placeholder="Indtast brugernavn" />
        </Input.Wrapper>
        <PasswordInput style={{marginTop: "34px" }} required
        label="Password"
        placeholder="password"
    />
      </div>
      <Checkbox style={{ marginTop: "24px" }}
      defaultChecked
      label="Husk mig"
    />
    <Button style={{ marginTop: "24px" }} variant="filled" onClick={() => router.navigate({ to: "/frontpage" })}>Log ind</Button>
    </div>
  );
}