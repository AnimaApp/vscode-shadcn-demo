import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"

interface ModalProps {
  open: boolean
  modalTitle?: React.ReactNode
  modalHeader?: React.ReactNode
  modalBody?: React.ReactNode
  modalFooter?: React.ReactNode
  children?: JSX.Element
}

export function Modal({
  open,
  modalBody,
  modalFooter,
  modalHeader,
  children,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(open)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        {modalHeader && <DialogHeader>{modalHeader}</DialogHeader>}
        {modalBody}
        {modalFooter && <DialogFooter>{modalFooter}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}
