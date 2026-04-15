import data from "@/data/treatments.json";

export type PaymentMode = "pay_full" | "deposit" | "pay_on_arrival";

export type Treatment = {
  id: string;
  name: string;
  durationMin: number;
  price: number;
  paymentMode: PaymentMode;
  depositAmount?: number;
  description?: string;
};

export type Category = {
  slug: string;
  name: string;
  blurb: string;
  treatments: Treatment[];
};

export const categories = data.categories as Category[];

export const allTreatments: Treatment[] = categories.flatMap((c) => c.treatments);

export const findTreatment = (id: string) => allTreatments.find((t) => t.id === id);

export const formatPrice = (v: number) => `£${v.toLocaleString("en-GB")}`;

export const paymentModeLabel: Record<PaymentMode, string> = {
  pay_full: "Pay in full online",
  deposit: "Deposit required",
  pay_on_arrival: "Pay on arrival",
};
