import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { MenuTable } from "@/components/ui/MenuTable";

export const metadata: Metadata = {
  title: "Snacks",
  description: "Kebab, Pide, Klassiker und Salate. Döner, Falafel, Burger und mehr vom Seetreff Erlenbach.",
};

const kebab = [
  { name: "Kebab im Taschenbrot", price: "CHF 13.00" },
  { name: "Kebab im Fladenbrot", price: "CHF 14.00" },
  { name: "Kebab im Fladenbrot mit Pommes", price: "CHF 17.50" },
  { name: "Poulet Kebab im Fladenbrot", price: "CHF 16.00" },
  { name: "Döner Box, mit Pommes und Salat", price: "CHF 14.00" },
  { name: "Poulet Kebab, als Menü", price: "CHF 21.00" },
  { name: "Falafel Box, mit Pommes und Salat", price: "CHF 14.00" },
  { name: "Lamm Kebab im Fladenbrot", price: "CHF 17.00" },
  { name: "Falafel Box, mit Pommes", price: "CHF 14.00" },
  { name: "Lamm Kebab, als Menü", price: "CHF 24.00" },
  { name: "Lamm Kebab Box, mit Pommes", price: "CHF 17.00" },
  { name: "Lahmacun", price: "CHF 14.00" },
  { name: "Poulet Kebab Box, mit Pommes", price: "CHF 16.00" },
  { name: "Lahmacun mit Salat", price: "CHF 17.00" },
  { name: "Kebab Teller", price: "CHF 21.00" },
  { name: "Lahmacun mit Salat und Dönerfleisch", price: "CHF 20.00" },
  { name: "Falafel im Fladenbrot", price: "CHF 13.00" },
  { name: "Pljeskavica", price: "CHF 13.00" },
];

const pide = [
  { name: "Pide mit Hackfleisch", price: "CHF 14.00" },
  { name: "Pide mit Käse", price: "CHF 15.00" },
  { name: "Pide mit Käse und Spinat", price: "CHF 17.00" },
  { name: "Pide mit geschnetzeltes Poulet", price: "CHF 16.00" },
  { name: "Pide mit geschnetzeltes Lamm", price: "CHF 19.00" },
  { name: "Pide mit Sucuk und Ei", price: "CHF 20.00" },
  { name: "Pide mit Dönerfleisch", price: "CHF 18.00" },
];

const boxen = [
  { name: "Fisch Box, mit Pommes", price: "CHF 16.00" },
  { name: "Chicken Nugget Box, mit Pommes", price: "CHF 14.00" },
];

const klassiker = [
  { name: "Schnitzelbrot", price: "CHF 13.00" },
  { name: "Hot Dog", price: "CHF 7.00" },
  { name: "Pepito Lamm", price: "CHF 16.00" },
  { name: "Pepito Poulet", price: "CHF 15.00" },
  { name: "Hamburger", price: "CHF 12.00" },
  { name: "Cheeseburger", price: "CHF 13.00" },
  { name: "Pommes", price: "CHF 9.00" },
  { name: "Chicken Nuggets, als Menü", price: "CHF 19.50" },
  { name: "Cordon Bleu", price: "CHF 22.00" },
  { name: "Pouletschnitzel, als Menü", price: "CHF 17.50" },
  { name: "Pouletflügeli", price: "CHF 21.00" },
  { name: "Fritierte Eglifilet, mit Tartarsauce und Salat", price: "CHF 22.00" },
  { name: "Calamares", price: "CHF 20.00" },
];

const salate = [
  { name: "Grüner Salat", price: "CHF 7.50" },
  { name: "Tomaten Mozzarella Salat", price: "CHF 14.00" },
  { name: "Gemischter Salat", price: "CHF 11.00" },
  { name: "Thon Salat", price: "CHF 16.50" },
  { name: "Griechischer Salat, klein", price: "CHF 12.00" },
  { name: "Griechischer Salat, gross", price: "CHF 16.50" },
  { name: "Fitnessteller mit Pouletbrust", price: "CHF 18.50" },
];

export default function SnacksPage() {
  return (
    <>
      <PageHeader title="Snacks" subtitle="Kebab, Pide, Klassiker und frische Salate" />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <MenuTable items={kebab} title="Kebab" />
        <MenuTable items={pide} title="Pide" />
        <MenuTable items={boxen} title="Essen aus der Box" />
        <MenuTable items={klassiker} title="Klassiker" />
        <MenuTable items={salate} title="Salate" />
      </div>
    </>
  );
}
