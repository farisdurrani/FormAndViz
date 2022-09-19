import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { ResponseBox } from "../components/index.js";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { EMAIL_REGEX } from "../constants";
import { addToResponses, getCurrentTimestamp } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Fill = () => {
  const auth = getAuth();
  const [submitted, setSubmitted] = useState(false);
  const [abort, setAbort] = useState(true);
  const [user, setUser] = useState();
  const questions = [
    {
      question: "Name*",
      description: "What you would like to be called",
      type: "shortAns",
      responseState: useState(),
    },
    {
      question: "Email*",
      type: "shortAns",
      responseState: useState(),
      validateFunction: (e) => e.match(EMAIL_REGEX),
      validatedState: useState(true),
      validateMsg: "Invalid email format",
    },
    {
      question: "Age*",
      description: "You must be a legal adult",
      type: "number",
      validateFunction: (e) => Number(e) >= 18 && Number(e) <= 100,
      validatedState: useState(true),
      validateMsg: "Must be between 18 and 100 years old",
      responseState: useState(),
    },
    {
      question: "Can you attend?*",
      description: "Enter",
      type: "radio",
      entries: ["Yes", "No", "Other:"],
      responseState: useState(),
    },
    {
      question: "What are the names of people attending?*",
      type: "longAns",
      responseState: useState(),
    },
    {
      question: "How did you hear about this event?*",
      type: "checkbox",
      entries: ["Website", "Friend", "Newsletter", "Advertisement"],
      responseState: useState(),
    },
    {
      question: "Do you have any dietary restrictions?*",
      type: "select",
      entries: ["Vegan", "Vegetarian", "Halal", "Gluten-free", "None"],
      responseState: useState(),
    },
    {
      question: "What is your level of excitedness for the event? (0-100)*",
      type: "range",
      responseState: useState(0),
    },
  ];

  const onSubmit = () => {
    for (const e of questions) {
      if (e.validatedState?.[0] === false) {
        toast.error("Please fix inputs");
        return;
      }

      if (e.responseState[0] == undefined) {
        toast.error("All fields required");
        return;
      }
    }

    const finalDataToPush = {};

    questions.forEach((e, i) => {
      finalDataToPush[`question${i}`] = e.question;
      finalDataToPush[`description${i}`] = e.description || null;
      finalDataToPush[`type${i}`] = e.type;
      finalDataToPush[`response${i}`] = e.responseState[0];
      finalDataToPush[`entries${i}`] = e.entries || null;
    });

    finalDataToPush.createdAt = getCurrentTimestamp();
    finalDataToPush.user_email = user.email;

    addToResponses(finalDataToPush);

    toast.success("Submitted!");
    setSubmitted(true);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAbort(false);
        setUser(user);
      } else {
        window.location.replace("/login");
      }
    });
  });

  if (abort) {
    return <>Loading...</>;
  }

  if (submitted) {
    return (
      <div id="fill">
        <p className="text-center mt-5">
          You have successfully submitted the form!
        </p>
      </div>
    );
  }

  return (
    <Form id="fill">
      <h1 className="mt-5">Event RSVP</h1>
      {questions.map((e, i) => {
        return (
          <ResponseBox
            question={e.question}
            description={e.description}
            type={e.type}
            entries={e.entries}
            validateFunction={e.validateFunction}
            validateMsg={e.validateMsg}
            validated={e.validatedState?.[0]}
            setValidated={e.validatedState?.[1]}
            response={e.responseState[0]}
            setResponse={e.responseState[1]}
            key={i}
          />
        );
      })}
      <Button className="mt-3" variant="primary" onClick={onSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default Fill;
