import type { FC } from "react";
import { useSEO } from "../seo/useSEO";

const BASE = import.meta.env.BASE_URL;

const FerferLeaksCover: FC = () => (
  <div
    role="img"
    aria-label="تصویر مفهومی فرفرلیکس"
    style={{
      position: "relative",
      overflow: "hidden",
      height: 320,
      background: "linear-gradient(160deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08 }}
      viewBox="0 0 800 320"
      preserveAspectRatio="xMidYMid slice"
    >
      {[0,80,160,240,320,400,480,560,640,720,800].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="320" stroke="#4fc3f7" strokeWidth="1"/>
      ))}
      {[0,64,128,192,256,320].map(y => (
        <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="#4fc3f7" strokeWidth="1"/>
      ))}
    </svg>

    <svg viewBox="0 0 120 140" width="110" height="128" style={{ position: "relative", zIndex: 2, filter: "drop-shadow(0 0 18px rgba(79,195,247,0.5))" }}>
      <path d="M30 60 V42 A30 30 0 0 1 90 42 V60" fill="none" stroke="#4fc3f7" strokeWidth="5" strokeLinecap="round"/>
      <rect x="14" y="58" width="92" height="66" rx="8" fill="#1a1a2e" stroke="#4fc3f7" strokeWidth="3"/>
      <circle cx="60" cy="88" r="12" fill="none" stroke="#ef5350" strokeWidth="3"/>
      <rect x="56" y="96" width="8" height="16" rx="3" fill="#ef5350"/>
      <line x1="14" y1="80" x2="0" y2="65" stroke="#ef5350" strokeWidth="2" strokeDasharray="4 2" opacity="0.8"/>
      <line x1="106" y1="85" x2="120" y2="70" stroke="#ef5350" strokeWidth="2" strokeDasharray="4 2" opacity="0.8"/>
      <line x1="60" y1="124" x2="60" y2="140" stroke="#ef5350" strokeWidth="2" strokeDasharray="4 2" opacity="0.8"/>
    </svg>

    <div style={{
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      padding: "10px 24px 14px",
      background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      zIndex: 3,
    }}>
      <span style={{ fontFamily: "monospace", fontSize: 11, color: "#4fc3f7", letterSpacing: "0.12em", opacity: 0.7 }}>
        FERFERLEAKS / ۱۳۹۰
      </span>
      <span style={{
        fontSize: 10,
        color: "#ef5350",
        fontWeight: 700,
        letterSpacing: "0.08em",
        background: "rgba(239,83,80,0.15)",
        border: "1px solid rgba(239,83,80,0.4)",
        padding: "2px 8px",
        borderRadius: 3,
      }}>
        LEAKED
      </span>
    </div>
  </div>
);

const ShareBar: FC<{ title: string; url: string }> = ({ title, url }) => {
  const encoded = encodeURIComponent(title + " " + url);
  const btn: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    padding: "7px 14px",
    borderRadius: 4,
    fontSize: 12,
    fontWeight: 600,
    textDecoration: "none",
    border: "1px solid var(--ff-border)",
    color: "var(--ff-text)",
    background: "var(--ff-panel)",
    transition: "background 120ms ease",
  };
  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "24px 0 0", alignItems: "center" }}>
      <span style={{ fontSize: 12, color: "var(--ff-muted)", marginInlineEnd: 4 }}>اشتراک‌گذاری:</span>
      <a href={`https://x.com/intent/tweet?text=${encoded}`} target="_blank" rel="noreferrer" style={btn}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        در ایکس
      </a>
      <a href={`https://bsky.app/intent/compose?text=${encoded}`} target="_blank" rel="noreferrer" style={btn}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/>
        </svg>
        در بلواسکای
      </a>
    </div>
  );
};

const SourceItem: FC<{ label: string; href?: string; children: string }> = ({ label, href, children }) => (
  <div style={{ display: "flex", gap: 10, padding: "10px 0", borderBottom: "1px solid var(--ff-border)" }}>
    <span style={{
      fontSize: 10,
      fontWeight: 700,
      color: "var(--ff-muted)",
      letterSpacing: "0.05em",
      flexShrink: 0,
      paddingTop: 2,
      width: 60,
      textAlign: "center",
      border: "1px solid var(--ff-border)",
      borderRadius: 3,
      height: "fit-content",
    }}>
      {label}
    </span>
    {href ? (
      <a href={href} target="_blank" rel="noreferrer" style={{ fontSize: 12.5, lineHeight: 1.9, color: "var(--ff-link)" }}>
        {children}
      </a>
    ) : (
      <span style={{ fontSize: 12.5, lineHeight: 1.9, color: "var(--ff-text)" }}>{children}</span>
    )}
  </div>
);

