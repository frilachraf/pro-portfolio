import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import ContactForm from './contact/contact-form';
import { GoArrowRight } from "react-icons/go";


const ContactSection = ({profile}:any) => {
    return (
        <section id='contact' >
            <div className="min-h-screen flex items-center justify-center py-16">
    <div className="w-full max-w-screen-xl mx-auto px-6 xl:px-0">
      <b className="text-muted-foreground"></b>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
        Let's Contact
      </h2>
      <p className="mt-3 text-base sm:text-lg text-foreground/60">
        I&apos;d love to hear from you. Please fill out this form or shoot me
        an email.
      </p>
      <div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          <div className=''>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
              <MailIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Email</h3>
            {profile?.email && 
            <Link
              className="font-medium text-muted-foreground"
              href="mailto:akashmoradiya3444@gmail.com"
            >
              {profile?.email}
            </Link>}
          </div>
          <div className=''>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
              <FaWhatsapp className='text-3xl' />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Whatsapp</h3>
            <Link className="font-medium text- flex gap-2 items-center " href={`${profile?.whatsapp}`} target='_blank'>
              Chat <GoArrowRight className='text-xl text-primary'/>
            </Link>
          </div>
          <div className=''>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Adresse</h3>
            <p className=" text-muted-foreground">
              {profile?.address}
            </p>
            
          </div>
          <div className=''>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
              <PhoneIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Phone</h3>
            {/* <p className="my-2.5 text-muted-foreground">
              Mon-Fri from 8am to 5pm.
            </p> */}
            <Link
              className="ont-medium  flex gap-2 items-center "
              href={`tel:${profile?.tel}`}
              target='_blank'
            >
              {profile?.tel} <GoArrowRight className='text-xl text-primary'/>
            </Link>
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </div>
  </div>
        </section>
    );
};

export default ContactSection;