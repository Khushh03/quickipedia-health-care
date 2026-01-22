import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components--/footer/footer')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/components--/footer/footer"!</div>
}
