import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Greig Miller</title>
        <meta
          name="description"
          content="I’m Greig Miller. More title here"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Greig Miller.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Born in 1981 in Sutton, Surrey, Greig Miller loved fantasy from a young age writing short
                stories and taking in as much content as possible across a range of platforms – cartoons,
                books, video games, films and music.
              </p>
              <p>
                Greig had the idea in his head for the basis of what would become the Sae Scroll Prophecies
                when he was 18, but before he started to put pen to paper he joined heavy metal band
                Gridlock Takedown as the vocalist, putting his efforts into that band, playing the London
                Astoria 2, The Garage, The Underworld and many other venues, gathering a loyal support on
                the underground scene.
              </p>
              <p>
                When Gridlock Takedown disbanded, Greig needed a break from music and decided it was
                the perfect time to write the novel that he’d carried in his head for so long. Fast forward to
                2023 and The Sae Scroll Prophecies is finished and due for release soon.
              </p>
              <p>
                In his spare time Greig is a hardcore MMA fan, a long-time fan of pro-wrestling, a lover of
                travelling and exploring the world, begrudgingly working out and having a beer or two with
                his friends. He is currently working on a few musical projects, learning how to play the guitar
                and working on his second book The Toad Rebellion!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/AuthorGreigM" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/gwmauthor/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://www.facebook.com/Greig.Miller.Author" icon={FacebookIcon} className="mt-4">
                Follow on Facebook
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
