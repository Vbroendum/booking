import { Button, Checkbox, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from '@tanstack/react-router';
import { getSupabaseClient } from '../supabase/getSupabaseClient';

export default function LoginForm2() {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      remember: false, // If you want to use "Husk mig" functionality
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'ugyldig email'),
      password: (value) => (value.length > 0 ? null : 'Adgangskode kan ikke være tom'),
    },
  });

  const handleLogin = async (values) => {
    const supabase = getSupabaseClient();
    const { email, password } = values;

    try {
      const { error } = await supabase.auth.signInWithPassword({ 
        email, 
        password,
      options: { remember: values.remember } });
      if (error) throw error;
      
      // Redirect to the frontpage on successful login
      router.navigate({ to: '/frontpage' });
    } catch (error) {
      console.error('Login error:', error.message);
      alert('Login failed: ' + error.message);
    }
  };
  
    return (
        <div style={{width: "100%", margin: "24px", alignContent: "center"}}>
            <h1>EFIF</h1>
            <h3>Log på</h3>
            <form onSubmit={form.onSubmit(handleLogin)}>
                <TextInput
                withAsterisk
                required
                label="Brugernavn"
                placeholder="Indtast brugernavn"
                {...form.getInputProps('email')}
                />

                <PasswordInput 
                style={{marginTop: "24px" }} 
                required
                withAsterisk
                label="Password"
                placeholder="Indtast kodeord"
                {...form.getInputProps('password')}
                />


        
                <Checkbox
                
                style={{ marginTop: "24px" }}
                mt="md"
                label="Husk mig"
                {...form.getInputProps('remember', { type: 'checkbox' })}
                />
        
                <Group justify="flex-end" mt="md">
                <Button
                style={{ marginTop: "24px" }}
                type="submit"
                variant='filled'
                >Log ind</Button>
                </Group>
            </form>
        </div>
    );
  }