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
      </div>
    </article>
  );
};
