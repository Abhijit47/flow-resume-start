import { EventClient } from '@tanstack/devtools-event-client'
import { Fragment, useEffect, useState } from 'react'

import { resumeStoreTs } from '#/store/resume-store-tanstack'
import type { ResumeFormValues } from './validators/resume-schema'

const Key = 'resume-store-devtools' as const
const EventKey = `${Key}:state` as const

type EventMap = {
  // 'resume-store-devtools:state': {
  //   isEnabledFirstForm: boolean
  //   resume: {
  //     personalDetails: ResumeFormValues['personalDetails']
  //     contents: ResumeFormValues['contents']
  //   }
  // }
  [EventKey]: {
    isEnabledFirstForm: boolean
    resume: {
      personalDetails: ResumeFormValues['personalDetails']
      contents: ResumeFormValues['contents']
    }
  }
}

type EventMapState = EventMap[typeof EventKey]

class StoreDevtoolsEventClient extends EventClient<EventMap> {
  constructor() {
    super({
      pluginId: Key,
    })
  }
}

const sdec = new StoreDevtoolsEventClient()

resumeStoreTs.subscribe(() => {
  sdec.emit(EventKey, {
    isEnabledFirstForm: resumeStoreTs.state.isEnabledFirstForm,
    resume: {
      personalDetails: resumeStoreTs.state.resume.personalDetails,
      contents: resumeStoreTs.state.resume.contents,
    },
  })
})

function ResumeDevtoolPanel() {
  const [state, setState] = useState<EventMapState>(() => ({
    isEnabledFirstForm: resumeStoreTs.state.isEnabledFirstForm,
    resume: {
      personalDetails: resumeStoreTs.state.resume.personalDetails,
      contents: resumeStoreTs.state.resume.contents,
    },
  }))

  useEffect(() => {
    return sdec.on(EventKey, (e) => setState(e.payload))
  }, [])

  return (
    <div className="p-4 text-sm grid gap-4 grid-cols-[1fr_10fr] overflow-y-auto">
      {Object.entries(state.resume.personalDetails).map(([key, value]) => (
        <Fragment key={key}>
          <div className="demo-muted whitespace-nowrap text-sm font-bold">
            {key}:
          </div>{' '}
          {/* string should be normal print */}
          {typeof value === 'string' ? (
            <div className="text-sm">{value}</div>
          ) : (
            <>
              {value.map((item, index) => (
                <Fragment key={index}>
                  <div className="text-sm">
                    <span>Link: {item.link}</span>
                    <span>Display: {item.display}</span>
                  </div>
                </Fragment>
              ))}
            </>
          )}
        </Fragment>
      ))}

      {/* contents */}
      {JSON.stringify(state.resume.contents, null, 2)}
    </div>
  )
}

export default {
  name: 'Resume Store',
  render: <ResumeDevtoolPanel />,
}
