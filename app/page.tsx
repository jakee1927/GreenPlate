import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, Utensils, Droplets, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">GreenPlate</span>
          </Link>
          <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium text-primary transition-colors">
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
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="/contact">
                Reserve a Table
              </Link>
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
              src="/hero10.jpg"
              alt="Fresh vegetables on a wooden table"
              fill
              className="object-cover brightness-[0.7]"
              priority
              style={{ objectPosition: '0% 90%' }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-4 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Fresh, Sustainable, Plant-Based Cuisine
              </h1>
              <p className="text-lg md:text-xl">
                Experience the true taste of nature with our farm-to-table approach and commitment to sustainable
                practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/menu">View Our Menu</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/20 hover:bg-background/30 text-white"
                  asChild
                >
                  <Link href="/approach">Our Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Dishes */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Seasonal Favorites</h2>
              <p className="text-muted-foreground max-w-2xl">
                Our menu changes with the seasons to bring you the freshest, most flavorful ingredients at their peak.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Harvest Bowl",
                  description: "Seasonal roasted vegetables, quinoa, avocado, and our house-made tahini dressing.",
                  image: "/harvest-bowl.jpg",
                },
                {
                  title: "Garden Risotto",
                  description: "Creamy arborio rice with spring vegetables, herbs, and plant-based parmesan.",
                  image: "/garden-risotto.jpg",
                },
                {
                  title: "Forest Mushroom Pasta",
                  description: "Hand-made pasta with locally foraged mushrooms and truffle oil.",
                  image: "/forst-mushroom-pasta.jpg",
                },
              ].map((dish, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-background shadow transition-all hover:shadow-lg"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{dish.title}</h3>
                    <p className="mt-2 text-muted-foreground">{dish.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button asChild>
                <Link href="/menu" className="flex items-center gap-2">
                  Explore Full Menu <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Farm to Table Approach */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Farm-to-Table Approach</h2>
                <p className="text-muted-foreground mb-6">
                  We believe that the best food starts with the best ingredients. That's why we partner with local farms
                  and producers to bring you the freshest, most flavorful ingredients possible.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Local Partnerships</h3>
                      <p className="text-muted-foreground">
                        We work directly with farmers within a 50-mile radius to source our ingredients.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Utensils className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Mindful Preparation</h3>
                      <p className="text-muted-foreground">
                        Our chefs prepare each dish with care to highlight the natural flavors of our ingredients.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sun className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Seasonal Menu</h3>
                      <p className="text-muted-foreground">
                        Our menu evolves with the seasons to showcase ingredients at their peak freshness.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link href="#" className="flex items-center gap-2">
                      Meet Our Farmers <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square lg:aspect-[16/9]">
                <Image
                  src="/farmerharvesting.jpg"
                  alt="Farmer harvesting fresh vegetables"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Commitment to Sustainability</h2>
              <p className="text-muted-foreground max-w-2xl">
                We're dedicated to minimizing our environmental impact through thoughtful practices at every step.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Leaf className="h-8 w-8 text-primary" />,
                  title: "Zero Food Waste",
                  description: "We compost all food scraps and use every part of our ingredients to minimize waste.",
                },
                {
                  icon: <Droplets className="h-8 w-8 text-primary" />,
                  title: "Water Conservation",
                  description: "Our kitchen uses water-saving equipment and practices to reduce our water footprint.",
                },
                {
                  icon: <Sun className="h-8 w-8 text-primary" />,
                  title: "Renewable Energy",
                  description: "Our restaurant is powered by 100% renewable energy sources.",
                },
                {
                  icon: <Utensils className="h-8 w-8 text-primary" />,
                  title: "Eco-Friendly Packaging",
                  description:
                    "All our takeaway containers and utensils are compostable or made from recycled materials.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button asChild>
                <Link href="#" className="flex items-center gap-2">
                  Learn More About Our Practices <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Guests Say</h2>
              <p className="text-muted-foreground max-w-2xl">
                Don't just take our word for it—hear from our satisfied guests.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "The flavors in every dish are incredible. You can really taste the freshness of the ingredients.",
                  author: "Sarah J.",
                },
                {
                  quote:
                    "As someone who's not vegetarian, I was blown away by how satisfying and delicious everything was.",
                  author: "Michael T.",
                },
                {
                  quote: "I love that I can enjoy amazing food while supporting sustainable practices. It's a win-win!",
                  author: "Emma R.",
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Join Us for a Sustainable Dining Experience
              </h2>
              <p className="text-lg mb-8">
                Taste the difference that fresh, locally-sourced ingredients make while supporting sustainable
                practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact" target="_blank" rel="noopener noreferrer">
                    Reserve a Table
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/20 hover:bg-background/30 text-white"
                  asChild
                >
                  <Link href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer">
                    Order Takeaway
                  </Link>
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
            <p>&copy; {new Date().getFullYear()} GreenPlate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
