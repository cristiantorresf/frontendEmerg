import React from 'react';
import { Textarea, Input, Button, Sheet, Typography } from '@mui/joy';
import {enqueueSnackbar} from "notistack";

function LoginForm() {
    const [email, setEmail] = React.useState('');
    const [username, serUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password2, setPassword2] = React.useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const [] = event.target.elements;
        if (!email.includes('@')) {
            enqueueSnackbar('El email no es válido', {
                autoHideDuration: 3000,
                preventDuplicates: true,
                variant: 'error'
            })
            setEmail('')
            return
        }
        if (password !== password2) {
            enqueueSnackbar('Las contraseñas no coinciden', {
                autoHideDuration: 3000,
                preventDuplicates: true,
                variant: 'error'
            })
            setPassword('')
            setPassword2('')
            return
        }
        if (password.length < 6) {
            enqueueSnackbar('La contraseña debe tener al menos 6 caracteres', {
                autoHideDuration: 3000,
                preventDuplicates: true,
                variant: 'error'
            })
            setPassword('')
            setPassword2('')
            return
        }


        const payload = {
            email: email, password: password,type:'User',username
        }
        if (!email || !password) {
            enqueueSnackbar('Te falto agregar usuario o contraseña', {
                autoHideDuration: 3000,
                preventDuplicates: true,
                variant: 'error'
            })
        }
        const res = await fetch('http://localhost:4400/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        if (res.status !== 201){
            enqueueSnackbar('Usuario ya se registro', {
                autoHideDuration: 1000,
                preventDuplicates: true,
                variant: 'info'
            })
            return
        }
        if (res){
            console.log("🚀 res >>", res)
            enqueueSnackbar('Usuario se ha registrado con exito', {
                autoHideDuration: 2000,
                preventDuplicates: true,
                variant: 'success',
                onClose: async() => {
                    const userData = await res.json()
                    console.log("🚀 allasd >>", userData )
                    localStorage.setItem('user', JSON.stringify(userData))
                    window.location.href = '/customLogin';
                }
            })
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
                Registra tu Cuenta
            </Typography>
            <Textarea
                placeholder="Username"
                type="text"
                name="username"
                value={username}
                onChange={(e) => serUsername(e?.target?.value)}
                required
            />
            <Textarea
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
                required
            />
            <Input
                placeholder="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e?.target?.value)}
                name="password"
                required
            />
            <Input
                placeholder="Confirma tu Contraseña"
                type="password"
                value={password2}
                onChange={(e) => setPassword2(e?.target?.value)}
                name="password"
                required
            />
            <Button type="submit" variant="solid" color="primary" sx={{ mt: 1 }}>
                Crea tu Cuenta
            </Button>
        </Sheet>
    );
}

export const Component = LoginForm;
