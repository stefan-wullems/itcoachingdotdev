import React from 'react'
import foundationalCloudPractitionerBadge from './certification-badges/foundational-cloud-practitioner.png'
import associateDataEngineerBadge from './certification-badges/associate-data-engineer.png'
import associateDeveloperBadge from './certification-badges/associate-developer.png'
import associateSolutionsArchitectBadge from './certification-badges/associate-solutions-architect.png'
import associateSysOpsAdministratorBadge from './certification-badges/associate-sysops-administrator.png'
import professionalDevOpsEngineerBadge from './certification-badges/professional-devops-engineer.png'
import professionalSolutionsArchitectBadge from './certification-badges/professional-solutions-architect.png'
import specialtyAdvancedNetworkingBadge from './certification-badges/specialty-advanced-networking.png'
import specialtyMachineLearningBadge from './certification-badges/specialty-machine-learning.png'
import specialtySecurityBadge from './certification-badges/specialty-security.png'
import Image from 'next/image'
import clsx from 'clsx'

type Certification =
  | 'foundational-cloud-practitioner'
  | 'associate-data-engineer'
  | 'associate-developer'
  | 'associate-solutions-architect'
  | 'associate-sysops-administrator'
  | 'professional-devops-engineer'
  | 'professional-solutions-architect'
  | 'specialty-advanced-networking'
  | 'specialty-machine-learning'
  | 'specialty-security'

const ROWS = [
  {
    src: foundationalCloudPractitionerBadge,
    id: 'foundational-cloud-practitioner',
    alt: 'Foundational Cloud Practitioner Badge',
    className: 'col-start-4 col-end-6',
  },
  {
    src: associateDataEngineerBadge,
    id: 'associate-data-engineer',
    alt: 'Associate Data Engineer Badge',
    className: 'col-start-1 col-end-3',
  },
  {
    src: associateDeveloperBadge,
    id: 'associate-developer',
    alt: 'Associate Developer Badge',
    className: 'col-start-3 col-end-5',
  },
  {
    src: associateSolutionsArchitectBadge,
    id: 'associate-solutions-architect',
    alt: 'Associate Solutions Architect Badge',
    className: 'col-start-5 col-end-7',
  },
  {
    src: associateSysOpsAdministratorBadge,
    id: 'associate-sysops-administrator',
    alt: 'Associate SysOps Administrator Badge',
    className: 'col-start-7 col-end-9',
  },
  {
    src: professionalDevOpsEngineerBadge,
    id: 'professional-devops-engineer',
    alt: 'Professional DevOps Engineer Badge',
    className: 'col-start-2 col-end-4',
  },
  {
    src: specialtySecurityBadge,
    id: 'specialty-security',
    alt: 'Specialty Security Badge',
    className: 'col-start-4 col-end-6',
  },
  {
    src: professionalSolutionsArchitectBadge,
    id: 'professional-solutions-architect',
    alt: 'Professional Solutions Architect Badge',
    className: 'col-start-6 col-end-8',
  },
  {
    src: specialtyAdvancedNetworkingBadge,
    id: 'specialty-advanced-networking',
    alt: 'Specialty Advanced Networking Badge',
    className: 'col-start-3 col-end-5',
  },
  {
    src: specialtyMachineLearningBadge,
    id: 'specialty-machine-learning',
    alt: 'Specialty Machine Learning Badge',
    className: 'col-start-5 col-end-7',
  },
]

const UNLOCKED = ['foundational-cloud-practitioner']

export const AWSCertifications = ({
  highlighted,
}: {
  highlighted?: Certification
}) => {
  return (
    <div className="relative isolate">
      <div className="relative grid grid-cols-8 rounded-2xl bg-zinc-950 bg-gradient-to-tl from-transparent via-transparent to-emerald-900 px-5 pb-12 pt-5">
        {ROWS.map((row) => (
          <div
            key={row.id}
            className={clsx(
              row.className,
              !UNLOCKED.includes(row.id) ? 'opacity-50 dark:opacity-20' : '',
              ' min-w-30 sm:w-34 relative min-h-16 sm:h-32',
            )}
          >
            <div className="relative">
              <div
                className={clsx(
                  'absolute inset-0',
                  highlighted &&
                    highlighted === row.id &&
                    'rounded-full border border-l-0 border-t-0  border-white border-opacity-40  bg-gradient-to-br  from-zinc-950 from-50% to-emerald-900 ',
                )}
              ></div>

              <div className="relative p-2">
                <Image src={row.src} alt={row.alt} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
