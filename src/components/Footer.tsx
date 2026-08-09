import type { FC } from "react";
import { Link } from "react-router-dom";
import { IconBluesky, IconRss, IconX } from "../icons/Icons";

/**
 * Site-wide footer, replacing the single centered disclaimer line that
 * used to live inline in App.tsx. Same disclaimer copy is kept verbatim
 * (word for word) in the bottom bar so nothing that mattered legally/
 * editorially was lost -- it's just no longer the *only* thing down here.
 *
 * Three link columns mirror the exact grouping already used in
 * <Sidebar>/<BottomNav> (archive / در ایکس / اطلاعات) so the footer reads
 * as a sitemap of the real nav, not an invented new taxonomy.
 */
export const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="ff-footer">
      <div className="ff-footer-inner">
        <div className="ff-footer-grid">
          <div className="ff-footer-col">
            <Link
              to="/"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 10 }}
            >
              <img src="/brand/friendfeed-wordmark.webp" alt="فرندفید فارسی" style={{ height: 20 }} />
            </Link>
            <p style={{ fontSize: 12, lineHeight: 1.9, color: "var(--ff-muted)", margin: "0 0 14px", maxWidth: 260 }}>
              آرشیو غیررسمی و غیرفعالِ جامعه فارسی‌زبان فرندفید: کاربران، اتاق‌ها، تاریخچه سرویس و مسیر
              مهاجرت این جامعه بین پلتفرم‌های مختلف.
            </p>
          </div>

          <div className="ff-footer-col">
            <h3>فرندفید</h3>
            <ul>
              <li><Link to="/">خانه</Link></li>
              <li><Link to="/subscriptions">همه کاربران فرندفید</Link></li>
              <li><Link to="/rooms">اتاق‌ها</Link></li>
              <li><Link to="/magazine">مجله فرندفید</Link></li>
            </ul>
          </div>

          <div className="ff-footer-col">
            <h3>در ایکس</h3>
            <ul>
              <li><Link to="/users">کاربران فرندفید</Link></li>
              <li><Link to="/podcasts">پادکست</Link></li>
              <li><Link to="/news">خبرگزاری‌ها</Link></li>
              <li><Link to="/startups">استارت‌آپ‌ها</Link></li>
            </ul>
          </div>

          <div className="ff-footer-col">
            <h3>اطلاعات بیشتر</h3>
            <ul>
              <li><Link to="/brands">برندها</Link></li>
              <li><Link to="/orgs">ادارات و سازمان‌ها</Link></li>
              <li><Link to="/books">کتاب‌ها</Link></li>
              <li><Link to="/faq">سوالات متداول</Link></li>
            </ul>
          </div>
        </div>

        <div className="ff-footer-bottom">
          <span style={{ maxWidth: 640, lineHeight: 1.9 }}>
            © {year} فرندفید فارسی. این پروژه زنده است و به‌طور مرتب با کاربران و اطلاعات تازه
            به‌روزرسانی می‌شود. پروژه‌ای آرشیوی و غیررسمی است و ارتباطی با فرندفید یا متا ندارد. تمام
            داده‌ها از منابع آرشیوی عمومی گردآوری شده‌اند.
          </span>
          <div className="ff-footer-social">
            <a
              href="https://x.com/friendfeedx"
              target="_blank"
              rel="noreferrer"
              aria-label="فرندفید فارسی در ایکس"
              title="فرندفید فارسی در ایکس"
            >
              <IconX width={14} height={14} />
            </a>
            <a
              href="https://bsky.app/profile/friendfeedx.bsky.social"
              target="_blank"
              rel="noreferrer"
              aria-label="فرندفید فارسی در بلواسکای"
              title="فرندفید فارسی در بلواسکای"
            >
              <IconBluesky width={14} height={14} />
            </a>
            <Link to="/magazine" aria-label="فید مجله" title="فید مجله">
              <IconRss width={14} height={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
