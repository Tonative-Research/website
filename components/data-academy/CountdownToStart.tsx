'use client'

import { useEffect, useState } from 'react'

// Classes start Sept 7, 2026, 00:00 WAT (UTC+1). Adjust here if the exact
// kickoff time changes.
const START_DATE = new Date('2026-09-07T00:00:00+01:00')

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
  started: boolean
}

function getTimeLeft(): TimeLeft {
  const diff = START_DATE.getTime() - Date.now()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, started: true }
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds, started: false }
}

export default function CountdownToStart() {
  // Start null so server and first client render match (avoids hydration
  // mismatch), then fill in the real countdown once mounted.
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTimeLeft(getTimeLeft())
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  if (timeLeft?.started) {
    return (
      <div className="mb-12 flex flex-col items-center">
        <span className="text-accent-400 text-3xl font-bold">🎉 Classes are live!</span>
      </div>
    )
  }

  const units: { label: string; value: number | null }[] = [
    { label: 'Days', value: timeLeft?.days ?? null },
    { label: 'Hours', value: timeLeft?.hours ?? null },
    { label: 'Minutes', value: timeLeft?.minutes ?? null },
    { label: 'Seconds', value: timeLeft?.seconds ?? null },
  ]

  return (
    <div className="mb-12 flex flex-col items-center gap-3">
      <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
        Classes start Sept 7, 2026
      </span>
      <div className="flex justify-center gap-6 text-center sm:gap-8">
        {units.map((unit) => (
          <div key={unit.label} className="flex flex-col">
            <span className="text-accent-400 w-[2ch] text-3xl font-bold tabular-nums">
              {unit.value !== null ? String(unit.value).padStart(2, '0') : '--'}
            </span>
            <span className="text-sm text-gray-400">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
