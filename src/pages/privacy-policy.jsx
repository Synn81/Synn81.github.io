import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import synn from '@/images/synn.jpg'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Greig Miller</title>
        <meta
          name="description"
          content="Privacy Policy"
        />
      </Head>
      <SimpleLayout
        title="Privacy Policy"
      >

        <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
          Our contact details
        </p>
        <ul className="relative z-10 mt-6 text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
          <li>Name: Greig Miller</li>
          <li>Address: 21 Chertsey Drive, Sutton, Surrey, SM3 9UG</li>
          <li>Phone Number: 0300 071 8251</li>
          <li>E-mail: almllr2@aol.com</li>
          <li>Date completed: 08/11/2023</li>
        </ul>

        <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
          The type of personal information we collect
          We currently collect and process the following information when you sign-up to
          receive Greig Miller’s mailing list to receive news, promotions, and offers:
        </p>
        <ul className="relative z-10 mt-6 text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
          <li>Email Address</li>
          <li>First Name</li>
          <li>Last Name</li>
        </ul>

        <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
          How we get the personal information and why we have it
          Most of the personal information we process is provided to us directly by you for one
          of the following reasons:
        </p>
        <ul className="relative z-10 mt-6 text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
          <li>You have opted-in to receive marketing from Greig Miller by signing up to
            his mailing list on this website.</li>
          <li>Responding to any questions, comments, and requests.</li>
        </ul>
        <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
          We also receive personal information indirectly, from the following sources in the
          following scenarios:
        </p>
        <ul className="relative z-10 mt-6 text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
          <li>We share Personal Data as necessary with third parties who provide services or
            functions on our behalf and who require the information to provide those specific
            services to us. These third parties may include social media advertising platforms
            such as Facebook, Instagram, Twitter for the purpose of custom audience
            creation and the expansion of targeting criteria for other audiences. Please note
            that we have appropriate data privacy safeguards in place with third parties with
            whom we share Personal Data as described above and who are providing
            services or functions on our behalf.</li>
        </ul>
        <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
          We use the information that you have given us in order to respond to any questions,
          comments, and/or requests and also when you have opted-in to receive email
          marketing from us.
          We may share this information with third parties such as Facebook and Instagram
          who provide services or functions on our behalf and who require the information to
          provide specific services to us, these third parties have appropriate data privacy
          safeguards in place. We will never share your personal data with others outside
          those mentioned above.
          Under the UK General Data Protection Regulation (UK GDPR), the lawful bases we
          rely on for processing this information are:
        </p>
        <ul className="relative z-10 mt-6 text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
          <li>(a) Your consent. You are able to remove your consent at any time. You can do
            this by contacting Greig Miller via email at: almllr2@aol.com</li>
        </ul>
        <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
          We will use and store your Personal Data only for as long as necessary, bearing in
          mind the uses of your Personal Data as described in this privacy policy and
          otherwise as communicated to you. We review the Personal Data we hold at regular
          intervals and delete permanently any Personal Data which is no longer necessary.
          This Website and our services are aimed at adults, and we do not knowingly collect
          any Personal Data relating to children aged under 16 years old. If you are under the
          age of 16, please do not provide us with any of your Personal Data, including your
          email address.
          You have legal rights under applicable law in relation to your Personal Data. You can
          ask the following questions, or take the following actions, at any time by contacting
          us via email [almllr2@aol.com] or via our postal address, which you can also use if
          you wish to make a complaint:
        </p>
        <ul className="relative z-10 mt-6 text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
          <li>See what Personal Data we hold about you (if any), including why we are holding it
            and who it could be disclosed to;</li>
          <li>Ask us to change/correct your Personal Data;</li>
          <li>Ask us to delete your Personal Data;</li>
          <li>Object to the processing of your Personal Data;</li>
          <li>Ask us to restrict the processing of your Personal Data;</li>
          <li>Withdraw any consents you have given us to the processing of your Personal
            Data; and</li>
          <li>Express any concerns you have about third parties’ use of your Personal Data.</li>
        </ul>
        <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
          You are not required to pay any charge for exercising your rights. If you make a
          request, we have one month to respond to you.
        </p>

      </SimpleLayout>
    </>
  )
}
