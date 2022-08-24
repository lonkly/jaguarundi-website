/** @jsx jsx */
/* eslint no-shadow: 0 */
import { jsx, Container, Themed, Box } from "theme-ui"
import { useSpring, animated, config } from "react-spring"
import { rgba } from "polished"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Layout from "@lekoarts/gatsby-theme-emilia/src/components/layout"
import Header from "@lekoarts/gatsby-theme-emilia/src/components/header"
import Card from "@lekoarts/gatsby-theme-emilia/src/components/card"

type Props = {
  projects: {
    slug: string
    title: string
    cover: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }[]
}

const Projects = ({ projects }: Props) => {
  const fadeUpProps = useSpring({
    config: config.slow,
    delay: 600,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })

  return (
    <Layout>
      <Header />
      <Box as="main" variant="layout.main">
        <animated.div style={fadeUpProps}>
          <Container
            sx={{
              mt: `-8rem`,
              display: `grid`,
              gridTemplateColumns: [`1fr`, `repeat(auto-fill, minmax(350px, 1fr))`],
              gridGap: 4,
              alignItems: `flex-start`,
            }}
          >
            {projects.map((project, index) => {
              const val = project.cover.childImageSharp.gatsbyImageData.backgroundColor as string
              const shadow = rgba('black', 0.15)

              const px = [`50px`, `50px`, `16px`, `8px`, `4px`]
              const shadowArray = px.map((v) => `${shadow} 0px ${v} ${v} 0px`)

              return <Card key={project.slug} eager={index === 0} item={project} overlay={val} shadow={shadowArray} />
            })}
          </Container>
        </animated.div>
      </Box>
    </Layout>
  )
}

export default Projects