import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'
import Layout from '../Layout'

const fruits = [
  '๐', '๐', '๐', '๐', '๐', '๐',
  '๐', '๐', '๐', '๐', '๐', '๐',
  '๐', '๐ฅฅ', '๐ฅ', '๐ฅญ', '๐ฅ', '๐'
]

// ่ชๅฎไนๆๆ 
const emojiTechnicalIndicator = {
  name: 'EMOJI',
  plots: [
    { key: 'emoji' }
  ],
  calcTechnicalIndicator: (kLineDataList) => {
    const result = []
    kLineDataList.forEach(kLineData => {
      result.push({ emoji: kLineData.close, text: fruits[Math.floor(Math.random() * 17)] })
    })
    return result
  },
  render: ({
    ctx,
    dataSource,
    viewport,
    xAxis,
    yAxis
  }) => {
    ctx.font = `${viewport.barSpace}px Helvetica Neue`
    ctx.textAlign = 'center'
    for (let i = dataSource.from; i < dataSource.to; i++) {
      const data = dataSource.technicalIndicatorDataList[i]
      const x = xAxis.convertToPixel(i)
      const y = yAxis.convertToPixel(data.emoji)
      ctx.fillText(data.text, x, y)
    }
  }
}

const mainTechnicalIndicatorTypes = ['MA', 'EMA', 'SAR']
const subTechnicalIndicatorTypes = ['VOL', 'MACD', 'KDJ']

export default function TechnicalIndicatorKLineChart () {
  let kLineChart
  let paneId
  useEffect(() => {
    kLineChart = init('technical-indicator-k-line')
    // ๅฐ่ชๅฎไนๆๆฏๆๆ ๆทปๅ ๅฐๅพ่กจ
    kLineChart.addTechnicalIndicatorTemplate(emojiTechnicalIndicator)
    paneId = kLineChart.createTechnicalIndicator('VOL', false)
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('technical-indicator-k-line')
    }
  }, [])
  return (
    <Layout
      title="ๆๆฏๆๆ ">
      <div id="technical-indicator-k-line" className="k-line-chart"/>
      <div
        className="k-line-chart-menu-container">
        <span style={{ paddingRight: 10 }}>ไธปๅพๆๆ </span>
        {
          mainTechnicalIndicatorTypes.map(type => {
            return (
              <button
                key={type}
                onClick={_ => {
                  kLineChart.createTechnicalIndicator(type, false, { id: 'candle_pane' })
                }}>
                {type}
              </button>
            )
          })
        }
        <button
          onClick={_ => {
            kLineChart.createTechnicalIndicator('EMOJI', true, { id: 'candle_pane' })
          }}>
          ่ชๅฎไน
        </button>
        <span style={{ paddingRight: 10, paddingLeft: 12 }}>ๅฏๅพๆๆ </span>
        {
          subTechnicalIndicatorTypes.map(type => {
            return (
              <button
                key={type}
                onClick={_ => {
                  kLineChart.createTechnicalIndicator(type, false, { id: paneId })
                }}>
                {type}
              </button>
            )
          })
        }
        <button
          onClick={_ => {
            kLineChart.createTechnicalIndicator('EMOJI', false, { id: paneId })
          }}>
          ่ชๅฎไน
        </button>
      </div>
    </Layout>
  )
}
