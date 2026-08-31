import { Box, Container, Grid, styled, Typography } from "@mui/material"
import type { Language } from "../../Home"

const About = ({ language }: { language: Language }) => {
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
            {language === "pt" ? "Sobre mim" : "About me"}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 7 }}>
            <StyledCard>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {language === "pt"
                  ? "Sou desenvolvedor com experiência em análise, desenvolvimento e manutenção de sistemas, com atuação em soluções voltadas para backend, integrações e processos de negócio. A minha trajetória combina desenvolvimento de aplicações com atenção à qualidade, organização do código e entregas com foco em resultado."
                  : "I am a developer with experience in systems analysis, development and maintenance, working on backend, integrations and business process solutions. My career combines application development with strong attention to quality, code organization and delivery focused on results."}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 2 }}>
                {language === "pt"
                  ? "Tenho experiência com Java, Spring Boot, APIs REST, banco de dados, infraestrutura e suporte técnico, além de forte interesse em tecnologias que unam produtividade, escalabilidade e confiabilidade. Busco sempre entregar soluções práticas, bem estruturadas e alinhadas às necessidades do cliente."
                  : "I have experience with Java, Spring Boot, REST APIs, databases, infrastructure and technical support, along with a strong interest in technologies that combine productivity, scalability and reliability. I always aim to deliver practical, well-structured solutions aligned with customer needs."}
              </Typography>
            </StyledCard>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <StyledCard>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                {language === "pt" ? "Habilidades" : "Skills"}
              </Typography>
              <Typography variant="body1">- Java</Typography>
              <Typography variant="body1">- Spring Boot</Typography>
              <Typography variant="body1">- Node.js</Typography>
              <Typography variant="body1">- REST APIs</Typography>
              <Typography variant="body1">- Databases</Typography>
              <Typography variant="body1">{language === "pt" ? "- Infraestrutura e Redes" : "- Infrastructure and Networks"}</Typography>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  )
}

export default About
