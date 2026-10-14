"use client";

import type { FormEvent } from "react";
import { Button, Input, Label, TextArea, TextField } from "@heroui/react";
import { siteConfig } from "@/lib/site";

/**
 * Contact form without a backend: native HTML validation, then the message
 * is handed to the visitor's mail client as a prefilled `mailto:` draft.
 */
export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Contact — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField isRequired fullWidth>
          <Label>Name</Label>
          <Input name="name" autoComplete="name" placeholder="Your name" />
        </TextField>
        <TextField isRequired fullWidth>
          <Label>Email</Label>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
        </TextField>
      </div>
      <TextField isRequired fullWidth>
        <Label>Message</Label>
        <TextArea
          name="message"
          rows={5}
          placeholder="What can we help you with?"
        />
      </TextField>
      <Button type="submit" variant="primary" className="self-start">
        Send message
      </Button>
    </form>
  );
}
