import { Navbar } from "@/components/navbar"
import { ServiceHero } from "@/components/service-hero"
import { ServiceCTA } from "@/components/service-cta"
import { ServiceFooter } from "@/components/service-footer"
import { ServiceOption } from "@/components/service-option"
import { Button } from "@/components/ui/button"
import { CheckCircle, Code, Database, Server, Shield } from "lucide-react"

export default function SavannahDevsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <ServiceHero
        title="Expert Blockchain Development Services"
        description="Skilled and certified blockchain developers building secure, scalable solutions tailored to your needs, from MVPs to enterprise-grade applications."
        image="/placeholder.svg?height=1080&width=1920"
      />

      {/* Service Options */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Service Options</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Choose Your Development Path</h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            From rapid MVPs to enterprise solutions, we offer flexible development options to meet your specific needs
            and timeline.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceOption
              title="Sprint MVP"
              description="Launch your blockchain product in 2-4 weeks. Ideal for startups and proof-of-concepts."
              icon={<Code size={40} />}
            />

            <ServiceOption
              title="Growth+"
              description="Scale your existing product with advanced features and optimizations for growing projects."
              icon={<Server size={40} />}
            />

            <ServiceOption
              title="Enterprise"
              description="End-to-end blockchain solutions for corporations, financial institutions, and governments."
              icon={<Shield size={40} />}
            />

            <ServiceOption
              title="Retainer"
              description="Dedicated blockchain development team on a monthly basis for ongoing projects and maintenance."
              icon={<Database size={40} />}
            />
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Our Process</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">How We Deliver Results</h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            Our proven development process ensures quality results, transparent communication, and on-time delivery.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800">
              <div className="text-[#00d2ff] text-4xl font-bold mb-6">🔍</div>
              <h3 className="text-xl font-medium mb-4">Discovery</h3>
              <p className="text-gray-400">
                We dive deep into your business goals, technical requirements, and target audience to create a
                comprehensive roadmap.
              </p>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800">
              <div className="text-[#00d2ff] text-4xl font-bold mb-6">🚀</div>
              <h3 className="text-xl font-medium mb-4">Delivery</h3>
              <p className="text-gray-400">
                Our expert team develops your solution using agile methodologies, with regular updates and transparent
                communication.
              </p>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800">
              <div className="text-[#00d2ff] text-4xl font-bold mb-6">🎯</div>
              <h3 className="text-xl font-medium mb-4">Launch</h3>
              <p className="text-gray-400">
                We ensure a smooth deployment with thorough testing, documentation, and training to set you up for
                success.
              </p>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800">
              <div className="text-[#00d2ff] text-4xl font-bold mb-6">🔄</div>
              <h3 className="text-xl font-medium mb-4">Retainer</h3>
              <p className="text-gray-400">
                Ongoing support, maintenance, and enhancements to keep your solution running optimally and evolving with
                your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Technologies</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Our Technical Expertise</h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            We work with cutting-edge technologies across the blockchain ecosystem to deliver innovative and scalable
            solutions.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-6 text-[#00d2ff]">Blockchain Platforms</h3>
              <ul className="space-y-3">
                {["Ethereum", "Polygon", "Solana", "Polkadot", "Celo", "Scroll", "Arbitrum", "Optimism"].map(
                  (tech, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00d2ff]" />
                      <span>{tech}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6 text-purple-500">Smart Contract Languages</h3>
              <ul className="space-y-3">
                {["Solidity", "Rust", "Vyper", "Move"].map((tech, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6 text-[#00d2ff]">Frontend Technologies</h3>
              <ul className="space-y-3">
                {["React", "Vue", "Next.js", "TypeScript", "Tailwind CSS", "ThreeJS"].map((tech, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00d2ff]" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6 text-purple-500">Backend & Infrastructure</h3>
              <ul className="space-y-3">
                {["Node.js", "Python", "GraphQL", "IPFS", "AWS", "Google Cloud"].map((tech, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Case Studies</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Our Success Stories</h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            See how we've helped organizations across Africa leverage blockchain technology to solve real-world
            problems.
          </p>

          <div className="bg-[#111111] rounded-xl border border-gray-800 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Nobellum DeFi Dashboard</h3>
                <p className="text-gray-400 mb-8">
                  A comprehensive DeFi portfolio tracker and yield optimizer for African markets.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div>
                    <p className="text-[#00d2ff] font-bold text-xl mb-1">6 weeks</p>
                    <p className="text-gray-400 text-sm">Development Time</p>
                  </div>
                  <div>
                    <p className="text-[#00d2ff] font-bold text-xl mb-1">10,000+</p>
                    <p className="text-gray-400 text-sm">User Growth</p>
                  </div>
                  <div>
                    <p className="text-[#00d2ff] font-bold text-xl mb-1">300%</p>
                    <p className="text-gray-400 text-sm">TVL Increase</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2">
                    View Case Study
                  </Button>
                  <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                    View All Case Studies
                  </Button>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 md:hidden"></div>
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Nobellum DeFi Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Ready to Build Your Blockchain Solution?"
        description="Let our expert developers bring your blockchain vision to life with secure, scalable, and efficient solutions."
        primaryCTA="Start Your Project"
        secondaryCTA="Schedule a Consultation"
      />

      <ServiceFooter />
    </div>
  )
}
