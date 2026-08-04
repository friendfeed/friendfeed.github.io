import type { FC, ReactNode } from "react";
import { IconNetwork, IconOff, IconRss, IconTwitter, IconUsers } from "../icons/Icons";

/**
 * Full migration story for the Farsi-speaking online community: the
 * overlap between early FriendFeed and early Twitter, and how each
 * later shutdown of a competing service (Yahoo 360, Google Reader,
 * Google+) pushed another wave of users toward FriendFeed and/or
 * Twitter. Dates below are checked against public sources (see the
 * citation list at the bottom of the section in HistoryPage). The
 * *sizes* of the community at each point are not exact, documented
 * statistics, so the chart is explicitly labeled as illustrative.
 */

type TimelineEntry = {
  date: string;
  title: string;
  body: ReactNode;
  icon: ReactNode;
  kind: "launch" | "shutdown" | "note";
};

const iconWrap: React.CSSProperties = {
  width: 34,
  height: 34,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  background: "#fff",
  border: "2px solid",
};

const entries: TimelineEntry[] = [
  {
    date: "۲۰۰۵",
    title: "یاهو ۳۶۰ راه‌اندازی می‌شود",
    icon: <IconNetwork width={16} height={16} />,
    kind: "launch",
    body: (
      <>
        قبل از این‌که اصلاً اسمی از فرندفید یا توییتر باشد، بخشی از فارسی‌زبان‌های اینترنت، به‌خصوص
        وبلاگ‌نویس‌ها، دور یاهو ۳۶۰ جمع بودند: ترکیبی از وبلاگ و پروفایل اجتماعی که یاهو در مارس ۲۰۰۵
        راه انداخت.
      </>
    ),
  },
  {
    date: "۲۰۰۶",
    title: "توییتر راه‌اندازی می‌شود",
    icon: <IconTwitter width={16} height={16} />,
    kind: "launch",
    body: (
      <>
        توییتر در سال ۲۰۰۶ کارش را شروع کرد. جامعه فارسی‌زبانش در همان سال‌های اول خیلی کوچک بود،
        چیزی در حد چند صد نفر، همان‌هایی که بعدها به‌شوخی به‌شان می‌گفتند «سیصد چهارصد نفر اصلی
        توییتر».
      </>
    ),
  },
  {
    date: "اکتبر ۲۰۰۷",
    title: "فرندفید راه‌اندازی می‌شود",
    icon: <IconUsers width={16} height={16} />,
    kind: "launch",
    body: (
      <>
        نکته مهم این‌جاست: همان جمع کوچک اولیه توییتر فارسی، تقریباً همان آدم‌ها بودند که در فرندفید
        هم عضو شدند. دو تا شبکه جدا نبودند، یک جمع بودند که هم‌زمان در هر دو حضور داشتند، چون فرندفید
        دقیقاً همان پست‌های توییتری‌شان را هم خودکار در فید خودش نشان می‌داد.
      </>
    ),
  },
  {
    date: "۱۳ ژوئیه ۲۰۰۹",
    title: "یاهو ۳۶۰ برای همیشه بسته می‌شود",
    icon: <IconOff width={16} height={16} />,
    kind: "shutdown",
    body: (
      <>
        یاهو رسماً یاهو ۳۶۰ را تعطیل کرد و کاربرانش را به یاهو پروفایلز هدایت کرد، سرویسی که خودش هم
        امکانات قبلی را نداشت. نتیجه این شد که موج اول کاربران بی‌خانمان یاهو ۳۶۰، به‌خصوص
        وبلاگ‌نویس‌های فارسی، به فرندفید و توییتر کوچ کردند؛ همان دو جایی که آن روزها بیشترین
        شباهت را به فضای گفت‌وگومحور یاهو ۳۶۰ داشتند.
      </>
    ),
  },
  {
    date: "آگوست ۲۰۰۹",
    title: "فیس‌بوک فرندفید را می‌خرد",
    icon: <IconNetwork width={16} height={16} />,
    kind: "note",
    body: (
      <>
        درست همان تابستان که یاهو ۳۶۰ کاربرانش را پخش کرد، فیس‌بوک هم فرندفید را خرید. کاربران تازه‌وارد
        و کاربران قدیمی فرندفید، فعلاً همه یک‌جا ماندند؛ تغییر واقعی چند سال بعد شروع شد.
      </>
    ),
  },
  {
    date: "ژوئن ۲۰۱۱",
    title: "گوگل پلاس راه‌اندازی می‌شود",
    icon: <IconNetwork width={16} height={16} />,
    kind: "launch",
    body: (
      <>
        گوگل با گوگل پلاس وارد میدان شد و برای مدتی بخشی از کاربران فنی و وبلاگ‌نویس فارسی را هم به
        خودش جذب کرد، هرچند فرندفید و توییتر همچنان مرکز ثقل جامعه فارسی‌زبان باقی ماندند.
      </>
    ),
  },
  {
    date: "۱ ژوئیه ۲۰۱۳",
    title: "گوگل ریدر بسته می‌شود",
    icon: <IconRss width={16} height={16} />,
    kind: "shutdown",
    body: (
      <>
        گوگل، گوگل ریدر را هم تعطیل کرد. خیلی از همان کاربرانی که عادت داشتند فیدهای خبری و
        وبلاگی‌شان را از گوگل ریدر دنبال کنند، همان عادت را با خودشان به توییتر بردند، جایی که آن
        موقع دیگر تبدیل شده بود به منبع اصلی خبر لحظه‌ای. این موج دوم مهاجرت بود، این‌بار عمدتاً
        به‌نفع توییتر.
      </>
    ),
  },
  {
    date: "۹ آوریل ۲۰۱۵",
    title: "فرندفید برای همیشه خاموش می‌شود",
    icon: <IconOff width={16} height={16} />,
    kind: "shutdown",
    body: (
      <>
        فرندفید بسته شد و آخرین بخش از جامعه‌اش هم، که تا آن روز مانده بود، دیگر مقصدی جز توییتر
        نداشت. از این نقطه به بعد، توییتر عملاً تنها خانه مشترک همان جمعی شد که یک بار بین دو
        پلتفرم تقسیم شده بود.
      </>
    ),
  },
  {
    date: "۲ آوریل ۲۰۱۹",
    title: "گوگل پلاس هم بسته می‌شود",
    icon: <IconOff width={16} height={16} />,
    kind: "shutdown",
    body: (
      <>
        آخرین رقیب واقعی هم از میدان بیرون رفت. هر کسی که هنوز پایی در گوگل پلاس داشت، به توییتر
        برگشت؛ جایی که تا امروز هم قدیمی‌ترین بخش این جامعه هنوز حضور دارد.
      </>
    ),
  },
];

