import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

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
  orderId: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { orderId }: OrderEmailRequest = await req.json();

    if (!orderId) {
      return new Response(
        JSON.stringify({ success: false, error: "Order ID is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Create Supabase client with service role to fetch order data
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch order from database to validate it exists and get accurate data
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select("*")
      .eq("id", orderId)
      .single();

    if (orderError || !order) {
      return new Response(
        JSON.stringify({ success: false, error: "Order not found" }),
        { status: 404, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Parse order items from JSONB
    const orderItems = order.items as OrderItem[];

    const itemsHtml = orderItems.map(item => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${escapeHtml(item.name)}</td>
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
          <h2 style="color: #1a1a1a; margin-top: 0;">Thank you for your order, ${escapeHtml(order.customer_name)}!</h2>
          <p style="color: #666;">Your order has been received and is being processed.</p>
          <p><strong>Order ID:</strong> ${escapeHtml(order.id)}</p>
          <p><strong>Payment Method:</strong> ${escapeHtml(order.payment_method || 'Cash on Delivery (COD)')}</p>
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
              <td style="padding: 15px 10px; text-align: right; font-weight: bold; color: #22c55e;">${Number(order.total_amount).toLocaleString()} MMK</td>
            </tr>
          </tfoot>
        </table>

        <h3 style="color: #1a1a1a;">Shipping Address</h3>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 0;"><strong>${escapeHtml(order.customer_name)}</strong></p>
          <p style="margin: 5px 0; color: #666;">${escapeHtml(order.customer_address)}</p>
          <p style="margin: 5px 0; color: #666;">Phone: ${escapeHtml(order.customer_phone || 'N/A')}</p>
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

    const emailResponse = await resend.emails.send({
      from: "DPS Map Shop <onboarding@resend.dev>",
      to: [order.customer_email],
      subject: `Order Confirmation - ${order.id}`,
      html: emailHtml,
    });

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-order-email function:", error.message);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

// Helper function to escape HTML to prevent XSS
function escapeHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

serve(handler);
