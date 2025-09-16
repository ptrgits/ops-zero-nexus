import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Shield, Award, Users, Target } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Shield,
      title: "Real-World Focus",
      description: "100% hands-on training dengan real application, bukan simulasi CTF"
    },
    {
      icon: Award,
      title: "Mentor Berpengalaman", 
      description: "Diajarkan oleh top ranker HackerOne dan CVE contributor aktif"
    },
    {
      icon: Users,
      title: "Komunitas Alumni",
      description: "Akses ke komunitas eksklusif dan kolaborasi program private"
    },
    {
      icon: Target,
      title: "Career Ready",
      description: "Didesain untuk menghasilkan pentester siap kerja dengan portofolio nyata"
    }
  ];

  const stats = [
    { number: "10", label: "Bulan Intensif" },
    { number: "5", label: "Hari per Minggu" },
    { number: "100%", label: "Hands-on Training" },
    { number: "24/7", label: "Lab Access" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <main>
        <section className="pt-24 pb-16 px-6 surveillance-grid">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
                  Part of Zeroday Operations
                </span>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="gradient-text">Zeroday101</span><br />
                  Bootcamp
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Bootcamp cybersecurity intensif selama <strong className="text-primary">10 bulan</strong> yang dirancang khusus untuk membentuk siswa menjadi peretas mahir dan peneliti kerentanan sistem
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 h-auto">
                  Daftar Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                  Lihat Kurikulum
                </Button>
              </div>

              {/* Warning Message */}
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-2xl mx-auto">
                <p className="text-destructive font-medium text-sm">
                  BUKAN TEMPAT UNTUK MENJADI ARTIS
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Jika niat Anda hanya ingin cari tahu seperti apa belajar hacking atau hanya sekedar iseng, sebaiknya urungkan niat untuk mendaftar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-card">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Belajar dengan Benar Caranya Menjadi Hacker
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Bagi kami, hacking bukan hanya soal sertifikat, mampu demo kontrol komputer orang, atau mampu terpampang di HoF sebagai bug hunter. 
                <strong className="text-primary"> Hacking adalah gaya hidup</strong> yang meliputi bagaimana cara kita berfikir, menganalisa dan bertindak atas suatu keadaan atau tantangan.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Apa yang Membuat Kami Berbeda?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Program yang didesain untuk menghasilkan ethical hacker profesional dengan pendekatan real-world
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="luxury-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Topics */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Apa yang Akan Anda Pelajari?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="luxury-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">Bug Bounty Profesional</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Memahami konsep bug bounty dan dunia bughunting profesional</li>
                    <li>Membedakan antara CTF-style dan real application bughunting</li>
                    <li>Teknik hacking terhadap aplikasi berbasis Web, API, dan Mobile</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="luxury-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">Web Vulnerability Discovery</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>IDOR, XSS (Stored, Reflected, DOM-Based)</li>
                    <li>CSRF, Open Redirect, SSRF, Command Injection</li>
                    <li>RCE, SQLi, Broken Access Control, JWT Abuse</li>
                    <li>Business Logic Vulnerabilities (BOLA, BFLA)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="luxury-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">Advanced Exploitation</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Zero-day vulnerability discovery dan exploitation</li>
                    <li>Custom exploit development menggunakan Python, Perl</li>
                    <li>Reverse engineering untuk vulnerability analysis</li>
                    <li>Binary exploitation dan memory corruption attacks</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-primary/5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Memulai Perjalanan Anda?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Jangan sia-siakan kesempatan untuk menjadi cybersecurity professional. Konsultasi dengan tim kami dan mulai transformasi karir Anda hari ini.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 h-auto">
                Konsultasi Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                Lihat Program Lengkap
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;