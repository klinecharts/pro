/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ParentComponent, ParentProps, JSX, Show } from 'solid-js'

import Loading from '../loading'
import Empty from '../empty'

export interface ListProps extends ParentProps {
  class?: string
  style?: JSX.CSSProperties | string
  loading?: boolean
  dataSource?: any[]
  renderItem?: (data: any) => JSX.Element
}

const List: ParentComponent<ListProps> = props => {
  return (
    <ul
      style={props.style}
      class={`klinecharts-pro-list ${props.class ?? ''}`}>
      <Show when={props.loading}>
        <Loading/>
      </Show>
      <Show when={!props.loading && !props.children && !props.dataSource?.length}>
        <Empty/>
      </Show>
      <Show
        when={props.children}>
        {props.children}
      </Show>
      <Show
        when={!props.children}>
        {
          props.dataSource?.map(data => (
            props.renderItem?.(data) ?? <li></li>
          ))
        }
      </Show>
    </ul>
  )
}

export default List
