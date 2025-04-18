"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { CheckCircle2 } from "lucide-react"

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "caregiver",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      })
    }, 1500)

    // In a real implementation, you would send the data to Supabase here
    // const { error } = await supabaseClient.from('waitlist').insert([formData]);
    // if (error) {
    //   toast({
    //     title: "Error",
    //     description: "There was a problem adding you to the waitlist. Please try again.",
    //     variant: "destructive",
    //   });
    //   setIsSubmitting(false);
    //   return;
    // }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground max-w-md">
          You've been added to our waitlist. We'll be in touch soon with more information about MemoTag.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label>I am a:</Label>
        <RadioGroup defaultValue="caregiver" value={formData.role} onValueChange={handleRoleChange}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="caregiver" id="caregiver" />
            <Label htmlFor="caregiver">Family Caregiver</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="healthcare" id="healthcare" />
            <Label htmlFor="healthcare">Healthcare Professional</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="investor" id="investor" />
            <Label htmlFor="investor">Investor/Partner</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other">Other</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your interest in MemoTag..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Join Waitlist"}
      </Button>
    </form>
  )
}
