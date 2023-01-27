import { DefaultTags } from '@/components/ui'

export default function Head() {
  return (
    <>
      <title>Next.js Boilerpate</title>
      <meta name="description" content={'Next.js Boilerplate app.'} />
      <meta content="@" name="twitter:site"></meta>
      <meta content="summary_large_image" name="twitter:card"></meta>
      <meta content="Next.js Boilerplate" property="og:title"></meta>
      <DefaultTags />
    </>
  )
}
