import React from "react";
import { Button } from "@/components/ui/button";
import { FormDescription } from "@/components/ui/form";
import { FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export const ProfileForm = (): JSX.Element => {
  return (
    <div className="inline-flex flex-col h-[759px] items-start gap-[31px] relative">
      <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-zinc-950 text-[18px] tracking-[0] leading-[27px] whitespace-nowrap">
          Profile
        </div>
        <p className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-zinc-500 text-[12.8px] tracking-[0] leading-[19.2px] whitespace-nowrap">
          This is how others will see you on the site.
        </p>
      </div>
      <div className="flex w-[530px] h-[45px] items-start gap-[32px] relative">
        <Input placeholder="Name" type="default" />
        <Button variant="default">Subscribe</Button>
      </div>
      <Separator />
      <div className="flex flex-col w-[530px] items-start gap-[4px] relative flex-1 grow">
        <Label htmlFor="Email">Email</Label>
        <Input placeholder="Email" type="default" />
        <FormDescription>
          This is your public display name. It can be your real name or a pseudonym. You can change this once every 30
          days
        </FormDescription>
      </div>
      <FormItem>
        <Label>Your Message</Label>
        <Textarea />
        <FormDescription>Your message will be copied to the support team.</FormDescription>
      </FormItem>
      <div className="flex flex-col h-[214px] items-start gap-[4px] relative self-stretch w-full">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#0f172a] text-[14px] tracking-[0] leading-[20px] whitespace-nowrap">
          URLs
        </div>
        <p className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-zinc-500 text-[12.8px] tracking-[0] leading-[19.2px] whitespace-nowrap">
          Add links to your website, blog, or social media profiles.
        </p>
        <Input placeholder="https://shadcn.com" type="default" />
        <Input placeholder="https://animaapp.com" type="default" />
        <Input placeholder="https://twitter.com/shadcn.com" type="default" />
        <Button variant="outline">Add URL</Button>
      </div>
      <Button variant="default">Update profile</Button>
    </div>
  );
};
