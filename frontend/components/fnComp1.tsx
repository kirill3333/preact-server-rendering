import { h } from 'preact'

export function FunctionComponent(): JSX.Element {
  console.log('Function component: render()')
  return (
    <h4>Function</h4>
  )
}