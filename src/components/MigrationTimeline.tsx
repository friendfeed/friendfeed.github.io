import { Fragment, type FC, type ReactNode } from "react";
import { IconComment, IconNetwork, IconOff, IconRss, IconTwitter, IconUsers } from "../icons/Icons";

/**
 * Full migration story for the Farsi-speaking online community: the
 * overlap between early FriendFeed and early Twitter, and how each
 * later shutdown of a competing service (Yahoo Chat rooms, Yahoo 360,
 * Google Reader, Google+) pushed another wave of users toward
 * FriendFeed and/or Twitter. Dates below are checked against public
 * sources (see the citation list at the bottom of the section in
 * HistoryPage). The *sizes* of the community at each point are not
 * exact, documented statistics, so the chart is explicitly labeled
 * as illustrative / a relative index, not a real user count.
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
    date: "۷ ژانویه ۱۹۹۷",
    title: "اتاق‌های گفتگوی یاهو راه‌اندازی می‌شوند",
    icon: <IconComment width={16} height={16} />,
    kind: "launch",
    body: (
      <>
        سال‌ها قبل از فرندفید و توییتر، اولین نسل فارسی‌زبان‌های اینترنت، جایی برای هم‌صحبتی داشتند:
        اتاق‌های گفتگوی یاهو (Yahoo! Chat)، که یاهو در ۷ ژانویه ۱۹۹۷ راه انداخت. برای خیلی از
        فارسی‌زبان‌ها، این اولین تجربه‌ی جمع‌شدن دور یک هویت آنلاین مشترک بود، سال‌ها قبل از این‌که
        اصلاً اسمی از شبکه اجتماعی به آن معنای امروزی وجود داشته باشد.
      </>
    ),
  },
  {
    date: "۲۰۰۵",
    title: "یاهو ۳۶۰ راه‌اندازی می‌شود",
    icon: <IconNetwork width={16} height={16} />,
    kind: "launch",
    body: (
      <>
        نسل بعدی از همان جمع، و کاربران تازه‌ای که به آن‌ها اضافه شدند، این‌بار دور یاهو ۳۶۰ جمع
        شدند: ترکیبی از وبلاگ و پروفایل اجتماعی که یاهو در مارس ۲۰۰۵ راه انداخت و امکانات به‌مراتب
        بیشتری از اتاق‌های گفتگوی ساده قدیمی داشت.
      </>
    ),
  },
  {
    date: "۷ اکتبر ۲۰۰۵",
    title: "گوگل ریدر راه‌اندازی می‌شود",
    icon: <IconRss width={16} height={16} />,
    kind: "launch",
    body: (
      <>
        همان سال، گوگل هم گوگل ریدر را راه انداخت: ابزاری برای دنبال‌کردن فیدهای خبری و وبلاگی در یک
        جا. برای بخشی از همان جامعه فارسی‌زبان، به‌خصوص وبلاگ‌نویس‌ها و اصلاح‌طلبانی که بحث‌های روزشان
        را آن‌جا پیش می‌بردند، گوگل ریدر برای چند سال به یکی از عادت‌های روزانه‌شان تبدیل شد، تا وقتی
        که در ۲۰۱۳ برای همیشه بسته شد.
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
    date: "۱۴ دسامبر ۲۰۱۲",
    title: "اتاق‌های گفتگوی یاهو برای همیشه بسته می‌شوند",
    icon: <IconOff width={16} height={16} />,
    kind: "shutdown",
    body: (
      <>
        یاهو در ۳۰ نوامبر ۲۰۱۲ اعلام کرد و در ۱۴ دسامبر همان سال عملی کرد: اتاق‌های گفتگوی عمومی‌اش
        را برای همیشه بست، همان جایی که نسل اول فارسی‌زبان‌های اینترنت پانزده سال قبل از آن دور هم
        جمع شده بودند. تا آن موقع اغلب کاربران فعال از سال‌ها قبل به جاهای دیگر کوچ کرده بودند، اما
        این بستن رسمی، آخرین حلقه از قدیمی‌ترین نسل جامعه آنلاین فارسی‌زبان را هم به سمت فرندفید و
        توییتر هل داد.
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

/**
 * Single source of truth for the growth chart: one continuous
 * *community* moving through its successive main hangouts. Each step
 * is one migration wave, not a measured user count (no such stats
 * were ever published), so the chart intentionally has no numeric
 * y-axis — see the redesign note above the chart body.
 */
