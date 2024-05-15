import React from "react";
import { Button } from "@/components/ui/button";
import { FormDescription } from "@/components/ui/form";
import { FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export const PlaygroundPage = (): JSX.Element => {
  return (
    <div className="inline-flex flex-col items-start gap-[24px] p-[32px] relative bg-white">
      <header className="flex flex-col w-[1376px] items-start relative flex-[0_0_auto] bg-transparent">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-zinc-950 text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
          Settings
        </div>
        <p className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-zinc-500 text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
          Manage your account settings and set e-mail preferences.
        </p>
      </header>
      <Separator />
      <div className="inline-flex items-start gap-[32px] relative flex-[0_0_auto]">
        <NavigationMenu>
          <NavigationMenuLink>Profile</NavigationMenuLink>
          <NavigationMenuLink>Account</NavigationMenuLink>
          <NavigationMenuLink>Appearance</NavigationMenuLink>
          <NavigationMenuLink>Notifications</NavigationMenuLink>
          <NavigationMenuLink>Display</NavigationMenuLink>
        </NavigationMenu>
        <div className="relative w-[530px] h-[759px]">
          <div className="inline-flex flex-col items-start gap-[8px]  top-0 left-0">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-zinc-950 text-[18px] tracking-[0] leading-[27px] whitespace-nowrap">
              Profile
            </div>
            <p className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-zinc-500 text-[12.8px] tracking-[0] leading-[19.2px] whitespace-nowrap">
              This is how others will see you on the site.
            </p>
          </div>
          <div className="flex w-[530px] items-start gap-[32px]  top-[86px] left-0">
            <Input placeholder="Name" type="default" />
            <Button type="default">Subscribe</Button>
          </div>
          <Separator />
          <div className="flex flex-col w-[530px] items-start gap-[4px]  top-[190px] left-0">
            <Label htmlFor="Email">Email</Label>
            <Input placeholder="Email" type="default" />
            <FormDescription>
              This is your public display name. It can be your real name or a pseudonym. You can change this once every
              30 days
            </FormDescription>
          </div>
          <FormItem>
            <Label>Your Message</Label>
            <Textarea />
            <FormDescription>Your message will be copied to the support team.</FormDescription>
          </FormItem>
          <div className="flex flex-col w-[530px] items-start gap-[4px]  top-[468px] left-0">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#0f172a] text-[14px] tracking-[0] leading-[20px] whitespace-nowrap">
              URLs
            </div>
            <p className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-zinc-500 text-[12.8px] tracking-[0] leading-[19.2px] whitespace-nowrap">
              Add links to your website, blog, or social media profiles.
            </p>
            <Input placeholder="https://shadcn.com" type="default" />
            <Input placeholder="https://animaapp.com" type="default" />
            <input
              className="pl-[12px] pr-[56px] py-[8px] relative self-stretch w-full ml-[-1.00px] mr-[-1.00px] bg-white rounded-[6px] border border-solid border-[#cbd5e1] [font-family:'Inter-Regular',Helvetica] font-normal text-slate-400 text-[16px] tracking-[0] leading-[24px] whitespace-nowrap"
              placeholder="https://twitter.com/shadcn.com"
              type="url"
            />
            <Button type="outline">Add URL</Button>
          </div>
          <Button type="default">Update profile</Button>
        </div>
      </div>
    </div>
  );
};
