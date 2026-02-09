import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { MenuTable } from "@/components/ui/MenuTable";

export const metadata: Metadata = {
  title: "Pizzakarte",
  description: "Unsere Pizzakarte — 30 frische Pizzen ab CHF 14. Jede Pizza 32cm mit Tomatensauce, Mozzarella und Oregano.",
};

const pizzas = [
  { name: "Margherita", price: "CHF 16.00" },
  { name: "Prosciutto", description: "Hinterschinken", price: "CHF 18.00" },
  { name: "Funghi", description: "Champignons", price: "CHF 18.00" },
  { name: "Calabrese", description: "scharfe Salami", price: "CHF 18.00" },
  { name: "Al Tonno", description: "Thon, Zwiebeln, Kapern", price: "CHF 19.50" },
  { name: "Diavola", description: "Zwiebeln, Knoblauch, Salami, scharfe Paprika", price: "CHF 21.50" },
  { name: "Napoli", description: "Sardellen, Kapern", price: "CHF 20.00" },
  { name: "Gorgonzola", description: "Gorgonzola-Käse", price: "CHF 20.00" },
  { name: "Vegetaria", description: "Gemüse", price: "CHF 19.50" },
  { name: "Fiorentina", description: "Spinat, Ei", price: "CHF 19.50" },
  { name: "Prosciutto e Funghi", description: "Hinterschinken, Champignons", price: "CHF 19.50" },
  { name: "Hawaii", description: "Ananas, Hinterschinken", price: "CHF 20.00" },
  { name: "Toscana", description: "Salami, Peperoni, Oliven", price: "CHF 20.00" },
  { name: "Quattro Formaggi", description: "Gorgonzola, Parmesan, Fetakäse", price: "CHF 20.00" },
  { name: "Kebap Pizza", description: "Kebapfleisch", price: "CHF 20.00" },
  { name: "Kebap Calzone", description: "Kebapfleisch, Gemüse", price: "CHF 20.00" },
  { name: "Quattro Stagioni", description: "Salami, Hinterschinken, Artischocken, Champignons", price: "CHF 21.50" },
  { name: "Pollo", description: "Pouletfleisch", price: "CHF 20.50" },
  { name: "Siciliana", description: "Hinterschinken, Champignons, Ei", price: "CHF 21.50" },
  { name: "Rustica", description: "Speck, Zwiebeln, Gorgonzola", price: "CHF 21.50" },
  { name: "Buure Pizza", description: "Champignons, Speck, Ei, Zwiebeln", price: "CHF 21.50" },
  { name: "Mafiosa", description: "Salami, Hinterschinken, Knoblauch, scharf", price: "CHF 21.50" },
  { name: "Marinara", description: "Meeresfrüchte", price: "CHF 21.50" },
  { name: "Crevette", description: "Crevetten, Zwiebeln, Knoblauch", price: "CHF 22.00" },
  { name: "Italia", description: "Rucola, Parmesan, Parmaschinken, Cherry Tomaten", price: "CHF 22.00" },
  { name: "Sucuk", description: "Türk. Salami, Spinat, Pilze, Zwiebeln", price: "CHF 21.00" },
  { name: "Pizza Lamm", description: "Lamm geschnetzeltes, Spinat, Pilze, scharfe Peperoncini", price: "CHF 23.00" },
  { name: "Padrone", description: "Kalbs geschnetzeltes, Zwiebeln, Knoblauch", price: "CHF 24.00" },
  { name: "Kinderpizza", description: "nach Wahl", price: "CHF 14.00" },
  { name: "Jede weitere Zutat", description: "ab", price: "CHF 1.50" },
];

export default function PizzaPage() {
  return (
    <>
      <PageHeader
        title="Pizzakarte"
        subtitle="Jede Pizza (32cm) mit Tomatensauce, Mozzarella und Oregano. Jede weitere Zutat ab CHF 1.50"
        image="/images/pizza-header.jpg"
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <MenuTable items={pizzas} />
      </div>
    </>
  );
}
