import React from 'react'
import ChartTypeKLineChart from './chart/ChartTypeKLineChart'
import TechnicalIndicatorKLineChart from './chart/TechnicalIndicatorKLineChart'
import CustomThemeKLineChart from './chart/CustomThemeKLineChart'
import LanguageKLineChart from './chart/LanguageKLineChart'
import TooltipKLineChart from './chart/TooltipKLineChart'
import TimezoneKLineChart from './chart/TimezoneKLineChart'
import DrawShapeKLineChart from './chart/DrawShapeKLineChart'
import CustomCandleMarkKLineChart from './chart/CustomCandleMarkKLineChart'
import LoadMoreKLineChart from './chart/LoadMoreKLineChart'
import UpdateKLineChart from './chart/UpdateKLineChart'

import './app.less'

export default function App () {
  return (
    <div
      className="app">
      <ChartTypeKLineChart/>
      <TechnicalIndicatorKLineChart/>
      <CustomThemeKLineChart/>
      <LanguageKLineChart/>
      <TooltipKLineChart/>
      <TimezoneKLineChart/>
      <DrawShapeKLineChart/>
      <CustomCandleMarkKLineChart/>
      <LoadMoreKLineChart/>
      <UpdateKLineChart/>
    </div>
  )
}
