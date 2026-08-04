import { Fragment, type FC, type ReactNode } from "react";
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

    {/* ---- Vertical timeline ----
        Laid out as a 2-column CSS grid (icon column fixed at 34px, content
        column flexible) instead of per-row flexbox. The connecting line is
        an absolutely-positioned sibling pinned to the exact center of the
        34px icon column (16px inline-start + half of the 2px line width),
        so it lines up with the icon circles regardless of row height, and
        stays correct in RTL. */}
    <div
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "34px 1fr",
        columnGap: 14,
        rowGap: 20,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          insetInlineStart: 16,
          top: 17,
          bottom: 17,
          width: 2,
          background: "var(--ff-border)",
        }}
      />
      {entries.map((e, i) => (
        <Fragment key={i}>
          <div
            style={{ ...iconWrap, borderColor: kindColor[e.kind], color: kindColor[e.kind], zIndex: 1 }}
          >
            {e.icon}
          </div>
          <div style={{ paddingTop: 3 }}>
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
        </Fragment>
      ))}
    </div>

    {/* ---- Illustrative growth chart ----
        Redesigned with: (1) enough top margin that the title never clips,
        (2) a real numbered index axis (1-5) with gridlines, since a chart
        with no scale at all reads as broken, and (3) "تعطیلی" instead of
        the ambiguous "افت" on the shutdown bars — افت on its own reads as
        "decline", which is the wrong direction of causation (it's the
        service's closure driving growth elsewhere, not a decline here). */}
    <div style={{ marginTop: 22 }}>
      <svg
        viewBox="0 0 600 230"
        width="100%"
        height="auto"
        role="img"
        aria-label="نمودار مفهومی رشد جامعه فارسی‌زبان فرندفید و توییتر پس از هر مهاجرت، بر مبنای شاخص نسبی نه آمار دقیق"
      >
        <text x="576" y="22" fontSize="11.5" fontWeight="bold" textAnchor="end" fill="var(--ff-text)">
          رشد جمعیت کاربران فارسی‌زبان فرندفید و توییتر
        </text>
        <text x="576" y="37" fontSize="9.5" textAnchor="end" fill="var(--ff-muted-light)">
          شاخص نسبی، نه شمار واقعی کاربران
        </text>

        {/* y-axis gridlines + numeric scale, 0 to 5 */}
        {[0, 1, 2, 3, 4, 5].map((v) => {
          const y = 190 - v * 28;
          return (
            <g key={v}>
              <line x1="46" y1={y} x2="576" y2={y} stroke="var(--ff-border)" strokeWidth="1" />
              <text x="38" y={y + 3.5} fontSize="10" textAnchor="end" fill="var(--ff-muted-light)">
                {["۰", "۱", "۲", "۳", "۴", "۵"][v]}
              </text>
            </g>
          );
        })}
        <line x1="46" y1="62" x2="46" y2="190" stroke="var(--ff-border-strong)" strokeWidth="1.5" />
        <line x1="46" y1="190" x2="576" y2="190" stroke="var(--ff-border-strong)" strokeWidth="1.5" />

        {[
          { x: 110, v: 1, label: "۲۰۰۷", sub: "فرندفید راه می‌افتد", kind: "launch" as const },
          { x: 214, v: 2, label: "۲۰۰۹", sub: "تعطیلی یاهو ۳۶۰", kind: "shutdown" as const },
          { x: 318, v: 2.6, label: "۲۰۱۱", sub: "گوگل‌پلاس می‌آید", kind: "launch" as const },
          { x: 422, v: 3.6, label: "۲۰۱۳", sub: "تعطیلی گوگل‌ریدر", kind: "shutdown" as const },
          { x: 526, v: 5, label: "۲۰۱۵+", sub: "فقط توییتر می‌ماند", kind: "shutdown" as const },
        ].map((bar, i) => {
          const barKindColor = bar.kind === "shutdown" ? "#c1121f" : "var(--ff-link)";
          const h = bar.v * 28;
          const y = 190 - h;
          return (
            <g key={i}>
              <rect x={bar.x - 24} y={y} width="48" height={h} rx="4" fill={barKindColor} opacity={0.75} />
              <text x={bar.x} y={y - 8} fontSize="10.5" fontWeight="bold" textAnchor="middle" fill="var(--ff-text)">
                {bar.v % 1 === 0 ? bar.v : bar.v.toFixed(1).replace(".", "٫")}
              </text>
              <text x={bar.x} y="206" fontSize="11" fontWeight="bold" textAnchor="middle" fill="var(--ff-muted)">
                {bar.label}
              </text>
              <text x={bar.x} y="220" fontSize="9.5" textAnchor="middle" fill="var(--ff-muted-light)">
                {bar.sub}
              </text>
            </g>
          );
        })}
      </svg>
      <p style={{ margin: "6px 0 0", fontSize: 10.5, color: "var(--ff-muted-light)", textAlign: "center" }}>
        این نمودار آماری دقیق نیست، فقط روند کلی را با یک شاخص نسبی نشان می‌دهد: بعد از هر تعطیلی
        (میله‌های قرمز)، بخشی از کاربران سرویس بسته‌شده به فرندفید و توییتر اضافه می‌شدند.
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
      <p style={{ margin: "0 0 10px", fontSize: 12.5, lineHeight: 1.9, color: "var(--ff-muted)" }}>
        این عبارت یک اصطلاح رایج در خودِ همین جامعه است، بین کاربران قدیمی فرندفید و توییتر فارسی، نه
        یک آمار رسمی از یک منبع واحد. پیش از این‌که موج‌های مهاجرت بالا جمعیت را چند برابر کنند، کل
        کاربران فارسی‌زبان فعال توییتر (که در همان دوره در فرندفید هم بودند) به همین اندازه، چیزی حدود
        سیصد تا چهارصد نفر، محدود بود؛ همه همدیگر را می‌شناختند یا لااقل اسم‌ همدیگر به گوششان خورده
        بود.
      </p>
      <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.9, color: "var(--ff-muted)" }}>
        همین جمع کوچک، از نظر سیاسی هم یک‌دست نبود: به روایت کاربران قدیمی‌تر توییتر، منتقدان و
        مخالفان تندروتر بیشتر در فرندفید جمع بودند، در حالی که اصلاح‌طلبان بحث‌های روزشان را بیشتر در
        گوگل ریدر پیش می‌بردند؛ و بعد از انتخابات ۱۳۸۸ بود که توییتر، برای هر دو طیف، تبدیل به تنها
        دریچه اطلاع‌رسانی به بیرون از ایران شد. این اصطلاح بیشتر به شکل یک خاطره‌ی مشترک و کمی شوخی
        درباره‌ی آن روزهای کوچک و صمیمی باقی مانده تا یک رقم دقیق و مستند.
      </p>
      <p style={{ margin: "10px 0 0", fontSize: 10.5, color: "var(--ff-muted-light)" }}>
        منبع بخش سیاسی: مریم شفیع‌پور، «در توییتر فارسی چه می‌گذرد؟»، peace-mark.org.
      </p>
    </div>
  </div>
);
