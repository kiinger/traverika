import { Form, useFetcher, useNavigation } from "react-router-dom";
import React from "react";
import { toast } from "react-toastify";
import "./Contact.css";
function capitalise(words) {
  return words
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}
export async function action({ request }) {
  const formData = await request.formData();
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const isMail = /@(hotmail|gmail).com/gim.test(email);
  if (!isMail) return toast.error(`we only accept "hotmail"&"gmail"`);
  const res = await fetch("/api/questions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstname, lastname, email }),
  });
  if (!res.ok) return toast.error(`${res.status}-${res.statusText}`);
  const data = await res.json();
  return toast.success(
    `Good New! ${capitalise(firstname)} ${capitalise(
      lastname
    )},We have received your feedback`
  );
}
export default function Contact() {
  const navigation = useNavigation();
  const formRef = React.useRef(null);
  const isSubmitting = navigation.state === "submitting";
  React.useEffect(() => {
    if (isSubmitting) {
      formRef.current.reset();
    }
  }, [isSubmitting]);
  return (
    <section className="section-contact">
      <h2>Write down your concern</h2>
      <p>We will get back to you as soon as possible</p>

      <Form ref={formRef} className="contact-form" method="post">
        <label>
          FirstName:
          <input
            required
            aria-required="true"
            name="firstname"
            type="text"
            autoComplete="firstname"
            autoFocus
          />
        </label>
        <label>
          LastName:
          <input
            required
            aria-required="true"
            name="lastname"
            type="text"
            autoComplete="lastname"
          />
        </label>
        <label>
          Email:
          <input
            required
            aria-required="true"
            name="email"
            type="email"
            autoComplete="email"
          />
        </label>
        <fieldset>
          <legend>Gender</legend>
          <label>
            <input defaultChecked type="radio" value="male" name="gender" />
            Male
          </label>
          <label>
            <input type="radio" value="female" id="gender" name="gender" />
            Female
          </label>
        </fieldset>
        <label>
          <span> Question:</span>
          <textarea required aria-required="true" name="comment" />
        </label>
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting" : "Submit"}
        />
      </Form>
    </section>
  );
}
