import type { FC } from "react";
import { MigrationTimeline } from "../components/MigrationTimeline";

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
        این صفحه چند بخش دارد: حقایق کلی درباره فرندفید که از منابع عمومی قابل تأیید است، داستان کامل
        مهاجرت‌های جامعه فارسی‌زبان بین فرندفید، توییتر و چند سرویس دیگر که یکی‌یکی تعطیل شدند، و
        تحلیل ویدیویی درباره تأثیر انتخابات ۱۳۸۸ بر جامعه فارسی‌زبان فرندفید که هنوز نیازمند رونوشت یا
        یادداشت شماست.
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

    <section style={panelStyle}>
      <h2 style={{ fontSize: 14, margin: "0 0 6px" }}>
        از یاهو ۳۶۰ تا توییتر: داستان کامل مهاجرت‌های جامعه فارسی‌زبان
      </h2>
      <MigrationTimeline />
      <p style={{ fontSize: 11, color: "var(--ff-muted)", marginTop: 16 }}>
        منابع تاریخ‌های این بخش: بلاگ رسمی یاهو و پوشش خبری PCWorld/TechCrunch درباره تعطیلی یاهو
        ۳۶۰ (ژوئیه ۲۰۰۹)، بلاگ رسمی گوگل درباره تعطیلی گوگل ریدر (ژوئیه ۲۰۱۳)، صفحه راهنمای گوگل و
        ویکی‌پدیا درباره تعطیلی گوگل پلاس برای کاربران عادی (آوریل ۲۰۱۹)، و همان منابع بخش «خط زمانی
        مستند» بالا برای فرندفید. عبارت «سیصد چهارصد نفر اصلی توییتر» و ترتیب دقیق هم‌پوشانی جامعه
        فرندفید و توییتر، خاطره و اصطلاح رایج در خودِ این جامعه است، نه یک آمار منتشرشده.
      </p>
    </section>

    <section style={panelStyle}>
      <h2 style={{ fontSize: 14, margin: "0 0 10px" }}>عکس‌های یادگاری از دوران خرید</h2>
      <p style={{ margin: "0 0 12px", fontSize: 13, lineHeight: 1.9, color: "var(--ff-muted)" }}>
        دو عکس زیر مربوط به همان دوره‌ای است که خرید فرندفید توسط فیس‌بوک نهایی شد؛ تیم دو شرکت را کنار هم
        نشان می‌دهد، یک بار در حیاط پشتی و یک بار پای میز کار.
      </p>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <figure style={{ flex: "1 1 260px", minWidth: 220, maxWidth: 340, margin: 0 }}>
          <img
            src="/images/history/facebook-deal-group.webp"
            alt="عکس دسته‌جمعی تیم فرندفید و فیس‌بوک در دوران خرید"
            style={{ width: "100%", display: "block", borderRadius: 6, boxShadow: "var(--ff-shadow-panel)" }}
          />
          <figcaption style={{ marginTop: 6, fontSize: 11, color: "var(--ff-muted)", textAlign: "center" }}>
            عکس دسته‌جمعی تیم، همان روزهای نهایی‌شدن خرید
          </figcaption>
        </figure>
        <figure style={{ flex: "1 1 260px", minWidth: 220, maxWidth: 340, margin: 0 }}>
          <img
            src="/images/history/facebook-deal-table.webp"
            alt="عکس تیم دور میز کار در دوران خرید فرندفید"
            style={{ width: "100%", display: "block", borderRadius: 6, boxShadow: "var(--ff-shadow-panel)" }}
          />
          <figcaption style={{ marginTop: 6, fontSize: 11, color: "var(--ff-muted)", textAlign: "center" }}>
            دور میز کار، در حال گفت‌وگو و کار روی لپ‌تاپ
          </figcaption>
        </figure>
      </div>
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
