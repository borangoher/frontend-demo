import { React } from "react";
import { useLogin } from "../LoginContext";
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  FormControl,
  FormLabel,
  Radio,
  Grid,
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./paymentForm.validation";
import { paymentFormDefaultValues } from "./paymentForm.constant";

const PaymentForm = () => {
  const {
    state: { isLoggedIn },
  } = useLogin();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: paymentFormDefaultValues,
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Container maxWidth="md" sx={{ justifyContent: "center" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="flex"
          flexDirection="column"
          gap={4}
          justifyContent="center"
          alignItems="center"
          minHeight="90vh"
        >
          {isLoggedIn ? (
            <>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Controller
                    control={control}
                    name="cardholderName"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <TextField
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        required
                        type="text"
                        label="Cardholder Name"
                      />
                    )}
                  />
                  {errors.cardholderName && (
                    <Alert severity="error">
                      {errors.cardholderName.message}
                    </Alert>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    control={control}
                    name="cardNumber"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <TextField
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        required
                        type="number"
                        label="Card Number"
                      />
                    )}
                  />
                  {errors.cardNumber && (
                    <Alert severity="error">{errors.cardNumber.message}</Alert>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    control={control}
                    name="expiryDate"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <TextField
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        required
                        type="date"
                        label="Expiry Date"
                      />
                    )}
                  />
                  {errors.expiryDate && (
                    <Alert severity="error">{errors.expiryDate.message}</Alert>
                  )}
                </Grid>
                <Grid item xs={6} justifyContent="center">
                  <Controller
                    control={control}
                    name="securityNumber"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <TextField
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        required
                        type="number"
                        label="Security Number"
                      />
                    )}
                  />
                  {errors.securityNumber && (
                    <Alert severity="error">
                      {errors.securityNumber.message}
                    </Alert>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    control={control}
                    name="accountNumber"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <TextField
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        required
                        type="number"
                        label="Account Number"
                      />
                    )}
                  />
                  {errors.accountNumber && (
                    <Alert severity="error">
                      {errors.accountNumber.message}
                    </Alert>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    control={control}
                    name="amount"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <TextField
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        required
                        type="number"
                        label="Amount"
                      />
                    )}
                  />
                  {errors.amount && (
                    <Alert severity="error">{errors.amount.message}</Alert>
                  )}
                </Grid>
              </Grid>
              <FormGroup>
                <Controller
                  control={control}
                  name="displaySenderName"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={onChange}
                          onBlur={onBlur}
                          selected={value}
                        />
                      }
                      label="Do not display sender name"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="useService"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={onChange}
                          onBlur={onBlur}
                          selected={value}
                        />
                      }
                      label="Use SERVICE for transfer"
                    />
                  )}
                />
                {errors.useService && (
                  <Alert severity="error">{errors.useService.message}</Alert>
                )}
              </FormGroup>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Execute transfer
                </FormLabel>
                <Controller
                  render={({ field }) => (
                    <RadioGroup row {...field}>
                      <FormControlLabel
                        value="now"
                        control={<Radio />}
                        label="Now (extra charges may be incurred)"
                      />
                      <FormControlLabel
                        value="tomorrow"
                        control={<Radio />}
                        label="Tomorrow morning"
                      />
                    </RadioGroup>
                  )}
                  name="transferTime"
                  control={control}
                />
              </FormControl>
              <Button type="submit" variant="contained">
                Make Payment
              </Button>
            </>
          ) : (
            <>
              <Typography align="center" variant="h5">
                You must be logged in to make a payment. Please log in to your
                account first.
              </Typography>
              <Button
                size="large"
                variant="contained"
                component={Link}
                to="/login"
              >
                Log In
              </Button>
            </>
          )}
        </Box>
      </form>
    </Container>
  );
};

export default PaymentForm;
