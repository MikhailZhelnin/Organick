import Head from 'next/head'

type IMetaProps = {
  title: string
  description: string
}

const Meta = (props: IMetaProps) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

export {Meta}