import { Form } from '@/components/ui/form';
import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';

export function PlaygroundLayout({ children }: { children: ReactNode }) {
  const form = useForm({
    mode: "onChange",
  })

  return (
    <Form {...form}>
      {children}
    </Form>
  )
}
