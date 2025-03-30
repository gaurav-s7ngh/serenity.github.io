import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const therapyTypes = [
  { id: "individual", label: "Individual Therapy" },
  { id: "couples", label: "Couples Therapy" },
  { id: "group", label: "Group Therapy" },
  { id: "art", label: "Art Therapy" },
  { id: "music", label: "Music Therapy" },
  { id: "other", label: "Other" },
];

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  interests: z.array(z.string()).min(1, { message: "Please select at least one interest" }),
  receiveUpdates: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

export default function Waitlist() {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      interests: [],
      receiveUpdates: false,
    },
  });

  const waitlistMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      return apiRequest("POST", "/api/waitlist", data);
    },
    onSuccess: () => {
      toast({
        title: "Successfully Joined Waitlist",
        description: "You'll receive updates about our launch soon!",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    waitlistMutation.mutate(data);
  };

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Join Our Waitlist</h2>
          <p className="text-lg text-white text-opacity-90 mb-8">
            Be among the first to experience our comprehensive therapy platform when we launch. Sign up now to secure early access and special offers.
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-left block">First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-left block">Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className="text-left block">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email address" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="mb-6">
                <FormLabel className="text-left block mb-2">What are you interested in?</FormLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {therapyTypes.map((type) => (
                    <FormField
                      key={type.id}
                      control={form.control}
                      name="interests"
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(type.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...field.value, type.id]);
                                } else {
                                  field.onChange(field.value?.filter((value) => value !== type.id));
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel className="cursor-pointer">{type.label}</FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                {form.formState.errors.interests && (
                  <p className="text-sm font-medium text-destructive mt-1">
                    {form.formState.errors.interests.message}
                  </p>
                )}
              </div>
              
              <FormField
                control={form.control}
                name="receiveUpdates"
                render={({ field }) => (
                  <FormItem className="mb-6 flex items-start space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-sm text-neutral-700 text-left">
                      I agree to receive updates about Serenity and understand I can unsubscribe at any time.
                    </FormLabel>
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={waitlistMutation.isPending}
              >
                {waitlistMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>
          </Form>
          
          <div className="mt-8 text-white text-opacity-80">
            <p>Already on the waitlist? <a href="#" className="text-white underline">Check your status</a></p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>
    </section>
  );
}
