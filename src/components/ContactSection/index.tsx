"use client";

import { SectionTitle } from "../SectionTitle";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";

type ContactForm = {
  email: string;
  subject: string;
  message: string;
};

export const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ContactForm>();
  const { toast } = useToast();
  const onSendMail = handleSubmit(async (params) => {
    try {
      await fetch("/api/send_email", {
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      toast({
        className: "bg-green-500 text-white",
        description: "Your message has been sent.",
      });
    } catch (error) {}
  });

  return (
    <section className="py-20" id="contact">
      <SectionTitle title="CONTACT" subtitle="SAY HELLO" />
      <form
        className="flex flex-col gap-6 p-12 rounded-3xl bg-white"
        onSubmit={onSendMail}
      >
        <input
          className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your Email*"
          type="email"
          {...register("email", { required: true })}
        />
        <input
          className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Subject*"
          type="text"
          {...register("subject", { required: true })}
        />
        <textarea
          className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your Message*"
          {...register("message", { required: true })}
        />
        <div className="text-center">
          <button
            disabled={!isValid}
            className={`text-white rounded-3xl py-3 px-10 text-sm hover:shadow-xl transition-shadow, ${
              isValid ? "bg-sky-500" : "cursor-not-allowed bg-gray-300"
            }`}
          >
            SEND
          </button>
        </div>
      </form>
    </section>
  );
};
