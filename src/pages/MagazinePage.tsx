import type { FC } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../seo/useSEO";
import {
  CafePragueCover,
  FriendFeedStoryCover,
  FerferLeaksCover,
  GoogleReaderCover,
  FriendFeed88Cover,
} from "../components/MagazineCovers";

/**
 * "مجله فرندفید" -- a post index. Each entry below is one post, rendered
 * as a clickable cover card (title + short excerpt + a small
 * illustrative cover, no external image assets -- CSS gradient + one
 * icon, same decorative approach as the rest of the site's diagrams)
 * that links to that post's own dedicated page.
 *
 * Cover art now lives in components/MagazineCovers.tsx, shared with the
 * homepage's "از مجله فرندفید" teaser row so the same art shows up in
 * both places instead of the teaser using a plain placeholder.
 */
type MagazinePost = {
  to: string;
  title: string;
  excerpt: string;
  cover: FC;
};

const posts: MagazinePost[] = [
  {
    to: "/magazine/cafe-prague-tehran",
    title: "کافه پراگ: پاتوق فرندفید",
    excerpt:
      "روایتی از کافه‌ای در بلوار کشاورز تهران که خانهٔ جامعهٔ فرندفید ایران شد. جایی که فرندفیدی‌ها از سراسر دنیا برای نشستن کنار هم پیدایش می‌کردند، بدون قرار قبلی، باریستاها فرندفیدی بودند و گاهی تمام طبقه.",
    cover: CafePragueCover,
  },
  {
    to: "/magazine/ferferleaks",
    title: "فرفرلیکس: روزی که دخمه افسران جنگ نرم در فرندفید لو رفت",
    excerpt:
      "بهار ۱۳۹۰، اولین افشاگری به سبک ویکی‌لیکس در وب فارسی. ماجرای نفوذ به اتاق خصوصی گروه موسوم به افسران جنگ نرم در فرندفید و اسنادی که به فرفرلیکس معروف شدند.",
    cover: FerferLeaksCover,
  },
  {
    to: "/magazine/google-reader",
    title: "گودر: خانه‌ی گمشده‌ی وبلاگ‌نویسان فارسی",
    excerpt:
      "پیش از توییتر و اینستاگرام، یک فیدخوان ساده به نام Google Reader که کاربران فارسی‌زبان با شوخ‌طبعی «گودر» صدایش می‌کردند، به یکی از پرشورترین اجتماعات آنلاین وبلاگستان فارسی تبدیل شد.",
    cover: GoogleReaderCover,
  },
  {
    to: "/magazine/friendfeed-1388",
    title: "فرندفید ایرانی بعد از خرداد ۸۸: از سرگرمی به پناهگاه اطلاعات",
    excerpt:
      "بعد از انتخابات ریاست‌جمهوری خرداد ۱۳۸۸ و فیلترینگ گسترده‌ی توییتر و فیس‌بوک، همان صفحه‌ی ساده‌ی فرندفید نقش دیگری هم پیدا کرد: راهی میان‌بر برای دنبال کردن خبر و گزارش لحظه‌ای.",
    cover: FriendFeed88Cover,
  },
  {
    to: "/magazine/dastan-khane-friendfeed",
    title: "داستان خانه‌ی فرندفید: از بهترین فید اینترنت تا تعطیلی",
    excerpt:
      "فرندفید چطور آسان‌ترین راه اشتراک مطالب در اینترنت شد، فیس‌بوک چرا آن را خرید، و در نهایت چه شد که در سال ۲۰۱۵ برای همیشه خاموش شد؛ همراه با اسکرین‌شات‌های آرشیوی، عکس شب امضای قرارداد و تایم‌لاین کامل مهاجرت جامعه.",
    cover: FriendFeedStoryCover,
  },
];

export const MagazinePage: FC = () => {
  useSEO({ path: "/magazine" });

  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      <h1 style={{ fontSize: 16, margin: "0 0 4px" }}>مجله فرندفید</h1>
      <p style={{ fontSize: 12.5, color: "var(--ff-muted)", margin: "0 0 18px" }}>
        مطالب، خاطرات و مقالات مرتبط با جامعه فارسی‌زبان فرندفید و تاریخچه آن
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {posts.map((post) => {
          const Cover = post.cover;
          return (
            <Link
              key={post.to}
              to={post.to}
              className="ff-magazine-card"
              style={{
                display: "block",
                background: "var(--ff-panel)",
                border: "1px solid var(--ff-border)",
                borderRadius: "var(--ff-radius)",
                overflow: "hidden",
                boxShadow: "var(--ff-card-shadow)",
                color: "inherit",
                textDecoration: "none",
                transition: "box-shadow 120ms ease, transform 120ms ease",
              }}
            >
              <Cover />
              <div style={{ padding: "14px 18px 18px" }}>
                <h2 style={{ fontSize: 15, margin: "0 0 8px", color: "var(--ff-text)", lineHeight: 1.6 }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: 12.5, lineHeight: 1.9, color: "var(--ff-muted)", margin: 0 }}>
                  {post.excerpt}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
