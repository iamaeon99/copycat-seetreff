import Image from "next/image";

interface PageHeaderProps {
  title: string
  subtitle?: string
  image?: string
}

export function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-stone-900 to-stone-800 px-4 py-16 text-center text-white sm:py-20">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-stone-900/40" />
      <div className="relative mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl drop-shadow-lg">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-lg text-stone-200 drop-shadow">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
