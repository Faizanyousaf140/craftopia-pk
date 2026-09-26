import { WHATSAPP_NUMBER } from "./config";

/**
 * Builds a wa.me link with a pre-filled message.
 * Keep all WhatsApp URL construction routed through this helper
 * so the number and message format stay consistent site-wide.
 */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function productInquiryMessage(productName: string): string {
  return `Hi Craftopia.pk! I'd like to order the ${productName}. Could you please share the price, available colors and delivery details?`;
}

export function customOrderMessage(): string {
  return `Hi Craftopia.pk! I'd like to discuss a custom order. Here's what I have in mind: `;
}

export function generalInquiryMessage(): string {
  return `Hi Craftopia.pk! I have a question about your handmade pieces.`;
}
