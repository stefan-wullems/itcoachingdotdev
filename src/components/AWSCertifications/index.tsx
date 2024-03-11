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
      <div className="relative grid grid-cols-8 gap-x-10 rounded-2xl bg-zinc-950 bg-gradient-to-tl from-transparent via-transparent to-emerald-900 px-5 pb-12 pt-5">
        {ROWS.map((row) => (
          <div key={row.id} className={clsx(row.className, 'relative')}>
            <div className="relative">
              {row.id === highlighted && (
                <div
                  className={clsx(
                    'animate-ping-xs absolute inset-0',
                    'rounded-full    border border-emerald-900  ',
                  )}
                ></div>
              )}
              {row.id === highlighted && (
                <div
                  className={clsx(
                    'animate-ping-xs-offset absolute inset-0',
                    'rounded-full    border border-emerald-900  ',
                  )}
                ></div>
              )}
              <div
                className={clsx(
                  'absolute inset-0',
                  'rounded-full border border-l-0 border-t-0  border-emerald-900 border-opacity-40  bg-gradient-to-br  from-zinc-950 from-70% to-emerald-900 ',
                )}
              ></div>

              <div
                className={clsx(
                  'relative p-1 sm:p-2',
                  !UNLOCKED.includes(row.id)
                    ? 'brightness-50 dark:brightness-[0.2]'
                    : '',
                )}
              >
                <Image src={row.src} alt={row.alt} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
