import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Leaf, Utensils, Clock, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MenuPage() {
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
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Sustainability
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="https://www.opentable.com/" target="_blank" rel="noopener noreferrer">
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
        <section className="relative h-[50vh] min-h-[400px]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/menuherodish.jpg"
              alt="Beautifully plated vegetarian dish"
              fill
              className="object-cover brightness-[0.6]"
              style={{ objectPosition: 'center 70%' }}
              priority
              sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Seasonal Menu</h1>
              <p className="text-lg md:text-xl">
                Thoughtfully crafted dishes that celebrate the bounty of each season, sourced from local farms and
                prepared with care.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <Badge variant="outline" className="bg-white/10 text-white border-white/20 px-3 py-1">
                  <Clock className="h-3 w-3 mr-1" /> Updated for Spring 2025
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Navigation */}
        <section className="border-b bg-muted/30">
          <div className="container py-4">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex items-center justify-between mb-4">
                <TabsList className="bg-background/50">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="starters">Starters</TabsTrigger>
                  <TabsTrigger value="mains">Mains</TabsTrigger>
                  <TabsTrigger value="desserts">Desserts</TabsTrigger>
                  <TabsTrigger value="drinks">Drinks</TabsTrigger>
                </TabsList>
                <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-primary/80"></div> Seasonal
                  </span>
                  <span className="flex items-center gap-1 ml-4">
                    <div className="h-3 w-3 rounded-full bg-orange-500/80"></div> Chef's Favorite
                  </span>
                  <span className="flex items-center gap-1 ml-4">
                    <div className="h-3 w-3 rounded-full bg-blue-500/80"></div> Gluten-Free
                  </span>
                </div>
              </div>

              <TabsContent value="all" className="mt-0">
                <MenuSection />
              </TabsContent>
              <TabsContent value="starters" className="mt-0">
                <MenuSection filterCategory="starters" />
              </TabsContent>
              <TabsContent value="mains" className="mt-0">
                <MenuSection filterCategory="mains" />
              </TabsContent>
              <TabsContent value="desserts" className="mt-0">
                <MenuSection filterCategory="desserts" />
              </TabsContent>
              <TabsContent value="drinks" className="mt-0">
                <MenuSection filterCategory="drinks" />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Farm Partners */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Farm Partners</h2>
              <p className="text-muted-foreground max-w-2xl">
                The exceptional ingredients in our dishes come from these local farms committed to sustainable
                agriculture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sunrise Organic Farm",
                  distance: "12 miles away",
                  specialty: "Heirloom vegetables and herbs",
                  image: "/farmVege.jpg",
                },
                {
                  name: "Green Valley Dairy",
                  distance: "18 miles away",
                  specialty: "Plant-based cheeses and milks",
                  image: "/farmDairy.jpg",
                },
                {
                  name: "Wildwood Mushrooms",
                  distance: "25 miles away",
                  specialty: "Specialty and foraged mushrooms",
                  image: "/farmShroom.jpg",
                },
              ].map((farm, index) => (
                <div className="group relative overflow-hidden rounded-lg border bg-background shadow transition-all hover:shadow-lg">
  <div className="aspect-[16/9] relative overflow-hidden">
    <Image
      src={farm.image || "/placeholder.svg"}
      alt={farm.name}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover transition-transform group-hover:scale-105"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-semibold">{farm.name}</h3>
    <p className="text-sm text-muted-foreground mb-2">{farm.distance}</p>
    <p className="text-muted-foreground">{farm.specialty}</p>
  </div>
</div>
              ))}
            </div>
          </div>
        </section>

        {/* Dietary Information */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tight mb-6">Dietary Information</h2>
              <p className="text-muted-foreground mb-8">
                At GreenPlate, we believe everyone should be able to enjoy our food regardless of dietary restrictions.
                Our kitchen is 100% plant-based and we take great care to accommodate various dietary needs.
              </p>

              <div className="space-y-6">
                <div className="rounded-lg border p-6">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="text-lg font-medium">Allergens & Special Diets</h3>
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <Separator className="my-4" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">We can accommodate:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          Gluten-free diets
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          Nut-free options
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          Soy-free options
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          Oil-free preparations
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Common allergens used:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-destructive"></div>
                          Tree nuts in select dishes
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-destructive"></div>
                          Wheat in some breads and pastas
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-destructive"></div>
                          Soy in some protein alternatives
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Please inform your server of any allergies or dietary restrictions when ordering. While we take
                    precautions, our kitchen is not completely allergen-free.
                  </p>
                </div>

                <div className="rounded-lg border p-6">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="text-lg font-medium">Our Commitment to Quality</h3>
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <Separator className="my-4" />
                  <p className="text-muted-foreground mb-4">
                    We prepare all our dishes from scratch using whole food ingredients. Our kitchen avoids:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      Artificial preservatives
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      Artificial colors
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      Refined sugars
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      GMO ingredients
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      Hydrogenated oils
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      Artificial flavor enhancers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="/promo-dusk.jpg"
              alt="Restaurant interior"
              fill
              className="object-cover brightness-[0.4]"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Experience Our Menu?</h2>
              <p className="text-lg mb-8">
                Join us for a memorable dining experience celebrating the season's finest ingredients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="https://www.opentable.com/" target="_blank" rel="noopener noreferrer">
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
                  <Link href="/menu" className="text-primary hover:text-primary/80 transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Our Approach
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
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

function MenuSection({ filterCategory = null }: { filterCategory?: string | null }) {
  const menuItems = [
    {
      category: "starters",
      title: "Seasonal Appetizers",
      description: "Begin your culinary journey with these thoughtfully crafted small plates.",
      items: [
        {
          name: "Garden Bruschetta",
          description:
            "Toasted artisan sourdough topped with heirloom tomatoes, basil from our garden, and house-made cashew ricotta.",
          price: "$12",
          tags: ["seasonal"],
          source: "Tomatoes from Sunrise Organic Farm, Basil from our rooftop garden",
        },
        {
          name: "Wild Mushroom Arancini",
          description:
            "Crispy risotto balls filled with foraged wild mushrooms, truffle oil, and our plant-based mozzarella.",
          price: "$14",
          tags: ["chef"],
          source: "Mushrooms from Wildwood Mushrooms",
        },
        {
          name: "Roasted Beet Carpaccio",
          description: "Thinly sliced golden and red beets, topped with microgreens, capers, and cashew cream.",
          price: "$13",
          tags: ["gluten-free"],
          source: "Beets from Valley Creek Farm, Microgreens from Urban Sprouts",
        },
        {
          name: "Seasonal Soup",
          description:
            "Our daily rotating soup made with the freshest seasonal vegetables. Ask your server for today's creation.",
          price: "$9",
          tags: ["seasonal", "gluten-free"],
          source: "Vegetables from various local farms within 30 miles",
        },
      ],
    },
    {
      category: "mains",
      title: "Main Courses",
      description: "Substantial plant-based entrées that celebrate the season's bounty.",
      items: [
        {
          name: "Harvest Bowl",
          description:
            "Seasonal roasted vegetables, ancient grains, avocado, and house-made tahini dressing. A nourishing complete meal.",
          price: "$18",
          tags: ["seasonal", "chef", "gluten-free"],
          source: "Vegetables from Sunrise Organic Farm, Grains from Heritage Seed Collective",
        },
        {
          name: "Garden Risotto",
          description:
            "Creamy arborio rice with spring vegetables, herbs, and our plant-based parmesan. Finished with a drizzle of herb oil.",
          price: "$22",
          tags: ["seasonal"],
          source: "Vegetables from our kitchen garden, Herbs from Living Roots Farm",
        },
        {
          name: "Forest Mushroom Pasta",
          description: "House-made pasta with locally foraged mushrooms, white wine cream sauce, and fresh herbs.",
          price: "$24",
          tags: ["chef"],
          source: "Mushrooms from Wildwood Mushrooms, Flour from Heritage Mill",
        },
        {
          name: "Root Vegetable Wellington",
          description:
            "Seasonal root vegetables and lentils wrapped in flaky pastry, served with roasted garlic mashed potatoes and mushroom gravy.",
          price: "$26",
          tags: [],
          source: "Root vegetables from Valley Creek Farm, Lentils from Three Sisters Farm",
        },
        {
          name: "Stuffed Heirloom Squash",
          description:
            "Roasted seasonal squash filled with wild rice, cranberries, pecans, and sage, drizzled with maple glaze.",
          price: "$23",
          tags: ["seasonal", "gluten-free"],
          source: "Squash from Sunrise Organic Farm, Wild rice from Northern Lakes Cooperative",
        },
      ],
    },
    {
      category: "desserts",
      title: "Sweet Endings",
      description: "Indulgent plant-based desserts crafted with natural sweeteners and seasonal fruits.",
      items: [
        {
          name: "Seasonal Fruit Crumble",
          description:
            "Warm seasonal fruit topped with oat and almond crumble, served with house-made vanilla bean ice cream.",
          price: "$11",
          tags: ["seasonal"],
          source: "Fruits from Orchard Hill Farm, Oats from Heritage Seed Collective",
        },
        {
          name: "Dark Chocolate Avocado Mousse",
          description:
            "Silky smooth chocolate mousse made with ripe avocados and fair-trade dark chocolate, topped with candied hazelnuts.",
          price: "$12",
          tags: ["chef", "gluten-free"],
          source: "Avocados from Fair Earth Cooperative, Chocolate from Ethical Bean to Bar",
        },
        {
          name: "Lavender Lemon Cheesecake",
          description: "Cashew-based cheesecake infused with lavender and lemon on an almond date crust.",
          price: "$13",
          tags: ["gluten-free"],
          source: "Lemons from Citrus Grove Farm, Lavender from our herb garden",
        },
      ],
    },
    {
      category: "drinks",
      title: "Beverages",
      description: "Refreshing drinks crafted with the same care as our food menu.",
      items: [
        {
          name: "Seasonal Herb Infusion",
          description: "House-made herbal tea with seasonal herbs and flowers from our garden. Served hot or cold.",
          price: "$6",
          tags: ["seasonal", "gluten-free"],
          source: "Herbs from our rooftop garden",
        },
        {
          name: "Cucumber Mint Refresher",
          description:
            "Sparkling water infused with fresh cucumber, mint, and a hint of lime. Naturally sweetened with local honey.",
          price: "$7",
          tags: ["gluten-free"],
          source: "Cucumbers from Valley Creek Farm, Mint from our herb garden, Honey from Urban Apiary",
        },
        {
          name: "Berry Kombucha",
          description: "House-fermented kombucha with seasonal berries. Probiotic-rich and lightly effervescent.",
          price: "$8",
          tags: ["seasonal", "gluten-free"],
          source: "Berries from Orchard Hill Farm, Kombucha cultured in-house",
        },
        {
          name: "Organic Wine & Local Craft Beer",
          description:
            "We offer a rotating selection of organic, biodynamic wines and local craft beers. Ask your server for today's options.",
          price: "Varies",
          tags: [],
          source: "Partnered with local wineries and breweries within 100 miles",
        },
      ],
    },
  ]

  const filteredMenu = filterCategory ? menuItems.filter((section) => section.category === filterCategory) : menuItems

  return (
    <div className="space-y-16 py-8">
      {filteredMenu.map((section, index) => (
        <div key={index} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-2">{section.title}</h2>
            <p className="text-muted-foreground">{section.description}</p>
          </div>

          <div className="grid gap-8">
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <div className="flex gap-1">
                        {item.tags.includes("seasonal") && (
                          <div className="h-3 w-3 rounded-full bg-primary/80" title="Seasonal"></div>
                        )}
                        {item.tags.includes("chef") && (
                          <div className="h-3 w-3 rounded-full bg-orange-500/80" title="Chef's Favorite"></div>
                        )}
                        {item.tags.includes("gluten-free") && (
                          <div className="h-3 w-3 rounded-full bg-blue-500/80" title="Gluten-Free"></div>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                    <p className="text-xs text-muted-foreground italic">
                      <Utensils className="h-3 w-3 inline mr-1" />
                      {item.source}
                    </p>
                  </div>
                  <div className="text-lg font-medium">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
