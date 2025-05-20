export function DashboardHeader({ heading, description, children }) {
  return (
    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
      <div className="grid gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-primary-100 dark:text-primaryDark-100">{heading}</h1>
        {description && <p className="text-primary-100/70 dark:text-primaryDark-100/70">{description}</p>}
      </div>
      {children}
    </div>
  )
}
