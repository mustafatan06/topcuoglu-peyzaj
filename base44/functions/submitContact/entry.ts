import { createClientFromRequest } from 'npm:@base44/sdk@0.8.52';

const clean = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

export default async function (req) {
  try {
    const body = await req.json();

    const payload = {
      name: clean(body?.name, 120),
      phone: clean(body?.phone, 40),
      message: clean(body?.message, 4000),
      email: clean(body?.email, 160),
      address: clean(body?.address, 300),
      subject: clean(body?.subject, 160),
      source_page: clean(body?.source_page, 160),
    };

    if (!payload.name || !payload.phone || !payload.message) {
      return Response.json(
        { error: 'Ad soyad, telefon ve mesaj alanları zorunludur.' },
        { status: 400 }
      );
    }

    const base44 = createClientFromRequest(req);
    const saved = await base44.asServiceRole.entities.ContactMessage.create(payload);

    const lines = [
      `Ad Soyad: ${payload.name}`,
      `Telefon: ${payload.phone}`,
      payload.email ? `E-posta: ${payload.email}` : null,
      payload.address ? `Adres: ${payload.address}` : null,
      payload.subject ? `Konu: ${payload.subject}` : null,
      '',
      'Mesaj:',
      payload.message,
      '',
      `Sayfa: ${payload.source_page || 'iletisim'}`,
    ].filter(Boolean);

    let admins = [];
    try {
      admins = await base44.asServiceRole.entities.User.filter({ role: 'admin' });
    } catch {
      admins = [];
    }

    const recipients = admins.filter((admin) => admin?.email).slice(0, 3);
    await Promise.allSettled(
      recipients.map((admin) =>
        base44.asServiceRole.integrations.Core.SendEmail({
          to: admin.email,
          subject: `Yeni iletişim talebi — ${payload.name}`,
          body: lines.join('\n'),
        })
      )
    );

    return Response.json({ ok: true, id: saved?.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}