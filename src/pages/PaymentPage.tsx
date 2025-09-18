import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Shield, 
  Award, 
  Users, 
  Clock, 
  CheckCircle, 
  CreditCard,
  Lock,
  Star,
  Zap
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { processPayment } from '@/lib/stripe';
import { sendInvoiceEmails } from '@/lib/invoice-email';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_key_here');

const PaymentPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const { toast } = useToast();

  const packageDetails = {
    name: "Zeroday101 Exclusive Bootcamp",
    originalPrice: 75000000,
    discountPrice: 60000000,
    discount: 20,
    currency: "IDR",
    features: [
      "10 bulan pelatihan intensif (5 hari/minggu)",
      "Mentoring personal dari praktisi internasional",
      "Akses tools premium (Burp Suite Pro, IDA Pro)",
      "Live simulation dengan platform HackerOne/Bugcrowd",
      "Workshop exploit development dan payload crafting",
      "Sertifikat Zeroday Operations yang dapat diverifikasi",
      "Komunitas alumni eksklusif",
      "Pembimbingan lanjutan setelah lulus",
      "Akses ke private bug bounty programs",
      "CVE writing dan vulnerability documentation"
    ]
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const handlePayment = async () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      toast({
        title: "Data Tidak Lengkap",
        description: "Mohon lengkapi semua data yang diperlukan",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Process payment
      const invoiceData = await processPayment({
        amount: packageDetails.discountPrice,
        currency: 'IDR',
        customerName: customerInfo.name,
        customerEmail: customerInfo.email,
        customerPhone: customerInfo.phone,
        productName: packageDetails.name
      });

      if (invoiceData.status === 'paid') {
        // Send invoice emails
        const emailResults = await sendInvoiceEmails(invoiceData);
        
        toast({
          title: "Pembayaran Berhasil!",
          description: "Invoice telah dikirim ke email Anda. Selamat datang di Zeroday101 Exclusive!",
        });

        // Redirect to success page or dashboard
        setTimeout(() => {
          window.location.href = '/payment-success';
        }, 2000);
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Pembayaran Gagal",
        description: "Terjadi kesalahan saat memproses pembayaran. Silakan coba lagi.",
        variant: "destructive"
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
                🔥 Exclusive Access
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Secure Your Spot</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join the most comprehensive cybersecurity bootcamp in Indonesia. 
                Limited seats available for serious professionals only.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Package Details */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="luxury-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">{packageDetails.name}</CardTitle>
                      <Badge className="bg-primary text-primary-foreground">
                        Exclusive
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Pricing */}
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl font-bold text-primary">
                        {formatCurrency(packageDetails.discountPrice)}
                      </div>
                      <div className="text-lg text-muted-foreground line-through">
                        {formatCurrency(packageDetails.originalPrice)}
                      </div>
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        Save {packageDetails.discount}%
                      </Badge>
                    </div>

                    <Separator />

                    {/* Features */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center">
                        <Star className="h-5 w-5 text-primary mr-2" />
                        What's Included
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {packageDetails.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="bg-muted/30 rounded-lg p-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                          <div className="text-sm font-medium">Secure Payment</div>
                          <div className="text-xs text-muted-foreground">256-bit SSL</div>
                        </div>
                        <div>
                          <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                          <div className="text-sm font-medium">Certified Program</div>
                          <div className="text-xs text-muted-foreground">Industry Recognized</div>
                        </div>
                        <div>
                          <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                          <div className="text-sm font-medium">Limited Seats</div>
                          <div className="text-xs text-muted-foreground">Exclusive Access</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Payment Form */}
              <div className="space-y-6">
                <Card className="luxury-card border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Payment Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name</label>
                      <Input
                        placeholder="Enter your full name"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Email Address</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone Number</label>
                      <Input
                        placeholder="+62 812 3456 7890"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      />
                    </div>

                    <Separator />

                    {/* Order Summary */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>{formatCurrency(packageDetails.originalPrice)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-accent">
                        <span>Discount ({packageDetails.discount}%)</span>
                        <span>-{formatCurrency(packageDetails.originalPrice - packageDetails.discountPrice)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span className="text-primary">{formatCurrency(packageDetails.discountPrice)}</span>
                      </div>
                    </div>

                    <Button 
                      onClick={handlePayment}
                      disabled={isLoading}
                      className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                    >
                      {isLoading ? (
                        <>
                          <LoadingSpinner size="sm" className="mr-2" />
                          Processing Payment...
                        </>
                      ) : (
                        <>
                          <Lock className="h-5 w-5 mr-2" />
                          Secure Payment - {formatCurrency(packageDetails.discountPrice)}
                        </>
                      )}
                    </Button>

                    <div className="text-xs text-center text-muted-foreground">
                      <Lock className="h-3 w-3 inline mr-1" />
                      Your payment information is secure and encrypted
                    </div>
                  </CardContent>
                </Card>

                {/* Urgency Card */}
                <Card className="luxury-card bg-accent/5 border-accent/20">
                  <CardContent className="p-4 text-center">
                    <Zap className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="font-semibold text-accent mb-1">Limited Time Offer</div>
                    <div className="text-sm text-muted-foreground">
                      Only 12 seats remaining for this batch. Secure your spot now!
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentPage;