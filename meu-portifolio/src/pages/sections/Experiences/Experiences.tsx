import { Box, Container, Grid, styled, Typography } from "@mui/material"
import type { Language } from "../../Home"

const Experiences = ({ language }: { language: Language }) => {
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
            {language === "pt" ? "Experiências" : "Experience"}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid size={12}>
            <StyledItem>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {language === "pt" ? "Analista Desenvolvedor Pleno" : "Senior Software Analyst"}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {language === "pt"
                  ? "Desenvolvimento de sistemas e soluções digitais"
                  : "System and digital solution development"}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                {language === "pt"
                  ? "Responsável por desenvolver, manter e evoluir aplicações com foco em qualidade, performance e alinhamento às regras de negócio. Atuo com a criação de integrações, manutenção de sistemas e apoio à entrega de soluções confiáveis para usuários e áreas internas."
                  : "Responsible for developing, maintaining and evolving applications with a focus on quality, performance and alignment with business rules. I work on integrations, system maintenance and support for reliable solutions delivered to internal teams and end users."}
              </Typography>
            </StyledItem>

            <StyledItem>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {language === "pt" ? "Analista Desenvolvedor Trainee" : "Junior Software Analyst"}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {language === "pt"
                  ? "Suporte ao desenvolvimento e melhorias de aplicações"
                  : "Development support and application improvements"}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                {language === "pt"
                  ? "Participação no desenvolvimento de soluções tecnológicas, com foco em análise de requisitos, implementação de melhorias, correções e suporte ao ciclo de vida das aplicações. Também contribuo na organização de processos, documentação e garantia de qualidade."
                  : "Participation in the development of technological solutions, focused on requirements analysis, implementation of improvements, fixes and support throughout the application lifecycle. I also contribute to process organization, documentation and quality assurance."}
              </Typography>
            </StyledItem>

            <StyledItem>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {language === "pt" ? "Estagiário de Infraestrutura" : "Infrastructure Intern"}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {language === "pt" ? "Suporte de infraestrutura e redes" : "Infrastructure and network support"}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                {language === "pt"
                  ? "Atuação em suporte de infraestrutura, redes e ambientes de tecnologia, incluindo monitoramento, organização de recursos e apoio à operação de sistemas e usuários. Essa experiência fortaleceu minha visão técnica e meu entendimento do funcionamento completo das soluções digitais."
                  : "Support for infrastructure, networks and technology environments, including monitoring, resource organization and assistance with systems and user operations. This experience strengthened my technical perspective and my understanding of how digital solutions work as a whole."}
              </Typography>
            </StyledItem>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  )
}

export default Experiences
