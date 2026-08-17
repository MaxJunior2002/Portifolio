import { Box, Container, Grid, styled, Typography } from "@mui/material"

const Contact = () => {
  const StyledSection = styled("section")(() => ({
    backgroundColor: "#111827",
    color: "#fff",
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
    padding: "80px 0",
  }))

  const StyledCard = styled(Box)(() => ({
    backgroundColor: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "24px",
    height: "100%",
  }))

  return (
    <StyledSection id="contact">
      <Container>
        <Box component="header" sx={{ marginBottom: 4 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700 }}>
            Contato
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid size={6}>
            <StyledCard>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Entre em contato
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum
                congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit.
              </Typography>
            </StyledCard>
          </Grid>

          <Grid size={6}>
            <StyledCard>
              <Typography variant="body1">Email: </Typography>
              <Typography variant="body1">LinkedIn: </Typography>
              <Typography variant="body1">GitHub: </Typography>
              <Typography variant="body1">Telefone: +55 (00) 00000-0000</Typography>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  )
}

export default Contact
