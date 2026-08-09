import type { FC } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../seo/useSEO";
import { MigrationTimeline } from "../components/MigrationTimeline";

/**
 * "داستان خانه‌ی فرندفید" -- this post is the FULL body of what used to
 * be the home page ("/") before the homepage redesign: the "درباره
 * فرندفید" section, the "چرا فرندفید دیگر وجود ندارد؟" section, the
 * Facebook-deal photos, and the closing paragraph. None of that content
 * was deleted, it moved here so the home page itself can be a proper
 * landing page (hero + highlights + stats) instead of a long-form
 * article.
 *
 * The old marketing-hero recreation (browser chrome + "ساخت حساب" /
 * "ورود" buttons) is intentionally NOT duplicated in the article body --
 * it now lives only as this post's cover art on /magazine (see
 * FriendFeedStoryCover in MagazinePage.tsx), exactly per the "hero image
 * as cover, remove it from the post" instruction. The article itself
 * opens directly with the "about" copy instead of repeating that hero.
 */

const ScreenshotFrame: FC<{ src: string; alt: string; caption: string }> = ({ src, alt, caption }) => (
  <figure style={{ margin: 0 }}>
    <div
      style={{
        borderRadius: 6,
        overflow: "hidden",
        boxShadow: "var(--ff-card-shadow)",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "7px 10px",
          background: "#e8e8e8",
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
        <img
          src="/brand/friendfeed-wordmark.webp"
          alt="FriendFeed"
          style={{ height: 12, marginInlineStart: 8, display: "block" }}
        />
        <span dir="ltr" style={{ marginInlineStart: "auto", fontSize: 10, color: "var(--ff-muted)" }}>
          friendfeed.com
        </span>
      </div>
      <img src={src} alt={alt} style={{ width: "100%", height: "auto", display: "block" }} />
    </div>
    <figcaption style={{ marginTop: 8, fontSize: 11, color: "var(--ff-muted-light)", textAlign: "center" }}>
      {caption}
    </figcaption>
  </figure>
);

export const FriendFeedStoryPage: FC = () => {
  const pageUrl = "https://friendfeed.github.io/magazine/dastan-khane-friendfeed";
  const pageTitle = "داستان خانه‌ی فرندفید: از بهترین فید اینترنت تا تعطیلی";
  const shareText = encodeURIComponent(pageTitle + " " + pageUrl);
  const xShareUrl = `https://x.com/intent/tweet?text=${shareText}`;
  const bskyShareUrl = `https://bsky.app/intent/compose?text=${shareText}`;

  useSEO({
    path: "/magazine/dastan-khane-friendfeed",
    title: "داستان خانه‌ی فرندفید | فرندفید فارسی",
    description:
      "فرندفید چطور آسان‌ترین راه اشتراک مطالب در اینترنت شد، فیس‌بوک چرا آن را خرید و در نهایت چه شد که در سال ۲۰۱۵ برای همیشه خاموش شد.",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: pageTitle,
        inLanguage: "fa",
        isPartOf: {
          "@type": "WebSite",
          name: "فرندفید فارسی | آرشیو",
          url: "https://friendfeed.github.io",
        },
      },
    ],
  });

  return (
    <article style={{ maxWidth: 760, margin: "0 auto" }}>
      <div style={{ marginBottom: 18 }}>
        <Link to="/magazine" style={{ fontSize: 12, color: "var(--ff-link)" }}>
          › بازگشت به مجله
        </Link>
      </div>

      <h1 style={{ fontSize: 22, lineHeight: 1.5, margin: "0 0 8px" }}>{pageTitle}</h1>
      <p style={{ fontSize: 12.5, color: "var(--ff-muted-light)", margin: "0 0 22px" }}>
        از مجموعه یادداشت‌های آرشیوی مجله فرندفید فارسی
      </p>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 15, margin: "0 0 10px" }}>درباره فرندفید</h2>

        <div style={{ maxWidth: 640, margin: "0 auto 20px" }}>
          <ScreenshotFrame
            src="/images/history/rachel-fisher-home.webp"
            alt="اسکرین‌شات آرشیوی از صفحه اصلی فرندفید"
            caption="اسکرین‌شات از صفحه اصلی فرندفید، از دوران فعالیت سرویس"
          />
        </div>

        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-text)" }}>
          فرندفید آسان‌ترین راه برای اشتراک مطالب در اینترنت بود. این سرویس در اکتبر ۲۰۰۷ توسط برت
          تیلور، جیم نوریس، پل باکهایت و سنجیو سینگ راه‌اندازی شد و به‌روزرسانی‌های شبکه‌های اجتماعی،
          وبلاگ‌ها و میکروبلاگ‌ها را در یک صفحه کنار هم می‌آورد. فیس‌بوک فرندفید را در سال ۲۰۰۹ خرید. یکی
          از ویژگی‌های شاخص آن به‌روزرسانی زنده فید بدون نیاز به رفرش صفحه بود، فناوری‌ای که آن زمان کمتر
          سایتی داشت.
        </p>
        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          کار کردن با آن خیلی ساده بود: ثبت‌نام می‌کردی، چند نفر را دنبال می‌کردی و یک فید شخصی و زنده
          داشتی، پر از عکسی که یکی در فلیکر گذاشته بود، لینکی که یکی دیگر پیدا کرده بود، یا ویدیویی که یک
          دوست پسندیده بود. در عوض، دوستانت هم فید خودشان را داشتند، پر از همان چیزهایی که تو به اشتراک
          گذاشته بودی.
        </p>
        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          شروع یک گفت‌وگو زیر یک پست، یا نشان دادن این‌که چیزی را دوست داری، فقط یک کلیک فاصله داشت. حتی
          می‌شد گروه ساخت، مثلاً برای خانواده یا برای هم‌تیمی‌های سرکار، و فقط به‌روزرسانی‌های همان‌ها را
          دنبال کرد. چیزی هم برای نصب نبود؛ فرندفید را از ایمیل، از موبایل و حتی از دل فیس‌بوک هم می‌شد
          خواند و در آن پست گذاشت. اگر فیدت را عمومی می‌کردی، حتی آدم‌های بدون حساب هم می‌توانستند آن را
          ببینند یا در وبلاگ‌شان جاسازی کنند.
        </p>
        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          فرندفید سریع بود، ساده بود و گفت‌وگومحور. و چون هر فید از آدم‌هایی ساخته می‌شد که واقعاً برایت
          مهم بودند، محتوایش هم برایت مهم بود.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 15, margin: "0 0 10px" }}>چرا فرندفید دیگر وجود ندارد؟</h2>

        <div style={{ maxWidth: 640, margin: "0 auto 20px" }}>
          <ScreenshotFrame
            src="/images/history/ana-home.webp"
            alt="اسکرین‌شات آرشیوی دیگر از صفحه اصلی فرندفید"
            caption="یک فید نمونه از فرندفید، همان روزهایی که هنوز پر از پست و کامنت بود"
          />
        </div>

        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          آگوست ۲۰۰۹. فیس‌بوک آن‌موقع هنوز بزرگ‌ترین شبکه اجتماعی دنیا بود، اما توییتر داشت خیلی سریع رشد
          می‌کرد و «به‌روزرسانی زنده» تبدیل شده بود به چیزی که همه می‌خواستند. فیس‌بوک فرندفید را با رقمی
          حدود پنجاه میلیون دلار خرید، و آن‌طور که بعدها روشن شد، این خرید بیشتر برای تیم مهندسی‌اش بود تا
          برای خود سرویس. همان فناوری فید زنده‌ای که فرندفید ساخته بود، چند سال بعد در دل «فید خبری»
          فیس‌بوک، همان چیزی که امروز میلیاردها نفر هر روز می‌بینند، دوباره به کار گرفته شد.
        </p>

        <p style={{ margin: "22px 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          اما خود فرندفید سرنوشت آشنای اغلب این‌جور خریدهای شرکتی را پیدا کرد. بنیان‌گذارانش به تیم
          مهندسی فیس‌بوک پیوستند، توسعه محصول عملاً متوقف شد و سایت فقط «روشن» نگه داشته شد، بدون ویژگی
          تازه، بدون تبلیغات، بدون رشد. کاربرانش هم کم‌کم و بی‌سروصدا به جاهای دیگر رفتند.
        </p>

        <div style={{ margin: "32px 0 18px", display: "flex", gap: 16, flexWrap: "wrap", alignItems: "stretch", justifyContent: "center" }}>
          <figure style={{ flex: "1 1 260px", minWidth: 220, maxWidth: 340, margin: 0, display: "flex", flexDirection: "column" }}>
            <img
              src="/images/history/facebook-deal-group.webp"
              alt="عکس دسته‌جمعی بنیان‌گذاران فرندفید و نمایندگان فیس‌بوک، شب امضای قرارداد خرید"
              style={{ width: "100%", display: "block", borderRadius: 6, boxShadow: "var(--ff-card-shadow)" }}
            />
            <figcaption style={{ marginTop: 8, fontSize: 11, lineHeight: 1.9, color: "var(--ff-muted-light)", textAlign: "center" }}>
              از چپ به راست: <strong>ون اسمیت</strong> (فیس‌بوک) · <strong>جیم نوریس</strong> (فرندفید) ·{" "}
              <strong>پل باکهایت</strong> (فرندفید) · <strong>برت تیلور</strong> (فرندفید) ·{" "}
              <strong>مارک زاکربرگ</strong> (فیس‌بوک)
            </figcaption>
          </figure>
          <figure style={{ flex: "1 1 260px", minWidth: 220, maxWidth: 340, margin: 0, display: "flex", flexDirection: "column" }}>
            <img
              src="/images/history/facebook-deal-table.webp"
              alt="بنیان‌گذاران فرندفید و نمایندگان فیس‌بوک دور میز کار، شب امضای قرارداد خرید"
              style={{ width: "100%", display: "block", borderRadius: 6, boxShadow: "var(--ff-card-shadow)" }}
            />
            <figcaption style={{ marginTop: 8, fontSize: 11, lineHeight: 1.9, color: "var(--ff-muted-light)", textAlign: "center" }}>
              همان جمع دور میز کار؛ <strong>مارک زاکربرگ</strong> (فیس‌بوک) کنار لپ‌تاپ، به همراه
              بنیان‌گذاران فرندفید و ون اسمیت از فیس‌بوک
            </figcaption>
          </figure>
        </div>
        <p style={{ margin: "0 0 20px", fontSize: 10.5, color: "var(--ff-muted-light)", textAlign: "center" }}>
          منبع شناسایی افراد در عکس‌ها: Kara Swisher, "Boys Will Be... Especially in Silicon Valley,
          Boys: Some Photos Après FaceFeed," AllThingsD, ۱۰ آگوست ۲۰۰۹.
        </p>

        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          خیلی از این کاربرها هم دست‌خالی نرفتند: چند نفر از برنامه‌نویس‌های همان جامعه، به‌جای این‌که
          منتظر بمانند فرندفید یک روز واقعاً تعطیل شود، از صفر یک کپی متن‌باز از آن ساختند و اسمش را
          گذاشتند{" "}
          <a href="https://freefeed.net/" target="_blank" rel="noreferrer" style={{ color: "var(--ff-link)" }}>
            فری‌فید
          </a>
          . همان فید، همان لایک، همان منطق دنبال‌کردن و کامنت‌گذاشتن، فقط این‌بار روی سروری که خودِ
          کاربرانش اداره‌اش می‌کردند، نه یک شرکت بزرگ. بخش زیادی از کاربران فارسی‌زبان فرندفید هم دقیقاً
          همین مسیر را رفتند و جمع‌شان را در فری‌فید از نو ساختند، چون هیچ‌جای دیگری این‌قدر به حال‌وهوای
          فرندفید نزدیک نبود.
        </p>

        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          گروهی دیگر از کاربران هم ترجیح دادند به جای یک جایگزین یک‌به‌یک، سراغ چیزی بزرگ‌تر و شلوغ‌تر
          بروند: توییتر (که این روزها <span dir="ltr">X</span> نام دارد). و به‌تازگی، موج تازه‌ای از همین
          جامعه به{" "}
          <a href="https://bsky.app/" target="_blank" rel="noreferrer" style={{ color: "var(--ff-link)" }}>
            بلواسکای
          </a>{" "}
          کوچ کرده: شبکه‌ای که ظاهرش شبیه توییتر است اما زیرساختش غیرمتمرکز است، یعنی هویت و دنبال‌کننده‌هایت
          مال یک شرکت خاص نیستند و می‌توانی هر وقت خواستی حسابت را به سرویس دیگری روی همان پروتکل منتقل
          کنی، دقیقاً همان دردی که کاربران فرندفید یک بار با تعطیلی ناگهانی سرویس تجربه‌اش کرده بودند.
        </p>

        <figure style={{ margin: "28px 0 32px" }}>
          <img
            src="/images/diagrams/friendfeed-migration.svg"
            alt="نمودار مهاجرت جامعه: از اتاق‌های گفتگوی یاهو، یاهو ۳۶۰، گوگل ریدر و گوگل پلاس به فرندفید، و از فرندفید به سه پلتفرم بعدی: ایکس، فری‌فید و بلواسکای"
            style={{ display: "block", width: "100%", height: "auto", maxWidth: 680, margin: "0 auto" }}
          />
        </figure>

        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          پنج سال و نیم بعد، در ۹ مارس ۲۰۱۵، یک پست کوتاه در وبلاگ فرندفید منتشر شد. تیم فیس‌بوک نوشت که
          از وقتی به فیس‌بوک پیوسته‌اند سرویس را نگه داشته‌اند، اما تعداد کاربرانش پیوسته کم شده و
          جامعه‌اش دیگر فقط سایه‌ای از آن‌چه زمانی بود باقی مانده، پس وقتش رسیده که به‌آرامی جمعش کنند.
          همان روز ثبت‌نام تازه بسته شد و یک ماه بعد، در ۹ آوریل ۲۰۱۵، درست هفت سال و نیم بعد از اولین
          پستی که در آن منتشر شده بود، فرندفید برای همیشه خاموش شد.
        </p>

        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          امروز از فرندفید واقعی چیزی باقی نمانده جز همین اسکرین‌شات‌های قدیمی، چند نسخه در آرشیو
          وی‌بک‌مشین و خاطره‌ی جمعی چند هزار نفری که یک بار، برای چند سال، بهترین گوشه اینترنتشان همین‌جا
          بود. این آرشیو هم دقیقاً برای همین ساخته شده: تا آن خاطره، این‌بار به فارسی، یک‌جا جمع بماند.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 15, margin: "0 0 4px" }}>
          مسیر مهاجرت جامعه فارسی‌زبان: از اتاق‌های گفتگوی یاهو تا توییتر
        </h2>
        <p style={{ margin: "0 0 16px", fontSize: 12, color: "var(--ff-muted-light)" }}>
          تایم‌لاین تاریخی تعطیلی سرویس‌ها و مهاجرت کاربران، از ۱۹۹۷ تا ۲۰۱۹
        </p>
        <MigrationTimeline />
      </section>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: "18px 0", borderTop: "1px solid var(--ff-border)" }}>
        <a href={xShareUrl} target="_blank" rel="noreferrer" className="ff-btn ff-btn-sm ff-btn-ghost">
          اشتراک در ایکس
        </a>
        <a href={bskyShareUrl} target="_blank" rel="noreferrer" className="ff-btn ff-btn-sm ff-btn-ghost">
          اشتراک در بلواسکای
        </a>
        <Link to="/magazine" className="ff-btn ff-btn-sm ff-btn-ghost">
          سایر مطالب مجله
        </Link>
      </div>
    </article>
  );
};
