"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Calendar,
  Clock,
  User,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  AlertCircle,
  FileCheck,
  ShieldCheck,
  PhoneCall,
  Loader2,
} from "lucide-react";
import { Department, Doctor } from "@/types";
import { appointmentFormSchema, AppointmentFormData } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface MultiStepBookingFormProps {
  departments: Department[];
  doctors: Doctor[];
  initialDepartmentId?: string;
  initialDoctorSlug?: string;
}

const timeSlots = [
  "09:00 AM - 09:30 AM",
  "09:30 AM - 10:00 AM",
  "10:00 AM - 10:30 AM",
  "10:30 AM - 11:00 AM",
  "11:30 AM - 12:00 PM",
  "02:00 PM - 02:30 PM",
  "02:30 PM - 03:00 PM",
  "03:30 PM - 04:00 PM",
  "04:30 PM - 05:00 PM",
  "05:00 PM - 05:30 PM",
];

export function MultiStepBookingForm({
  departments,
  doctors,
  initialDepartmentId,
  initialDoctorSlug,
}: MultiStepBookingFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<any | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  // Find pre-selected doctor if any
  const preselectedDoctor = initialDoctorSlug
    ? doctors.find((d) => d.slug === initialDoctorSlug)
    : null;

  const defaultDept =
    preselectedDoctor?.departmentId || initialDepartmentId || (departments[0]?.id ?? "");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentFormSchema),
    mode: "onBlur",
    defaultValues: {
      departmentId: defaultDept,
      doctorId: preselectedDoctor?.id || "",
      date: new Date(Date.now() + 86400000).toISOString().split("T")[0], // tomorrow
      timeSlot: timeSlots[0],
      patientAge: 35,
      patientGender: "Female",
      visitType: "First Visit",
      symptoms: "",
      website_hp: "",
      agreeToPrivacy: true,
    },
  });

  const selectedDeptId = watch("departmentId");
  const selectedDoctorId = watch("doctorId");
  const selectedDate = watch("date");
  const selectedSlot = watch("timeSlot");

  // Filter doctors by selected department
  const filteredDoctors = doctors.filter((doc) => doc.departmentId === selectedDeptId);

  const selectedDoctor = doctors.find((d) => d.id === selectedDoctorId);
  const selectedDepartment = departments.find((d) => d.id === selectedDeptId);

  // Step Navigation Validation
  const handleNextStep = async () => {
    let isValid = false;

    if (currentStep === 1) {
      isValid = await trigger(["departmentId", "doctorId"]);
    } else if (currentStep === 2) {
      isValid = await trigger(["date", "timeSlot"]);
    } else if (currentStep === 3) {
      isValid = await trigger([
        "patientName",
        "patientEmail",
        "patientPhone",
        "patientAge",
        "patientGender",
        "visitType",
        "agreeToPrivacy",
      ]);
    }

    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onFormSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to process appointment. Please try again.");
      }

      setSubmissionSuccess(result.data);
    } catch (err: any) {
      setSubmissionError(err.message || "An unexpected error occurred. Please call 1800-102-CARE.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // SUCCESS CONFIRMATION SCREEN
  if (submissionSuccess) {
    return (
      <div className="rounded-3xl bg-white border border-teal-200/90 shadow-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6 animate-in zoom-in-95 duration-300">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mx-auto">
          <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Appointment Confirmed
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            We Look Forward to Welcoming You
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Your consultation request has been confirmed. A confirmation SMS and email have been sent
            to <span className="font-semibold text-slate-900">{submissionSuccess.patientEmail}</span>.
          </p>
        </div>

        {/* Appointment Summary Box */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6 text-left space-y-3 text-sm">
          <div className="flex justify-between items-center pb-3 border-b border-slate-200">
            <span className="text-slate-500 font-medium">Booking Reference ID:</span>
            <span className="font-mono font-bold text-teal-800 text-base">
              {submissionSuccess.referenceId}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-slate-400 font-medium">Doctor & Specialty</p>
              <p className="font-bold text-slate-900">{submissionSuccess.doctorName}</p>
              <p className="text-xs text-teal-700">{submissionSuccess.departmentName}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Date & Slot</p>
              <p className="font-bold text-slate-900">{submissionSuccess.date}</p>
              <p className="text-xs text-slate-600">{submissionSuccess.timeSlot}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Patient</p>
              <p className="font-bold text-slate-900">{submissionSuccess.patientName}</p>
              <p className="text-xs text-slate-600">{submissionSuccess.patientPhone}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Consultation Fee</p>
              <p className="font-bold text-slate-900">{submissionSuccess.consultationFee}</p>
              <p className="text-xs text-emerald-600 font-medium">Payable at hospital desk</p>
            </div>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            onClick={() => window.print()}
            variant="outline"
            className="w-full sm:w-auto"
          >
            <FileCheck className="h-4 w-4 mr-2" />
            Print Receipt / Summary
          </Button>

          <Button
            onClick={() => {
              setSubmissionSuccess(null);
              setCurrentStep(1);
            }}
            className="w-full sm:w-auto"
          >
            Book Another Consultation
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden max-w-4xl mx-auto">
      {/* Step Indicator Progress Header */}
      <div className="bg-slate-50 border-b border-slate-200/80 px-6 py-4">
        <div className="flex items-center justify-between">
          {[
            { step: 1, label: "Doctor & Specialty" },
            { step: 2, label: "Date & Time" },
            { step: 3, label: "Patient Details" },
            { step: 4, label: "Confirm & Book" },
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${
                  currentStep === item.step
                    ? "bg-teal-700 text-white ring-4 ring-teal-700/20"
                    : currentStep > item.step
                    ? "bg-teal-100 text-teal-800"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {currentStep > item.step ? (
                  <CheckCircle2 className="h-4 w-4 stroke-[3]" />
                ) : (
                  item.step
                )}
              </div>
              <span
                className={`hidden md:inline text-xs font-semibold ${
                  currentStep === item.step ? "text-slate-900 font-bold" : "text-slate-500"
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onFormSubmit)} className="p-6 sm:p-10">
        {/* Error Alert if any */}
        {submissionError && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
            <p>{submissionError}</p>
          </div>
        )}

        {/* STEP 1: Department & Doctor Selection */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Step 1: Choose Department & Specialist
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Select your area of medical concern or choose your preferred physician.
              </p>
            </div>

            {/* Department Select */}
            <div className="space-y-2">
              <Label htmlFor="departmentId" required>
                Medical Department
              </Label>
              <Select
                id="departmentId"
                {...register("departmentId")}
                onChange={(e) => {
                  setValue("departmentId", e.target.value);
                  setValue("doctorId", ""); // Reset doctor when dept changes
                }}
                error={errors.departmentId?.message}
              >
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </Select>
            </div>

            {/* Doctor Picker Cards */}
            <div className="space-y-3">
              <Label required>Select Physician ({filteredDoctors.length} available)</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredDoctors.map((doc) => {
                  const isSelected = selectedDoctorId === doc.id;
                  return (
                    <div
                      key={doc.id}
                      onClick={() => setValue("doctorId", doc.id, { shouldValidate: true })}
                      className={`cursor-pointer rounded-2xl border p-4 flex items-start gap-4 transition-all duration-200 ${
                        isSelected
                          ? "border-teal-600 bg-teal-50/60 ring-2 ring-teal-600/20 shadow-sm"
                          : "border-slate-200 hover:border-teal-300 hover:bg-slate-50"
                      }`}
                    >
                      <div className="relative h-16 w-16 rounded-xl overflow-hidden bg-slate-200 shrink-0">
                        <Image
                          src={doc.image}
                          alt={doc.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 truncate">{doc.name}</p>
                        <p className="text-xs text-teal-700 font-semibold truncate">{doc.title}</p>
                        <p className="text-[11px] text-slate-500 truncate mt-0.5">
                          {doc.qualifications}
                        </p>
                        <div className="mt-2 flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-700">Fee: {doc.consultationFee}</span>
                          <span className="text-[11px] text-teal-800 font-bold">★ {doc.rating}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {errors.doctorId && (
                <p className="text-xs text-rose-600 font-medium">{errors.doctorId.message}</p>
              )}
            </div>
          </div>
        )}

        {/* STEP 2: Date & Available Time Slot */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Step 2: Select Date & Time Slot
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Consulting with <span className="font-bold text-slate-800">{selectedDoctor?.name}</span> ({selectedDepartment?.name})
              </p>
            </div>

            {/* Date Picker */}
            <div className="space-y-2 max-w-sm">
              <Label htmlFor="date" required>
                Consultation Date
              </Label>
              <Input
                id="date"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                {...register("date")}
                error={errors.date?.message}
              />
            </div>

            {/* Time Slot Picker */}
            <div className="space-y-2">
              <Label required>Available Appointment Slots</Label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {timeSlots.map((slot) => {
                  const isSelected = selectedSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setValue("timeSlot", slot, { shouldValidate: true })}
                      className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                        isSelected
                          ? "border-teal-700 bg-teal-700 text-white shadow-sm ring-2 ring-teal-700/20"
                          : "border-slate-200 bg-white text-slate-700 hover:border-teal-400 hover:bg-slate-50"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
              {errors.timeSlot && (
                <p className="text-xs text-rose-600 font-medium">{errors.timeSlot.message}</p>
              )}
            </div>
          </div>
        )}

        {/* STEP 3: Patient Information */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Step 3: Patient Details
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Minimal health info collected securely for outpatient clinical registration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="patientName" required>
                  Patient Full Name
                </Label>
                <Input
                  id="patientName"
                  placeholder="e.g. Eleanor Vance"
                  {...register("patientName")}
                  error={errors.patientName?.message}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="patientEmail" required>
                  Email Address (for confirmation)
                </Label>
                <Input
                  id="patientEmail"
                  type="email"
                  placeholder="name@example.com"
                  {...register("patientEmail")}
                  error={errors.patientEmail?.message}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="patientPhone" required>
                  Mobile Number (for SMS & reminders)
                </Label>
                <Input
                  id="patientPhone"
                  placeholder="+1 (555) 000-0000"
                  {...register("patientPhone")}
                  error={errors.patientPhone?.message}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="patientAge" required>
                    Age
                  </Label>
                  <Input
                    id="patientAge"
                    type="number"
                    min="0"
                    max="120"
                    {...register("patientAge", { valueAsNumber: true })}
                    error={errors.patientAge?.message}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="patientGender" required>
                    Gender
                  </Label>
                  <Select id="patientGender" {...register("patientGender")}>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </Select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="visitType" required>
                  Consultation Nature
                </Label>
                <Select id="visitType" {...register("visitType")}>
                  <option value="First Visit">First Time Visit</option>
                  <option value="Follow-up">Follow-up Consultation</option>
                  <option value="Second Opinion">Second Opinion</option>
                  <option value="Routine Consultation">Routine Checkup</option>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="symptoms">Brief Symptoms or Notes (Optional)</Label>
                <Textarea
                  id="symptoms"
                  placeholder="e.g. Intermittent knee stiffness during mornings for 3 weeks"
                  {...register("symptoms")}
                  error={errors.symptoms?.message}
                />
              </div>
            </div>

            {/* Privacy Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  id="agreeToPrivacy"
                  {...register("agreeToPrivacy")}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-xs text-slate-600 leading-relaxed">
                  I agree to HopeCare&apos;s privacy policy and confirm that the details provided are accurate for outpatient registration.
                </span>
              </label>
              {errors.agreeToPrivacy && (
                <p className="text-xs text-rose-600 font-medium mt-1">
                  {errors.agreeToPrivacy.message}
                </p>
              )}
            </div>

            {/* Honeypot field (hidden from genuine users) */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="opacity-0 absolute -z-10 pointer-events-none h-0 w-0"
              {...register("website_hp")}
            />
          </div>
        )}

        {/* STEP 4: Review & Final Submission */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Step 4: Review & Confirm Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Please verify your consultation details before finalizing your booking.
              </p>
            </div>

            {/* Detailed Review Card */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-4">
              <div className="flex items-start justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 rounded-xl overflow-hidden bg-slate-200 shrink-0">
                    {selectedDoctor?.image && (
                      <Image
                        src={selectedDoctor.image}
                        alt={selectedDoctor.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{selectedDoctor?.name}</h4>
                    <p className="text-xs text-teal-700 font-semibold">{selectedDepartment?.name}</p>
                    <p className="text-[11px] text-slate-500">{selectedDoctor?.title}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Consultation Fee</span>
                  <span className="text-lg font-bold text-slate-900">{selectedDoctor?.consultationFee}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block">Date & Time Slot</span>
                  <span className="font-bold text-slate-800 text-sm">
                    {selectedDate} at {selectedSlot}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block">Patient Name & Age</span>
                  <span className="font-bold text-slate-800 text-sm">
                    {watch("patientName")}, {watch("patientAge")} yrs ({watch("patientGender")})
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block">Contact Phone & Email</span>
                  <span className="font-semibold text-slate-800">
                    {watch("patientPhone")} | {watch("patientEmail")}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block">Type of Visit</span>
                  <span className="font-semibold text-slate-800">{watch("visitType")}</span>
                </div>
              </div>

              {watch("symptoms") && (
                <div className="pt-2 border-t border-slate-200 text-xs">
                  <span className="text-slate-400 block">Notes / Symptoms</span>
                  <p className="text-slate-700 italic mt-0.5">&quot;{watch("symptoms")}&quot;</p>
                </div>
              )}
            </div>

            <div className="rounded-xl bg-teal-50 border border-teal-200 p-4 text-xs text-teal-900 flex items-start gap-2.5">
              <ShieldCheck className="h-5 w-5 text-teal-700 shrink-0" />
              <p>
                No advance payment is required online. Your consultation fee is settled upon arrival
                at the hospital reception desk. Please arrive 15 minutes prior to your slot.
              </p>
            </div>
          </div>
        )}

        {/* Step Navigation Button Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
          {currentStep > 1 ? (
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevStep}
              disabled={isSubmitting}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              <span>Back</span>
            </Button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <Button
              type="button"
              onClick={handleNextStep}
              className="gap-1.5"
            >
              <span>Continue</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="gap-2 px-8 py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Confirming Booking...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Confirm My Appointment</span>
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
