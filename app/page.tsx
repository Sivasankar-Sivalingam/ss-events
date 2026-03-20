"use client";
import { Button } from "@/components/ui/button";
import { ArrowBigDownIcon } from "lucide-react";
import EventCards from "./components/EventCards";
import { events } from "@/lib/constants";
const Home = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <section className="flex flex-col items-center justify-center text-center py-2">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Event Management Platform
        </h1>
        <p className="text-lg  max-w-2xl">
          We are dedicated to providing you with the best events happening
          around you.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => console.log("siva")}
        >
          Get Started <ArrowBigDownIcon />
        </Button>
      </section>
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Featured Events</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none">
          {events.map((item) => (
            <li key={item.slug}>
              <EventCards {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Home;
