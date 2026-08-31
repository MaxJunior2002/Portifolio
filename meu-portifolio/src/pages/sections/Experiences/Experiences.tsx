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
                Desenvolvimento de sistemas e soluções digitais
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                Responsável por desenvolver, manter e evoluir aplicações com foco em
                qualidade, performance e alinhamento às regras de negócio. Atuo com a
                criação de integrações, manutenção de sistemas e apoio à entrega de
                soluções confiáveis para usuários e áreas internas.
              </Typography>
            </StyledItem>

            <StyledItem>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Analista Desenvolvedor Trainee
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Suporte ao desenvolvimento e melhorias de aplicações
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                Participação no desenvolvimento de soluções tecnológicas, com foco em
                análise de requisitos, implementação de melhorias, correções e suporte ao
                ciclo de vida das aplicações. Também contribuo na organização de processos,
                documentação e garantia de qualidade.
              </Typography>
            </StyledItem>

            <StyledItem>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Estagiário de Infraestrutura
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Suporte de infraestrutura e redes
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>
                Atuação em suporte de infraestrutura, redes e ambientes de tecnologia,
                incluindo monitoramento, organização de recursos e apoio à operação de
                sistemas e usuários. Essa experiência fortaleceu minha visão técnica e meu
                entendimento do funcionamento completo das soluções digitais.
              </Typography>
            </StyledItem>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  )
}

export default Experiences
