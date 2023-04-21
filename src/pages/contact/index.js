import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { colors } from "@mui/material";

// TODO: https://help.formspree.io/hc/en-us/articles/6389157477907-Using-a-custom-reCAPTCHA-with-Formspree-React
import { fsURL, fsEndpoint } from "../../data/data";
import { SEO } from "../../components/SEO/SEO";

const ContactPage = () => {
  const [state, handleSubmit] = useForm(fsEndpoint);
  if (state.succeeded) {
    return (
      <Box>
        <Typography textAlign="center" variant="h3">
          Thank you for your request!
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      acceptCharset="utf-8"
      action={`${fsURL}${fsEndpoint}`}
      component="form"
      method="POST"
      id="fs-frm"
      name="simple-contact-form"
      onSubmit={handleSubmit}
      my="25%"
      sx={{
        background: colors.grey[400],
        borderRadius: 4,
        maxWidth: { md: "40%" },
        marginX: {
          md: "25%",
        },
      }}
    >
      <TextField
        fullWidth
        hiddenLabel
        id="inputName"
        placeholder="Name"
        name="inputName"
        type="text"
        variant="filled"
      />
      <ValidationError prefix="Name" field="inputName" errors={state.errors} />
      <TextField
        fullWidth
        hiddenLabel
        id="inputEmail"
        placeholder="Name@Domain.com"
        name="inputEmail"
        type="email"
        variant="filled"
      />
      <ValidationError
        prefix="Email"
        field="inputEmail"
        errors={state.errors}
      />

      <TextField
        fullWidth
        id="standard-multiline-static"
        hiddenLabel
        multiline
        rows={4}
        placeholder="Message"
        // variant="filled" // breaks look for some reason
      />
      <ValidationError
        prefix="Message"
        field="inputMsg"
        errors={state.errors}
      />
      <TextField
        fullWidth
        hiddenLabel
        id="oinkoink"
        name="moocow"
        tabindex="-1"
        type="text"
        sx={{ position: "absolute", left: "-99999px" }}
      />
      <Box display="flex" justifyContent="center">
        <Button
          disabled={state.submitting}
          size="large"
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactPage;

// eslint-disable-next-line
export const Head = () => <SEO title="Contact" description="Contact Page" />;
