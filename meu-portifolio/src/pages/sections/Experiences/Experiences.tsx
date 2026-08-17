import { Box, Container, Grid, styled, Typography } from "@mui/material"

const Experiences = () => {
  const StyledSection = styled("section")(() => ({
    backgroundColor: "#ffffff",
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    padding: "80px 0",
  }))

  const StyledItem = styled(Box)(() => ({
    borderLeft: "3px solid #1976d2",
    paddingLeft: "20px",
    marginBottom: "24px",
  }))

  return (
    <StyledSection id="experiences">
      <Container>
        <Box component="header" sx={{ marginBottom: 4 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700 }}>
            Experiências
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid size={12}>
            <StyledItem>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Analista Desenvolvedor Pleno
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Empresa / Período
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor
                lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla
                sit amet nisl tempus convallis quis ac lectus.
              </Typography>
            </StyledItem>

            <StyledItem>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Analista Desenvolvedor Trainee
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Empresa / Período
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien
                massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem
                ut libero malesuada feugiat.
              </Typography>
            </StyledItem>

            <StyledItem>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Estagiario de Infraestrutura
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Projetos / Período
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna
                justo, lacinia eget consectetur sed, convallis at tellus.
              </Typography>
            </StyledItem>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  )
}

export default Experiences
