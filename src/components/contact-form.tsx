"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { AnimatedButton } from "./animated-button"

const formSchema = z.object({
    fullname: z.string().min(1).min(3).max(50),
    email: z.email(),
    phone: z.number().min(11).max(11),
    subject: z.string().min(1).optional(),
    message: z.string().min(2).max(500),
    checkbox: z.unknown()
});

export default function ContactForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            );
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-3xl mx-auto py-10">

                <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="mb-1">Full Name *</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder=""
                                    required
                                    type="text"
                                    {...field}
                                    value={field.value ?? ""}
                                    />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="md:flex md:gap-6 *:grow *:basis-1">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="mb-1">Email *</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder=""
                                        required
                                        type="email"
                                        {...field}
                                        value={field.value ?? ""} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="mb-1">Phone *</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder=""
                                        required
                                        type="number"
                                        {...field}
                                        value={field.value ?? ""} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="mb-1">Subject</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder=""
                                    type="text"
                                    {...field}
                                    value={field.value ?? ""}/>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="mb-1">Message *</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder=""
                                    required
                                    className="resize-none"
                                    {...field}
                                    value={field.value ?? ""}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="checkbox"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0 pt-2 pb-8">
                            <FormControl>
                                <Checkbox
                                    checked={!!field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel className="font-normal text-[#00000099] text-sm">I have read & accepted Terms & Conditions.</FormLabel>

                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />
                <AnimatedButton
                    as="button"
                    type="submit"
                    bgColor="var(--primary-color)"
                    hoverBgColor="var(--secondary-color)"
                    borderColor="var(--primary-color)"
                    hoverBorderColor="var(--seocndary-color)"
                >
                    SUBMIT NOW
                </AnimatedButton>
            </form>
        </Form>
    )
}