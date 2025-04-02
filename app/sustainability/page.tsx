import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Leaf,
  Droplets,
  Sun,
  Recycle,
  BarChart3,
  Award,
  Heart,
  Users,
  Sparkles,
  TreePine,
  Globe,
  Sprout,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NewsletterSubscription } from "@/components/newsletter-subscription"
import { MobileMenu } from "@/components/mobile-menu"

export default function SustainabilityPage() {
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
            <Link href="/sustainability" className="text-sm font-medium text-primary transition-colors">
              Sustainability
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="/contact">Reserve a Table</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sustainablechefs.jpg"
              alt="Sustainable restaurant practices"
              fill
              className="object-cover brightness-[0.6]"
              priority
              style={{ objectPosition: '0 15%' }}
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Our Sustainability Commitment
              </h1>
              <p className="text-lg md:text-xl">
                At GreenPlate, sustainability isn't just a buzzword—it's the foundation of everything we do, from
                sourcing to service.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
        </section>

        {/* Key Initiatives Section */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Key Sustainability Initiatives</h2>
              <p className="text-muted-foreground text-lg">
                We've implemented comprehensive practices across our operations to minimize our environmental impact and
                maximize our positive contribution.
              </p>
            </div>

            <Tabs defaultValue="waste" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-2xl grid-cols-4">
                  <TabsTrigger value="waste">Zero Waste</TabsTrigger>
                  <TabsTrigger value="water">Water</TabsTrigger>
                  <TabsTrigger value="energy">Energy</TabsTrigger>
                  <TabsTrigger value="packaging">Packaging</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="waste" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl font-bold mb-4">Zero Food Waste</h3>
                    <p className="text-muted-foreground mb-6">
                      We're committed to eliminating food waste through thoughtful planning, creative utilization, and
                      responsible disposal.
                    </p>
                    <ul className="space-y-6">
                      <li className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium flex items-center gap-2">
                            <Leaf className="h-5 w-5 text-primary" />
                            Whole Ingredient Utilization
                          </h4>
                          <span className="text-sm text-primary font-medium">95%</span>
                        </div>
                        <Progress value={95} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          We use every part of our ingredients, from root to stem. Vegetable scraps become flavorful
                          stocks, herb stems infuse oils, and fruit peels transform into creative garnishes.
                        </p>
                      </li>
                      <li className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium flex items-center gap-2">
                            <Recycle className="h-5 w-5 text-primary" />
                            Composting Program
                          </h4>
                          <span className="text-sm text-primary font-medium">100%</span>
                        </div>
                        <Progress value={100} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          Any food scraps that can't be repurposed are composted through our partnership with Urban
                          Compost Collective, creating nutrient-rich soil for local farms.
                        </p>
                      </li>
                      <li className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-primary" />
                            Inventory Management
                          </h4>
                          <span className="text-sm text-primary font-medium">90%</span>
                        </div>
                        <Progress value={90} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          We use advanced inventory tracking and forecasting to minimize overordering and spoilage,
                          ensuring we purchase only what we need.
                        </p>
                      </li>
                    </ul>
                    <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                      <p className="text-sm font-medium">Our Impact:</p>
                      <p className="text-sm text-muted-foreground">
                        We've diverted over 5,000 pounds of food waste from landfills in the past year alone, reducing
                        our methane emissions and returning nutrients to the soil.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px]">
                    <Image
                      src="/scrapstew.jpg"
                      alt="Chef using vegetable scraps to make stock"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="water" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl font-bold mb-4">Water Conservation</h3>
                    <p className="text-muted-foreground mb-6">
                      We recognize water as a precious resource and have implemented comprehensive measures to reduce
                      our consumption.
                    </p>
                    <ul className="space-y-6">
                      <li className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium flex items-center gap-2">
                            <Droplets className="h-5 w-5 text-primary" />
                            Low-Flow Fixtures
                          </h4>
                          <span className="text-sm text-primary font-medium">100%</span>
                        </div>
                        <Progress value={100} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          All faucets, toilets, and dishwashers in our restaurant are equipped with water-saving
                          technology, reducing our water usage by up to 40% compared to conventional fixtures.
                        </p>
                      </li>
                      <li className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium flex items-center gap-2">
                            <Recycle className="h-5 w-5 text-primary" />
                            Water Recycling
                          </h4>
                          <span className="text-sm text-primary font-medium">75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          Our greywater system captures and filters water from sinks and prep areas, which is then used
                          for irrigation in our herb garden and for non-potable purposes.
                        </p>
                      </li>
                      <li className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium flex items-center gap-2">
                            <Sprout className="h-5 w-5 text-primary" />
                            Drought-Resistant Landscaping
                          </h4>
                          <span className="text-sm text-primary font-medium">90%</span>
                        </div>
                        <Progress value={90} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          Our outdoor spaces feature native, drought-resistant plants that require minimal irrigation,
                          reducing outdoor water usage by 90% compared to conventional landscaping.
                        </p>
                      </li>
                    </ul>
                    <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                      <p className="text-sm font-medium">Our Impact:</p>
                      <p className="text-sm text-muted-foreground">
                        Through our water conservation efforts, we save approximately 250,000 gallons of water
                        annually—equivalent to the water usage of 15 average households.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px]">
                    <Image
                      src="/savingwater.jpg"
                      alt="Water-saving fixtures in the restaurant"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="energy" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl font-bold mb-4">Renewable Energy</h3>
                    <p className="text-muted-foreground mb-6">
                      We're committed to minimizing our carbon footprint through renewable energy and efficient
                      operations.
                    </p>
                    <ul className="space-y-6">
                      <li className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium flex items-center gap-2">
                            <Sun className="h-5 w-5 text-primary" />
                            Solar Power
                          </h4>
                          <span className="text-sm text-primary font-medium">80%</span>
                        </div>
                        <Progress value={80} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          Our rooftop solar array generates 80% of our electricity needs, with the remaining 20%
                          purchased from certified renewable sources, making us 100% powered by clean energy.
                        </p>
                      </li>
                      <li className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-primary" />
                            Energy-Efficient Equipment
                          </h4>
                          <span className="text-sm text-primary font-medium">95%</span>
                        </div>
                        <Progress value={95} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          All of our kitchen equipment, lighting, and HVAC systems are Energy Star certified, reducing
                          our energy consumption by up to 30% compared to standard equipment.
                        </p>
                      </li>
                      <li className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-primary" />
                            Smart Energy Management
                          </h4>
                          <span className="text-sm text-primary font-medium">85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          Our building automation system optimizes energy use based on occupancy and time of day, while
                          our staff follows strict energy conservation protocols.
                        </p>
                      </li>
                    </ul>
                    <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                      <p className="text-sm font-medium">Our Impact:</p>
                      <p className="text-sm text-muted-foreground">
                        Our renewable energy initiatives prevent approximately 75 tons of CO2 emissions
                        annually—equivalent to taking 15 cars off the road or planting 1,200 trees each year.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px]">
                    <Image
                      src="/solarpannels.jpg"
                      alt="Solar panels on the restaurant roof"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="packaging" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl font-bold mb-4">Eco-Friendly Packaging</h3>
                    <p className="text-muted-foreground mb-6">
                      We've eliminated conventional single-use plastics and implemented sustainable alternatives for all
                      our takeaway and service needs.
                    </p>
                    <ul className="space-y-6">
                      <li className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium flex items-center gap-2">
                            <Leaf className="h-5 w-5 text-primary" />
                            Compostable Containers
                          </h4>
                          <span className="text-sm text-primary font-medium">100%</span>
                        </div>
                        <Progress value={100} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          All our takeaway containers, utensils, and cups are made from plant-based materials that fully
                          compost within 90 days in commercial composting facilities.
                        </p>
                      </li>
                      <li className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium flex items-center gap-2">
                            <Recycle className="h-5 w-5 text-primary" />
                            Minimal Packaging
                          </h4>
                          <span className="text-sm text-primary font-medium">90%</span>
                        </div>
                        <Progress value={90} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          We've redesigned our takeaway offerings to minimize unnecessary packaging while maintaining
                          food quality and safety, reducing our packaging volume by 40%.
                        </p>
                      </li>
                      <li className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-primary" />
                            Reusable Program
                          </h4>
                          <span className="text-sm text-primary font-medium">65%</span>
                        </div>
                        <Progress value={65} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          Our innovative container deposit program encourages customers to return reusable containers,
                          which we professionally sanitize and reuse, creating a closed-loop system.
                        </p>
                      </li>
                    </ul>
                    <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                      <p className="text-sm font-medium">Our Impact:</p>
                      <p className="text-sm text-muted-foreground">
                        Through our packaging initiatives, we've prevented over 15,000 pieces of single-use plastic from
                        entering landfills and oceans in the past year alone.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px]">
                    <Image
                      src="/ecopackage.jpg"
                      alt="Eco-friendly takeaway packaging"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Certifications & Commitments</h2>
              <p className="text-muted-foreground text-lg">
                We hold ourselves accountable through third-party verification and public commitments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-64 w-full mb-6">
                  <Image 
                    src="/ceritifcations/greencertification.png"
                    alt="Green Restaurant Certification"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Green Restaurant Certification</h3>
                <p className="text-muted-foreground">
                  We've earned a 3-Star Certification from the Green Restaurant Association for our comprehensive 
                  sustainability practices across water, waste, energy, and food sourcing.
                </p>
                <p className="text-sm font-medium text-primary mt-4">Certified since 2021</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="relative h-64 w-full mb-6">
                  <Image 
                    src="/ceritifcations/climateneutral.jpg"
                    alt="Climate Neutral Certified"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Climate Neutral Certified</h3>
                <p className="text-muted-foreground">
                  We measure, reduce, and offset our entire carbon footprint annually, making our operations 
                  completely carbon neutral from farm to table.
                </p>
                <p className="text-sm font-medium text-primary mt-4">Certified since 2023</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="relative h-64 w-full mb-6">
                  <Image 
                    src="/ceritifcations/fortheplanet.jpg"
                    alt="1% for the Planet Member"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">1% for the Planet Member</h3>
                <p className="text-muted-foreground">
                  We donate 1% of our annual sales to environmental nonprofits focused on sustainable 
                  food systems and climate action.
                </p>
                <p className="text-sm font-medium text-primary mt-4">Member since 2021</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Community Impact</h2>
              <p className="text-muted-foreground text-lg">
                Sustainability extends beyond our walls to support the communities we serve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px]">
                <Image
                  src="/communityproject.jpg"
                  alt="Community garden project"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Growing Together</h3>
                <p className="text-muted-foreground">
                  We believe that true sustainability must include social responsibility. That's why we've developed
                  programs that extend our impact beyond our restaurant walls:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sprout className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Community Garden Initiative</h4>
                      <p className="text-muted-foreground">
                        We've established three community gardens in underserved neighborhoods, providing fresh produce
                        and gardening education to local residents.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Culinary Training Program</h4>
                      <p className="text-muted-foreground">
                        Our six-month program trains individuals facing barriers to employment in sustainable cooking
                        techniques and restaurant operations.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Food Recovery Partnership</h4>
                      <p className="text-muted-foreground">
                        We partner with local food banks to donate surplus ingredients and prepared meals, helping to
                        address food insecurity in our community while reducing potential waste.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm font-medium">Our Impact:</p>
                  <p className="text-sm text-muted-foreground">
                    Through our community programs, we've provided over 5,000 meals to those in need, trained 24
                    individuals in sustainable culinary practices, and helped grow more than 2,000 pounds of fresh
                    produce in our community gardens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Sustainability Roadmap</h2>
              <p className="text-muted-foreground text-lg">
                While we're proud of our progress, we recognize that sustainability is a journey of continuous
                improvement.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-1 lg:col-span-3 mb-8">
                <h3 className="text-2xl font-bold mb-4">Our 2030 Goals</h3>
                <p className="text-muted-foreground">
                  We've set ambitious targets to guide our sustainability journey over the next several years:
                </p>
              </div>

              {[
                {
                  year: "2025",
                  title: "Carbon Negative Operations",
                  description:
                    "Move beyond carbon neutrality to remove more carbon from the atmosphere than we emit through enhanced offsetting and carbon capture investments.",
                  progress: 45,
                },
                {
                  year: "2026",
                  title: "Zero Single-Use Anything",
                  description:
                    "Eliminate all single-use items from our operations through innovative reusable systems and packaging alternatives.",
                  progress: 65,
                },
                {
                  year: "2027",
                  title: "Closed-Loop Water System",
                  description:
                    "Implement advanced water recycling technology to create a closed-loop system that minimizes freshwater consumption.",
                  progress: 30,
                },
                {
                  year: "2028",
                  title: "Regenerative Supply Chain",
                  description:
                    "Source 100% of our ingredients from regenerative farms that improve soil health, enhance biodiversity, and sequester carbon.",
                  progress: 40,
                },
                {
                  year: "2029",
                  title: "Zero Waste Certification",
                  description:
                    "Achieve Platinum Level Zero Waste Certification by diverting 99%+ of all waste from landfills.",
                  progress: 50,
                },
                {
                  year: "2030",
                  title: "Community Resilience Hub",
                  description:
                    "Transform our restaurant into a community resilience hub that can provide sustainable food, energy, and water during emergencies.",
                  progress: 25,
                },
              ].map((goal, index) => (
                <Card key={index} className="border-primary/10 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <CardDescription className="text-primary font-medium">{goal.year}</CardDescription>
                    <CardTitle>{goal.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{goal.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Progress</span>
                        <span className="text-sm font-medium">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-center">
                Our Commitment to Transparency
              </h2>
              <p className="text-muted-foreground mb-8 text-center">
                We believe in being open about both our successes and challenges on our sustainability journey.
              </p>

              <div className="space-y-8">
                <div className="p-6 bg-background rounded-lg border">
                  <h3 className="text-xl font-bold mb-4">Annual Sustainability Report</h3>
                  <p className="text-muted-foreground mb-4">
                    Each year, we publish a comprehensive sustainability report that details our environmental impact,
                    initiatives, progress toward goals, and areas for improvement.
                  </p>
                  <Button variant="outline" className="w-full sm:w-auto" asChild>
                    <a href="/GreenPlate_Sustainability_Report.pdf" download>Download 2024 Report</a>
                  </Button>
                </div>

                <div className="p-6 bg-background rounded-lg border">
                  <h3 className="text-xl font-bold mb-4">Ongoing Challenges</h3>
                  <p className="text-muted-foreground mb-4">
                    While we've made significant progress, we acknowledge these ongoing challenges:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">•</div>
                      <p>
                        Finding sustainable alternatives for certain specialty ingredients while maintaining our quality
                        standards
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">•</div>
                      <p>
                        Balancing the higher costs of some sustainable practices with keeping our menu accessible
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">•</div>
                      <p>Addressing the environmental impact of guest transportation to our restaurant</p>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-background rounded-lg border">
                  <h3 className="text-xl font-bold mb-4">Get Involved</h3>
                  <p className="text-muted-foreground mb-4">
                    We welcome feedback and ideas from our community. If you have suggestions for how we can improve our
                    sustainability practices, please share them with us.
                  </p>
                  <Button className="w-full sm:w-auto" asChild>
                    <a href="/contact">Share Your Ideas</a>
                  </Button>
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
              alt="Sustainable dining experience"
              fill
              className="object-cover brightness-[0.4]"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Join Us in Making a Difference
              </h2>
              <p className="text-lg mb-8">
                Every meal at GreenPlate is a step toward a more sustainable food system. Experience delicious cuisine
                that's good for you and the planet.
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
                  <Link href="/contact">Reserve a Table</Link>
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
                  <Link href="/sustainability" className="text-primary hover:text-primary/80 transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
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
            <NewsletterSubscription />
          </div>
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} GreenPlate. All rights reserved. TSA ID #2113002.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
