import { FormControl, FormLabel, TextField, Button, Box } from '@mui/material';

export default function LoginForm({updateState, handleSignin}) {
    return (
      <Box display={'flex'} flexDirection="column">
        <FormControl>
          <FormLabel>Username</FormLabel>
          <TextField size='small'
            onChange={(event) => updateState({ username: event.target.value })}
          />
        </FormControl>
        <FormControl>
          <FormLabel>password</FormLabel>
          <TextField
          size='small'
            type={"password"}
            onChange={(event) => updateState({ password: event.target.value })}
          />
        </FormControl>
        <Button sx={{mt: 2}} variant='contained' onClick={handleSignin}>Sign in</Button>
      </Box>
    );
}