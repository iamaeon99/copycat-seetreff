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
    <section className="mb-8">
      {title && (
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
      )}
      <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-4 px-4 py-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-900/50"
            >
              <div className="min-w-0">
                <p className="font-medium text-slate-900 dark:text-white">{item.name}</p>
                {item.description && (
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
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
