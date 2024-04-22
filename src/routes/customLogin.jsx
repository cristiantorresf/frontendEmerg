import React from 'react';
import { Textarea, Input, Button, Sheet, Typography } from '@mui/joy';
import {enqueueSnackbar} from "notistack";

function LoginForm() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const [] = event.target.elements;
        console.log("🚀 event >>", event)
        const payload = {
            email: email, password: password,
        }
        if (!email || !password) {
            enqueueSnackbar('Te falto agregar usuario o contraseña', {
                autoHideDuration: 3000,
                preventDuplicates: true,
                variant: 'error'
            })
        }
        const res = await fetch('http://localhost:4400/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        if (res.status !== 200){
            enqueueSnackbar('Credenciales invalidos', {
                autoHideDuration: 1000,
                preventDuplicates: true,
                variant: 'info'
            })
            return
        }
        if (res){
            console.log("🚀 res >>", res)
            enqueueSnackbar('Usuario se ha logueado con exito', {
                autoHideDuration: 800,
                preventDuplicates: true,
                variant: 'success'
            })
            const userData = await res.json()
            console.log("🚀 allasd >>", userData )
            localStorage.setItem('user', JSON.stringify(userData))
            window.location.href = '/dashboard';

        }
        // Handle your login logic here
        console.log('Login submitted');
    };

    return (
        <Sheet
            sx={{
                maxWidth: 400,
                mx: 'auto', // centers horizontally
                my: 4,     // margin top & bottom
                p: 3,      // padding
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'sm',
                boxShadow: 'md',
            }}
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
        >
            <Typography level="h4" component="h1" sx={{ textAlign: 'center' }}>
                Inicia Sesión
            </Typography>
            <Textarea
                placeholder="Usuario o Email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
                required
            />
            <Input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e?.target?.value)}
                name="password"
                required
            />
            <Button type="submit" variant="solid" color="primary" sx={{ mt: 1 }}>
                Iniciar Sesión
            </Button>
        </Sheet>
    );
}

export const Component = LoginForm;
