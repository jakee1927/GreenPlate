import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Leaf, Phone, Mail, Clock, MapPin, Calendar, MessageSquare, Users, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">GreenPlate</span>
          </Link>
          <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/menu" className="text-sm font-medium hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="/approach" className="text-sm font-medium hover:text-primary transition-colors">
              Our Approach
            </Link>
            <Link href="/sustainability" className="text-sm font-medium hover:text-primary transition-colors">
              Sustainability
            </Link>
            <Link href="/contact" className="text-sm font-medium text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="/contact">Reserve a Table</Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/interiorcontactus.jpg"
              alt="Restaurant interior with natural lighting"
              fill
              className="object-cover brightness-[0.6]"
              priority
              style={{ objectPosition: '0 30%' }}
            />
          </div>
          <div className="container relative z-10 py-16 md:py-24">
            <div className="max-w-2xl space-y-4 text-white">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Get in Touch</h1>
              <p className="text-lg md:text-xl">
                We'd love to hear from you. Whether you're looking to make a reservation, have a question, or want to
                share feedback, we're here to help.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
        </section>

        {/* Contact Options */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Tabs defaultValue="reservations" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="reservations">Reservations</TabsTrigger>
                  <TabsTrigger value="contact">Contact Us</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
              </div>

              {/* Reservations Tab */}
              <TabsContent value="reservations" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-6">Reserve Your Table</h2>
                    <p className="text-muted-foreground mb-8">
                      Experience our seasonal menu in a warm, welcoming atmosphere. Reservations are recommended,
                      especially for dinner and weekends.
                    </p>

                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="date" className="text-sm font-medium">
                            Date
                          </label>
                          <Input type="date" id="date" min={new Date().toISOString().split("T")[0]} />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="time" className="text-sm font-medium">
                            Time
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="11:00">11:00 AM</SelectItem>
                              <SelectItem value="11:30">11:30 AM</SelectItem>
                              <SelectItem value="12:00">12:00 PM</SelectItem>
                              <SelectItem value="12:30">12:30 PM</SelectItem>
                              <SelectItem value="13:00">1:00 PM</SelectItem>
                              <SelectItem value="13:30">1:30 PM</SelectItem>
                              <SelectItem value="18:00">6:00 PM</SelectItem>
                              <SelectItem value="18:30">6:30 PM</SelectItem>
                              <SelectItem value="19:00">7:00 PM</SelectItem>
                              <SelectItem value="19:30">7:30 PM</SelectItem>
                              <SelectItem value="20:00">8:00 PM</SelectItem>
                              <SelectItem value="20:30">8:30 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="guests" className="text-sm font-medium">
                          Number of Guests
                        </label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select number of guests" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 person</SelectItem>
                            <SelectItem value="2">2 people</SelectItem>
                            <SelectItem value="3">3 people</SelectItem>
                            <SelectItem value="4">4 people</SelectItem>
                            <SelectItem value="5">5 people</SelectItem>
                            <SelectItem value="6">6 people</SelectItem>
                            <SelectItem value="7+">7+ people (please specify in notes)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Full Name
                          </label>
                          <Input id="name" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number
                          </label>
                          <Input id="phone" placeholder="Your phone number" type="tel" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input id="email" placeholder="Your email address" type="email" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="special-requests" className="text-sm font-medium">
                          Special Requests (Optional)
                        </label>
                        <Textarea
                          id="special-requests"
                          placeholder="Please let us know about any dietary restrictions, special occasions, or seating preferences"
                          rows={4}
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Request Reservation
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        We'll confirm your reservation via email or phone within 24 hours.
                      </p>
                    </form>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        Reservation Information
                      </h3>
                      <Separator />
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Hours</h4>
                            <p className="text-muted-foreground">
                              Lunch: Tuesday–Sunday, 11:00 AM–2:30 PM
                              <br />
                              Dinner: Tuesday–Sunday, 6:00 PM–10:00 PM
                              <br />
                              Closed Mondays
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Group Dining</h4>
                            <p className="text-muted-foreground">
                              For parties of 8 or more, please contact us directly at{" "}
                              <span className="text-primary">(123) 456-7890</span> or email{" "}
                              <span className="text-primary">reservations@greenplate.com</span>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MessageSquare className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Cancellation Policy</h4>
                            <p className="text-muted-foreground">
                              We kindly request 24 hours notice for cancellations. For parties of 6 or more, 48 hours
                              notice is required.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-6 space-y-4">
                      <h3 className="text-xl font-semibold">Private Events</h3>
                      <p className="text-muted-foreground">
                        Looking to host a special occasion? GreenPlate offers private dining options for celebrations,
                        corporate events, and more.
                      </p>
                      <Button variant="outline" className="w-full">
                        Inquire About Private Events
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Contact Us Tab */}
              <TabsContent value="contact" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-6">Contact Us</h2>
                    <p className="text-muted-foreground mb-8">
                      Have a question, comment, or feedback? We'd love to hear from you. Fill out the form below and
                      we'll get back to you as soon as possible.
                    </p>

                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="contact-name" className="text-sm font-medium">
                            Full Name
                          </label>
                          <Input id="contact-name" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="contact-email" className="text-sm font-medium">
                            Email Address
                          </label>
                          <Input id="contact-email" placeholder="Your email address" type="email" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="catering">Catering</SelectItem>
                            <SelectItem value="careers">Careers</SelectItem>
                            <SelectItem value="press">Press Inquiry</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea id="message" placeholder="How can we help you?" rows={6} />
                      </div>

                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        We typically respond to inquiries within 24-48 hours during business days.
                      </p>
                    </form>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Phone className="h-5 w-5 text-primary" />
                        Get in Touch Directly
                      </h3>
                      <Separator />
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Phone</h4>
                            <p className="text-muted-foreground">
                              <Link href="tel:+11234567890" className="hover:text-primary transition-colors">
                                (123) 456-7890
                              </Link>
                            </p>
                            <p className="text-sm text-muted-foreground">Available during business hours</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Email</h4>
                            <p className="text-muted-foreground">
                              <Link href="mailto:info@greenplate.com" className="hover:text-primary transition-colors">
                                info@greenplate.com
                              </Link>
                            </p>
                            <p className="text-sm text-muted-foreground">For general inquiries</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Specialized Contacts</h4>
                            <p className="text-muted-foreground">
                              <Link
                                href="mailto:events@greenplate.com"
                                className="hover:text-primary transition-colors"
                              >
                                events@greenplate.com
                              </Link>{" "}
                              - For private events
                              <br />
                              <Link href="mailto:press@greenplate.com" className="hover:text-primary transition-colors">
                                press@greenplate.com
                              </Link>{" "}
                              - For media inquiries
                              <br />
                              <Link
                                href="mailto:careers@greenplate.com"
                                className="hover:text-primary transition-colors"
                              >
                                careers@greenplate.com
                              </Link>{" "}
                              - For job opportunities
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Do you accommodate dietary restrictions?</AccordionTrigger>
                          <AccordionContent>
                            Yes, we're happy to accommodate various dietary needs. Our menu is 100% plant-based, and we
                            can accommodate gluten-free, nut-free, and other dietary restrictions. Please inform your
                            server of any allergies or dietary requirements when ordering, or note them in your
                            reservation.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>Do you offer takeout or delivery?</AccordionTrigger>
                          <AccordionContent>
                            Yes, we offer takeout orders that can be placed by phone or through our website. We use
                            eco-friendly packaging for all takeout orders. For delivery, we partner with select
                            sustainable delivery services in our area.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger>Is there parking available?</AccordionTrigger>
                          <AccordionContent>
                            We have a small parking lot behind our restaurant with limited spaces. There is also street
                            parking available, and a public parking garage two blocks away. We encourage carpooling or
                            using public transportation when possible to reduce environmental impact.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                          <AccordionTrigger>Do you cater events?</AccordionTrigger>
                          <AccordionContent>
                            Yes, we offer catering services for events of all sizes. Our catering menu features many of
                            our restaurant favorites as well as special items designed for events. Please contact us at
                            events@greenplate.com for more information and to discuss your specific needs.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                          <AccordionTrigger>Can I purchase gift cards?</AccordionTrigger>
                          <AccordionContent>
                            Yes, gift cards are available for purchase in-person at the restaurant or online through our
                            website. They make perfect gifts for the food lovers and environmentally conscious people in
                            your life.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Location Tab */}
              <TabsContent value="location" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-6">Find Us</h2>
                    <p className="text-muted-foreground mb-8">
                      Located in the heart of Greenville, our restaurant offers a tranquil dining experience surrounded
                      by nature, yet conveniently accessible.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Address</h4>
                          <address className="not-italic text-muted-foreground">
                            123 Nature Way
                            <br />
                            Greenville, CA 90210
                            <br />
                            United States
                          </address>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Hours</h4>
                          <p className="text-muted-foreground">
                            Tuesday–Sunday: 11:00 AM–10:00 PM
                            <br />
                            Closed Mondays
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <ExternalLink className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Directions</h4>
                          <div className="space-y-2 mt-2">
                            <Button variant="outline" className="w-full">
                              <Link href="https://www.google.com/maps" className="flex items-center gap-2 w-full justify-center">
                                Get Directions on Google Maps
                              </Link>
                            </Button>
                            <Button variant="outline" className="w-full">
                              <Link href="https://www.apple.com/maps/" className="flex items-center gap-2 w-full justify-center">
                                Get Directions on Apple Maps
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 space-y-6">
                      <h3 className="text-xl font-semibold">Transportation Options</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Public Transit</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Bus lines 10, 14, and 22 stop within a block of our restaurant. The nearest subway station
                              is Central Station, a 10-minute walk away.
                            </p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Parking</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Limited parking is available behind our restaurant. Additional parking can be found at the
                              public garage on Oak Street, two blocks away.
                            </p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Bike Friendly</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              We offer bike racks outside our restaurant and are located near the city's main bike path.
                              Cyclists receive 10% off their bill.
                            </p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Rideshare</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Our designated pickup/dropoff area is located at the front entrance, making rideshare
                              services convenient and easy.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="rounded-lg overflow-hidden border h-[400px] relative">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0634992711397!2d-122.41941492392031!3d37.77492971975435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjgiTiAxMjLCsDI1JzA1LjAiVw!5e0!3m2!1sen!2sus!4v1616603835743!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="GreenPlate Restaurant Location"
                        aria-label="Google Maps showing location of GreenPlate restaurant at 123 Nature Way, Greenville, CA 90210"
                      ></iframe>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-6 space-y-4">
                      <h3 className="text-xl font-semibold">Neighborhood Guide</h3>
                      <p className="text-muted-foreground">
                        GreenPlate is located in the vibrant Arts District, surrounded by galleries, shops, and parks.
                        Here are some nearby attractions to explore before or after your meal:
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">•</div>
                          <p>
                            <span className="font-medium">City Botanical Gardens</span> - A 5-minute walk, featuring
                            native plant collections
                          </p>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">•</div>
                          <p>
                            <span className="font-medium">Modern Art Museum</span> - Just 2 blocks away, featuring
                            rotating exhibitions
                          </p>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">•</div>
                          <p>
                            <span className="font-medium">Farmers Market</span> - Every Saturday morning in the adjacent
                            plaza
                          </p>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">•</div>
                          <p>
                            <span className="font-medium">Riverside Park</span> - A 10-minute walk, perfect for pre or
                            post-meal strolls
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Stay Connected</h2>
              <p className="text-muted-foreground">
                Subscribe to our newsletter to receive updates on seasonal menus, special events, and sustainability
                initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-6">
                <Input placeholder="Your email address" type="email" className="flex-1" />
                <Button type="submit">Subscribe</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                We respect your privacy and will never share your information.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="promo-dusk.jpg"
              alt="Restaurant dining area with natural lighting"
              fill
              className="object-cover brightness-[0.4]"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Experience GreenPlate?</h2>
              <p className="text-lg mb-8">
                Join us for a memorable dining experience celebrating sustainable, plant-based cuisine in a welcoming
                atmosphere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Reserve a Table</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/20 hover:bg-background/30 text-white"
                  asChild
                >
                  <Link href="/menu">View Our Menu</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">GreenPlate</span>
              </div>
              <p className="text-muted-foreground">
                Sustainable, plant-based cuisine that's good for you and the planet.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/menu" className="text-muted-foreground hover:text-primary transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/approach" className="text-muted-foreground hover:text-primary transition-colors">
                    Our Approach
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability" className="text-muted-foreground hover:text-primary transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Visit Us</h3>
              <address className="not-italic text-muted-foreground">
                123 Nature Way
                <br />
                Greenville, CA 90210
                <br />
                <Link href="tel:+11234567890" className="hover:text-primary transition-colors">
                  (123) 456-7890
                </Link>
              </address>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Hours</h4>
                <p className="text-muted-foreground">
                  Tue-Sun: 11am-10pm
                  <br />
                  Closed Mondays
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex gap-4 mb-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
              </div>
              <p className="text-muted-foreground mb-4">Follow us for updates, behind-the-scenes content, and more.</p>
              <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors font-medium">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 GreenPlate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
