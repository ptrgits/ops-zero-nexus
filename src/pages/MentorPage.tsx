import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Bug, FileText, ExternalLink, Target, Shield, Code } from 'lucide-react';

const MentorPage = () => {
  const mentors = [
    {
      username: "deb0con",
      title: "Top Ranker HackerOne",
      avatar: "🏆",
      description: "Mentor utama adalah bughunter Indonesia yang telah terbukti secara global di komunitas hacker etis",
      specialties: ["Web Application Security", "API Testing", "Business Logic Flaws"],
      achievements: [
        "Top Ranker HackerOne dengan track record sebagai top performer",
        "Aktif di komunitas bug bounty global",
        "Expertise dalam Web Application Security dan API Testing"
      ],
      profileUrl: "#"
    },
    {
      username: "hackeronanywhere", 
      title: "Produktif Bug Hunter",
      avatar: "🎯",
      description: "Bug hunter produktif dengan ratusan submission valid di berbagai platform bug bounty internasional",
      specialties: ["Mobile Security", "OWASP Top 10", "Penetration Testing"],
      achievements: [
        "Ratusan valid submission di platform bug bounty internasional",
        "Expertise dalam Mobile Security dan OWASP Top 10",
        "Praktisi aktif Penetration Testing"
      ],
      profileUrl: "#"
    },
    {
      username: "odaysec",
      title: "CVE Contributor & Zero-day Researcher", 
      avatar: "🔬",
      description: "Contributor aktif ke CVE dan peneliti eksploit zero-day dengan publikasi di komunitas security global",
      specialties: ["Zero-day Research", "Exploit Development", "CVE Documentation"],
      achievements: [
        "Contributor aktif ke CVE database",
        "Peneliti zero-day dengan publikasi global",
        "Expert dalam Exploit Development dan CVE Documentation"
      ],
      profileUrl: "#"
    }
  ];

  const mentorshipApproach = [
    {
      icon: Target,
      title: "Pendekatan Personal",
      description: "Setiap siswa mendapat mentoring personal dari praktisi internasional dengan track record terbukti"
    },
    {
      icon: Shield,
      title: "Real-World Experience",
      description: "Mentor adalah praktisi aktif yang masih bergelut langsung di dunia cybersecurity internasional"
    },
    {
      icon: Code,
      title: "Hands-On Guidance",
      description: "Bimbingan langsung dalam pembuatan tools, exploit development, dan vulnerability research"
    }
  ];

  const mentorBenefits = [
    "Mentoring personal dari praktisi internasional",
    "Akses langsung ke mentor untuk diskusi teknis", 
    "Pembimbingan dalam pembuatan portofolio bug bounty",
    "Guidance dalam CVE writing dan vulnerability publication",
    "Network access ke komunitas global cybersecurity",
    "Kolaborasi langsung dalam private bug bounty programs",
    "Pembimbingan lanjutan setelah lulus program"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6 surveillance-grid">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Meet Our <span className="gradient-text">Mentors</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Diajarkan oleh praktisi aktif dunia internasional dengan track record terbukti di komunitas cybersecurity global
              </p>
              <Badge variant="secondary" className="bg-primary/10 text-primary text-sm px-4 py-2">
                Praktisi Aktif Dunia Internasional
              </Badge>
            </div>
          </div>
        </section>

        {/* Mentor Profiles */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="space-y-12 max-w-5xl mx-auto">
              {mentors.map((mentor, index) => (
                <Card key={index} className="luxury-card">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Avatar & Basic Info */}
                      <div className="text-center lg:text-left">
                        <div className="text-6xl mb-4">{mentor.avatar}</div>
                        <h3 className="text-2xl font-bold mb-2">@{mentor.username}</h3>
                        <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
                          {mentor.title}
                        </Badge>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          {mentor.description}
                        </p>
                        <Button variant="outline" size="sm" className="w-full lg:w-auto">
                          Lihat Profil
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>

                      {/* Specialties */}
                      <div>
                        <h4 className="font-semibold mb-4 text-primary">Expertise Areas</h4>
                        <div className="space-y-2">
                          {mentor.specialties.map((specialty, specIndex) => (
                            <div key={specIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-sm">{specialty}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold mb-4 text-accent">Key Achievements</h4>
                        <div className="space-y-3">
                          {mentor.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="text-sm text-muted-foreground leading-relaxed">
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mentorship Approach */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pendekatan Mentorship
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Metode pembelajaran yang telah terbukti efektif dalam menghasilkan cybersecurity professional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {mentorshipApproach.map((approach, index) => (
                <Card key={index} className="luxury-card text-center">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4">
                      <approach.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{approach.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {approach.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mentor Benefits */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Keuntungan Belajar dari Mentor Kami
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {mentorBenefits.map((benefit, index) => (
                <Card key={index} className="luxury-card">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{benefit}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Inspirational Story */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <Card className="luxury-card bg-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Kisah Inspiratif
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Baca perjalanan para mentor kami dalam dunia cybersecurity Indonesia dan bagaimana mereka mencapai level internasional dalam bug bounty dan vulnerability research.
                  </p>
                  <Button variant="outline">
                    Baca Kisah Lengkap
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MentorPage;