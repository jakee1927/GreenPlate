'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [buttonText, setButtonText] = useState("Subscribe");

  const handleSubscribe = () => {
    // Clear the input field
    setEmail("");
    
    // Change button text
    setButtonText("Subscribed!");
    
    // Change text back after 2.5 seconds
    setTimeout(() => {
      setButtonText("Subscribe");
    }, 2500);
  };

  return (
    <div>
      <h3 className="font-semibold mb-4">Stay Updated</h3>
      <p className="text-muted-foreground mb-4">
        Subscribe to our newsletter for seasonal menu updates and events.
      </p>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Your email"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="button" onClick={handleSubscribe}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
