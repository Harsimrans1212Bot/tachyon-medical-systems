import type { Metadata } from "next";
import { Suspense } from "react";
import InventoryClient from "./inventory-client";

export const metadata: Metadata = {
  title: "Inventory | Tachyon Medical Systems",
  description: "Browse our extensive inventory of medical imaging equipment including CT Scanners, MRI, PET-CT, Cath Labs, Mammography.",
  alternates: { canonical: "https://www.tachyonmed.com/inventory" },
  openGraph: { url: "https://www.tachyonmed.com/inventory" },
};

export default function Inventory() {
  return (
    <Suspense>
      <InventoryClient />
    </Suspense>
  );
}
