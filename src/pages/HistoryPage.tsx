import type { FC } from "react";

const panelStyle: React.CSSProperties = {
  background: "var(--ff-panel)",
  border: "1px solid var(--ff-border)",
  borderRadius: "var(--ff-radius-md)",
  padding: 16,
  marginBottom: 14,
  boxShadow: "var(--ff-shadow-panel)",
};

export const HistoryPage: FC = () => (
  <div>
    <section style={panelStyle}>
      <h1 style={{ fontSize: 18 }}>پیشینه فرندفید و جامعه فارسی‌زبان آن</h1>
      <p style={{ margin: 0, color: "var(--ff-muted)" }}>
        این صفحه دو بخش دارد: حقایق کلی درباره فرندفید که از منابع عمومی
        قابل تأیید است، و تحلیل ویدیویی درباره تأثیر انتخابات ۱۳۸۸ بر جامعه
        فارسی‌زبان فرندفید که هنوز نیازمند رونوشت یا یادداشت شماست.
      </p>
    </section>

    <section style={panelStyle}>
      <h2 style={{ fontSize: 14 }}>خط زمانی مستند</h2>
      <ul style={{ margin: 0, paddingInlineStart: 18, fontSize: 13, lineHeight: 1.9 }}>
        <li>فرندفید در اکتبر ۲۰۰۷ توسط Bret Taylor، Jim Norris، Paul Buchheit و Sanjeev Singh راه‌اندازی شد؛ هر چهار نفر پیش‌تر در گوگل کار کرده بودند.</li>
        <li>در آگوست ۲۰۰۹ فیس‌بوک فرندفید را خرید؛ بنیان‌گذاران در تیم مهندسی فیس‌بوک ادغام شدند.</li>
        <li>فرندفید در نسخه‌های متعدد از جمله فارسی، محلی‌سازی شده بود.</li>
        <li>سرویس در ۹ آوریل ۲۰۱۵ به‌طور کامل تعطیل شد.</li>
      </ul>
      <p style={{ fontSize: 11, color: "var(--ff-muted)", marginTop: 8 }}>
        منابع: ویکی‌پدیای انگلیسی «FriendFeed»، صفحه Wikidata مربوطه.
      </p>
    </section>

    <section style={{ ...panelStyle, borderStyle: "dashed" }}>
      <h2 style={{ fontSize: 14 }}>
        تحلیل ویدیو: «فرندفید پیش و پس از انتخابات ۱۳۸۸»
      </h2>
      <p style={{ margin: "0 0 10px", color: "var(--ff-muted)" }}>
        منبع ویدیویی معرفی‌شده: <code>youtube.com/watch?v=K4e-b3_F4t0</code>
      </p>
      <div
        style={{
          background: "var(--ff-panel-alt)",
          border: "1px dashed var(--ff-border-strong)",
          borderRadius: 4,
          padding: 12,
          fontSize: 12.5,
          color: "var(--ff-muted)",
        }}
      >
        این بخش هنوز نوشته نشده است. برای این‌که تحلیل واقعاً بر پایه محتوای
        ویدیو باشد (نه حدس درباره چیزی که ممکن است در آن گفته شده باشد)،
        لطفاً یکی از این‌ها را ارسال کنید:
        <ul style={{ marginTop: 8 }}>
          <li>رونوشت خودکار یوتیوب (زیر ویدیو، دکمه «...» ← «نمایش رونوشت»)</li>
          <li>یا یادداشت‌های خودتان از نکات و زمان‌بندی مهم ویدیو</li>
        </ul>
        با ارسال آن، این بخش با تحلیل واقعی جایگزین می‌شود.
      </div>
    </section>
  </div>
);
