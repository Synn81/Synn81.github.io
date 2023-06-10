import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import synn from '@/images/synn.jpg'

const projects = [
  {
    name: 'The Sae Scroll Prophecies',
    description:
      'Synn. A name that holds a fragile peace together between the four ruling\n' +
      'kingdoms. A prophet, so they say, foretold in the Sae Scrolls to ease the\n' +
      'lands suffering. But Synn has denied the Maker and achieved the opposite\n' +
      'of what was foreseen… Held in captivity for thirty years, Synn is accused\n' +
      'of the genocide of Sha’am, a feat he has no memory of. In his bleak\n' +
      'isolated cell, conjurations of Death and Chaos empower and torment his\n' +
      'frenzied mind. Whilst Death recreates a daily murder of a woman Synn\n' +
      'thinks is his mother, Chaos yearns for escape. As the kingdoms begin to\n' +
      'fray Synn seeks to unravel his mysterious past and claim vengeance\n' +
      'against the kings who confine, by harnessing the Weapon of God: the\n' +
      'fabled machination that allegedly wrought Sha’am’s ruin.\n' +
      'Elsewhere in the land Tellus fights to survive in the Slums of Brehn,\n' +
      'looking for a way out until a chance encounter provides the opportunity\n' +
      'she may have just been searching for. Alain struggles to carry the weight\n' +
      'of responsibility that comes with being the firstborn son in his family and\n' +
      'Adun tries to stop his foster son, Joh’s imminent self-destruction.\n' +
      'As the lines between truth, history and fable blur, the only question is:\n' +
      'who is hero and who is villain?',
    link: { href: 'http://gwmauthor.com', label: 'gwmauthor.com' },
    logo: synn,
  },

]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Greig Miller</title>
        <meta
          name="description"
          content="Things I’ve made or are in progress."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made or are in progress."
        intro="I’ve worked on many projects over the years, and have more upcoming..."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