type GrowthStep = { year: string; title: string; kind: "launch" | "shutdown" };

const growthSteps: GrowthStep[] = [
  { year: "۱۹۹۷", title: "اتاق‌های گفتگوی یاهو راه‌اندازی می‌شود", kind: "launch" },
  { year: "۲۰۰۵", title: "یاهو ۳۶۰ و گوگل ریدر راه‌اندازی می‌شوند", kind: "launch" },
  { year: "۲۰۰۹", title: "یاهو ۳۶۰ تعطیل می‌شود", kind: "shutdown" },
  { year: "۲۰۱۱", title: "گوگل پلاس راه‌اندازی می‌شود", kind: "launch" },
  { year: "۲۰۱۲", title: "اتاق‌های گفتگوی یاهو تعطیل می‌شوند", kind: "shutdown" },
  { year: "۲۰۱۳", title: "گوگل ریدر تعطیل می‌شود", kind: "shutdown" },
  { year: "۲۰۱۵+", title: "فرندفید تعطیل می‌شود، فقط توییتر می‌ماند", kind: "shutdown" },
];

/** Eras the community lived through, as x-index ranges into growthSteps
 * (inclusive), rendered as a labeled background band instead of
 * repeating the platform name under every single point. */
const growthEras: { from: number; to: number; label: string }[] = [
  { from: 0, to: 1, label: "خانه: اتاق‌های گفتگوی یاهو" },
  { from: 1, to: 2, label: "خانه: یاهو ۳۶۰" },
  { from: 2, to: 6, label: "خانه: فرندفید + توییتر" },
  { from: 6, to: 6, label: "فقط توییتر" },
];

// Chart geometry, computed once from growthSteps.length so the SVG
// path, the markers, and the HTML label overlays all stay in sync.
const GROWTH_VB_W = 1040;
const GROWTH_VB_H = 300;
const GROWTH_MARGIN_X = 30;
const GROWTH_PLOT_W = GROWTH_VB_W - GROWTH_MARGIN_X * 2;
const GROWTH_BASE_Y = 230;
const GROWTH_TOP_Y = 46;
const GROWTH_PLOT_H = GROWTH_BASE_Y - GROWTH_TOP_Y;

const growthStepX = (i: number) => GROWTH_MARGIN_X + (i * GROWTH_PLOT_W) / (growthSteps.length - 1);
const growthStepY = (stage: number) => GROWTH_BASE_Y - (stage / growthSteps.length) * GROWTH_PLOT_H;
const growthLeftPct = (i: number) => (growthStepX(i) / GROWTH_VB_W) * 100;

// Stepped ("staircase") path: flat at the current stage until the
// x-position where the next event happens, then a vertical jump.
// This is the standard shape for "one quantity that changes only at
// discrete events over time" — much clearer here than unconnected
// bars, since the whole point of this chart is that it is one
// continuously-growing community, not seven unrelated measurements.
const growthLinePath = (() => {
  let d = `M ${growthStepX(0)} ${growthStepY(1)}`;
  for (let i = 1; i < growthSteps.length; i++) {
    d += ` H ${growthStepX(i)} V ${growthStepY(i + 1)}`;
  }
  return d;
})();

const growthAreaPath = `${growthLinePath} L ${growthStepX(growthSteps.length - 1)} ${GROWTH_BASE_Y} L ${growthStepX(0)} ${GROWTH_BASE_Y} Z`;

