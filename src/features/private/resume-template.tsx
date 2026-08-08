import type { PersonalDetailsFormData } from '#/lib/validators/personal-info-schema'

type ResumeTemplateProps = {
  data: PersonalDetailsFormData
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
      <h1>fullName: {data.fullName}</h1>
      <p>jobTitle: {data.jobTitle}</p>

      <div>
        <img
          src={data.avatar}
          alt="Avatar"
          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
        />
      </div>

      <p>{data.displayEmail}</p>

      <p>{data.phone}</p>

      <p>{data.address}</p>

      <div>
        <h2>Social Links</h2>
        {data.social?.map((socialItem, index) => (
          <p key={index}>
            {socialItem.display}: {socialItem.link}
          </p>
        ))}
      </div>

      <p>{data.passport}</p>

      <p>{data.nationality}</p>

      <p>{data.visa}</p>

      <p>{data.birthdayStr}</p>

      <p>{data.availability}</p>

      <p>{data.gender}</p>

      <p>{data.disability}</p>

      <p>{data.workMode}</p>

      <p>{data.relocation}</p>

      <p>{data.expectedSalary}</p>

      <p>{data.secondPhone}</p>

      <p>{data.drivingLicense}</p>

      <p>{data.securityClearance}</p>

      <p>{data.maritalStatus}</p>

      <p>{data.military}</p>

      <p>{data.smoking}</p>

      <p>{data.height}</p>

      <p>{data.weight}</p>
    </div>
  )
}
