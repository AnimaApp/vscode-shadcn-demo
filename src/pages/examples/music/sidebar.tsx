import { Playlist } from "./data/playlists"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import { LibraryIcon, ListMusic, MicVocalIcon, Music2Icon, MusicIcon, PlayIcon, RadioIcon, User2Icon } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[]
}

export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <PlayIcon className="w-4 mr-1" />
              Listen Now
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <MusicIcon className="w-4 mr-1" />
              Browse
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <RadioIcon className="w-4 mr-1" />
              Radio
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Library
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <ListMusic className="w-4 mr-1" />
              Playlists
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Music2Icon className="w-4 mr-1" />
              Songs
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <User2Icon className="w-4 mr-1" />
              Made for You
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <MicVocalIcon className="w-4 mr-1" />
              Artists
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <LibraryIcon className="w-4 mr-1" />
              Albums
            </Button>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <ListMusic className="w-4 mr-1" />
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
