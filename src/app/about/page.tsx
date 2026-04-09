import Link from "next/link";
import { Section, SectionHeader, SectionTag } from "@/components/Section";
import { Icon } from "@/components/Icons";
import { TeamPhoto } from "@/components/TeamPhoto";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Flycomm — AI-Powered Wireless Intelligence",
  description:
    "Meet the team behind Flycomm. We simplify wireless communication by bringing clarity through AI-driven network intelligence.",
};

const values = [
  {
    title: "Unprecedented Visibility",
    desc: "We unlock the power of connectivity by providing unprecedented visibility into mobile networks — enabling clients to map and verify coverage, compare operator performance, and identify infrastructure gaps.",
    icon: "Eye",
  },
  {
    title: "AI-Powered Platform",
    desc: "Our comprehensive network transparency platform monitors networks in real-time, offering accurate predictions across all environments, technologies, and applications anywhere in the world.",
    icon: "Brain",
  },
  {
    title: "Real-World Impact",
    desc: "Save up to 50% in infrastructure costs while achieving 75% faster deployment. Turn network data into actionable intelligence that drives smarter decisions.",
    icon: "TrendingUp",
  },
];

const sectors = [
  { label: "Municipalities", icon: "Landmark" },
  { label: "Transportation", icon: "Radio" },
  { label: "Security & Defense", icon: "Shield" },
  { label: "Telecom & MNOs", icon: "Signal" },
];

const team = [
  {
    name: "Moshe Lugasi",
    role: "Co-Founder & CEO",
    photo: "/team/moshe.png",
    linkedin: "https://www.linkedin.com/in/moshe-lugasi-il/",
    desc: "Former Israeli Air Force Officer turned serial entrepreneur. Founded FlyTech (acquired by ARDM), a market leader in drone technologies. Drives Flycomm's vision to revolutionize wireless intelligence globally.",
  },
  {
    name: "Arie Lugasi",
    role: "Co-Founder & CTO",
    photo: "/team/arie.png",
    linkedin: null,
    desc: "Telecommunications engineer with 35+ years of expertise at Motorola and Israel Aerospace Industries (IAI). International expert in wireless technologies and RF systems architecture.",
  },
  {
    name: "Eliran Oren",
    role: "Chief Operating Officer",
    photo: "/team/eliran.png",
    linkedin: null,
    desc: "Operations leader ensuring flawless delivery and scalability across Flycomm's platform, partnerships, and customer deployments worldwide.",
  },
  {
    name: "Yehuda Kohn",
    role: "Chief Revenue Officer",
    photo: "/team/yehuda.png",
    linkedin: "https://www.linkedin.com/in/jykohn/",
    desc: "Seasoned executive with 20+ years driving global sales, business development, and strategic partnerships. Proven track record of expanding market share across multiple industries.",
  },
  {
    name: "Amir Lugasi",
    role: "Chief Strategy Officer",
    photo: "/team/amir.png",
    linkedin: "https://www.linkedin.com/in/amir-lugasi/",
    desc: "Visionary product and business leader with 15+ years in telecom, defense, and cybersecurity. Former CEO, GM, and Director at leading technology companies. B.Sc. in Mechanical Engineering.",
  },
  {
    name: "Yehudit Schur",
    role: "VP of Marketing",
    photo: "/team/yehudit.png",
    linkedin: null,
    desc: "Strategic marketing leader driving Flycomm's brand presence, demand generation, and go-to-market initiatives across telecom, defense, and smart city verticals.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 gradient-radial-tl" />
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center relative z-10">
          <SectionTag>About Us</SectionTag>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] mt-4 mb-6">
            Welcome to Flycomm
          </h1>
          <p className="text-xl md:text-2xl text-brand font-semibold font-[family-name:var(--font-space-grotesk)] mb-6">
            The world suffers from BLINDNESS regarding wireless communication.
            <br />
            Flycomm SIMPLIFIES wireless communication by bringing CLARITY.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Flycomm is your one-stop solution for analyzing and planning mobile
            connectivity. We make managing and analyzing cellular connectivity
            easy for sectors like municipalities, transportation, security, and
            IoT. Our AI-driven technology offers clear insights into network
            performance, helping decision-makers optimize wireless communication.
          </p>
        </div>
      </section>

      {/* Sectors */}
      <Section>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {sectors.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border bg-bg-card/50"
            >
              <Icon name={s.icon} className="h-5 w-5 text-brand" />
              <span className="text-sm font-medium text-text-secondary">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-5">
                <Icon name={v.icon} className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-3">
                {v.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership Team */}
      <Section>
        <SectionHeader
          tag="Our Team"
          title="Leadership"
          description="The people behind Flycomm's mission to revolutionize wireless intelligence."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="card p-0 overflow-hidden flex flex-col"
            >
              {/* Photo */}
              <div className="relative h-64 bg-bg-elevated overflow-hidden">
                <TeamPhoto name={member.name} photo={member.photo} />
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)]">
                    {member.name}
                  </h4>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-brand transition-colors"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Icon name="Linkedin" className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-brand font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center p-10 rounded-2xl border border-white/10 bg-white/[0.02]">
          <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3">
            Ready to see what others can&apos;t?
          </h3>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">
            Discover how Flycomm&apos;s wireless intelligence platform can
            transform your network operations.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand/90 text-white font-semibold rounded-lg transition-colors"
          >
            Request a Demo
          </Link>
        </div>
      </Section>
    </>
  );
}
