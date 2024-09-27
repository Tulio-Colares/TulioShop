import { Helmet } from "react-helmet-async"

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: 'Welcome to TulioShop',
    description: 'Whatever you want, we have it!',
    keywords: 'electronics, buy eletronics, cheap eletronics'
}

export default Meta