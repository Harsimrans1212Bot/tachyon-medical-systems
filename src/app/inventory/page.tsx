import type { Metadata } from "next";
import InventoryClient from "./inventory-client";

export const metadata: Metadata = {
  title: "Inventory | Tachyon Medical Systems",
  description: "Browse our extensive inventory of medical imaging equipment including CT Scanners, MRI, PET-CT, Cath Labs, Mammography.",
};

export default function Inventory() {
  return <InventoryClient />;
}