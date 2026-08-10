import type { ResumeFormValues } from '#/lib/validators/resume-schema'

type ResumeTemplateProps = {
  data: Partial<ResumeFormValues>
}

export function ResumeTemplate({ data }: ResumeTemplateProps) {
  return (
    <div
      style={{
        padding: '0.5rem',
        backgroundColor: 'aliceblue',
        color: 'rebeccapurple',
        fontFamily: 'sans-serif',
      }}
    >
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
