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
 * Single source of truth for the growth chart, shared between the bars
 * and the x-axis labels below them, so the two can never drift out of
 * sync with each other the way separate arrays could.
 *
 * `platform` matters here: the chart tracks one continuous *community*
 * across its successive main hangouts, not literally "FriendFeed and
 * Twitter users" for the whole span (Twitter didn't exist in 1997, and
 * neither did FriendFeed until Oct 2007) — see the caption below the
 * chart, which spells this out so the early bars don't read as a claim
 * about FriendFeed/Twitter population before either service existed.
 */
const chartData: { v: number; label: string; sub: string; platform: string; kind: "launch" | "shutdown" }[] = [
  { v: 1, label: "۱۹۹۷", sub: "اتاق‌های گفتگوی یاهو", platform: "چت یاهو", kind: "launch" },
  { v: 1.6, label: "۲۰۰۵", sub: "یاهو ۳۶۰ می‌آید", platform: "چت یاهو + یاهو۳۶۰", kind: "launch" },
  { v: 2.1, label: "۲۰۰۹", sub: "تعطیلی یاهو ۳۶۰", platform: "فرندفید + توییتر", kind: "shutdown" },
  { v: 2.6, label: "۲۰۱۱", sub: "گوگل‌پلاس می‌آید", platform: "فرندفید + توییتر", kind: "launch" },
  { v: 3.1, label: "۲۰۱۲", sub: "تعطیلی اتاق‌های یاهو", platform: "فرندفید + توییتر", kind: "shutdown" },
  { v: 4, label: "۲۰۱۳", sub: "تعطیلی گوگل‌ریدر", platform: "فرندفید + توییتر", kind: "shutdown" },
  { v: 5, label: "۲۰۱۵+", sub: "فقط توییتر می‌ماند", platform: "فقط توییتر", kind: "shutdown" },
];

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

    {/* ---- Illustrative growth chart ----
        Rebuilt as plain HTML/CSS instead of SVG <text>: SVG text with
        textAnchor="end" doesn't reliably apply the Unicode bidi algorithm
        for Farsi across browsers, which is what was silently truncating
        the title down to its last word or two. HTML text doesn't have
        that problem and wraps normally, so every label is guaranteed to
        render in full. Also added an explicit legend and an "how to read
        this" line, since a chart with colored bars but no legend doesn't
        explain itself. */}
    <div style={{ marginTop: 22 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
        <h3 style={{ fontSize: 13, margin: 0 }}>
          رشد پیوسته جامعه فارسی‌زبان، نسل‌به‌نسل تا فرندفید و توییتر
        </h3>
        <span style={{ fontSize: 10.5, color: "var(--ff-muted-light)" }}>شاخص نسبی، نه شمار واقعی کاربران</span>
      </div>
      <p style={{ margin: "0 0 10px", fontSize: 11, lineHeight: 1.8, color: "var(--ff-muted)" }}>
        این نمودار یک جامعه واحد را دنبال می‌کند که در طول زمان چند بار خانه عوض کرد، نه فرندفید و
        توییتر را از ابتدا. تا ۲۰۰۹ عدد روی هر ستون، اندازه همان جمع در سرویس پیشین (چت یاهو یا
        یاهو۳۶۰) است؛ از ۲۰۰۹ به بعد که فرندفید و توییتر به خانه اصلی‌اش تبدیل شدند، همان عدد جمعیت
        این دو را نشان می‌دهد.
      </p>

      {/* Legend: explains what red vs. blue bars mean, since color alone
          doesn't communicate that without a key. */}
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", margin: "8px 0 14px" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--ff-muted)" }}>
          <span style={{ width: 11, height: 11, borderRadius: 3, background: "var(--ff-link)", display: "inline-block" }} />
          راه‌اندازی یک سرویس جدید
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--ff-muted)" }}>
          <span style={{ width: 11, height: 11, borderRadius: 3, background: "#c1121f", display: "inline-block" }} />
          تعطیلی یک سرویس رقیب (و مهاجرت کاربرانش)
        </span>
      </div>

      {/* Chart body: fixed-width numeric axis column (0-5) on the right
          (RTL leading edge) + a row of bars, laid out with CSS grid so the
          bars' baseline and the axis's "0" line always land on the same
          pixel row regardless of container width. */}
      <div style={{ display: "grid", gridTemplateColumns: "24px 1fr", columnGap: 10 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: 160,
            fontSize: 10,
            color: "var(--ff-muted-light)",
            textAlign: "center",
          }}
        >
          <span>۵</span>
          <span>۴</span>
          <span>۳</span>
          <span>۲</span>
          <span>۱</span>
          <span>۰</span>
        </div>

        <div
          style={{
            position: "relative",
            height: 160,
            borderInlineStart: "1.5px solid var(--ff-border-strong)",
            borderBottom: "1.5px solid var(--ff-border-strong)",
            backgroundImage:
              "repeating-linear-gradient(to top, var(--ff-border) 0, var(--ff-border) 1px, transparent 1px, transparent 32px)",
          }}
        >
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", justifyContent: "space-around", padding: "0 6px" }}>
            {chartData.map((bar, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 56 }}>
                <span style={{ fontSize: 10.5, fontWeight: "bold", color: "var(--ff-text)", marginBottom: 3 }}>
                  {bar.v % 1 === 0 ? bar.v : bar.v.toFixed(1).replace(".", "٫")}
                </span>
                <div
                  style={{
                    width: 34,
                    height: (bar.v / 5) * 160,
                    borderRadius: "4px 4px 0 0",
                    background: bar.kind === "shutdown" ? "#c1121f" : "var(--ff-link)",
                    opacity: 0.85,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* x-axis labels, laid out to match the bars above via the same
          justify-content: space-around rhythm */}
      <div style={{ display: "grid", gridTemplateColumns: "24px 1fr", columnGap: 10, marginTop: 6 }}>
        <div />
        <div style={{ display: "flex", justifyContent: "space-around", padding: "0 6px" }}>
          {chartData.map((x, i) => (
            <div key={i} style={{ width: 56, textAlign: "center" }}>
              <div style={{ fontSize: 10.5, fontWeight: "bold", color: "var(--ff-muted)" }}>{x.label}</div>
              <div style={{ fontSize: 9, color: "var(--ff-muted-light)", lineHeight: 1.5 }}>{x.sub}</div>
              <div style={{ fontSize: 8.5, color: "var(--ff-link)", lineHeight: 1.5, marginTop: 2 }}>
                ({x.platform})
              </div>
            </div>
          ))}
        </div>
      </div>

      <p style={{ margin: "12px 0 0", fontSize: 10.5, color: "var(--ff-muted-light)", textAlign: "center" }}>
        این نمودار آماری دقیق نیست، آمار رسمی از شمار کاربران فارسی‌زبان این سرویس‌ها منتشر نشده. عدد
        روی هر ستون فقط یک شاخص نسبی از ۰ تا ۵ است، برچسب زیر هر ستون هم مشخص می‌کند در آن مقطع
        داریم اندازه کدام سرویس را می‌بینیم. الگوی کلی که نشان می‌دهد این است: بعد از هر تعطیلی سرویس
        رقیب (ستون‌های قرمز)، این جامعه یک پله بزرگ‌تر می‌شد.
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
