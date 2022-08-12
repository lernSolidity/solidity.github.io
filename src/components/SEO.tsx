import React from "react"
import { Helmet } from "react-helmet"

interface Props {
  title: string
  description: string
}

const SEO: React.FC<Props> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="Description" content={description} />
      <meta property="og:URL" content="%PUBLIC_URL%/localImage.jpg" />

      <meta property="og:type" content="article" />
          
      <meta property="og:title" content={title} />
          
      <meta property="og:description" content={description} />

      <meta property="og:image" content="%PUBLIC_URL%/localImage.jpg" />
    </Helmet>
  )
}

export default SEO
