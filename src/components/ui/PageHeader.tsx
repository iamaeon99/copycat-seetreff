interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-12 text-center text-white sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-lg text-slate-300">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
