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
          <Grid size={{ xs: 12, md: 7 }}>
            <StyledCard>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                Sou desenvolvedor com experiência em análise, desenvolvimento e manutenção
                de sistemas, com atuação em soluções voltadas para backend, integrações e
                processos de negócio. A minha trajetória combina desenvolvimento de
                aplicações com atenção à qualidade, organização do código e entregas com
                foco em resultado.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 2 }}>
                Tenho experiência com Java, Spring Boot, APIs REST, banco de dados,
                infraestrutura e suporte técnico, além de forte interesse em tecnologias
                que unam produtividade, escalabilidade e confiabilidade. Busco sempre
                entregar soluções práticas, bem estruturadas e alinhadas às necessidades do
                cliente.
              </Typography>
            </StyledCard>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <StyledCard>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Habilidades
              </Typography>
              <Typography variant="body1">- Java</Typography>
              <Typography variant="body1">- Spring Boot</Typography>
              <Typography variant="body1">- Node.js</Typography>
              <Typography variant="body1">- APIs REST</Typography>
              <Typography variant="body1">- Banco de Dados</Typography>
              <Typography variant="body1">- Infraestrutura e Redes</Typography>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  )
}

export default About
