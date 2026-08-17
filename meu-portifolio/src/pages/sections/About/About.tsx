import { Box, Container, Grid, styled, Typography } from "@mui/material"

const About = () => {
  const StyledSection = styled("section")(() => ({
    backgroundColor: "#f5f5f5",
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    padding: "80px 0",
  }))

  const StyledCard = styled(Box)(() => ({
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    height: "100%",
  }))

  return (
    <StyledSection id="about">
      <Container>
        <Box component="header" sx={{ marginBottom: 4 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700 }}>
            Sobre mim
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid size={7}>
            <StyledCard>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                sem vitae risus tristique posuere.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit
                nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat,
                accumsan id imperdiet et, porttitor at sem.
              </Typography>
            </StyledCard>
          </Grid>

          <Grid size={5}>
            <StyledCard>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Habilidades
              </Typography>
              <Typography variant="body1">- Desenvolvimento Backend</Typography>
              <Typography variant="body1">- Banco de Dados</Typography>
              <Typography variant="body1">- Node.js</Typography>
              <Typography variant="body1">- Integração de APIs</Typography>
              <Typography variant="body1">- Redes de Computadores</Typography>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  )
}

export default About
