import { Modal } from "@/components/Modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ModalsPage() {
  return (
    <div className="space-y-6">
      <Modal
        modalBody={
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
        }
        modalFooter={<Button type="submit">Save changes</Button>}
        open={false}
      >
        <Button variant="outline">Edit Profile</Button>
      </Modal>
    </div>
  )
}