const A: FC<{ href: string; children: string }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer" style={{ color: "var(--ff-link)" }}>
    {children}
  </a>
);

const H2: FC<{ children: string }> = ({ children }) => (
  <h2 style={{
    fontSize: 15,
    fontWeight: 700,
    color: "var(--ff-text)",
    margin: "28px 0 10px",
    paddingBottom: 6,
    borderBottom: "2px solid var(--ff-border)",
    lineHeight: 1.7,
  }}>
    {children}
  </h2>
);

const PAGE_URL = "https://friendfeed.github.io/magazine/ferferleaks";
const PAGE_TITLE = "فرفرلیکس: روزی که دخمه افسران جنگ نرم در فرندفید لو رفت";

export const FerferLeaksPage: FC = () => {
  useSEO({
    path: "/magazine/ferferleaks",
    title: `${PAGE_TITLE} | فرندفید فارسی`,
    description:
      "بهار ۱۳۹۰، اولین افشاگری به سبک ویکی‌لیکس در وب فارسی. ماجرای نفوذ به اتاق خصوصی افسران جنگ نرم در فرندفید.",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: PAGE_TITLE,
        inLanguage: "fa",
        datePublished: "2011-05-01",
        isPartOf: {
          "@type": "WebSite",
          name: "فرندفید فارسی | آرشیو",
          url: "https://friendfeed.github.io",
        },
      },
    ],
  });

  return (
    <article style={{ maxWidth: 760, margin: "0 auto", direction: "rtl" }}>

      <div style={{ border: "1px solid var(--ff-border)", borderRadius: "var(--ff-radius)", overflow: "hidden", boxShadow: "var(--ff-card-shadow)" }}>
        <FerferLeaksCover />
      </div>

      <div style={{
        background: "var(--ff-panel)",
        border: "1px solid var(--ff-border)",
        borderTop: "none",
        padding: "24px 28px 32px",
      }}>

        {/* Kicker + title */}
        <div style={{ marginBottom: 20 }}>
          <span style={{
            display: "inline-block",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#fff",
            background: "#ef5350",
            padding: "2px 9px",
            borderRadius: 3,
            marginBottom: 10,
          }}>
            تاریخچه
          </span>

          <h1 style={{ fontSize: 22, lineHeight: 1.65, margin: "0 0 10px", color: "var(--ff-text)" }}>
            فرفرلیکس: روزی که دخمه افسران جنگ نرم در فرندفید لو رفت
          </h1>

          <p style={{ fontSize: 13, color: "var(--ff-muted)", margin: 0, lineHeight: 1.8 }}>
            اولین افشاگری به سبک ویکی‌لیکس در وب فارسی، بهار ۱۳۹۰
          </p>
        </div>

        <div style={{ borderTop: "1px solid var(--ff-border)", marginBottom: 22 }} />

        {/* Body */}
        <div style={{ fontSize: 14, lineHeight: 2.2, color: "var(--ff-text)" }}>

          <p style={{ margin: "0 0 18px" }}>
            بهار ۱۳۹۰ بود که یک خبر کوچک، بی‌سروصدا، در گوشه‌ای از وب فارسی پیچید
            و ظرف چند روز به یکی از پرسروصداترین اتفاقات تاریخ فضای مجازی ایران
            تبدیل شد. اسمش را گذاشتند <strong>«فرفرلیکس»</strong>، ترکیبی از
            «فرفر»، همان اسمی که کاربران ایرانی روی فرندفید گذاشته بودند، و
            «ویکی‌لیکس»، نامی که آن روزها یعنی افشاگری بدون ترس. برای جامعه
            فارسی‌زبان فرندفید، فرفرلیکس فقط یک خبر نبود؛ ثابت کرد این شبکه
            کوچک و ظاهرا دوستانه، صحنه یک جنگ نامرئی هم بوده.
          </p>

          <H2>یک اتاق بسته به اسم «دخمه»</H2>

          <p style={{ margin: "0 0 18px" }}>
            فرندفید برای خیلی‌ها جای گپ روزانه، لینک‌گذاشتن و دوست‌پیداکردن بود.
            اما کنار این فضای عمومی، اتاق‌های خصوصی هم وجود داشت؛ فضاهای بسته‌ای
            که ورود به آن‌ها باید توسط مدیر تأیید می‌شد. یکی از این اتاق‌ها را
            گروهی از کاربران موسوم به «حزب‌اللهی» ساخته بودند و خودشان با کمی
            طنز، اسمش را گذاشته بودند <strong>«دخمه»</strong>.
          </p>

          <p style={{ margin: "0 0 18px" }}>
            بر اساس روایت‌هایی که همان موقع در رسانه‌ها منتشر شد، این اتاق محل
            جمع شدن بخشی از همان‌هایی بود که در ادبیات رسمی حاکمیت
            <strong> «افسران جنگ نرم»</strong> صدایشان می‌کردند. آدم‌هایی که
            کنار فعالیت‌های علنی‌شان، در فرندفید هم مشغول شناسایی حساب‌های
            کاربری و تولید محتوای گمراه‌کننده بودند. طبق همین گزارش‌ها، کار
            این گروه بعدها از فرندفید به توییتر و بقیه شبکه‌ها هم کشیده شد.
          </p>

          <H2>چطور در دخمه باز شد؟</H2>

          <p style={{ margin: "0 0 18px" }}>
            یکی از کسانی که آن سال‌ها عضو فعال جامعه فرفر بود و این ماجرا را
            برای آرشیو فرندفید تعریف کرد، گفت پشت فرفرلیکس دو نفر بودند:
            کاربرانی با اسم‌های{" "}
            <A href="https://x.com/dadaboos">دادابیس</A> و{" "}
            <A href="https://x.com/abellz">ممد</A>، که توانستند به آن اتاق
            خصوصی نفوذ کنند و بخشی از گفتگوهایش را برای همه منتشر کنند.
          </p>

          {/* Photo */}
          <figure style={{ margin: "24px 0 28px" }}>
            <div style={{
              border: "1px solid var(--ff-border)",
              borderRadius: "var(--ff-radius)",
              overflow: "hidden",
              background: "var(--ff-panel-alt)",
            }}>
              <img
                src={`${BASE}images/magazine/dadabase.jpg`}
                alt="دادابیس و ممد"
                style={{
                  display: "block",
                  width: "100%",
                  maxHeight: 420,
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
            <figcaption style={{
              fontSize: 11.5,
              color: "var(--ff-muted)",
              textAlign: "center",
              padding: "8px 12px 0",
              lineHeight: 1.8,
            }}>
              دادابیس و ممد، دو کاربری که فرفرلیکس را راه انداختند.{" "}
              <a
                href="https://x.com/dadaboos/status/1147160699174555654"
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--ff-link)" }}
              >
                منبع تصویر
              </a>
            </figcaption>
          </figure>

          <p style={{ margin: "0 0 18px" }}>
            بر اساس گزارشی که{" "}
            <A href="https://x.com/ehsanism">احسان نوروزی</A>، روزنامه‌نگار،
            آن موقع در دویچه‌وله فارسی نوشت، اطلاعات از دو راه بیرون آمده بود:
            یک سری تصاویر که یکی از اعضای سابق همان گروه منتشر کرده بود، و یک
            آسیب‌پذیری امنیتی در خود فرندفید که به آدم‌های آشنا به تکنیک‌های
            نفوذ اجازه می‌داد پیام‌های خصوصی دیگران را ببینند. نتیجه این دو
            مسیر شد مجموعه‌ای از اسناد که به فرفرلیکس معروف شد.
          </p>

          <H2>چرا فرفرلیکس مهم بود؟</H2>

          <p style={{ margin: "0 0 18px" }}>
            مهمی فرفرلیکس فقط به خاطر محتوای افشاشده نبود، خودِ اتفاق مهم بود:
            برای اولین بار در تاریخ وب فارسی، گفتگوهای خصوصی یک گروه سازمان‌یافته
            فعال در فضای مجازی، با این حجم از جزئیات، جلوی چشم همه قرار گرفت.
            تا قبل از آن، بحث درباره فعالیت هماهنگ بعضی کاربران در شبکه‌های
            اجتماعی بیشتر در حد حدس و گمان بود؛ فرفرلیکس این بحث را از فاز
            گمانه‌زنی درآورد و تبدیل به سند کرد.
          </p>

          <p style={{ margin: "0 0 18px" }}>
            برای جامعه فرندفید فارسی، این ماجرا یک یادآوری تلخ بود از جمله‌ای که
            آن روزها بین کاربران دست به دست می‌شد:{" "}
            <em>«هر چیزی که به اینترنت بیاید، دیگر از اینترنت بیرون نمی‌رود.»</em>{" "}
            جمله‌ای که نشان می‌داد فرندفید، هرچند شبکه‌ای کوچک که الان فقط
            آرشیوش مانده، سر جای خودش صحنه اتفاقاتی بوده که رد پایشان هنوز هست.
          </p>

          <p style={{ margin: "0 0 18px" }}>
            یکی از اسم‌هایی که در این گفتگوهای فاش‌شده زیاد تکرار می‌شد، کاربری
            با اسم مستعار{" "}
            <A href="https://x.com/kheyzaran">خیزران</A> بود که بر اساس همان
            روایت، از اعضای فعال آن اتاق خصوصی بود.
          </p>

          <H2>چیزی که هنوز خوانده می‌شود</H2>

          <p style={{ margin: "0 0 18px" }}>
            فرفرلیکس در اوج خودش هم خشم آورد هم کنجکاوی. بعضی کاربران دنبال
            هشتگ{" "}
            <a
              href="https://x.com/hashtag/%D9%81%D8%B1%D9%81%D8%B1%D9%84%DB%8C%DA%A9%D8%B3"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--ff-link)" }}
            >
              #فرفرلیکس
            </a>{" "}
            در فرندفید و توییتر می‌گشتند تا جزئیات بیشتری پیدا کنند، در حالی که
            گزارش‌های آن روزها می‌گفت تلاش‌هایی هم شد که اطلاعات نامربوط زیر همین
            هشتگ منتشر شود تا ردیابی سخت‌تر بشود.
          </p>

          <p style={{ margin: 0 }}>
            سال‌ها گذشته و فرندفید دیگر نیست، اما فرفرلیکس هنوز یکی از
            نقطه‌عطف‌های کمتر شناخته‌شده تاریخ فضای مجازی فارسی است؛ یادآور
            اینکه پشت هر اجتماع آنلاین، حتی یک جای ساده و صمیمی مثل فرفر، گاهی
            داستان‌هایی هست که سال‌ها بعد هم ارزش گفتن دارند.
          </p>
        </div>

        <ShareBar title={PAGE_TITLE} url={PAGE_URL} />

        {/* Sources */}
        <div style={{ marginTop: 32 }}>
          <div style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.06em",
            color: "var(--ff-muted)",
            marginBottom: 4,
            textTransform: "uppercase",
          }}>
            منابع
          </div>

          <div style={{ borderTop: "2px solid var(--ff-border-strong)" }}>
            <SourceItem
              label="DW"
              href="https://www.dw.com/fa-ir/%D9%81%D8%B1%D9%81%D8%B1%D9%84%DB%8C%DA%A9%D8%B3-%D8%A7%D9%88%D9%84%DB%8C%D9%86-%D8%AA%D8%AC%D8%B1%D8%A8%D9%87%DB%8C-%D8%A7%D9%81%D8%B4%D8%A7%DA%AF%D8%B1%DB%8C-%D8%A8%D9%87-%D8%B3%D8%A8%DA%A9-%D9%88%DB%8C%DA%A9%DB%8C%D9%84%DB%8C%DA%A9%D8%B3-%D8%AF%D8%B1-%D9%88%D8%A8-%D9%81%D8%A7%D8%B1%D8%B3%DB%8C/a-15040252"
            >
              گزارش دویچه‌وله فارسی، نوشته احسان نوروزی: فرفرلیکس؛ اولین تجربه افشاگری به سبک ویکی‌لیکس در وب فارسی
            </SourceItem>

            <SourceItem
              label="بالاترین"
              href="https://www.balatarin.com/permlink/2011/5/4/2493220"
            >
              بازتاب خبر فرفرلیکس در بالاترین، اردیبهشت ۱۳۹۰
            </SourceItem>

            <SourceItem
              label="آرشیو"
              href="https://t.co/C9kbpexiNz"
            >
              آرشیو اکانت دادابیس؛ اسکرین‌شات‌های افسران جنگ نرم از جمله خیزران که در جریان فرفرلیکس پخش شدند
            </SourceItem>

            <SourceItem label="مصاحبه">
              گفتگوی اختصاصی با یکی از اعضای پیشین جامعه فرندفید فارسی، برای آرشیو پروژه فرندفید
            </SourceItem>
          </div>
        </div>

      </div>
    </article>
  );
};
