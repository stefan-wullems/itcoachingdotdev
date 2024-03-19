import glob from 'fast-glob'

interface Program {
  title: string
  description: string
  date: string
  tags: string[]
}

export interface ProgramWithSlug extends Program {
  slug: string
}

async function importProgram(
  programFilename: string,
): Promise<ProgramWithSlug> {
  let { program } = (await import(`../app/coaching/${programFilename}`)) as {
    default: React.ComponentType
    program: Program
  }

  return {
    slug: programFilename.replace(/(\/page)?\.mdx$/, ''),
    ...program,
  }
}

export async function getAllPrograms() {
  let programFilenames = await glob('*/page.mdx', {
    cwd: './src/app/coaching',
  })

  let programs = await Promise.all(programFilenames.map(importProgram))

  return programs.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
