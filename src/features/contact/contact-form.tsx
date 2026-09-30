"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      department: "General Inquiries",
      subject: "",
      message: "",
      website_hp: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Failed to send message.");
      }

      setSuccess(true);
      reset();
    } catch (err: any) {
      setError(err.message || "An error occurred. Please call our hospital desk.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-3xl bg-teal-50 border border-teal-200 p-8 text-center space-y-4 animate-in fade-in">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-700 text-white mx-auto">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Message Received with Thanks</h3>
        <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
          Our patient coordination desk has received your inquiry. A clinical administrator will respond
          within 2 business hours. For immediate medical emergencies, please call 1800-102-CARE.
        </p>
        <Button onClick={() => setSuccess(false)} variant="secondary" size="sm">
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="fullName" required>
            Full Name
          </Label>
          <Input
            id="fullName"
            placeholder="John Doe"
            {...register("fullName")}
            error={errors.fullName?.message}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email" required>
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            error={errors.email?.message}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="phone" required>
            Phone Number
          </Label>
          <Input
            id="phone"
            placeholder="+1 (555) 000-0000"
            {...register("phone")}
            error={errors.phone?.message}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="department" required>
            Department / Inquiry Type
          </Label>
          <Select id="department" {...register("department")}>
            <option value="General Inquiries">General Hospital Helpdesk</option>
            <option value="Cardiology">Cardiology & Heart Center</option>
            <option value="Neurology">Neurology & Spine Institute</option>
            <option value="Orthopedics">Orthopedics & Joint Replacement</option>
            <option value="Oncology">Comprehensive Cancer Center</option>
            <option value="Pediatrics">Pediatrics & Level-III NICU</option>
            <option value="Women Health">Obstetrics & Gynecology</option>
            <option value="Gastroenterology">Gastroenterology & Liver</option>
            <option value="Billing & TPA">Cashless Insurance & Billing</option>
            <option value="International Patients">International Patient Care</option>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="subject" required>
          Subject
        </Label>
        <Input
          id="subject"
          placeholder="Brief summary of your question"
          {...register("subject")}
          error={errors.subject?.message}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message" required>
          Message / Details
        </Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="How can our clinical or administrative team assist you today?"
          {...register("message")}
          error={errors.message?.message}
        />
      </div>

      {/* Honeypot field */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="opacity-0 absolute -z-10 pointer-events-none h-0 w-0"
        {...register("website_hp")}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto gap-2 px-8 py-3 rounded-xl"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            <span>Submit Message</span>
          </>
        )}
      </Button>
    </form>
  );
}
