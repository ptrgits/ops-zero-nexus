import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, Target, Code, Shield } from 'lucide-react';

const ProgramPage = () => {
  const programHighlights = [
    {
      icon: Clock,
      title: "Program Intensif 10 Bulan",
      description: "Pembelajaran terstruktur 5 hari per minggu dengan jadwal yang memungkinkan keseimbangan belajar yang optimal"
    },
    {
      icon: Users,
      title: "Mentor Berkualitas Internasional",
      description: "Dibimbing langsung oleh praktisi aktif dengan pengalaman dan pengakuan di tingkat global"
    },
    {
      icon: Award,
      title: "Sertifikasi Profesional",
      description: "Sertifikat Zeroday Operations yang dapat diverifikasi dan diakui dalam industri cybersecurity"
    },
    {
      icon: Target,
      title: "Pendekatan Praktis",
      description: "100% pembelajaran berbasis praktik langsung dengan aplikasi dan sistem nyata di lingkungan profesional"
    }
  ];

  const targetAudience = [
    {
      title: "Mahasiswa & Fresh Graduate",
      description: "Individu yang ingin membangun karir profesional di bidang cybersecurity dengan foundation yang kuat",
      tag: "Selamat datang fresh graduates"
    },
    {
      title: "Profesional IT",
      description: "Profesional teknologi yang tertarik untuk mengembangkan keahlian khusus di bidang keamanan siber",
      tag: "Transisi karir yang tepat"
    },
    {
      title: "Freelancer & Remote Worker",
      description: "Individu yang ingin mengembangkan keahlian untuk berpartisipasi dalam platform bug bounty internasional",
      tag: "Peluang global tersedia"
    },
    {
      title: "Calon Peneliti Keamanan",
      description: "Individu yang memiliki minat serius dalam menjadi bug hunter profesional dengan pendapatan yang stabil",
      tag: "Mindset profesional diperlukan"
    }
  ];

  const requirements = [
    "Komitmen serius untuk mengembangkan karir di bidang cybersecurity",
    "Kesediaan untuk belajar intensif dengan jadwal 5 hari per minggu",
    "Memiliki growth mindset dan kemauan untuk terus berkembang",
    "Dedikasi tinggi dan ketekunan dalam menghadapi tantangan pembelajaran",
    "Motivasi intrinsik untuk menguasai keahlian technical yang mendalam"
  ];

  const outputs = [
    "Sertifikat Zeroday Operations Pvt yang dapat diverifikasi secara resmi",
    "Portfolio laporan kerentanan yang valid untuk keperluan aplikasi kerja",
    "Kemampuan mengembangkan tools eksploitasi menggunakan Python, Perl, dan bahasa lainnya",
    "Akses eksklusif ke komunitas alumni yang terpercaya",
    "Bimbingan berkelanjutan dari mentor setelah menyelesaikan program",
    "Kesempatan kolaborasi dalam program private di platform internasional",
    "Akses terbatas ke diskusi teknis advanced melalui jalur resmi"
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
                Program <span className="gradient-text">Zeroday101</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Program komprehensif yang mencakup semua aspek cybersecurity dan ethical hacking dengan pendekatan real-world
              </p>
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Highlight Program</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {programHighlights.map((highlight, index) => (
                <Card key={index} className="luxury-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Untuk Siapa Program Ini?</h2>
              <p className="text-lg text-muted-foreground">
                Dirancang untuk individu yang serius ingin berkarir di dunia cybersecurity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {targetAudience.map((audience, index) => (
                <Card key={index} className="luxury-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{audience.title}</CardTitle>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {audience.tag}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {audience.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Requirements */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Komitmen yang Diperlukan</h2>
                <p className="text-muted-foreground mb-6">
                  Program ini dirancang untuk individu yang memiliki dedikasi tinggi dalam pengembangan karir profesional. 
                  Kami mencari peserta yang memiliki karakteristik berikut:
                </p>
                <div className="space-y-4">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">{req}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Output */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Hasil Pembelajaran</h2>
                <div className="space-y-4">
                  {outputs.map((output, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">{output}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <Card className="luxury-card bg-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Filosofi Program Kami
                  </h2>
                  <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                    "Cybersecurity adalah filosofi hidup yang mencakup cara berpikir analitis, pendekatan metodis dalam pemecahan masalah, dan tindakan yang bertanggung jawab dalam menghadapi tantangan keamanan digital."
                  </blockquote>
                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground">
                      Bagi kami, ethical hacking bukan sekadar sertifikasi atau demonstrasi teknis. Ini adalah mindset profesional yang akan mengubah perspektif Anda tentang teknologi dan keamanan informasi.
                    </p>
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

export default ProgramPage;