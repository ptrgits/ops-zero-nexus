import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
export const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_publishable_key_here'
);

export interface PaymentData {
  amount: number;
  currency: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  productName: string;
}

export interface InvoiceData {
  paymentId: string;
  amount: number;
  currency: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  product: string;
  paymentDate: string;
  status: 'paid' | 'pending' | 'failed';
}

// Create payment intent (this would typically be done on your backend)
export const createPaymentIntent = async (paymentData: PaymentData) => {
  try {
    // In a real implementation, this would call your backend API
    // which would create a Stripe payment intent
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
      throw new Error('Failed to create payment intent');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};

// Process payment
export const processPayment = async (paymentData: PaymentData): Promise<InvoiceData> => {
  try {
    // Simulate payment processing
    // In real implementation, this would integrate with Stripe
    await new Promise(resolve => setTimeout(resolve, 2000));

    const invoiceData: InvoiceData = {
      paymentId: `pi_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      amount: paymentData.amount,
      currency: paymentData.currency,
      customer: {
        name: paymentData.customerName,
        email: paymentData.customerEmail,
        phone: paymentData.customerPhone,
      },
      product: paymentData.productName,
      paymentDate: new Date().toISOString(),
      status: 'paid'
    };

    return invoiceData;
  } catch (error) {
    console.error('Payment processing error:', error);
    throw error;
  }
};

// Format currency for display
export const formatCurrency = (amount: number, currency: string = 'IDR') => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0
  }).format(amount);
};