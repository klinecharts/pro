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

const fibonacciExtension: OverlayTemplate = {
  name: 'fibonacciExtension',
  totalStep: 4,
  needDefaultPointFigure: true,
  needDefaultXAxisFigure: true,
  needDefaultYAxisFigure: true,
  createPointFigures: ({ coordinates, overlay, precision }) => {
    const fbLines: LineAttrs[] = []
    const texts: TextAttrs[] = []
    if (coordinates.length > 2) {
      const points = overlay.points
      // @ts-expect-error
      const valueDif = points[1].value - points[0].value
      const yDif = coordinates[1].y - coordinates[0].y
      const percents = [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1]
      const textX = coordinates[2].x > coordinates[1].x ? coordinates[1].x : coordinates[2].x
      percents.forEach(percent => {
        const y = coordinates[2].y + yDif * percent
        // @ts-expect-error
        const price = (points[2].value + valueDif * percent).toFixed(precision.price)
        fbLines.push({ coordinates: [{ x: coordinates[1].x, y }, { x: coordinates[2].x, y }] })
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
        attrs: { coordinates },
        styles: { style: 'dashed' }
      },
      {
        type: 'line',
        attrs: fbLines
      },
      {
        type: 'text',
        ignoreEvent: true,
        attrs: texts
      }
    ]
  }
}

export default fibonacciExtension
