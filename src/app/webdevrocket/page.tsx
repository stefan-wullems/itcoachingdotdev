import { Hero } from './Hero'
import { CTAButton } from './CTAButton'
import { Motivation } from './Motivation'
import { WebDevRocketProgram } from './WebDevRocketProgram'
import { Bonuses } from './Bonuses'
import { AboutMe } from './AboutMe'
import { CTA } from './CTA'

const program = {
  author: 'Stefan Wullems',
  title: 'The Web Dev Rocket',
  description: 'Just build cool stuff',
}

export const metadata = {
  title: program.title,
  description: program.description,
  openGraph: {
    title: program.title,
    description: program.description,
    type: 'website',
    url: `https://stefanwullemscoaching.com/webdevrocket`,
    images: [
      {
        url: `https://stefanwullemscoaching.com/og-webdevrocket.png`,
        width: 2730,
        height: 1324,
        alt: program.title,
      },
    ],
  },
}
const COUNT_DOWN_DATE = new Date('2024-04-07:23:59:59')

export default function WebDevRocket() {
  return (
    <main className="bg-synthwave-900 ">
      <div className="pb-10">
        <Hero countDownDate={COUNT_DOWN_DATE} />
        <div id="motivation">
          <Motivation />
        </div>
        <div id="about-me">
          <AboutMe />
        </div>
        <div id="program">
          <WebDevRocketProgram />
        </div>

        {/* <Bonuses /> */}
        <CTA />
      </div>
    </main>
  )
}
