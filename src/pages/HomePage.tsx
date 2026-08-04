import type { FC } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../seo/useSEO";

const panelStyle: React.CSSProperties = {
  background: "var(--ff-panel)",
  border: "1px solid var(--ff-border)",
  borderRadius: "var(--ff-radius)",
  boxShadow: "var(--ff-card-shadow)",
};

/**
 * The site's landing page. Previously "/" was the X-crossover user list
 * (moved to /users -- see Sidebar, which now puts that link at the top of
 * the nav since it's the thing people actually come here for). This page
 * is the front door instead: a deliberately nostalgic recreation of the
 * old friendfeed.com marketing/about page (see reference screenshot --
 * orange "Create an account" button, browser-chrome framing, quick-tour
 * panel), followed by the site's own about copy and the story of why the
 * real FriendFeed doesn't exist anymore.
 */
export const HomePage: FC = () => {
  useSEO({ path: "/" });

  return (
    <div>
      {/* ---- Hero: browser-chrome recreation of the old marketing page ---- */}
      <section
        style={{
          ...panelStyle,
          padding: 0,
          overflow: "hidden",
          marginBottom: 18,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 10px",
            background: "#e8e8e8",
            borderBottom: "1px solid var(--ff-border)",
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
          <span
            dir="ltr"
            style={{
              marginInlineStart: 10,
              background: "#fff",
              border: "1px solid var(--ff-border)",
              borderRadius: 2,
              fontSize: 11,
              color: "var(--ff-muted)",
              padding: "3px 10px",
              flex: 1,
              maxWidth: 340,
            }}
          >
            http://friendfeed.com/
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            padding: "28px 24px",
          }}
        >
          <div style={{ flex: "1 1 280px", minWidth: 240 }}>
            <img
              src="/brand/friendfeed-wordmark.webp"
              alt="FriendFeed"
              style={{ height: 40, display: "block", marginBottom: 14 }}
            />
            <p style={{ margin: "0 0 16px", fontSize: 14, fontWeight: "bold", lineHeight: 1.9 }}>
              فرندفید آسان‌ترین راه برای اشتراک مطالب در اینترنت بود.
            </p>
            <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
              <span
                title="این سرویس دیگر ثبت‌نام نمی‌پذیرد"
                style={{
                  background: "#e8a33d",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: "bold",
                  padding: "8px 16px",
                  borderRadius: 3,
                  opacity: 0.55,
                  cursor: "not-allowed",
                }}
              >
                ساخت حساب
              </span>
              <span style={{ fontSize: 12, color: "var(--ff-muted)" }}>یا</span>
              <span
                style={{
                  fontSize: 13,
                  color: "var(--ff-link)",
                  opacity: 0.55,
                  cursor: "not-allowed",
                }}
                title="این سرویس دیگر فعال نیست"
              >
                ورود
              </span>
            </div>
            <p style={{ marginTop: 14, fontSize: 11, color: "var(--ff-muted-light)" }}>
              این آرشیو یک بازسازی غیررسمی و غیرفعال است. دکمه‌های بالا فقط برای حال‌وهوای نوستالژیک این‌جا هستند
              و به هیچ حساب واقعی وصل نمی‌شوند —{" "}
              <Link to="/users" style={{ color: "var(--ff-link)" }}>
                فهرست کاربران را این‌جا ببینید
              </Link>
              .
            </p>
          </div>

          <div style={{ flex: "1 1 260px", minWidth: 220 }}>
            <h2 style={{ fontSize: 13, margin: "0 0 12px" }}>یک گشت کوتاه در فرندفید</h2>
            <TourRow title="کشف چیزهای دوستانت">
              وبلاگ‌ها، عکس‌ها، ویدیوها و لینک‌هایی که دوستان و خانواده‌ات در اینترنت پیدا می‌کردند، همه در یک فید.
            </TourRow>
            <TourRow title="اشتراک‌گذاری خودکار">
              فرندفید به‌طور خودکار چیزهایی را که در بیش از ۴۰ سایت دیگر — از فلیکر تا توییتر — به اشتراک می‌گذاشتی، می‌گرفت.
            </TourRow>
            <TourRow title="گفت‌وگوهای به‌یادماندنی" last>
              درباره یک سریال تازه، یک خبر سیاسی، یا یک ویدیوی خنده‌دار گربه، با آدم‌هایی که می‌شناختی حرف بزن.
            </TourRow>
          </div>
        </div>
      </section>

      {/* ---- About ---- */}
      <section style={{ ...panelStyle, padding: 16, marginBottom: 16 }}>
        <h2 style={{ fontSize: 15, margin: "0 0 10px" }}>درباره فرندفید</h2>
        <p style={{ margin: "0 0 12px", fontSize: 13, lineHeight: 2, color: "var(--ff-text)" }}>
          فرندفید آسان‌ترین راه برای اشتراک مطالب در اینترنت است. این سرویس در اکتبر ۲۰۰۷ توسط برت تیلور، جیم
          نوریس، پل باکهایت و سنجیو سینگ راه‌اندازی شد و به‌روزرسانی‌های شبکه‌های اجتماعی، وبلاگ‌ها و
          میکروبلاگ‌ها را در یک صفحه کنار هم می‌آورد. فیس‌بوک فرندفید را در سال ۲۰۰۹ خرید. یکی از ویژگی‌های
          شاخص آن به‌روزرسانی زنده فید بدون نیاز به رفرش صفحه بود، فناوری‌ای که آن زمان کمتر سایتی داشت.
        </p>
        <p style={{ margin: "0 0 12px", fontSize: 13, lineHeight: 2, color: "var(--ff-muted)" }}>
          ایده‌اش ساده بود: ثبت‌نام کن، چند نفر را دنبال کن، و یک فید شخصی و زنده تحویل بگیر — پر از عکسی که
          یکی در فلیکر گذاشته، لینکی که یکی دیگر پیدا کرده، یا ویدیویی که یک دوست پسندیده. در عوض، دوستانت هم
          فید خودشان را داشتند، پر از چیزهایی که تو به اشتراک گذاشته بودی.
        </p>
        <p style={{ margin: "0 0 12px", fontSize: 13, lineHeight: 2, color: "var(--ff-muted)" }}>
          شروع یک گفت‌وگو زیر یک پست، یا نشان‌دادن این‌که چیزی را دوست داری، کار یک کلیک بود. می‌شد گروه ساخت —
          برای خانواده، یا برای هم‌تیمی‌های سرکار — و فقط به‌روزرسانی‌های همان‌ها را دنبال کرد. هیچ‌چیزی برای
          نصب نبود؛ فرندفید از ایمیل، موبایل و حتی از دل فیس‌بوک هم قابل خواندن و پست‌گذاری بود. اگر فیدت را
          عمومی می‌کردی، حتی آدم‌های بدون حساب هم می‌توانستند آن را ببینند یا در وبلاگ‌شان جاسازی کنند.
        </p>
        <p style={{ margin: 0, fontSize: 13, lineHeight: 2, color: "var(--ff-muted)" }}>
          فرندفید سریع بود، ساده بود، و گفت‌وگومحور. و چون هر فید از آدم‌هایی ساخته می‌شد که واقعاً برایت مهم
          بودند، محتوایش هم برایت مهم بود.
        </p>
      </section>

      {/* ---- Story: why it doesn't exist anymore ---- */}
      <section style={{ ...panelStyle, padding: 16, marginBottom: 16 }}>
        <h2 style={{ fontSize: 15, margin: "0 0 10px" }}>چرا فرندفید دیگر وجود ندارد؟</h2>

        <p style={{ margin: "0 0 12px", fontSize: 13, lineHeight: 2, color: "var(--ff-muted)" }}>
          آگوست ۲۰۰۹. فیس‌بوک آن‌موقع هنوز شبکه اجتماعی بزرگ دنیا بود، اما توییتر داشت تندتند بزرگ می‌شد و
          «به‌روزرسانی زنده» تبدیل شده بود به چیزی که همه می‌خواستند. فیس‌بوک فرندفید را خرید — رقمی حدود ۵۰
          میلیون دلار — و آن‌طور که بعدها روشن شد، بیشتر برای تیم مهندسی‌اش بود تا برای خود سرویس. همان
          فناوری فید زنده‌ای که فرندفید ساخته بود، چند سال بعد در دل «فید خبری» فیس‌بوک، همان چیزی که امروز
          میلیاردها نفر هر روز می‌بینند، دوباره به کار گرفته شد.
        </p>

        <p style={{ margin: "0 0 12px", fontSize: 13, lineHeight: 2, color: "var(--ff-muted)" }}>
          اما خود فرندفید سرنوشت آشنای اغلب این‌جور خریدهای شرکتی را پیدا کرد. بنیان‌گذارانش به تیم مهندسی
          فیس‌بوک پیوستند، توسعه محصول عملاً متوقف شد، و سایت فقط «روشن» نگه داشته شد — بدون ویژگی تازه، بدون
          تبلیغات، بدون رشد. کاربرانش، به‌مرور و بی‌سروصدا، به جاهای دیگر رفتند.
        </p>

        <p style={{ margin: "0 0 12px", fontSize: 13, lineHeight: 2, color: "var(--ff-muted)" }}>
          پنج سال و نیم بعد، در ۹ مارس ۲۰۱۵، یک پست کوتاه در وبلاگ فرندفید منتشر شد: تیم فیس‌بوک توضیح داد که
          از وقتی به فیس‌بوک پیوسته‌اند سرویس را نگه داشته‌اند، اما تعداد کاربرانش پیوسته کم شده و جامعه‌اش
          دیگر فقط سایه‌ای از آن‌چه زمانی بود باقی مانده — پس وقتش رسیده که به‌آرامی جمعش کنند. از همان روز
          ثبت‌نام تازه بسته شد، و یک ماه بعد، در ۹ آوریل ۲۰۱۵ — درست هفت سال و نیم بعد از اولین پستی که در آن
          منتشر شده بود — فرندفید برای همیشه خاموش شد.
        </p>

        <p style={{ margin: 0, fontSize: 13, lineHeight: 2, color: "var(--ff-muted)" }}>
          امروز از فرندفید واقعی چیزی باقی نمانده جز اسکرین‌شات‌های قدیمی، چند نسخه در آرشیو وی‌بک‌مشین، و
          خاطره‌ی جمعیِ چند هزار نفری که یک بار، برای چند سال، بهترین گوشه‌ی اینترنتشان همین‌جا بود. این آرشیو
          هم دقیقاً برای همین ساخته شده: تا آن خاطره، این‌بار به فارسی، یک‌جا جمع بماند.
        </p>
      </section>

      <div style={{ textAlign: "center", marginBottom: 8 }}>
        <Link
          to="/users"
          style={{
            display: "inline-block",
            fontSize: 13,
            fontWeight: "bold",
            color: "#fff",
            background: "var(--ff-link)",
            padding: "9px 22px",
            borderRadius: 3,
          }}
        >
          مرور فهرست کاربران آرشیو ‹
        </Link>
      </div>
    </div>
  );
};

const TourRow: FC<{ title: string; children: React.ReactNode; last?: boolean }> = ({
  title,
  children,
  last,
}) => (
  <div
    style={{
      paddingBottom: 12,
      marginBottom: 12,
      borderBottom: last ? "none" : "1px solid var(--ff-border)",
    }}
  >
    <div style={{ fontSize: 12.5, fontWeight: "bold", marginBottom: 3 }}>{title}</div>
    <div style={{ fontSize: 12, color: "var(--ff-muted)", lineHeight: 1.8 }}>{children}</div>
  </div>
);
