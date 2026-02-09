import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { MenuTable } from "@/components/ui/MenuTable";

export const metadata: Metadata = {
  title: "Getränke",
  description: "Alkoholfreie Getränke, Biere und Weine. Getränkekarte vom Seetreff Erlenbach.",
};

const alkoholfrei = [
  { name: "Rivella rot / blau / grün", description: "5 dl", price: "CHF 4.00" },
  { name: "Apfelschorle", description: "5 dl", price: "CHF 4.00" },
  { name: "Eistee Peach, Lemon", description: "5 dl", price: "CHF 4.00" },
  { name: "Orangensaft Granini", description: "0,33 l", price: "CHF 4.00" },
  { name: "Cola, Cola Zero", description: "5 dl", price: "CHF 4.00" },
  { name: "Fanta, Fanta Mango, Sprite", description: "5 dl", price: "CHF 4.00" },
  { name: "Red Bull", description: "0,25 l", price: "CHF 4.50" },
  { name: "Mineralwasser", description: "5 dl", price: "CHF 4.00" },
  { name: "Ayran", description: "0,33 l", price: "CHF 3.50" },
  { name: "Mineralwasser ohne Kohlensäure", description: "5 dl", price: "CHF 4.00" },
  { name: "Cola, Fanta, Eistee, Rivella", description: "1,5 l", price: "CHF 7.50" },
  { name: "Uludag Gazoz, Orange", description: "5 dl", price: "CHF 4.00" },
];

const biere = [
  { name: "Alkoholfreies Bier - Feldschlösschen", description: "0,33 l", price: "CHF 4.00" },
  { name: "Feldschlösschen Spezli", description: "0,33 l", price: "CHF 4.00" },
  { name: "Feldschlösschen Dose", description: "5 dl", price: "CHF 5.00" },
  { name: "Heineken", description: "5 dl", price: "CHF 5.00" },
  { name: "Efes", description: "5 dl", price: "CHF 4.50" },
  { name: "Chopfab", description: "5 dl", price: "CHF 5.00" },
  { name: "Desperados", description: "0,33 l", price: "CHF 6.00" },
  { name: "Smirnoff Ice", description: "0,275 l", price: "CHF 6.00" },
];

const rotwein = [
  { name: "Dôle (CH)", description: "5 dl", price: "CHF 18.00" },
  { name: "Merlot (Ita)", description: "5 dl", price: "CHF 16.00" },
  { name: "Montepulciano d'Abruzzo (Ita)", description: "7 dl", price: "CHF 22.00" },
  { name: "Primitivo del Solento (Ita)", description: "7 dl", price: "CHF 38.00" },
  { name: "Cabernet Sauvignon (Chile)", description: "7 dl", price: "CHF 32.00" },
];

const weisswein = [
  { name: "Pinot Grigio (Ita)", description: "7 dl", price: "CHF 35.00" },
  { name: "Saint Saphorin (CH)", description: "7 dl", price: "CHF 34.00" },
];

const rosewein = [
  { name: "Oeil de Pedrix (CH)", description: "7 dl", price: "CHF 25.00" },
];

const bioweine = [
  { name: "Riesling Sylvaner weiss", description: "Turmgut Erlenbach", price: "CHF 38.00" },
  { name: "Federweiss weiss", description: "Turmgut Erlenbach", price: "CHF 41.00" },
  { name: "Pinot Noir rot", description: "Turmgut Erlenbach", price: "CHF 41.00" },
  { name: "Trenoir rot", description: "Turmgut Erlenbach", price: "CHF 41.00" },
];

export default function GetraenkePage() {
  return (
    <>
      <PageHeader title="Getränke" subtitle="Alkoholfreie Getränke, Biere und Weine" image="/images/drinks-header.jpg" />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <MenuTable items={alkoholfrei} title="Alkoholfreie Getränke" />
        <MenuTable items={biere} title="Biere" />
        <MenuTable items={rotwein} title="Rotwein" />
        <MenuTable items={weisswein} title="Weisswein" />
        <MenuTable items={rosewein} title="Roséwein" />
        <MenuTable items={bioweine} title="Bio Weine — Turmgut Erlenbach" />
      </div>
    </>
  );
}
