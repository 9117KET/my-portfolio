// formatDate is a small utility that converts a raw date string
// into a human‑friendly format like "15 October 2024".
//
// It is intentionally defensive: blog posts might use different
// string formats (e.g. "2024-10-15" or "October 15, 2024"), so
// we try to gracefully handle both instead of crashing.
export const formatDate = (date: string): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let parsedDate: Date | null = null;

  // 1) Try ISO-like formats first (e.g. "2024-10-15")
  if (/^\d{4}-\d{2}-\d{2}/.test(date)) {
    const iso = new Date(date);
    if (!Number.isNaN(iso.getTime())) {
      parsedDate = iso;
    }
  }

  // 2) Fallback: let the browser try to parse whatever string it gets
  if (!parsedDate) {
    const auto = new Date(date);
    if (!Number.isNaN(auto.getTime())) {
      parsedDate = auto;
    }
  }

  // 3) Last-resort manual parse for "Month Day, Year"
  if (!parsedDate) {
    const parts = date.match(/(\w+)\s+(\d+),\s+(\d+)/);
    if (parts) {
      const [, monthName, dayStr, yearStr] = parts;
      const monthIndex = months.findIndex(
        (m) => m.toLowerCase() === monthName.toLowerCase()
      );
      const day = Number.parseInt(dayStr, 10);
      const year = Number.parseInt(yearStr, 10);

      if (monthIndex >= 0 && !Number.isNaN(day) && !Number.isNaN(year)) {
        const manual = new Date(year, monthIndex, day);
        if (!Number.isNaN(manual.getTime())) {
          parsedDate = manual;
        }
      }
    }
  }

  // 4) If everything fails, just return the original string so
  //    the UI still shows something instead of "Invalid Date".
  if (!parsedDate || Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return (
    parsedDate.getDate() +
    " " +
    months[parsedDate.getMonth()] +
    " " +
    parsedDate.getFullYear()
  );
};
