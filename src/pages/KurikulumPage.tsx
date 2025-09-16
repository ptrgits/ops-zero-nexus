import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Code, Shield, Target, Zap, Database } from 'lucide-react';

const KurikulumPage = () => {
  const coreModules = [
    {
      icon: Shield,
      category: "Core Hacking Modules",
      modules: [
        "Advance Hacking Mentality & Personality",
        "Advance Hacking Knowledge & Mindset",
        "Web Hacking",
        "Web API Hacking",
        "Windows Binary Application Hacking",
        "Linux Binary Application Hacking",
        "Reverse Engineering",
        "IoT Hacking",
        "Android Kernel Hacking",
        "Android Application Hacking",
        "Software Hacking",
        "IOS Hacking",
        "SS7 Hacking",
        "Satelite Hacking"
      ]
    }
  ];

  const practicalModules = [
    {
      title: "Advance Bug Bounty & Hacking Exploitations",
      description: "Membedakan antara CTF-style dan real application bughunting",
      topics: [
        "Teknik hacking terhadap aplikasi berbasis Web, API, dan Mobile Web",
        "IDOR (Insecure Direct Object Reference)",
        "XSS (Stored, Reflected, DOM-Based)",
        "CSRF, Open Redirect, SSRF",
        "Command Injection, RCE, SQLi",
        "Broken Access Control, JWT Abuse, Auth Bypass",
        "Race Conditions & Find Exploited Bypass",
        "Business Logic Vulnerabilities (BOLA, BFLA)",
        "Teknik chaining vulnerabilities untuk dampak maksimal"
      ]
    },
    {
      title: "Advance Zeroday Programming Exploitations",
      description: "Live simulation dengan target real HackerOne IBB",
      topics: [
        "Zero-day vulnerability discovery dan exploitation techniques",
        "Advanced payload development untuk bypass modern security controls",
        "Custom exploit development menggunakan Python, Perl, dan bahasa lainnya",
        "Reverse engineering untuk vulnerability analysis",
        "Binary exploitation dan memory corruption attacks"
      ]
    },
    {
      title: "Professional Penetration Testing & Reporting",
      description: "Membuat pentest report seperti konsultan profesional",
      topics: [
        "Mencakup aspek teknikal, non-teknikal, dan remediation advice",
        "Executive summary dan technical findings documentation",
        "Risk assessment dan business impact analysis",
        "Remediation roadmap dan security recommendations"
      ]
    },
    {
      title: "CVE Research & Vulnerability Publication",
      description: "Studi kasus kerentanan yang ditemukan tim Zeroday Operations",
      topics: [
        "Teknik publish di NVD, GitHub Advisory, dan platform lainnya",
        "CVE request process dan vulnerability coordination",
        "Research methodology untuk zero-day discovery",
        "Responsible disclosure dan coordinated vulnerability disclosure"
      ]
    },
    {
      title: "Professional Vulnerability Reporting",
      description: "Menentukan CVSS dan severity scoring yang tepat",
      topics: [
        "Teknik menjelaskan dampak bisnis dan teknis",
        "Studi kasus report nyata dari HackerOne dan Bugcrowd",
        "HackerOne report templates",
        "Bugcrowd submission formats",
        "CVE writeup styling",
        "Coordinated disclosure emails"
      ]
    },
    {
      title: "Exploit Development & Payload Crafting",
      description: "Belajar cara membuat payload khusus untuk berbagai vulnerabilities",
      topics: [
        "Teknik payload evasion dan bypass filter dengan metode modern",
        "Teknik menguasai dan membuat exploitation tools",
        "Mempelajari teknik programming (Exclusive)",
        "Advanced shellcode development dan encoding techniques",
        "Custom tool development untuk automated vulnerability scanning"
      ]
    }
  ];

  const includedProgram = [
    "10 bulan pelatihan intensif (5 hari/minggu)",
    "Akses ke lab internal dan target aplikasi real",
    "Mentoring personal dari praktisi internasional",
    "Tools premium (Burp Suite Pro, IDA Pro Powerful Disassembler Decompiler & Debugger)",
    "Materi pembelajaran terbaru (diupdate annually)",
    "Live simulation dengan platform HackerOne/Bugcrowd",
    "Workshop exploit development dan payload crafting",
    "Pentest simulation dan report writing",
    "CVE writing dan vulnerability documentation",
    "Komunitas alumni dan networking"
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
                <span className="gradient-text">Kurikulum</span> Lengkap
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Program intensif yang mencakup semua aspek cybersecurity dan ethical hacking dengan pendekatan real-world
              </p>
              <Badge variant="secondary" className="bg-primary/10 text-primary text-sm px-4 py-2">
                Durasi: 10 bulan | 5 hari per minggu | Libur weekend
              </Badge>
            </div>
          </div>
        </section>

        {/* Core Modules */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Hacking Modules</h2>
              <p className="text-lg text-muted-foreground">
                Foundation modules yang akan membangun mindset dan skill dasar ethical hacking
              </p>
            </div>

            {coreModules.map((section, sectionIndex) => (
              <Card key={sectionIndex} className="luxury-card max-w-4xl mx-auto">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{section.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm">{module}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Practical Implementation */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Practical Implementation</h2>
              <p className="text-lg text-muted-foreground">
                Implementasi praktis dengan real-world scenarios dan hands-on experience
              </p>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
              {practicalModules.map((module, index) => (
                <Card key={index} className="luxury-card">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{module.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{module.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Yang Termasuk dalam Program</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {includedProgram.map((item, index) => (
                <Card key={index} className="luxury-card">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Approach */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <Card className="luxury-card bg-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Pendekatan Pembelajaran
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div>
                      <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Hands-On Learning</h3>
                      <p className="text-sm text-muted-foreground">
                        100% praktik langsung dengan aplikasi nyata, bukan teori atau simulasi CTF
                      </p>
                    </div>
                    <div>
                      <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Up-to-Date Material</h3>
                      <p className="text-sm text-muted-foreground">
                        Materi diperbarui setiap tahun mengikuti tren CVE dan bypass terbaru
                      </p>
                    </div>
                    <div>
                      <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Industry Ready</h3>
                      <p className="text-sm text-muted-foreground">
                        Didesain untuk menghasilkan pentester siap kerja dengan track record global
                      </p>
                    </div>
                  </div>
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

export default KurikulumPage;