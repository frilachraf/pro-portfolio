"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,   // SERVICE ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,  // TEMPLATE ID
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!    // PUBLIC KEY
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("❌ Failed to send message. " + error.text);
        }
      );
  };

  return (
    <div className="space-y-4">
      <Card className="bg-muted shadow-none">
        <CardContent className="p-6 md:p-10">
          <form ref={form} onSubmit={sendEmail} >
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
              <div className="col-span-2 sm:col-span-1">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  placeholder="First name"
                  id="firstName"
                  name="firstName"
                  className="mt-1.5 bg-background h-11 shadow-none"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  placeholder="Last name"

                  name="lastName"
                  id="lastName"
                  className="mt-1.5 bg-background h-11 shadow-none"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="Email"

                  name="email"
                  id="email"
                  className="mt-1.5 bg-background h-11 shadow-none"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea

                  name="message"
                  id="message"
                  placeholder="Message"
                  className="mt-1.5 bg-background shadow-none"
                  rows={6}
                />
              </div>
              <div className="col-span-2 flex items-center gap-2">
                <Checkbox id="acceptTerms" />
                <Label htmlFor="acceptTerms">
                  You agree to our{" "}
                  <Link href="#" className="underline">
                    terms and conditions
                  </Link>
                  .
                </Label>
              </div>
            </div>
            <Button className="mt-6 w-full" size="lg">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
