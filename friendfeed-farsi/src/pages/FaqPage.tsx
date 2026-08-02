import type { FC } from "react";

/**
 * FAQ / glossary page: Persian FriendFeed-community slang ("فرفرستان" jargon).
 * Styled to match the rest of the site -- flat panels, thin borders, the
 * same ff-tab-bg / ff-border / ff-muted tokens used in XCrossoverPage and
 * Header, no rounded pills or shadows.
 */
type SlangEntry = {
  term: string;
  meaning: string;
};

const SLANG: SlangEntry[] = [
  {
    term: "فرفر",
    meaning:
      "نام غیررسمی و رایجی که وبلاگ‌نویسان و کاربران فارسی‌زبان به فرندفید داده بودند؛ در کنار «گودر» (برای گوگل‌ریدر) یکی از دو لقب معروف فضای مجازی آن دوره بود.",
  },
  {
    term: "اتاق (روم)",
    meaning:
      "فضای گروهی موضوعی در فرندفید که کاربران فارسی‌زبان برای دور هم جمع کردن یک قشر خاص راه می‌انداختند؛ نمونه‌های شناخته‌شده «وبلاگستان» و «آی‌تی‌نویسان» بودند.",
  },
  {
    term: "لوله",
    meaning:
      "اتصال یک‌طرفه‌ای که پست‌های توییتر کاربر را (معمولاً از طریق اپلیکیشن‌های واسط) به‌طور خودکار وارد فرندفید می‌کرد؛ وقتی این اتصال قطع می‌شد کاربران شوخی می‌کردند که «لوله‌شون بسته شده».",
  },
  {
    term: "فری هلپر",
    meaning:
      "یکی از چهره‌های به‌یادماندنی و بحث‌برانگیز جامعه فرفر که در خاطرات کاربران قدیمی به شوخی به عنوان کسی که «ادعای پیامبری» در فرندفید کرد به یاد می‌آید؛ نمونه‌ای از شخصیت‌های شاخص هر انجمن آنلاین قدیمی.",
  },
  {
    term: "تداخل سرچ",
    meaning:
      "پیش از اضافه شدن قابلیت منشن (@) به فرندفید، تنها راه کاربران برای دیدن اینکه چه کسی درباره‌شان نوشته این بود که اسم خودشان را سرچ کنند. چون این سرچ متنی و بدون تگ مشخص بود، هر پستی که به‌طور اتفاقی همان اسم را در خودش داشت (حتی بی‌ربط به آن کاربر) هم در نتایج ظاهر می‌شد؛ به همین «تداخل» بین نتایج مرتبط و نامرتبط، تداخل سرچ می‌گفتند.",
  },
  {
    term: "م.ب",
    meaning: "مخفف «مرفه بی‌درد»؛ برچسبی طعنه‌آمیز برای کاربری که دغدغه یا مشکل واقعی ندارد و از موضع راحت‌طلبانه اظهارنظر می‌کند.",
  },
  {
    term: "شخم زدن",
    meaning:
      "بالا کشیدن دوباره‌ی یک پست قدیمی با گذاشتن کامنت یا لایک تازه روی آن؛ چون هر تعامل جدید باعث می‌شد فرندفید پست را دوباره در صدر فید نشان دهد، پست «شخم خورده» انگار تازه منتشر شده بود.",
  },
  {
    term: "دوان دوان",
    meaning:
      "توصیف طعنه‌آمیز هجوم کاربران (معمولاً پسرها) به سمت لایک و کامنت‌گذاری زیر پست‌های یک عضو زن تازه‌وارد و جذاب؛ اشاره به سرعت و ازدحامی که دور چنین پستی شکل می‌گرفت.",
  },
  {
    term: "دو نقطه دی (:D)",
    meaning:
      "املای نوشتاری/گفتاری اموجی «:D» که کاربران به‌جای درج نماد، حروفش را با صدای بلند یا در تایپ فارسی می‌گفتند؛ نشانه خنده یا شوخی در کامنت‌ها.",
  },
  {
    term: "فید",
    meaning: "همان صفحه اصلی و جریان زنده‌ی پست‌ها؛ کلمه انگلیسی «feed» که مستقیم در گفتار فارسی کاربران وارد شده بود، بدون ترجمه.",
  },
  {
    term: "ساب‌اسکرایب کردن",
    meaning: "دنبال کردن یک کاربر برای دیدن پست‌هایش در فید شخصی؛ معادل امروزیِ آن «فالو کردن» است.",
  },
];

