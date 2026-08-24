import { useState } from "react"
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material"
import { Box, Card, CardContent, Container, Grid, IconButton, styled, Typography } from "@mui/material"

type Project = {
  title: string
  description: string
}

const ProjectCard = ({ project }: { project: Project }) => (
  <Card sx={{ height: "100%", borderRadius: 3 }}>
    <Box
      sx={{
        background: "linear-gradient(135deg, #1976d2, #42a5f5)",
        height: 180,
      }}
    />
    <CardContent>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
        {project.title}
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
        {project.description}
      </Typography>
    </CardContent>
  </Card>
)

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)

  const StyledSection = styled("section")(() => ({
    backgroundColor: "#f8fafc",
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    padding: "80px 0",
  }))

  const projects = [
    {
      title: "Projeto 01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    },
    {
      title: "Projeto 02",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
    },
    {
      title: "Projeto 03",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta.",
    },
  ]

  return (
    <StyledSection id="projects">
      <Container>
        <Box component="header" sx={{ marginBottom: 4 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700 }}>
            Projetos
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
          {projects.map((project) => (
            <Grid size={4} key={project.title}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Box sx={{ overflow: "hidden" }}>
            <Box
              sx={{
                display: "flex",
                transform: `translateX(-${activeProject * 100}%)`,
                transition: "transform 300ms ease",
              }}
            >
              {projects.map((project) => (
                <Box key={project.title} sx={{ flex: "0 0 100%", minWidth: 0, px: 0.5 }}>
                  <ProjectCard project={project} />
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mt: 2 }}>
            <IconButton
              aria-label="Projeto anterior"
              onClick={() => setActiveProject((current) => Math.max(current - 1, 0))}
              disabled={activeProject === 0}
            >
              <ArrowBackIosNew fontSize="small" />
            </IconButton>

            <Typography aria-live="polite" sx={{ minWidth: 32, textAlign: "center" }}>
              {activeProject + 1}/{projects.length}
            </Typography>

            <IconButton
              aria-label="Próximo projeto"
              onClick={() => setActiveProject((current) => Math.min(current + 1, projects.length - 1))}
              disabled={activeProject === projects.length - 1}
            >
              <ArrowForwardIos fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </StyledSection>
  )
}

export default Projects
