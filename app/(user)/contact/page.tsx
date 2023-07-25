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
import FormInputWrapper from '../../../components/forms/FormInputWrapper';
import Input from '../../../components/forms/Input';
import Textarea from '../../../components/forms/TextArea';

export default function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section>
      <div className="wrapper text-center">
        <h1>Let&apos;s work together!</h1>
        <p className="max-w-md mx-auto py-8">
          Have an illustration project? Get in touch by completing the form
          below
        </p>
        <div className="relative max-w-md mx-auto">
          <h2 className="font-Josefin text-2xl pt-16 pb-5">
            Send Me a Message
          </h2>
          <form className="pb-16">
            <FormInputWrapper>
              <label className="inline-block h-6 w-6 mt-2">
                <p className="visuallyHidden">Your Name</p>
                <UserIcon />
              </label>
              <Input
                type="text"
                required
                placeholder="Enter your name"
                name="name"
                value={name}
                error={false}
                id="name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label className="inline-block h-6 w-6 mt-2">
                <p className="visuallyHidden">Email Address</p>
                <AtSymbolIcon />
              </label>
              <Input
                type="email"
                required
                placeholder="Enter your email"
                name="email"
                value={email}
                error={false}
                id="email"
                autoFocus={false}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label className="inline-block h-6 w-6 mt-2">
                <p className="visuallyHidden">Your Message</p>
                <ChatBubbleBottomCenterTextIcon />
              </label>
              <Textarea
                required
                placeholder="Enter your message"
                name="message"
                value={message}
                error={false}
                id="message"
                autoFocus={false}
                rows={5}
                cols={1}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormInputWrapper>
            <div className="pt-4">
              <Button>Send Message</Button>
            </div>
          </form>
          <div className="absolute left-2/4 -translate-x-2/4 z-[-1] top-0 lg:w-[600px] lg:h-[600px]  sm:w-[600px] sm:h-[600px] w-[350px] h-[350px]">
            <BackgroundCircle />
          </div>
        </div>
      </div>
      <BackgroundLines numberOfLines={11} />
    </section>
  );
}
