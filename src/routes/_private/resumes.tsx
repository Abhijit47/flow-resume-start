import { ChartAreaInteractive } from '#/features/private/chart-area-interactive'
import { DataTable } from '#/features/private/data-table'
import { SectionCards } from '#/features/private/section-cards'
import { createFileRoute } from '@tanstack/react-router'

import data from '#/data/data.json'

export const Route = createFileRoute('/_private/resumes')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <DataTable data={data} />
        </div>
      </div>
    </div>
  )
}
