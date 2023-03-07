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

import { OverlayTemplate, LineAttrs, TextAttrs } from 'klinecharts'

const fibonacciSegment: OverlayTemplate = {
  name: 'fibonacciSegment',
  totalStep: 3,
  needDefaultPointFigure: true,
  needDefaultXAxisFigure: true,
  needDefaultYAxisFigure: true,
  createPointFigures: ({ coordinates, overlay, precision }) => {
    const lines: LineAttrs[] = []
    const texts: TextAttrs[] = []
    if (coordinates.length > 1) {
      const textX = coordinates[1].x > coordinates[0].x ? coordinates[0].x : coordinates[1].x
      const percents = [1, 0.786, 0.618, 0.5, 0.382, 0.236, 0]
      const yDif = coordinates[0].y - coordinates[1].y
      const points = overlay.points
      // @ts-expect-error
      const valueDif = points[0].value - points[1].value
      percents.forEach(percent => {
        const y = coordinates[1].y + yDif * percent
        // @ts-expect-error
        const price = (points[1].value + valueDif * percent).toFixed(precision.price)
        lines.push({ coordinates: [{ x: coordinates[0].x, y }, { x: coordinates[1].x, y }] })
        texts.push({
          x: textX,
          y,
          text: `${price} (${(percent * 100).toFixed(1)}%)`,
          baseline: 'bottom'
        })
      })
    }
    return [
      {
        type: 'line',
        attrs: lines
      }, {
        type: 'text',
        ignoreEvent: true,
        attrs: texts
      }
    ]
  }
}

export default fibonacciSegment
