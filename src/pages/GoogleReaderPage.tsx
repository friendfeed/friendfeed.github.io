import { useState, type FC } from "react";
import { useSEO } from "../seo/useSEO";
import { GoogleReaderTopBar } from "../components/GoogleReaderTopBar";
import { GoogleReaderPost } from "../components/GoogleReaderPost";
import { GooderDiagram } from "../components/GooderDiagram";
import { readerPosts } from "../data/googleReaderArticle";

/**
 * "گودر" (Google Reader) article, linked as its own sub-item under
 * "مجله فرندفید" in the Sidebar (see Sidebar.tsx) rather than folded
 * into MagazinePage.tsx.
 *
 * Full redesign: this page previously paired a small animated 3-pane
 * Reader demo (GoogleReaderHero.tsx) with an otherwise ordinary text
 * article underneath it. Per request, the demo hero is gone and the
 * *entire* article now IS the Google Reader experience: the wordmark
 * bar up top (GoogleReaderTopBar), then every section of the article
 * rendered as a real Reader item (GoogleReaderPost) with its own feed
 * name, star/share/like row, and a small fake comment thread for
 * atmosphere. Clicking a post reproduces the exact mark-as-read wash
 * the old hero's autoplay loop used, just user-triggered instead of on
 * a timer. A small SVG diagram (GooderDiagram) illustrates the
 * many-blogs-into-one-hub-then-back-out-to-two-destinations shape of
 * the whole story.
 *
 * Content is adapted from research on the Farsi Google Reader
 * ("گودر") blogger community. Per site style, no em dashes; normal
 * punctuation only. Wording pass: افول -> پایان, گودری‌های فارسی ->
 * گودری‌های فارسی‌زبان, and a few other Arabic-heavy words swapped for
 * plainer Persian (see data/googleReaderArticle.ts for the full list).
 */
export const GoogleReaderPage: FC = () => {
  useSEO({
    path: "/magazine/google-reader",
    title: "گودر | فرندفید فارسی",
    description:
      "گودر (گوگل ریدر) و جامعه‌ی وبلاگ‌نویسان فارسی‌زبان: از کجا آمد، چطور به یک اجتماع تبدیل شد، رابطه‌اش با فرندفید فارسی و توییتر، و اینکه در پایان کاربرانش به کجا مهاجرت کردند.",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "گودر: خانه‌ی گمشده‌ی وبلاگ‌نویسان فارسی",
        inLanguage: "fa",
        isPartOf: {
          "@type": "WebSite",
          name: "فرندفید فارسی | آرشیو",
          url: "https://friendfeed.github.io",
        },
      },
    ],
  });

  const [readIds, setReadIds] = useState<Set<string>>(new Set());
  const totalUnread = readerPosts.length - readIds.size;

  const markRead = (id: string) => setReadIds((prev) => new Set(prev).add(id));

  return (
    <article style={{ maxWidth: 760, margin: "0 auto" }}>
      {/* ---- Google Reader top chrome ---- */}
      <section style={{ marginBottom: 4 }} aria-label="رابط گوگل ریدر">
        <GoogleReaderTopBar totalUnread={totalUnread} />
      </section>

      {/* ---- Diagram: blogs -> گودر -> فرندفید/توییتر ---- */}
      <section
        style={{
          background: "var(--ff-panel)",
          border: "1px solid var(--ff-border)",
          borderTop: "none",
          padding: "14px 16px 4px",
        }}
        aria-label="نمودار تجمیع و مهاجرت"
      >
        <GooderDiagram />
      </section>

      {/* ---- The article itself, as a Reader item stream ---- */}
      <section aria-label="فهرست پست‌ها" style={{ marginTop: 16 }}>
        {readerPosts.map((post) => (
          <GoogleReaderPost key={post.id} post={post} isRead={readIds.has(post.id)} onRead={markRead} />
        ))}
      </section>

      <p
        style={{
          margin: "14px 2px 0",
          fontSize: 10.5,
          color: "var(--ff-muted-light)",
          textAlign: "center",
        }}
      >
        بازسازی رابط گوگل ریدر و شبیه‌سازی کامنت‌ها برای فضا؛ محتوای تاریخی بر اساس پژوهش، نام کاربری‌های زیر پست‌ها ساختگی هستند.
      </p>
    </article>
  );
};
