import type { FC } from "react";

/**
 * "مجله فرندفید" -- a single-post weblog page, styled like a classic
 * blog post rather than the card-grid pages elsewhere in the site:
 * one wide article column, a video player at the top, a title, then
 * body copy. No date is shown per request (the piece is written as a
 * standing retrospective, not a dated news item).
 *
 * Content summary (for anyone editing this later): after the disputed
 * June 1388 (2009) presidential election, state filtering of Twitter,
 * Facebook and much of the international web intensified sharply.
 * FriendFeed was not blocked as early or as consistently, and its
 * "everything in one page, live-updating" design meant a single feed
 * could aggregate tweets, blog posts and photos that were otherwise
 * scattered across blocked services -- so it briefly became a workaround
 * hub for the Persian-speaking online community, alongside a general
 * chilling effect (more cautious posting, more pseudonyms) that also
 * reshaped how people used it. General, non-partisan framing; no
 * specific claims beyond what's well documented about that period.
 */
export const MagazinePage: FC = () => {
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
          <source src="./media/friendfeed-magazine.mp4" type="video/mp4" />
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
