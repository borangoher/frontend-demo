import { React, useContext } from "react";
import LoginContext from "../LoginContext";
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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./paymentForm.validation";

const PaymentForm = () => {
  const { isLoggedIn } = useContext(LoginContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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
                  {" "}
                  <TextField
                    {...register("cardholderName")}
                    required
                    type="text"
                    label="Cardholder Name"
                  />
                  {errors.cardholderName && (
                    <Alert severity="error">
                      {errors.cardholderName.message}
                    </Alert>
                  )}{" "}
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <TextField
                    {...register("cardNumber")}
                    required
                    type="number"
                    label="Card Number"
                  />
                  {errors.cardNumber && (
                    <Alert severity="error">{errors.cardNumber.message}</Alert>
                  )}{" "}
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <TextField
                    {...register("expiryDate")}
                    required
                    type="date"
                    label="Expiry Date  "
                  />
                  {errors.expiryDate && (
                    <Alert severity="error">{errors.expiryDate.message}</Alert>
                  )}{" "}
                </Grid>
                <Grid item xs={6} justifyContent="center">
                  {" "}
                  <TextField
                    {...register("securityNumber")}
                    required
                    type="number"
                    label="Security Number"
                  />
                  {errors.securityNumber && (
                    <Alert severity="error">
                      {errors.securityNumber.message}
                    </Alert>
                  )}{" "}
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <TextField
                    {...register("accountNumber")}
                    required
                    type="number"
                    label="Account Number"
                  />
                  {errors.accountNumber && (
                    <Alert severity="error">
                      {errors.accountNumber.message}
                    </Alert>
                  )}{" "}
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <TextField
                    {...register("amount")}
                    required
                    type="number"
                    label="Amount"
                  />
                  {errors.amount && (
                    <Alert severity="error">{errors.amount.message}</Alert>
                  )}{" "}
                </Grid>
              </Grid>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox {...register("displaySenderName")} />}
                  label="Do not display sender name"
                />
                <FormControlLabel
                  control={<Checkbox {...register("useService")} />}
                  label="Use SERVICE for the transfer"
                />
                {errors.useService && (
                  <Alert severity="error">{errors.useService.message}</Alert>
                )}
              </FormGroup>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Execute transfer
                </FormLabel>
                <RadioGroup name="radio-buttons-group" row defaultValue={"now"}>
                  <FormControlLabel
                    value="now"
                    control={<Radio {...register("transferTime")} />}
                    label="Now (extra fees may be incurred)"
                  />
                  <FormControlLabel
                    value="tomorrow"
                    control={<Radio {...register("transferTime")} />}
                    label="Tomorrow Morning"
                  />
                </RadioGroup>
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
                {" "}
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