const kindColor: Record<TimelineEntry["kind"], string> = {
  launch: "#1a7f37",
  shutdown: "#c1121f",
  note: "var(--ff-link)",
};

export const MigrationTimeline: FC = () => (
  <div>
    <p style={{ margin: "0 0 16px", fontSize: 13, lineHeight: 2, color: "var(--ff-muted)" }}>
      جامعه فارسی‌زبان فرندفید و توییتر، در واقع از اول دو جامعه جدا نبودند. همان چند صد نفری که در
      روزهای اول توییتر فارسی فعال بودند، دقیقاً همان‌هایی بودند که در فرندفید هم عضو شدند و دو
      پلتفرم را هم‌زمان زندگی می‌کردند. آن‌چه جمعیت این دو پلتفرم را بزرگ‌تر و بزرگ‌تر کرد، سرویس‌های
      دیگری بودند که یکی‌یکی تعطیل شدند و کاربرانشان را به این دو، و بعدتر فقط به توییتر، هل دادند.
    </p>

    {/* ---- Vertical timeline ---- */}
    <div style={{ position: "relative", paddingInlineStart: 4 }}>
      <div
        aria-hidden
        style={{
          position: "absolute",
          insetInlineStart: 16,
          top: 6,
          bottom: 6,
          width: 2,
          background: "var(--ff-border)",
        }}
      />
      {entries.map((e, i) => (
        <div key={i} style={{ display: "flex", gap: 14, marginBottom: i === entries.length - 1 ? 0 : 20 }}>
          <div style={{ ...iconWrap, borderColor: kindColor[e.kind], color: kindColor[e.kind], zIndex: 1 }}>
            {e.icon}
          </div>
          <div style={{ flex: 1, paddingTop: 3 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
              <span
                style={{
                  fontSize: 10.5,
                  fontWeight: "bold",
                  color: kindColor[e.kind],
                  background: "var(--ff-panel-alt)",
                  border: "1px solid var(--ff-border)",
                  borderRadius: 3,
                  padding: "2px 6px",
                }}
              >
                {e.date}
              </span>
              <span style={{ fontSize: 13.5, fontWeight: "bold" }}>{e.title}</span>
            </div>
            <p style={{ margin: "6px 0 0", fontSize: 12.5, lineHeight: 1.9, color: "var(--ff-muted)" }}>
              {e.body}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* ---- Illustrative growth chart ---- */}
    <div style={{ marginTop: 22 }}>
      <svg viewBox="0 0 560 190" width="100%" height="auto" role="img" aria-label="نمودار مفهومی رشد جامعه فارسی‌زبان فرندفید و توییتر پس از هر مهاجرت">
        <line x1="40" y1="150" x2="540" y2="150" stroke="var(--ff-border-strong)" strokeWidth="1.5" />
        <line x1="40" y1="20" x2="40" y2="150" stroke="var(--ff-border-strong)" strokeWidth="1.5" />

        {[
          { x: 70, h: 18, label: "۲۰۰۷", sub: "فرندفید" },
          { x: 160, h: 40, label: "۲۰۰۹", sub: "افت یاهو۳۶۰" },
          { x: 260, h: 55, label: "۲۰۱۱", sub: "گوگل‌پلاس" },
          { x: 360, h: 78, label: "۲۰۱۳", sub: "افت ریدر" },
          { x: 460, h: 105, label: "۲۰۱۵+", sub: "فقط توییتر" },
        ].map((bar, i) => (
          <g key={i}>
            <rect
              x={bar.x - 22}
              y={150 - bar.h}
              width="44"
              height={bar.h}
              rx="3"
              fill="var(--ff-link)"
              opacity={0.15 + i * 0.18}
            />
            <text x={bar.x} y="166" fontSize="10.5" textAnchor="middle" fill="var(--ff-muted)">
              {bar.label}
            </text>
            <text x={bar.x} y="180" fontSize="9.5" textAnchor="middle" fill="var(--ff-muted-light)">
              {bar.sub}
            </text>
          </g>
        ))}

        <text x="40" y="14" fontSize="10.5" fill="var(--ff-muted-light)">
          جمعیت کاربران فارسی‌زبان (روند مفهومی)
        </text>
      </svg>
      <p style={{ margin: "6px 0 0", fontSize: 10.5, color: "var(--ff-muted-light)", textAlign: "center" }}>
        این نمودار آماری دقیق نیست، فقط روند کلی را نشان می‌دهد: بعد از هر تعطیلی، بخشی از کاربران
        سرویس بسته‌شده به فرندفید و توییتر اضافه می‌شدند.
      </p>
    </div>

    {/* ---- Term explainer ---- */}
    <div
      style={{
        marginTop: 22,
        background: "var(--ff-panel-alt)",
        border: "1px solid var(--ff-border)",
        borderRadius: 6,
        padding: 14,
      }}
    >
      <h3 style={{ fontSize: 13, margin: "0 0 8px" }}>«سیصد چهارصد نفر اصلی توییتر» یعنی چه؟</h3>
      <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.9, color: "var(--ff-muted)" }}>
        این عبارت یک اصطلاح رایج در خودِ همین جامعه است، نه یک آمار رسمی از یک منبع مشخص. پیش از
        این‌که موج‌های مهاجرت بالا جمعیت را چند برابر کنند، کل کاربران فارسی‌زبان فعال توییتر (که در
        همان دوره در فرندفید هم بودند) به همین اندازه، چیزی حدود سیصد تا چهارصد نفر، محدود بود. همه
        همدیگر را می‌شناختند یا لااقل اسم‌ همدیگر به گوششان خورده بود. بعدها که این اصطلاح در گفت‌وگوهای
        همان جمع تکرار شد، بیشتر به شکل یک خاطره‌ی مشترک و کمی شوخی درباره‌ی آن روزهای کوچک و صمیمی
        باقی ماند تا یک رقم دقیق.
      </p>
    </div>
  </div>
);
