import { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { services } from "@/data/services";
import { Loader2, Send, Check } from "lucide-react";

const initial = { name: "", email: "", phone: "", address: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const update = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const response = await base44.functions.invoke("submitContact", {
        ...form,
        source_page: window.location.pathname,
      });
      if (response.data?.error) throw new Error(response.data.error);
      setForm(initial);
      setStatus("done");
    } catch (err) {
      setError(err?.response?.data?.error || err.message || "Mesaj gönderilemedi.");
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="border border-border bg-card p-10 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center border border-primary text-primary">
          <Check className="h-5 w-5" />
        </span>
        <p className="mt-6 font-heading text-2xl tracking-tight">Gönderdiğiniz için teşekkürler!</p>
        <p className="mt-3 text-sm text-muted-foreground">
          Talebiniz bize ulaştı. Ekibimiz ücretsiz keşif için en kısa sürede sizinle iletişime
          geçecek.
        </p>
        <Button variant="outline" className="mt-8" onClick={() => setStatus("idle")}>
          Yeni bir talep gönder
        </Button>
      </div>
    );
  }

  const fieldClass =
    "rounded-none border-0 border-b border-border bg-transparent px-0 text-base focus-visible:ring-0 focus-visible:border-primary";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Ad Soyad *</Label>
          <Input id="name" required value={form.name} onChange={update("name")} className={fieldClass} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon *</Label>
          <Input
            id="phone"
            required
            value={form.phone}
            onChange={update("phone")}
            placeholder="0537 319 37 66"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-posta</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Konu</Label>
          <select
            id="subject"
            value={form.subject}
            onChange={update("subject")}
            className="w-full rounded-none border-0 border-b border-border bg-transparent px-0 py-2 text-base text-foreground outline-none focus:border-primary"
          >
            <option value="">Hizmet seçiniz</option>
            {services.map((service) => (
              <option key={service.slug} value={service.card} className="bg-card text-foreground">
                {service.card}
              </option>
            ))}
            <option value="Diğer" className="bg-card text-foreground">
              Diğer
            </option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Adres</Label>
        <Input id="address" value={form.address} onChange={update("address")} className={fieldClass} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mesajınız *</Label>
        <Textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Mesajınızı buraya yazın..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Button type="submit" size="lg" disabled={status === "sending"} className="gap-2">
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Gönderiliyor
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Gönder
          </>
        )}
      </Button>
    </form>
  );
}