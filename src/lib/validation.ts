import { z } from "zod";

export const appointmentFormSchema = z.object({
  departmentId: z.string().min(1, "Please select a medical department"),
  doctorId: z.string().min(1, "Please select a doctor"),
  date: z.string().min(1, "Please select an appointment date"),
  timeSlot: z.string().min(1, "Please select a time slot"),
  patientName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters")
    .regex(/^[a-zA-Z\s.'-]+$/, "Please enter a valid patient name"),
  patientEmail: z.string().email("Please provide a valid email address"),
  patientPhone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(16, "Phone number is too long"),
  patientAge: z.number().min(0, "Age cannot be negative").max(120, "Please enter a valid age"),
  patientGender: z.enum(["Male", "Female", "Other", "Prefer not to say"]),
  visitType: z.enum(["First Visit", "Follow-up", "Second Opinion", "Routine Consultation"]),
  symptoms: z
    .string()
    .max(1000, "Description cannot exceed 1000 characters")
    .optional(),
  agreeToPrivacy: z.boolean().refine((val) => val === true, {
    message: "You must acknowledge patient privacy notice",
  }),
  // Honeypot field for bot protection. Must remain empty.
  website_hp: z.string().max(0, "Invalid form submission").optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentFormSchema>;

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  department: z.string().min(1, "Please select a department or general inquiry"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Please enter a message of at least 10 characters"),
  website_hp: z.string().max(0, "Bot submission detected").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const careerApplicationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  position: z.string().min(1, "Please select a position"),
  experienceYears: z.number().min(0).max(50),
  coverNote: z.string().min(20, "Please include a brief introduction or credentials summary"),
  website_hp: z.string().max(0, "Bot submission detected").optional(),
});

export type CareerApplicationData = z.infer<typeof careerApplicationSchema>;
