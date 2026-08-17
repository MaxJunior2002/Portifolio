import { Box, Card, CardContent, Container, Grid, styled, Typography } from "@mui/material"

const Projects = () => {
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

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid size={4} key={project.title}>
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledSection>
  )
}

export default Projects
