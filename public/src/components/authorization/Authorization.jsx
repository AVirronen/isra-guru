import {Alert, Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {eventList} from "../../utils/constants";
import {isLoggedIn, startSession} from "../../firebase/auth-service";
import {signInUser} from "../../firebase/firebase-config";

export default function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (isLoggedIn()) {
            navigate(`/${eventList}`);
        }
    }, [navigate]);

    const onSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            setError("Please enter your username and password.");
            return;
        }
        setError("");
        try {
            let loginResponse = await signInUser(email, password);
            startSession(loginResponse.user);
            navigate(`/${eventList}`);
        } catch (error) {
            console.error(error.message);
            setError(error.message);
        }
    }

    return (
        <Container maxWidth="xs" sx={{mt: 2}}>
            <Typography variant="h5" component="h1" gutterBottom textAlign="center">
                Login
            </Typography>
            {error && <Alert severity="error" sx={{my: 2}}>{error}</Alert>}
            <Box component="form" onSubmit={onSubmit}>
                <TextField
                    label="Email"
                    variant="outlined"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{mt: 1}}
                    fullWidth
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{mt: 3}}
                    fullWidth
                />
                <Button variant="contained" type="submit" sx={{mt: 3}} fullWidth>Login</Button>
                <Box sx={{mt: 2}}>
                    Don't have an account yet? <Link href="/src/components/authorization/Register">Register</Link>
                </Box>
            </Box>
        </Container>
    )
}