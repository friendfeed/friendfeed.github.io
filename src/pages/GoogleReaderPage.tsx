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

      {(() => {
        const pageUrl = "https://friendfeed.github.io/magazine/google-reader";
        const pageTitle = "گودر: خانه‌ی گمشده‌ی وبلاگ‌نویسان فارسی";
        const shareText = encodeURIComponent(pageTitle + " " + pageUrl);
        const shareBtn: React.CSSProperties = {
          display: "inline-flex", alignItems: "center", gap: 7,
          padding: "7px 14px", borderRadius: 4, fontSize: 12, fontWeight: 600,
          textDecoration: "none", border: "1px solid var(--ff-border)",
          color: "var(--ff-text)", background: "var(--ff-panel)",
        };
        return (
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "16px 0 0", alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "var(--ff-muted)" }}>اشتراک‌گذاری:</span>
            <a href={`https://x.com/intent/tweet?text=${shareText}`} target="_blank" rel="noreferrer" style={shareBtn}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              در ایکس
            </a>
            <a href={`https://bsky.app/intent/compose?text=${shareText}`} target="_blank" rel="noreferrer" style={shareBtn}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/>
              </svg>
              در بلواسکای
            </a>
          </div>
        );
      })()}
    </article>
  );
};
