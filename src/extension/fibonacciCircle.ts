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

import { OverlayTemplate, CircleAttrs, TextAttrs } from 'klinecharts'

const fibonacciCircle: OverlayTemplate = {
  name: 'fibonacciCircle',
  totalStep: 3,
  needDefaultPointFigure: true,
  needDefaultXAxisFigure: true,
  needDefaultYAxisFigure: true,
  createPointFigures: ({ coordinates }) => {
    if (coordinates.length > 1) {
      const xDis = Math.abs(coordinates[0].x - coordinates[1].x)
      const yDis = Math.abs(coordinates[0].y - coordinates[1].y)
      const radius = Math.sqrt(xDis * xDis + yDis * yDis)
      const percents = [0.236, 0.382, 0.5, 0.618, 0.786, 1]
      const circles: CircleAttrs[] = []
      const texts: TextAttrs[] = []
      percents.forEach(percent => {
        const r = radius * percent
        circles.push(
          { ...coordinates[0], r }
        )
        texts.push({
          x: coordinates[0].x,
          y: coordinates[0].y + r + 6,
          text: `${(percent * 100).toFixed(1)}%`
        })
      })
      return [
        {
          type: 'circle',
          attrs: circles,
          styles: { style: 'stroke' }
        },
        {
          type: 'text',
          ignoreEvent: true,
          attrs: texts
        }
      ]
    }
    return []
  }
}

export default fibonacciCircle
