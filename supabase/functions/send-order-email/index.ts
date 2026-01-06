import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface OrderEmailRequest {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  orderId: string;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("send-order-email function called");
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const orderData: OrderEmailRequest = await req.json();
    console.log("Order data received:", orderData);

    const itemsHtml = orderData.items.map(item => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.name}</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${item.price.toLocaleString()} MMK</td>
      </tr>
    `).join('');

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Order Confirmation</title>
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #1a1a1a;">DPS Map Shop</h1>
          <p style="color: #666;">Order Confirmation</p>
        </div>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1a1a1a; margin-top: 0;">Thank you for your order, ${orderData.customerName}!</h2>
          <p style="color: #666;">Your order has been received and is being processed.</p>
          <p><strong>Order ID:</strong> ${orderData.orderId}</p>
          <p><strong>Payment Method:</strong> Cash on Delivery (COD)</p>
        </div>

        <h3 style="color: #1a1a1a;">Order Details</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <thead>
            <tr style="background: #f0f0f0;">
              <th style="padding: 10px; text-align: left;">Item</th>
              <th style="padding: 10px; text-align: center;">Qty</th>
              <th style="padding: 10px; text-align: right;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" style="padding: 15px 10px; text-align: right; font-weight: bold;">Total:</td>
              <td style="padding: 15px 10px; text-align: right; font-weight: bold; color: #22c55e;">${orderData.totalAmount.toLocaleString()} MMK</td>
            </tr>
          </tfoot>
        </table>

        <h3 style="color: #1a1a1a;">Shipping Address</h3>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 0;"><strong>${orderData.customerName}</strong></p>
          <p style="margin: 5px 0; color: #666;">${orderData.customerAddress}</p>
          <p style="margin: 5px 0; color: #666;">Phone: ${orderData.customerPhone}</p>
        </div>

        <div style="text-align: center; padding: 20px; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 14px;">
            If you have any questions, please contact us at dpsmapshop@gmail.com
          </p>
          <p style="color: #999; font-size: 12px;">
            © ${new Date().getFullYear()} DPS Map Shop. All rights reserved.
          </p>
        </div>
      </body>
      </html>
    `;

    console.log("Sending email to:", orderData.customerEmail);

    const emailResponse = await resend.emails.send({
      from: "DPS Map Shop <onboarding@resend.dev>",
      to: [orderData.customerEmail],
      subject: `Order Confirmation - ${orderData.orderId}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-order-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