const LIKE_TYPES: SlangEntry[] = [
  {
    term: "لایک مرامی",
    meaning:
      "لایکی که صرفاً از سر رفاقت و برای احترام به طرف زده می‌شود، بدون اینکه لزوماً به معنی خواندن دقیق یا تأیید محتوای پست باشد؛ یک‌جور «حواسم بهت هست» دوستانه.",
  },
  {
    term: "لایک به معنی دیدن",
    meaning:
      "لایکی که فقط اعلام می‌کرد «این پست را دیدم»، بدون هیچ داوری درباره‌ی خوب یا بد بودنش؛ نوعی رسید خواندن، شبیه به قابلیت «Seen» در پیام‌رسان‌های امروزی.",
  },
];

export const FaqPage: FC = () => {
  return (
    <div>
      <h1 style={{ fontSize: 14, marginBottom: 6 }}>سوالات متداول و فرهنگ لغت فرفری</h1>
      <p style={{ fontSize: 12, color: "var(--ff-muted)", lineHeight: 1.9, marginTop: 0, marginBottom: 14 }}>
        جامعه فارسی‌زبان فرندفید (که بین خودشان آن را «فرفر» صدا می‌زدند) در
        سال‌های ۱۳۸۷ تا ۱۳۹۰ خرده‌فرهنگ و اصطلاحات خاص خودش را داشت. در ادامه
        فهرستی از رایج‌ترین این اصطلاحات و طعنه‌های داخلی گردآوری شده است.
      </p>

      <div
        style={{
          border: "1px solid var(--ff-border)",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        {SLANG.map((entry, i) => (
          <div
            key={entry.term}
            style={{
              display: "flex",
              gap: 14,
              padding: "10px 12px",
              background: i % 2 === 0 ? "#fff" : "var(--ff-panel-alt)",
              borderBottom:
                i === SLANG.length - 1 ? "none" : "1px solid var(--ff-border)",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: 150,
                fontWeight: "bold",
                fontSize: 12.5,
                color: "var(--ff-text)",
              }}
            >
              {entry.term}
            </div>
            <div style={{ fontSize: 12.5, color: "var(--ff-text)", lineHeight: 1.8 }}>
              {entry.meaning}
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 13, marginTop: 22, marginBottom: 6 }}>انواع لایک</h2>
      <p style={{ fontSize: 12, color: "var(--ff-muted)", lineHeight: 1.9, marginTop: 0, marginBottom: 10 }}>
        لایک زدن در فرفر فقط یک معنی نداشت؛ بسته به نیت کاربر، انواع مختلفی
        داشت. این فهرست هنوز کامل نیست و به‌مرور تکمیل می‌شود.
      </p>

      <div
        style={{
          border: "1px solid var(--ff-border)",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        {LIKE_TYPES.map((entry, i) => (
          <div
            key={entry.term}
            style={{
              display: "flex",
              gap: 14,
              padding: "10px 12px",
              background: i % 2 === 0 ? "#fff" : "var(--ff-panel-alt)",
              borderBottom:
                i === LIKE_TYPES.length - 1 ? "none" : "1px solid var(--ff-border)",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: 150,
                fontWeight: "bold",
                fontSize: 12.5,
                color: "var(--ff-text)",
              }}
            >
              {entry.term}
            </div>
            <div style={{ fontSize: 12.5, color: "var(--ff-text)", lineHeight: 1.8 }}>
              {entry.meaning}
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 11, color: "var(--ff-muted-light)", marginTop: 14, lineHeight: 1.9 }}>
        این فهرست بر اساس خاطرات و مستندات عمومی جامعه فارسی فرندفید گردآوری
        شده و ممکن است کامل نباشد. برخی اصطلاحات بسته به گروه دوستان یا زمان
        دقیق، معنای کمی متفاوت هم داشتند.
      </p>
    </div>
  );
};
