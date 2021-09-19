import React from 'react';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { LoginFormInputs } from 'types/user';
import { login } from 'services/auth';

export const Login: React.FC = () => {
  const paperStyle = {
    padding: '20px',
    height: '73vh',
    width: 300,
    margin: '0 auto',
  };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnStyle = { margin: '8px 0' };

  const { handleSubmit, control } = useForm<LoginFormInputs>();
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    login(data);
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid style={{ textAlign: 'center' }}>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="userName"
            control={control}
            rules={{
              required: 'Userame is required',
              minLength: {
                value: 4,
                message: 'Field should cointain at least 4 letters.',
              },
            }}
            render={({
              field: { onBlur, onChange },
              fieldState: { error },
            }) => (
              <TextField
                onChange={onChange}
                onBlur={onBlur}
                type="text"
                fullWidth
                label="Username"
                placeholder="Enter your username"
                name="userName"
                error={!!error}
                helperText={error ? error.message : ''}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'Password is requred',
              minLength: {
                value: 7,
                message: 'Field should cointain at least 7letters.',
              },
            }}
            render={({
              field: { onBlur, onChange },
              fieldState: { error },
            }) => (
              <TextField
                onChange={onChange}
                onBlur={onBlur}
                type="password"
                fullWidth
                label="Password"
                placeholder="Enter your password"
                name="password"
                error={!!error}
                helperText={error ? error.message : ''}
              />
            )}
          />
          <FormControlLabel
            name="remeber"
            control={<Checkbox color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnStyle}
            fullWidth
          >
            Sign in
          </Button>
        </form>
        <Typography>
          <Button>Forgot password ?</Button>
        </Typography>
        <Typography>
          Do you have an account ?<Link to="/sign-up">Sign up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
