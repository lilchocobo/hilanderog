"use client";

import { useInView } from "react-intersection-observer";
import { Marquee } from "@/registry/magicui/marquee";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FRIENDS = [
  {
    name: "Ada",
    title: "The Empath",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&auto=format&fit=crop&q=80",
    gradient: "from-purple-500 to-blue-500"
  },
  {
    name: "Max",
    title: "The Coach",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&auto=format&fit=crop&q=80",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Zoe",
    title: "The Creative",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&auto=format&fit=crop&q=80",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    name: "Kai",
    title: "The Mindful",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=800&auto=format&fit=crop&q=80",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    name: "Nova",
    title: "The Futurist",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&auto=format&fit=crop&q=80",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    name: "Leo",
    title: "The Motivator",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&auto=format&fit=crop&q=80",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    name: "Mia",
    title: "The Analyzer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&auto=format&fit=crop&q=80",
    gradient: "from-red-500 to-pink-500"
  },
  {
    name: "Finn",
    title: "The Explorer",
    avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=600&h=800&auto=format&fit=crop&q=80",
    gradient: "from-green-500 to-emerald-500"
  }
];

// Create more items by duplicating the array to ensure we have enough for a full viewport
const doubledFriends = [...FRIENDS, ...FRIENDS];
const firstRow = doubledFriends;
const secondRow = [...doubledFriends].reverse(); // Reverse the order for visual variety
const thirdRow = [...doubledFriends]; // Third row same direction as first row

const FriendCard = ({
  avatar,
  name,
  title,
  gradient,
}: {
  avatar: string;
  name: string;
  title: string;
  gradient: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-[400px] w-[225px] overflow-hidden rounded-xl border mx-1",
        "border-gray-950/[.1] hover:shadow-md hover:shadow-primary/20 transition-all duration-300",
        "dark:border-gray-50/[.1]"
      )}
    >
      <div className="h-full w-full">
        <img 
          src={avatar} 
          alt={name} 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A20]/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
          <div>
            <h3 className="text-white font-bold">{name}</h3>
            <p className="text-white/70 text-sm">{title}</p>
          </div>
          <Button 
            size="sm" 
            className={`bg-gradient-to-r ${gradient} hover:opacity-90 rounded-full px-3 py-1 text-xs`}
          >
            Say Hi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function AiFriendsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="ai-friends" className="py-20">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Meet Your AI <span className="text-gradient">Friends</span>
        </h2>
        <p className="text-muted-foreground px-4">
          Each AI companion has a unique personality designed to connect with you in different ways.
          Find the perfect match for your needs and preferences.
        </p>
      </div>

      <div
        ref={ref}
        className={`w-full overflow-hidden ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      >
        <div className="flex flex-col w-full gap-1">
          <Marquee className="[--duration:120s]">
            {firstRow.map((friend, index) => (
              <FriendCard key={`first-${friend.name}-${index}`} {...friend} />
            ))}
          </Marquee>
          <Marquee reverse className="[--duration:120s]">
            {secondRow.map((friend, index) => (
              <FriendCard key={`second-${friend.name}-${index}`} {...friend} />
            ))}
          </Marquee>
          <Marquee className="[--duration:120s]">
            {thirdRow.map((friend, index) => (
              <FriendCard key={`third-${friend.name}-${index}`} {...friend} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}