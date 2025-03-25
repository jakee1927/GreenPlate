import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Leaf, Utensils, Clock, Sun, Droplets, Users, Heart, Award, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ApproachPage() {
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
            <Link href="/approach" className="text-sm font-medium text-primary transition-colors">
              Our Approach
            </Link>
            <Link href="/sustainability" className="text-sm font-medium hover:text-primary transition-colors">
              Sustainability
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="#">Reserve a Table</Link>
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
        <section className="relative h-[50vh] min-h-[400px]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/chefchopping.jpg"
              alt="Chef chopping fresh vegetables in a sunlit kitchen"
              fill
              className="object-cover brightness-[0.6]"
              priority
              sizes="100vw"
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Approach to Food</h1>
              <p className="text-lg md:text-xl">
                At GreenPlate, we believe that exceptional food starts with exceptional ingredients, mindful
                preparation, and a deep respect for our planet.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Philosophy</h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  GreenPlate was founded on a simple yet powerful idea: that plant-based cuisine can be extraordinary
                  when created with care, creativity, and a commitment to sustainability.
                </p>
                <p className="text-muted-foreground mb-6">
                  We believe that food should nourish not only our bodies but also our communities and the planet. Every
                  decision we make—from sourcing ingredients to designing our menu to managing our waste—is guided by
                  this holistic philosophy.
                </p>
                <p className="text-muted-foreground">
                  Our approach combines traditional techniques with innovative methods to create dishes that celebrate
                  the natural flavors, textures, and beauty of plant-based ingredients. We're not just creating
                  alternatives to animal products—we're showcasing the incredible diversity and potential of plants
                  themselves.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  {[
                    { icon: <Heart className="h-5 w-5" />, text: "Passion for Plants" },
                    { icon: <Users className="h-5 w-5" />, text: "Community Focus" },
                    { icon: <Sparkles className="h-5 w-5" />, text: "Culinary Innovation" },
                    { icon: <Award className="h-5 w-5" />, text: "Uncompromising Quality" },
                  ].map((value, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                    >
                      {value.icon}
                      {value.text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/harvestbowl2.jpg"
                  alt="Fresh harvest bowl with seasonal vegetables"
                  width={800}
                  height={800}
                  priority
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Three Pillars Section */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">The Three Pillars of Our Approach</h2>
              <p className="text-muted-foreground text-lg">
                Our culinary philosophy rests on three fundamental pillars that guide everything we do in the kitchen
                and beyond.
              </p>
            </div>

            <Tabs defaultValue="sourcing" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="sourcing">Sourcing</TabsTrigger>
                  <TabsTrigger value="preparation">Preparation</TabsTrigger>
                  <TabsTrigger value="seasonality">Seasonality</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="sourcing" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl font-bold mb-4">Thoughtful Sourcing</h3>
                    <p className="text-muted-foreground mb-6">
                      We believe that exceptional dishes begin with exceptional ingredients. That's why we've built
                      strong relationships with local farmers, foragers, and producers who share our values.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Leaf className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Local First</h4>
                          <p className="text-muted-foreground">
                            We source 90% of our ingredients from within a 50-mile radius, reducing food miles and
                            supporting our local economy.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Relationship-Based</h4>
                          <p className="text-muted-foreground">
                            We know our farmers by name and work directly with them to plan crops and ensure fair
                            compensation for their work.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Quality Standards</h4>
                          <p className="text-muted-foreground">
                            We prioritize organic, regenerative, and sustainable growing practices, selecting varieties
                            for flavor rather than shelf life.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px]">
                    <Image
                      src="/happyfarmer.jpg"
                      alt="Chef selecting produce at a local farm"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="preparation" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl font-bold mb-4">Mindful Preparation</h3>
                    <p className="text-muted-foreground mb-6">
                      Our culinary techniques are designed to honor each ingredient, bringing out its natural flavors
                      and nutritional benefits without unnecessary processing.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Utensils className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Whole-Food Focus</h4>
                          <p className="text-muted-foreground">
                            We use whole ingredients in their most natural state, minimizing processing to preserve
                            nutrients and flavor.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Sparkles className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Traditional & Modern Techniques</h4>
                          <p className="text-muted-foreground">
                            We blend time-honored cooking methods with innovative approaches to create unique textures
                            and flavors.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Heart className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Made with Care</h4>
                          <p className="text-muted-foreground">
                            Every dish is prepared with attention to detail and a genuine love for the craft of cooking.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px]">
                    <Image
                      src="/chefprep.jpg"
                      alt="Chef carefully preparing vegetables in the kitchen"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="seasonality" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl font-bold mb-4">Embracing Seasonality</h3>
                    <p className="text-muted-foreground mb-6">
                      We believe that ingredients taste best when they're enjoyed at their natural peak. Our menu
                      evolves with the seasons, celebrating nature's rhythm.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Sun className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Seasonal Menu</h4>
                          <p className="text-muted-foreground">
                            Our menu changes quarterly with the seasons, with weekly specials highlighting the most
                            current harvests.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Preservation Techniques</h4>
                          <p className="text-muted-foreground">
                            We extend seasons through traditional preservation methods like fermentation, pickling, and
                            dehydration.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Sparkles className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Creative Adaptability</h4>
                          <p className="text-muted-foreground">
                            Our chefs embrace the creative challenge of working with what's available, leading to
                            innovative dishes.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px]">
                    <Image
                      src="/seasonalharvest.jpg"
                      alt="Seasonal harvest of vegetables arranged beautifully"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Kitchen Practices */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Kitchen Practices</h2>
              <p className="text-muted-foreground text-lg">
                Behind every dish is a set of thoughtful practices that ensure quality, sustainability, and exceptional
                flavor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Utensils className="h-10 w-10 text-primary" />,
                  title: "Scratch Kitchen",
                  description:
                    "Every sauce, dressing, and component is made in-house from whole ingredients. We don't use pre-made bases or mixes.",
                },
                {
                  icon: <Leaf className="h-10 w-10 text-primary" />,
                  title: "Whole Ingredient Utilization",
                  description:
                    "We use every part of our ingredients, from root to stem. Vegetable scraps become stocks, herb stems flavor oils, and fruit peels transform into garnishes.",
                },
                {
                  icon: <Droplets className="h-10 w-10 text-primary" />,
                  title: "Water Conservation",
                  description:
                    "Our kitchen uses water-saving techniques like steam cooking and recirculating cooling systems to minimize our water footprint.",
                },
                {
                  icon: <Sun className="h-10 w-10 text-primary" />,
                  title: "Energy-Efficient Cooking",
                  description:
                    "We use induction cooking and schedule our baking to maximize oven efficiency, reducing our energy consumption.",
                },
                {
                  icon: <Users className="h-10 w-10 text-primary" />,
                  title: "Collaborative Menu Development",
                  description:
                    "Our entire kitchen team contributes ideas for our seasonal menus, drawing on diverse culinary backgrounds and perspectives.",
                },
                {
                  icon: <Heart className="h-10 w-10 text-primary" />,
                  title: "Nutritional Balance",
                  description:
                    "We design our dishes to provide balanced nutrition, ensuring our plant-based meals deliver complete proteins and essential nutrients.",
                },
              ].map((practice, index) => (
                <Card key={index} className="border-primary/10 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="mb-2">{practice.icon}</div>
                    <CardTitle>{practice.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{practice.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">The Minds Behind Our Menu</h2>
              <p className="text-muted-foreground text-lg">
                Our talented team brings diverse experiences and a shared passion for plant-based cuisine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Elena Rodriguez",
                  title: "Executive Chef",
                  bio: "With 15 years of experience in plant-based cuisine, Elena brings classical training and innovative techniques to create GreenPlate's signature dishes.",
                  image: "/chefelena.jpg",
                },
                {
                  name: "Marcus Chen",
                  title: "Culinary Director",
                  bio: "Marcus oversees our culinary program, working directly with farmers to plan seasonal menus and ensure our high standards are maintained.",
                  image: "/chefchen.jpg",
                },
                {
                  name: "Sophia Williams",
                  title: "Pastry Chef",
                  bio: "Sophia specializes in plant-based pastry, creating desserts that are both indulgent and aligned with our whole-food philosophy.",
                  image: "/chefsophia.jpg",
                },
              ].map((person, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-background shadow transition-all hover:shadow-lg"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={person.image || "/placeholder.svg"}
                      alt={person.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                      className="object-cover object-top transition-transform group-hover:scale-105"
                      style={{ objectPosition: '0 15%' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{person.name}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{person.title}</p>
                    <p className="text-muted-foreground">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Food Critics Say</h2>
              <p className="text-muted-foreground text-lg">
                Our approach to plant-based cuisine has earned recognition from culinary experts.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
              {[
                {
                  quote:
                    "GreenPlate isn't just serving vegetarian food—they're redefining what plant-based cuisine can be through their meticulous sourcing and innovative techniques.",
                  author: "The Culinary Review",
                  position: "Food & Wine Magazine",
                },
                {
                  quote:
                    "What sets GreenPlate apart is their holistic approach. From farm partnerships to waste management, every aspect of the restaurant operates with intention and integrity.",
                  author: "James Peterson",
                  position: "Restaurant Critic, The Metropolitan",
                },
                {
                  quote:
                    "The seasonal menu at GreenPlate tells a story of time and place. Each dish celebrates what's growing right now, prepared with both respect for tradition and a spirit of innovation.",
                  author: "Culinary Explorations",
                  position: "Annual Restaurant Guide",
                },
              ].map((testimonial, index) => (
                <div key={index} className="p-8 bg-muted rounded-lg">
                  <svg
                    className="h-8 w-8 text-primary/40 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M11.9997 10.2L5.99971 4.2L7.19971 3L13.1997 9L11.9997 10.2Z" />
                    <path d="M11.9997 21L5.99971 15L7.19971 13.8L13.1997 19.8L11.9997 21Z" />
                    <path d="M12.0003 10.2L18.0003 4.2L16.8003 3L10.8003 9L12.0003 10.2Z" />
                    <path d="M12.0003 21L18.0003 15L16.8003 13.8L10.8003 19.8L12.0003 21Z" />
                  </svg>
                  <p className="text-lg italic mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-medium">— {testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0">
            <Image
              src="promo-dusk.jpg"
              alt="Restaurant interior"
              fill
              className="object-cover brightness-[0.4]"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Experience Our Approach Firsthand</h2>
              <p className="text-lg mb-8">
                Join us for a meal and taste the difference that thoughtful sourcing, mindful preparation, and seasonal
                cooking make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/menu">Explore Our Menu</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/20 hover:bg-background/30 text-white"
                  asChild
                >
                  <Link href="#">Reserve a Table</Link>
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
                  <Link href="/approach" className="text-primary hover:text-primary/80 transition-colors">
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
              <h3 className="font-semibold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter for seasonal menu updates and events.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p> {new Date().getFullYear()} GreenPlate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