export const MigrationTimeline: FC = () => (
  <div>
    <p style={{ margin: "0 0 16px", fontSize: 13, lineHeight: 2, color: "var(--ff-muted)" }}>
      جامعه فارسی‌زبان فرندفید و توییتر، در واقع از اول دو جامعه جدا نبودند. همان چند صد نفری که در
      روزهای اول توییتر فارسی فعال بودند، دقیقاً همان‌هایی بودند که در فرندفید هم عضو شدند و دو
      پلتفرم را هم‌زمان زندگی می‌کردند. اما این جمع از دل خلأ بیرون نیامد: نسل‌های قبلی همین جامعه، از
      اتاق‌های گفتگوی یاهو در دهه ۱۹۹۰ تا یاهو ۳۶۰ در میانه دهه ۲۰۰۰، هر بار که سرویس محبوب‌شان تعطیل
      می‌شد، به‌دنبال خانه بعدی می‌گشتند. آن‌چه جمعیت فرندفید و توییتر را بزرگ‌تر و بزرگ‌تر کرد، دقیقاً
      همین زنجیره از تعطیلی‌ها بود: هر سرویس دیگری که یکی‌یکی بسته شد، کاربرانش را به این دو، و بعدتر
      فقط به توییتر، هل داد.
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

    {/* ---- Growth chart, redesigned as a stepped ("staircase") line ----
        Why a step chart instead of bars: this tracks ONE continuously
        growing community moving through discrete events, not seven
        independent measurements, so a connected staircase (value flat,
        then jumps at the moment of each event) is the standard,
        immediately-readable shape for that story — see e.g. Tufte or
        any time-series style guide on "step vs. bar" for event-driven
        series. It also removes two sources of confusion in the old
        version: (1) bar height AND bar color each separately encoding
        different things (magnitude vs. event type), and (2) fake
        precision from decimal values (2.6, 3.1) for a number that was
        always just an ordinal illustration. Every step here is equal
        height on purpose — there is no numeric y-axis, because there
        is no real measurement behind it, and pretending otherwise with
        numbers is worse than just showing the shape of the growth.
        Platform-era labels moved from a 3rd text line under every
        single point into shaded background bands (like recession bands
        on an economic chart), so "which platform is home right now"
        reads as a region instead of repeated text. */}
    <div style={{ marginTop: 22 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
        <h3 style={{ fontSize: 13, margin: 0 }}>
          رشد پلکانی جامعه فارسی‌زبان: هر موج مهاجرت، یک پله
        </h3>
        <span style={{ fontSize: 10.5, color: "var(--ff-muted-light)" }}>شاخص ترتیبی، نه شمار واقعی کاربران</span>
      </div>
      <p style={{ margin: "0 0 12px", fontSize: 11, lineHeight: 1.8, color: "var(--ff-muted)" }}>
        این نمودار یک جامعه واحد را دنبال می‌کند، نه فرندفید و توییتر را از ابتدا. هر پله دقیقاً یک
        رویداد است؛ ارتفاع پله‌ها عمداً یکسان است چون آمار رسمی‌ای برای شمار واقعی کاربران فارسی‌زبان
        این سرویس‌ها وجود ندارد؛ آن‌چه واقعی و مستند است فقط توالی و جهت رویدادهاست: این جامعه هیچ‌وقت
        کوچک‌تر نشد، فقط خانه عوض کرد.
      </p>

      {/* Legend: two event types, matching the icon + color used for
          "launch" / "shutdown" in the vertical timeline above, so the
          two visuals read as one consistent system rather than two
          separate charts. */}
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", margin: "8px 0 6px" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--ff-muted)" }}>
          <span style={{ width: 14, height: 14, borderRadius: "50%", background: "#fff", border: `2px solid ${kindColor.launch}`, display: "inline-block" }} />
          راه‌اندازی یک سرویس جدید
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--ff-muted)" }}>
          <span style={{ width: 14, height: 14, borderRadius: "50%", background: "#fff", border: `2px solid ${kindColor.shutdown}`, display: "inline-block" }} />
          تعطیلی یک سرویس رقیب (و مهاجرت کاربرانش)
        </span>
      </div>

      {/* On narrow (mobile) screens, 7 labeled points can't shrink
          below a certain width without their text overlapping — so
          instead of shrinking the text into illegibility, the whole
          chart gets a fixed minimum width and the OUTER wrapper
          scrolls horizontally. This is the standard mobile pattern for
          dense charts/tables (scroll the data, don't squash it); a
          small scroll hint is shown only on narrow screens where it's
          needed. */}
      <div
        className="growth-chart-scroll"
        style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", margin: "0 -2px", padding: "0 2px", direction: "ltr" }}
      >
        <div style={{ minWidth: 640 }}>
          {/* Era header bar: segmented, width-matched to the plot below
              via the same growthLeftPct() math used for the SVG, so
              boundaries always line up with the point where each era
              actually starts. */}
          <div style={{ position: "relative", height: 30, direction: "ltr" }}>
            {growthEras.map((era, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  insetInlineStart: `${growthLeftPct(era.from)}%`,
                  width: `${growthLeftPct(era.to) - growthLeftPct(era.from)}%`,
                  textAlign: "center",
                  fontSize: 10,
                  color: "var(--ff-muted-light)",
                  borderBottom: "2px solid var(--ff-border)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  padding: "0 4px 5px",
                }}
              >
                {era.label}
              </div>
            ))}
          </div>

          {/* Chart body: the staircase itself is pure SVG geometry (no
              SVG <text>, for the bidi reasons noted elsewhere in this
              file); all Farsi labels are plain HTML, absolutely
              positioned from the same growthLeftPct() values so they
              can never drift out of sync with the shape above them.
              Direction is forced to ltr — time reads left-to-right here
              (oldest to newest) because an ascending staircase is the
              one layout everyone reads correctly on sight, in either
              script direction; the caption below spells this out
              explicitly rather than leaving it implicit. */}
          <div style={{ position: "relative", direction: "ltr" }}>
            <svg
              viewBox={`0 0 ${GROWTH_VB_W} ${GROWTH_VB_H}`}
              style={{ width: "100%", height: "auto", display: "block" }}
              role="img"
              aria-label="نمودار پلکانی رشد جامعه: هفت رویداد از ۱۹۹۷ تا ۲۰۱۵ به بعد، هر رویداد یک پله بالاتر از قبلی"
            >
              <line x1={GROWTH_MARGIN_X} y1={GROWTH_BASE_Y} x2={GROWTH_VB_W - GROWTH_MARGIN_X} y2={GROWTH_BASE_Y} stroke="var(--ff-border-strong)" strokeWidth={1.5} />
              <path d={growthAreaPath} fill="var(--ff-link)" opacity={0.08} />
              <path d={growthLinePath} fill="none" stroke="var(--ff-link)" strokeWidth={2.5} strokeLinejoin="round" />
              {growthSteps.map((step, i) => {
                const cx = growthStepX(i);
                const cy = growthStepY(i + 1);
                const color = kindColor[step.kind];
                return (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r={9} fill="#fff" stroke={color} strokeWidth={2.5} />
                    {step.kind === "launch" ? (
                      <path d={`M ${cx} ${cy - 4} V ${cy + 4} M ${cx - 4} ${cy} H ${cx + 4}`} stroke={color} strokeWidth={1.6} strokeLinecap="round" />
                    ) : (
                      <path
                        d={`M ${cx} ${cy - 3.6} V ${cy} M ${cx - 3} ${cy - 2.2} A 4.2 4.2 0 1 0 ${cx + 3} ${cy - 2.2}`}
                        fill="none"
                        stroke={color}
                        strokeWidth={1.6}
                        strokeLinecap="round"
                      />
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* x-axis labels: bold year pill + one short line per event,
              instead of the old 3-line stack under every point. */}
          <div style={{ position: "relative", height: 54, direction: "ltr", marginTop: 2 }}>
            {growthSteps.map((step, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  insetInlineStart: `${growthLeftPct(i)}%`,
                  transform: "translateX(-50%)",
                  width: 148,
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 10.5,
                    fontWeight: "bold",
                    color: kindColor[step.kind],
                    background: "var(--ff-panel-alt)",
                    border: "1px solid var(--ff-border)",
                    borderRadius: 3,
                    padding: "1px 6px",
                    marginBottom: 4,
                    direction: "rtl",
                  }}
                >
                  {step.year}
                </span>
                <div style={{ fontSize: 9.5, lineHeight: 1.5, color: "var(--ff-muted)", direction: "rtl" }}>{step.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p
        className="growth-chart-scroll-hint"
        style={{ margin: "4px 0 0", fontSize: 10, color: "var(--ff-muted-light)", textAlign: "center", display: "none" }}
      >
        ‹ برای دیدن کل نمودار به چپ و راست بکشید ›
      </p>

      <p style={{ margin: "10px 0 0", fontSize: 10.5, color: "var(--ff-muted-light)", textAlign: "center", direction: "rtl" }}>
        زمان در این نمودار از چپ به راست پیش می‌رود (۱۹۹۷ تا ۲۰۱۵ به بعد). این نمودار آماری دقیق
        نیست؛ آمار رسمی از شمار کاربران فارسی‌زبان این سرویس‌ها منتشر نشده، برای همین به‌جای عدد،
        فقط توالی و جهت رویدادها را نشان می‌دهد. الگوی کلی همیشه یکسان است: بعد از هر تعطیلی سرویس
        رقیب (نشان قرمز)، این جامعه یک پله بزرگ‌تر می‌شد و هرگز به پله قبلی برنگشت.
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
        منبع بخش سیاسی: مریم شفیع‌پور،{" "}
        <a
          href="https://www.peace-mark.org/articles/70-10/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--ff-link)" }}
        >
          «در توییتر فارسی چه می‌گذرد؟»
        </a>
        ، peace-mark.org.
      </p>
    </div>
  </div>
);
