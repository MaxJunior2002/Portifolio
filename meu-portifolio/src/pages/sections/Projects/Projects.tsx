import { useState } from "react"
import { ArrowBackIosNew, ArrowForwardIos, GitHub } from "@mui/icons-material"
import { Box, Button, Card, CardContent, Container, Grid, IconButton, Link, styled, Typography } from "@mui/material"
import type { Language } from "../../Home"

type Project = {
  title: string
  description: string
  url: string
}

const ProjectCard = ({ project }: { project: Project }) => (
  <Card sx={{ height: "100%", borderRadius: 3, display: "flex", flexDirection: "column" }}>
    <Box
      sx={{
        background: "linear-gradient(135deg, #1976d2, #42a5f5)",
        height: 180,
      }}
    />
    <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
        {project.title}
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2, flex: 1 }}>
        {project.description}
      </Typography>

      <Button
        component={Link}
        href={project.url}
        target="_blank"
        rel="noreferrer"
        variant="contained"
        startIcon={<GitHub />}
        sx={{
          mt: "auto",
          borderRadius: 999,
          textTransform: "none",
          fontWeight: 600,
        }}
      >
        Ver projeto
      </Button>
    </CardContent>
  </Card>
)

const Projects = ({ language }: { language: Language }) => {
  const [activeProject, setActiveProject] = useState(0)

  const StyledSection = styled("section")(() => ({
    backgroundColor: "#f8fafc",
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    padding: "80px 0",
  }))

  const projects = language === "pt"
    ? [
        {
          title: "Biblioteca-Online-API",
          description:
            "Um projeto que simula uma biblioteca online onde os usuários podem se cadastrar, cadastrar seus livros e emprestar uns para os outros.",
          url: "https://github.com/MaxJunior2002/Biblioteca-Online-API",
        },
        {
          title: "Projeto-Abas",
          description:
            "Um projeto de criação de uma página de login com validações para uma vaga de desenvolvedor frontend.",
          url: "https://github.com/MaxJunior2002/Projeto-Abas",
        },
      ]
    : [
        {
          title: "Biblioteca-Online-API",
          description:
            "A project that simulates an online library where users can register, add their books and lend them to each other.",
          url: "https://github.com/MaxJunior2002/Biblioteca-Online-API",
        },
        {
          title: "Projeto-Abas",
          description:
            "A project to build a login page with validations for a frontend developer vacancy.",
          url: "https://github.com/MaxJunior2002/Projeto-Abas",
        },
      ]

  return (
    <StyledSection id="projects">
      <Container>
        <Box component="header" sx={{ marginBottom: 4 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700 }}>
            {language === "pt" ? "Projetos" : "Projects"}
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
