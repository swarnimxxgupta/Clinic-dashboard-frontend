// components/ui/chart.tsx
import type React from "react"

export const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full h-full">{children}</div>
}

export const Chart = ({ children }: { children: React.ReactNode }) => {
  return <svg className="w-full h-full">{children}</svg>
}

export const ChartLegend = () => {
  return <div></div>
}

export const ChartTooltip = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export const ChartTooltipContent = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export const ChartTooltipItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <div>
      {label}: {value}
    </div>
  )
}

export const ChartTooltipSeries = () => {
  return <div></div>
}

export const ChartXAxis = ({ dataKey }: { dataKey: string }) => {
  return <></>
}

export const ChartYAxis = () => {
  return <></>
}

export const ChartLine = () => {
  return <></>
}

export const ChartArea = () => {
  return <></>
}

export const ChartBar = ({ data, dataKey }: { data: any[]; dataKey: string }) => {
  return (
    <>
      {data.map((item, index) => (
        <rect key={index} x={index * 20} y={0} width="10" height={item[dataKey]} fill="steelblue" />
      ))}
    </>
  )
}

export const ChartPie = ({ data, dataKey, nameKey }: { data: any[]; dataKey: string; nameKey: string }) => {
  const total = data.reduce((acc, item) => acc + item[dataKey], 0)
  let startAngle = 0

  return (
    <>
      {data.map((item, index) => {
        const sliceAngle = (item[dataKey] / total) * 360
        const midAngle = startAngle + sliceAngle / 2
        const x = 50 + 40 * Math.cos((Math.PI / 180) * midAngle)
        const y = 50 + 40 * Math.sin((Math.PI / 180) * midAngle)
        const pathData = describeArc(50, 50, 40, startAngle, startAngle + sliceAngle)
        startAngle += sliceAngle

        const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

        return (
          <path key={index} d={pathData} fill={colors[index % colors.length]} stroke="white" strokeWidth="2"></path>
        )
      })}
    </>
  )
}

export const ChartDonut = () => {
  return <></>
}

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(x, y, radius, endAngle)
  const end = polarToCartesian(x, y, radius, startAngle)

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"

  const d = ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(" ")

  return d
}
