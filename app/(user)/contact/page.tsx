/* eslint-disable no-control-regex */
'use client';

import {
  AtSymbolIcon,
  ChatBubbleBottomCenterTextIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import BackgroundCircle from '../../../components/BackgroundCircle';
import BackgroundLines from '../../../components/BackgroundLines';
import Button from '../../../components/Button';
import ContactSubmit from '../../../components/contact/ContactSubmit';
import ErrorText from '../../../components/forms/ErrorText';
import FormControl from '../../../components/forms/FormControl';
import Input from '../../../components/forms/Input';
import Label from '../../../components/forms/Label';
import Textarea from '../../../components/forms/TextArea';

const initValues = { name: '', email: '', message: '' };
const initState = { values: initValues };

export default function Page() {
  const [formValues, setFormValues] = useState(initState);
  const [formErrors, setFormErrors] = useState({
    name: { message: '', errorState: false },
    email: { message: '', errorState: false },
    message: { message: '', errorState: false },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [contactSubmit, setContactSubmit] = useState(
    'standby' // standby - unsent / success - message sent successfully / error - message not sent
  );

  const { values } = formValues;

  const handleChange = ({
    target,
  }:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>) =>
    setFormValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const values = formValues.values;
    if (!values.name || !values.email || !values.message) {
      setFormErrors(validate(formValues));
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: JSON.stringify(values),
      });
      const serverResponse = await response.text();
      if (serverResponse === 'success') {
        setIsLoading(false);
        setContactSubmit('success');
      } else if (serverResponse === 'error') {
        setIsLoading(false);
        setContactSubmit('error');
      }
    } catch (error) {
      setIsLoading(false);
      setContactSubmit('error');
    }
  };

  // Final check for any errors when submitting form
  const validate = ({ values }: any) => {
    const errors = {
      name: { message: '', errorState: false },
      email: { message: '', errorState: false },
      message: { message: '', errorState: false },
    };

    if (!values.name) {
      errors.name.message = 'Name is required';
      errors.name.errorState = true;
    }
    if (!values.email) {
      errors.email.message = 'Email is required';
      errors.email.errorState = true;
    }
    if (!values.message) {
      errors.message.message = 'Message is required';
      errors.message.errorState = true;
    }

    return errors;
  };

  // If the error state is shown, clicking try again button will show the contact form again
  const handleTryAgain = () => {
    setContactSubmit('standby');
  };

  return (
    <section>
      <div className="wrapper text-center">
        <h1>Let&apos;s work together!</h1>
        <p className="max-w-md mx-auto py-8">
          Have an illustration project? Get in touch by completing the form
          below
        </p>
        <div className="relative max-w-md mx-auto">
          {contactSubmit === 'standby' && (
            <>
              <h2 className="font-Josefin text-2xl pt-16 pb-5">
                Send Me a Message
              </h2>
              <form className="pb-16" onSubmit={handleSubmit}>
                <FormControl error={formErrors.name.errorState}>
                  <Label>
                    <p className="visuallyHidden">Your Name</p>
                    <UserIcon />
                  </Label>
                  <Input
                    type="text"
                    required
                    placeholder="Enter your name*"
                    name="name"
                    value={values.name}
                    pattern="^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$"
                    autoFocus
                    onChange={handleChange}
                  />
                </FormControl>
                {formErrors.name.errorState && (
                  <div className="mb-4 -mt-3">
                    <ErrorText message={formErrors.name.message} />
                  </div>
                )}
                <FormControl error={formErrors.email.errorState}>
                  <Label>
                    <p className="visuallyHidden">Email Address</p>
                    <AtSymbolIcon />
                  </Label>
                  <Input
                    type="email"
                    required
                    placeholder="Enter your email*"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </FormControl>
                {formErrors.email.errorState && (
                  <div className="mb-4 -mt-3">
                    <ErrorText message={formErrors.email.message} />
                  </div>
                )}
                <FormControl error={formErrors.message.errorState}>
                  <Label>
                    <p className="visuallyHidden">Your Message</p>
                    <ChatBubbleBottomCenterTextIcon />
                  </Label>
                  <Textarea
                    required
                    placeholder="Enter your message*"
                    name="message"
                    value={values.message}
                    rows={5}
                    cols={1}
                    onChange={handleChange}
                  />
                </FormControl>
                {formErrors.message.errorState && (
                  <div className="mb-4 -mt-3">
                    <ErrorText message={formErrors.message.message} />
                  </div>
                )}
                <div className="pt-4">
                  <Button
                    type="submit"
                    loading={isLoading}
                    disabled={
                      !values.name ||
                      !values.email ||
                      !values.message ||
                      isLoading
                    }
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </>
          )}
          {contactSubmit === 'success' && (
            <>
              <h2 className="font-Josefin text-2xl pt-16 pb-5">
                Thank You for the Message
              </h2>
              <ContactSubmit state={'success'} />
            </>
          )}
          {contactSubmit === 'error' && (
            <>
              <h2 className="font-Josefin text-2xl pt-16 pb-5">
                Whoops! There Was an Error
              </h2>
              <ContactSubmit state={'error'} />
              <Button type="button" onClick={handleTryAgain}>
                Try Again
              </Button>
            </>
          )}
          <div className="absolute left-2/4 -translate-x-2/4 z-[-1] top-0 lg:w-[600px] lg:h-[600px]  sm:w-[600px] sm:h-[600px] w-[350px] h-[350px]">
            <BackgroundCircle />
          </div>
        </div>
      </div>
      <BackgroundLines numberOfLines={11} />
    </section>
  );
}
