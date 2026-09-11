import type { ResumeFormValues } from '#/lib/validators/resume-schema'
import { useCustomizationStore } from '#/store/customization-store'

type ResumeTemplateProps = {
  data: Partial<ResumeFormValues>
}

export function ResumeTemplate({ data }: ResumeTemplateProps) {
  const {
    customization: {
      entryLayout,
      advanced,
      expert,
      heading,
      header,
      spacing,
      sectionOrder,
      skillDisplay,
      declarationDisplay,
      educationDisplay,
      workDisplay,
      certificateDisplay,
      interestDisplay,
      languageDisplay,
    },
  } = useCustomizationStore()
  return (
    <div
      style={{
        padding: '0.5rem',
        backgroundColor: 'aliceblue',
        color: 'rebeccapurple',
        fontFamily: 'sans-serif',
      }}
    >
      <pre className="text-xs">
        skillDisplay:
        {JSON.stringify(skillDisplay, null, 2)}
      </pre>
      <pre className="text-xs">
        languageDisplay: {JSON.stringify(languageDisplay, null, 2)}
      </pre>
      {/* <pre className="text-xs">{JSON.stringify(interestDisplay, null, 2)}</pre> */}
      {/* <pre className="text-xs">
        {JSON.stringify(certificateDisplay, null, 2)}
      </pre> */}
      {/* <pre className="text-xs">{JSON.stringify(workDisplay, null, 2)}</pre>
      <pre className="text-xs">{JSON.stringify(advanced, null, 2)}</pre>
      <pre className="text-xs">{JSON.stringify(educationDisplay, null, 2)}</pre> */}

      {/* <pre className="text-xs">{JSON.stringify(skillDisplay, null, 2)}</pre> */}

      {/* <pre className="text-xs">
        Font Size: {JSON.stringify(spacing.fontSize, null, 2)}
      </pre>
      <pre className="text-xs">
        Name Font Size: {JSON.stringify(spacing.nameFontSizePt, null, 2)}
      </pre>
      <pre className="text-xs">
        Job Title Font Size:{' '}
        {JSON.stringify(spacing.jobTitleFontSizePt, null, 2)}
      </pre>
      <pre className="text-xs">
        Section Heading Font Size:
        {JSON.stringify(spacing.sectionHeadingFontSizePt, null, 2)}
      </pre>
      <pre className="text-xs">
        Title And Subtitle Font Size:
        {JSON.stringify(spacing.titleAndSubtitleFontSizePt, null, 2)}
      </pre> */}

      {/* <pre className="text-xs">{JSON.stringify(spacing, null, 2)}</pre> */}

      {/* <div className="flex flex-wrap gap-3">
        <pre className="text-xs">{JSON.stringify(expert, null, 2)}</pre>
        <pre className="text-xs">
          Mix:
          {JSON.stringify(sectionOrder.mix, null, 2)}
        </pre>
        <pre className="text-xs">
          One:
          {JSON.stringify(sectionOrder.one, null, 2)}
        </pre>
        <pre className="text-xs">
          Two:
          {JSON.stringify(sectionOrder.two, null, 2)}
        </pre>
      </div> */}

      {/* <pre className="text-xs">{JSON.stringify(expert, null, 2)}</pre>
      <pre className="text-xs">{JSON.stringify(header, null, 2)}</pre>
      <pre className="text-xs">{JSON.stringify(advanced, null, 2)}</pre> */}
      {/* <pre className="text-xs">{JSON.stringify(heading, null, 2)}</pre> */}
      {/* <div className="flex gap-4">
        <div>
          <div>
            <pre className="text-xs">{JSON.stringify(advanced, null, 2)}</pre>
          </div>
          <div>
            <pre className="text-xs">{JSON.stringify(expert, null, 2)}</pre>
          </div>
        </div>
        <pre className="text-xs">{JSON.stringify(entryLayout, null, 2)}</pre>
      </div> */}
      {/* <pre>{JSON.stringify(font.selected, null, 2)}</pre>
      <pre>{JSON.stringify(font.fontFamily, null, 2)}</pre>
      <pre>{JSON.stringify(creativeNameFont, null, 2)}</pre> */}
      {/* <pre className="text-xs">Mode:{JSON.stringify(colors.mode, null, 2)}</pre>
      <div className="flex gap-2">
        <pre className="text-xs">
          basic{JSON.stringify(colors.basic, null, 2)}
        </pre>
        <pre className="text-xs">
          border{JSON.stringify(colors.border, null, 2)}
        </pre>
      </div>
      <div className="flex gap-2">
        <pre className="text-xs">
          advanced_multi{JSON.stringify(colors.advanced.multi, null, 2)}
        </pre>
        <pre className="text-xs">
          advanced_multi_custom
          {JSON.stringify(colors.advanced.multiCustom, null, 2)}
        </pre>
      </div>
      <div>
        <pre className="text-xs">
          advanced_single: {JSON.stringify(colors.advanced.single, null, 2)}
        </pre>
        <pre className="text-xs">
          advanced_single_custom:
          {JSON.stringify(colors.advanced.singleCustom, null, 2)}
        </pre>
        <pre className="text-xs">
          advanced_selected:
          {JSON.stringify(colors.advanced.selected, null, 2)}
        </pre>
      </div> */}
      <h1>fullName: {data.personalDetails?.fullName}</h1>
      <p>jobTitle: {data.personalDetails?.jobTitle}</p>

      <div>
        <img
          src={data.personalDetails?.avatar}
          alt="Avatar"
          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
        />
      </div>

      <p>{data.personalDetails?.displayEmail}</p>

      <p>{data.personalDetails?.phone}</p>

      <p>{data.personalDetails?.address}</p>

      <div>
        <h2>Social Links</h2>
        {data.personalDetails?.social?.map((socialItem, index) => (
          <p key={index}>
            {socialItem.display}: {socialItem.link}
          </p>
        ))}
      </div>

      <p>{data.personalDetails?.passport}</p>

      <p>{data.personalDetails?.nationality}</p>

      <p>{data.personalDetails?.visa}</p>

      <p>{data.personalDetails?.birthdayStr}</p>

      <p>{data.personalDetails?.availability}</p>

      <p>{data.personalDetails?.gender}</p>

      <p>{data.personalDetails?.disability}</p>

      <p>{data.personalDetails?.workMode}</p>

      <p>{data.personalDetails?.relocation}</p>

      <p>{data.personalDetails?.expectedSalary}</p>

      <p>{data.personalDetails?.secondPhone}</p>

      <p>{data.personalDetails?.drivingLicense}</p>

      <p>{data.personalDetails?.securityClearance}</p>

      <p>{data.personalDetails?.maritalStatus}</p>

      <p>{data.personalDetails?.military}</p>

      <p>{data.personalDetails?.smoking}</p>

      <p>{data.personalDetails?.height}</p>

      <p>{data.personalDetails?.weight}</p>
    </div>
  )
}
