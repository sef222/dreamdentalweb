// Data ported verbatim from design/DreamDentalPage.dc.html (lines 594-663).

export type ToothStatus = "t" | "c" | "k" | "h";

export type Tooth = {
  n: number;
  bg: string;
  bd: string;
};

const TOOTH_STATUS_MAP: Record<ToothStatus, { bg: string; bd: string }> = {
  // "t" = treated
  t: { bg: "var(--brand)", bd: "var(--brand)" },
  // "c" = decay
  c: { bg: "#F43F5E", bd: "#F43F5E" },
  // "k" = crown
  k: { bg: "#F49E0C", bd: "#F49E0C" },
  // "h" = healthy
  h: { bg: "rgba(255,255,255,.05)", bd: "rgba(255,255,255,.2)" },
};

function teeth(nums: Array<[number, ToothStatus]>): Tooth[] {
  return nums.map(([n, s]) => {
    const c = TOOTH_STATUS_MAP[s];
    return { n, bg: c.bg, bd: c.bd };
  });
}

export const upperTeeth: Tooth[] = teeth([
  [18, "h"],
  [17, "h"],
  [16, "t"],
  [15, "h"],
  [14, "c"],
  [13, "h"],
  [12, "h"],
  [11, "h"],
  [21, "h"],
  [22, "h"],
  [23, "h"],
  [24, "c"],
  [25, "h"],
  [26, "k"],
  [27, "h"],
  [28, "h"],
]);

export const lowerTeeth: Tooth[] = teeth([
  [48, "h"],
  [47, "h"],
  [46, "t"],
  [45, "h"],
  [44, "h"],
  [43, "h"],
  [42, "h"],
  [41, "h"],
  [31, "h"],
  [32, "h"],
  [33, "h"],
  [34, "h"],
  [35, "t"],
  [36, "k"],
  [37, "h"],
  [38, "h"],
]);

export type PayrollRow = {
  name: string;
  role: string;
  base: string;
  comm: string;
  total: string;
};

export const payroll: PayrollRow[] = [
  {
    name: "Dr. Hadi Al-Mansour",
    role: "Dentist · Endodontics",
    base: "12,000",
    comm: "+4,180",
    total: "16,180",
  },
  {
    name: "Dr. Sara Kassem",
    role: "Dentist · General",
    base: "11,000",
    comm: "+2,940",
    total: "13,940",
  },
  {
    name: "Dr. Yousef Rahman",
    role: "Dentist · Ortho",
    base: "11,500",
    comm: "+1,020",
    total: "12,520",
  },
  {
    name: "Mariam Nasser",
    role: "Dental assistant",
    base: "6,200",
    comm: "—",
    total: "6,200",
  },
  {
    name: "Reem Fadel",
    role: "Reception",
    base: "5,400",
    comm: "—",
    total: "5,400",
  },
];
