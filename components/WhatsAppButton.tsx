import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, generalInquiryMessage } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink(generalInquiryMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Craftopia.pk on WhatsApp"
      style={{ animationDelay: "1200ms" }}
      className="reveal-up group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-[1.04] active:scale-[0.96]"
    >
      <MessageCircle size={22} strokeWidth={2} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 group-hover:max-w-[9rem] group-hover:pl-0.5">
        Chat with us
      </span>
    </a>
  );
}
