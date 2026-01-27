import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/engineering-philosophy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/engineering-philosophy"!</div>
}
