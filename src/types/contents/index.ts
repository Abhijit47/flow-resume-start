import type { AwardEntry } from './award'
import type { CertificateEntry } from './certificate'
import type { CourseEntry } from './course'
import type { DeclarationEntry } from './declaration'
import type { EducationEntry } from './education'
import type { InterestEntry } from './interest'
import type { LanguageEntry } from './language'
import type { OrganisationEntry } from './organisation'
import type { ProfileEntry } from './profile'
import type { ProjectEntry } from './project'
import type { PublicationEntry } from './publication'
import type { ReferenceEntry } from './reference'
import type { SkillEntry } from './skill'
import type { WorkEntry } from './work'

type SectionType =
  | 'work'
  | 'award'
  | 'skill'
  | 'course'
  | 'profile'
  | 'project'
  | 'interest'
  | 'language'
  | 'education'
  | 'reference'
  | 'certificate'
  | 'declaration'
  | 'publication'
  | 'organization'

type Section = {
  work: WorkEntry[]
  award: AwardEntry[]
  skill: SkillEntry[]
  course: CourseEntry[]
  profile: ProfileEntry[]
  project: ProjectEntry[]
  interest: InterestEntry[]
  language: LanguageEntry[]
  education: EducationEntry[]
  reference: ReferenceEntry[]
  certificate: CertificateEntry[]
  declaration: DeclarationEntry[]
  publication: PublicationEntry[]
  organisation: OrganisationEntry[]
}

// Mapped the type (Advanced)
export type ContentType = {
  // 1st approach
  // [key in SectionType]: {
  //   entries: WorkEntry[];
  //   iconKey: string; // 'guitar'; // 'icon-key';
  //   displayName: string; // default:"Experience" | 'myProfessional Experience'; // editable display name for the section
  //   sectionType: key | (string & {}); // 'work';
  //   disableAutoSort: boolean; // true;
  // };
  //
  //
  // 2nd approach
  [key in keyof Section]?: {
    entries: Section[key]
    iconKey: string // 'guitar'; // 'icon-key';
    displayName: string // default:"Experience" | 'myProfessional Experience'; // editable display name for the section
    sectionType: key | (string & {}) // 'work';
    disableAutoSort?: boolean // true;
  }
}

// Explicit definations
export type ContentsE = {
  work?: {
    entries: WorkEntry[]
    iconKey: string // 'guitar'; // 'icon-key';
    displayName: string // default:"Experience" | 'myProfessional Experience'; // editable display name for the section
    sectionType: SectionType | (string & {}) // 'work';
    disableAutoSort: boolean // true;
  }
  award?: {
    entries: AwardEntry[]
    iconKey: string // 'award';
    displayName: string // default:"Awards" | 'myAwards';
    sectionType: SectionType | (string & {})
  }
  skill?: {
    entries: SkillEntry[]
    iconKey: string // 'head-side-brain';
    displayName: string // default:"Skills" |'mySkills';
    sectionType: SectionType | (string & {})
  }
  course?: {
    entries: CourseEntry[]
    iconKey: string // 'books';
    displayName: string // 'myCourses'; // default:"Courses" |'myCourses';
    sectionType: SectionType | (string & {})
    disableAutoSort: boolean // true;
  }
  profile?: {
    entries: ProfileEntry[]
    iconKey: string // 'address-card';
    displayName: string // 'Summary'; // changeable display name for the section
    sectionType: SectionType | (string & {})
  }
  project?: {
    entries: ProjectEntry[]
    iconKey: string // 'folder-open';
    displayName: string // def: Projects | 'myProjects';
    sectionType: SectionType | (string & {})
    disableAutoSort: boolean // true;
  }
  interest?: {
    entries: InterestEntry[]
    iconKey: string // 'guitar';
    displayName: string // def:Interests| 'nyInterests';
    sectionType: SectionType | (string & {})
  }
  language?: {
    entries: LanguageEntry[]
    iconKey: string // 'chart-network';
    displayName: string // def:Languages|  'myLanguages';
    sectionType: SectionType | (string & {})
    disableAutoSort: boolean // true;
  }
  education?: {
    entries: EducationEntry[]
    iconKey: string // 'chart-user';
    displayName: string // def: Education| 'my Education';
    sectionType: SectionType | (string & {})
    disableAutoSort: boolean // true;
  }
  reference?: {
    entries: ReferenceEntry[]
    iconKey: string // 'chart-network';
    displayName: string // def: "References"| 'myReferences';
    sectionType: SectionType | (string & {})
  }
  certificate?: {
    entries: CertificateEntry[]
    iconKey: string // 'certificate';
    displayName: string // 'myCertificates';
    sectionType: SectionType | (string & {})
  }
  declaration?: {
    entries: DeclarationEntry[]
    iconKey: string // 'pen-clip';
    displayName: string // 'myDeclaration';
    sectionType: SectionType | (string & {}) // 'declaration';
  }
  publication?: {
    entries: PublicationEntry[]
    iconKey: string // 'newspaper';
    displayName: string // 'myPublications';
    sectionType: SectionType | (string & {}) // 'publication';
    disableAutoSort: boolean // true;
  }
  organisation?: {
    entries: OrganisationEntry[]
    iconKey: string // 'house-user';
    displayName: string // 'myOrganisations';
    sectionType: SectionType | (string & {})
    disableAutoSort: boolean // true;
  }
}
