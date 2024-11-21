import { Button, Checkbox, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from '@tanstack/react-router';

export default LoginForm2

function LoginForm2() {
    const router = useRouter();
    const form = useForm({
      mode: 'uncontrolled',
      initialValues: {
        email: '',
        termsOfService: false,
      },
  
      validate: {
        email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      },
    });
  
    return (
        <div style={{width: "100%", margin: "24px", alignContent: "center"}}>
            <h1>EFIF</h1>
            <h3>Log på</h3>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                withAsterisk
                required
                label="Brugernavn"
                placeholder="Indtast brugernavn"
                key={form.key('email')}
                {...form.getInputProps('email')}
                />

                <PasswordInput 
                style={{marginTop: "24px" }} 
                required
                withAsterisk
                label="Password"
                placeholder="Indtast kodeord"
                key={form.key('password')}
                {...form.getInputProps('password')}
                />


        
                <Checkbox
                defaultChecked
                style={{ marginTop: "24px" }}
                mt="md"
                label="Husk mig"
                />
        
                <Group justify="flex-end" mt="md">
                <Button
                style={{ marginTop: "24px" }}
                type="submit"
                variant='filled'
                onClick={() => router.navigate({ to: "/frontpage" })}
                >Log ind</Button>
                </Group>
            </form>
        </div>
    );
  }