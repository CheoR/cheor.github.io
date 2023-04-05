import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Box } from "@mui/material";

import { fsURL, fsEndpoint } from "../../data/data";
import { SEO } from "../../components/SEO/SEO";
import * as styles from "./contact.module.css";

const ContactPage = () => {
  const [state, handleSubmit] = useForm(fsEndpoint);
  if (state.succeeded) {
    return (
      <Box>
        <p>Thanks you for your request!</p>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <form
        // className={styles.main__form}
        id="fs-frm"
        name="simple-contact-form"
        acceptCharset="utf-8"
        action={`${fsURL}${fsEndpoint}`}
        method="POST"
        onSubmit={handleSubmit}
      >
        <fieldset className={styles.main__form__fieldset}>
          <label className={styles.main__form_label} htmlFor="inputName">
            name
          </label>
          <input
            className={styles.main__form_input}
            name="inputName"
            id="inputName"
            type="text"
            placeholder="First and Last"
          />
          <ValidationError
            prefix="Name"
            field="inputName"
            errors={state.errors}
          />

          <label className={styles.main__form_label} htmlFor="inputEmail">
            email
          </label>
          <input
            className={styles.main__form_input}
            name="inputEmail"
            id="inputEmail"
            type="email"
            placeholder="name@domain.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label className={styles.main__form_label} htmlFor="inputMsg">
            message
          </label>
          <textarea
            className={styles.main__form_textarea}
            name="inputMsg"
            id="inputMsg"
            required=""
            placeholder="Hey!"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="inputMsg"
            errors={state.errors}
          />

          <input
            id="email-subject"
            type="text"
            name="_gotcha"
            className={styles.moocow}
          />
        </fieldset>

        <button
          className={styles.main__form_submit}
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </Box>
  );
};

export default ContactPage;

// eslint-disable-next-line
export const Head = () => <SEO title="Contact" description="Contact Page" />;
