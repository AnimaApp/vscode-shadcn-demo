import { ProfileForm } from "./profile-form"
import { useForm } from "react-hook-form"
import { Form } from "@/components/ui/form"

export default function SettingsProfilePage() {
  const form = useForm({
    defaultValues: {},
    mode: "onChange",
  })


  return (
    <div className="space-y-6">
      <Form {...form}>
        <ProfileForm />
      </Form>
    </div>
  )
}
