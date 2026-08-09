import type { FC } from "react";
import { useSEO } from "../seo/useSEO";

/**
 * "فرندفید ایرانی بعد از خرداد ۸۸" -- previously lived directly at
 * /magazine (the magazine route used to just BE this one article). Moved
 * to its own route so /magazine can become a proper post index instead,
 * matching how /magazine/google-reader already worked: each magazine
 * post gets its own page, and MagazinePage.tsx just lists cover cards
 * that link out to them (see MagazinePage.tsx).
 *
 * Content/citation notes unchanged from the original -- see the previous
 * revision of MagazinePage.tsx in git history for the same commentary:
 * general, non-partisan framing of the well-documented post-election
 * 1388 filtering period and FriendFeed's role as a workaround hub.
 */
export const FriendFeed88Page: FC = () => {
  const pageUrl = "https://friendfeed.github.io/magazine/friendfeed-1388";
  const pageTitle = "فرندفید ایرانی بعد از خرداد ۸۸: از سرگرمی به پناهگاه اطلاعات";
  const shareText = encodeURIComponent(pageTitle + " " + pageUrl);
  const xShareUrl = `https://x.com/intent/tweet?text=${shareText}`;
  const bskyShareUrl = `https://bsky.app/intent/compose?text=${shareText}`;

  const shareBtn: React.CSSProperties = {
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
  };
  useSEO({
    path: "/magazine/friendfeed-1388",
    title: "فرندفید ایرانی بعد از خرداد ۸۸ | فرندفید فارسی",
    description:
      "بعد از انتخابات ریاست‌جمهوری خرداد ۱۳۸۸ و فیلترینگ گسترده، فرندفید از یک سرگرمی وبلاگی به یکی از راه‌های دنبال کردن خبر و گزارش لحظه‌ای تبدیل شد.",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "فرندفید ایرانی بعد از خرداد ۸۸: از سرگرمی به پناهگاه اطلاعات",
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
      <div
        style={{
          background: "#000",
          border: "1px solid var(--ff-border)",
          boxShadow: "var(--ff-card-shadow)",
        }}
      >
        <video
          controls
          preload="metadata"
          style={{ display: "block", width: "100%", background: "#000" }}
        >
          <source src="/media/friendfeed-magazine.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        style={{
          background: "var(--ff-panel)",
          border: "1px solid var(--ff-border)",
          borderTop: "none",
          padding: "20px 24px 28px",
        }}
      >
        <h1
          style={{
            fontSize: 20,
            lineHeight: 1.5,
            margin: "0 0 14px",
            color: "var(--ff-text)",
          }}
        >
          فرندفید ایرانی بعد از خرداد ۸۸: از سرگرمی به پناهگاه اطلاعات
        </h1>

        <div style={{ fontSize: 13.5, lineHeight: 2.1, color: "var(--ff-text)" }}>
          <p style={{ margin: "0 0 16px" }}>
            تا پیش از انتخابات ریاست‌جمهوری خرداد ۱۳۸۸، فرندفید برای بیشتر
            کاربران فارسی‌زبانش یک سرگرمی وبلاگی بود، جایی برای جمع کردن
            پست‌های توییتر و فلیکر و وبلاگ در یک صفحه و بحث و شوخی زیر آن‌ها.
            بعد از اعلام نتیجه انتخابات و اعتراض‌های گسترده‌ای که به راه
            افتاد، همان صفحه ساده و زنده به‌روزرسانی‌شونده، نقش دیگری هم پیدا
            کرد.
          </p>
          <p style={{ margin: "0 0 16px" }}>
            در روزهای بعد از انتخابات، فیلترینگ توییتر، فیس‌بوک و بخش بزرگی
            از اینترنت بین‌المللی در ایران به‌شدت بیشتر شد. فرندفید اما برای
            مدتی زیر همان فشار مستقیم نبود؛ و چون طراحی‌اش اجازه می‌داد
            پست‌های توییتر، عکس و لینک وبلاگ در یک فید واحد کنار هم دیده
            شوند، برای خیلی‌ها به راهی میان‌بر برای دنبال کردن خبرها و
            گزارش‌های لحظه‌ای تبدیل شد؛ در کنار سرویس‌هایی مثل گوگل‌ریدر که
            همان روزها نقش مشابهی داشتند.
          </p>
          <p style={{ margin: "0 0 16px" }}>
            این تغییر فقط در نوع استفاده نبود. لحن و فضای جامعه هم عوض شد.
            پست‌های سیاسی و خبری جای بیشتری از فید را گرفتند، بعضی کاربران به
            نام‌های مستعار روی آوردند یا محتاط‌تر شدند، و اتاق‌هایی با
            موضوعات خبری و اجتماعی که پیش‌تر کم‌رنگ بودند فعال‌تر شدند.
            خبرنگاران و رسانه‌های خارجی هم که دسترسی مستقیم‌شان به داخل ایران
            محدود شده بود، بخشی از گزارش‌ها را از همین فیدهای عمومی و
            به‌روزرسانی‌های کاربران برمی‌داشتند.
          </p>
          <p style={{ margin: 0 }}>
            این دوره، هرچند کوتاه، یکی از دلایلی است که فرندفید در خاطره
            جمعی کاربران فارسی‌زبان فقط یک شبکه اجتماعی قدیمی نیست؛ برای مدتی
            پنجره‌ای بود که از پشتش، وسط قطعی‌ها و فیلترینگ، می‌شد دید بیرون
            چه خبر است.
          </p>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "24px 0 0", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "var(--ff-muted)" }}>اشتراک‌گذاری:</span>
          <a href={xShareUrl} target="_blank" rel="noreferrer" style={shareBtn}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            در ایکس
          </a>
          <a href={bskyShareUrl} target="_blank" rel="noreferrer" style={shareBtn}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/>
            </svg>
            در بلواسکای
          </a>
        </div>
      </div>
    </article>
  );
};
