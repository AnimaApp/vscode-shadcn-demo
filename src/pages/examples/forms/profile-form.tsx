import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Link } from "react-router-dom"

type ProfileFormValues = {
  username: string;
  email: string;
  bio: string;
  urls: { value: string }[]
}

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  bio: "I own a computer.",
  urls: [
    { value: "https://shadcn.com" },
    { value: "http://twitter.com/shadcn" },
  ],
}

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    defaultValues,
    mode: "onChange",
  })


  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" />
          </FormControl>
          <FormDescription>
            This is your public display name. It can be your real name or a
            pseudonym. You can only change this once every 30 days.
          </FormDescription>
          <FormMessage />
        </FormItem>


        <FormItem>
          <FormLabel>Email</FormLabel>
          <Select>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a verified email to display" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="m@example.com">m@example.com</SelectItem>
              <SelectItem value="m@google.com">m@google.com</SelectItem>
              <SelectItem value="m@support.com">m@support.com</SelectItem>
            </SelectContent>
          </Select>
          <FormDescription>
            You can manage verified email addresses in your{" "}
            <Link to="/examples/forms">email settings</Link>.
          </FormDescription>
          <FormMessage />
        </FormItem>

        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  )
}
