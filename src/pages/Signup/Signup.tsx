import React from 'react';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Checkbox from '@material-ui/core/Checkbox';
import { SignUpFormInputs } from 'types/user';
import { register } from 'services/auth';

export const Signup: React.FC = () => {
  const paperStyle = { padding: 20, width: 300, margin: '0 auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = {
    backgroundColor: '#1bbd7e',
    align: 'center',
  };

  const { handleSubmit, control, reset, watch } = useForm<SignUpFormInputs>();
  const watchPassword = watch('firstPassword', '');
  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    register(data);
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid style={{ textAlign: 'center' }}>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="Name"
            control={control}
            rules={{
              required: 'Username is required',
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
                label="name"
                placeholder="Enter your username"
                name="Name"
                error={!!error}
                helperText={error ? error.message : ''}
              />
            )}
          />
          <Controller
            name="Email"
            control={control}
            rules={{
              required: 'Nine number are required',
              minLength: {
                value: 8,
                message: 'Field should cointains @ and 7 letters',
              },
            }}
            render={({
              field: { onBlur, onChange },
              fieldState: { error },
            }) => (
              <TextField
                onChange={onChange}
                onBlur={onBlur}
                type="email"
                fullWidth
                label="Email"
                placeholder="Enter your email"
                name="email"
                error={!!error}
                helperText={error ? error.message : ''}
              />
            )}
          />
          <Controller
            name="PhoneNumber"
            control={control}
            rules={{
              required: 'Nine number are required',
              minLength: {
                value: 9,
                message: 'Field should cointains 9 numbers',
              },
            }}
            render={({
              field: { onBlur, onChange },
              fieldState: { error },
            }) => (
              <TextField
                onChange={onChange}
                onBlur={onBlur}
                type="number"
                fullWidth
                label="Phone Number"
                placeholder="Enter your phone number"
                name="phonenumber"
                error={!!error}
                helperText={error ? error.message : ''}
              />
            )}
          />
          <Controller
            name="firstPassword"
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
                name="firstPassword"
                error={!!error}
                helperText={error ? error.message : ''}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: 'Password is requred',
              minLength: {
                value: 7,
                message: 'Field should cointain at least 7letters.',
              },
              validate: (value) =>
                value === watchPassword || 'The passwords do not match',
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
                label="Confirm password"
                placeholder="Enter your password"
                name="confirmPassword"
                error={!!error}
                helperText={error ? error.message : ''}
              />
            )}
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
          <Button
            onClick={() => reset()}
            type="button"
            variant="contained"
            color="primary"
          >
            Reset
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
