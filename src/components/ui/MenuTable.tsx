interface MenuItem {
  name: string
  description?: string
  price: string
}

interface MenuTableProps {
  items: MenuItem[]
  title?: string
}

export function MenuTable({ items, title }: MenuTableProps) {
  return (
    <section className="mb-10">
      {title && (
        <h2 className="mb-4 text-2xl font-bold text-stone-900 dark:text-white">{title}</h2>
      )}
      <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm dark:border-stone-700 dark:bg-stone-900">
        <div className="divide-y divide-stone-100 dark:divide-stone-800">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-stone-50 dark:hover:bg-stone-800/50"
            >
              <div className="min-w-0">
                <p className="font-medium text-stone-900 dark:text-stone-100">{item.name}</p>
                {item.description && (
                  <p className="text-sm text-stone-500 dark:text-stone-400">{item.description}</p>
                )}
              </div>
              <span className="shrink-0 font-semibold text-brand-600 dark:text-brand-400">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
