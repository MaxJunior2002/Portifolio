import { Box, Button, Container, Grid, styled, Typography } from "@mui/material"
import Max from "../../../assets/Images/Max.jpg"
import EmailIcon from "@mui/icons-material/Email"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Hero = () => {
  const StyledHero = styled("section")(() => ({
    backgroundColor: "#f3f4f6",
    minHeight: "calc(100vh - 72px)",
    display: "flex",
    alignItems: "center",
    padding: "80px 0",
  }))

  const StyledImage = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    maxHeight: 480,
    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
  }))

  return (
    <StyledHero id="home">
      <Container>
        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <StyledImage src={Max} alt="Maximiliano Augusto" />
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="overline" sx={{ color: "#1976d2", fontWeight: 700 }}>
              Olá, eu sou
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
              Maximiliano Augusto
            </Typography>
            <Typography variant="h4" sx={{ color: "#374151", mb: 3 }}>
              Analista Desenvolvedor | Engenheiro de Software
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#4b5563", maxWidth: 620 }}>
              Sou um profissional apaixonado por desenvolvimento de software, com foco em
              backend, APIs, integrações e soluções escaláveis. Trabalho com Java, Spring
              Boot, Node.js, bancos de dados e infraestrutura, criando sistemas que unem
              funcionalidade, performance e boa experiência de uso.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mt: 4, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                href="#projects"
                sx={{
                  borderRadius: 999,
                  px: 3,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Ver projetos
                <ArrowForwardIosIcon sx={{ ml: 1 }} />
              </Button>
              <Button
                variant="outlined"
                href="#contact"
                sx={{
                  borderRadius: 999,
                  px: 3,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Contato
                <EmailIcon sx={{ ml: 1 }} />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  )
}

export default Hero
