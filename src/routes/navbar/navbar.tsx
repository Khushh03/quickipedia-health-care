import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/navbar/navbar')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/navbar/navbar"!</div>
}
