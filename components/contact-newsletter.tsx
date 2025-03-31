'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactNewsletter() {
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
    <>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-6">
        <Input 
          placeholder="Your email address" 
          type="email" 
          className="flex-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="button" onClick={handleSubscribe}>
          {buttonText}
        </Button>
      </div>
      <p className="text-sm text-muted-foreground mt-4">
        We respect your privacy and will never share your information.
      </p>
    </>
  );
}
