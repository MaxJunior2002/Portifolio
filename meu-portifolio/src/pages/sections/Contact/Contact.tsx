import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material"
import { ChangeEvent, FormEvent, useState } from "react"

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

  const initialForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }

  const [formData, setFormData] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // TODO: integrar com EmailJS
    console.log("Dados do formulário prontos para o EmailJS:", formData)

    setIsSubmitting(false)
    setFormData(initialForm)
  }

  return (
    <StyledSection id="contact">
      <Container>
        <Box component="header" sx={{ marginBottom: 4 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700 }}>
            Contato
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledCard>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Vamos conversar?
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#d1d5db" }}>
                Estou disponível para oportunidades de trabalho, projetos freelance,
                colaborações e novas ideias. Me envie uma mensagem que responderei o
                mais breve possível.
              </Typography>

              <Stack spacing={1.5} sx={{ mt: 4 }}>
                <Typography variant="body1">Email: contato@seuportfolio.com</Typography>
                <Typography variant="body1">LinkedIn: /in/seu-perfil</Typography>
                <Typography variant="body1">GitHub: github.com/seu-usuario</Typography>
                <Typography variant="body1">Telefone: +55 (00) 00000-0000</Typography>
              </Stack>
            </StyledCard>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <StyledCard>
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Stack spacing={2.5}>
                  <TextField
                    label="Nome"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#fff",
                        backgroundColor: "rgba(17,24,39,0.45)",
                        borderRadius: 2,
                      },
                      "& .MuiInputLabel-root": {
                        color: "#d1d5db",
                      },
                    }}
                  />

                  <TextField
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#fff",
                        backgroundColor: "rgba(17,24,39,0.45)",
                        borderRadius: 2,
                      },
                      "& .MuiInputLabel-root": {
                        color: "#d1d5db",
                      },
                    }}
                  />

                  <TextField
                    label="Assunto"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#fff",
                        backgroundColor: "rgba(17,24,39,0.45)",
                        borderRadius: 2,
                      },
                      "& .MuiInputLabel-root": {
                        color: "#d1d5db",
                      },
                    }}
                  />

                  <TextField
                    label="Mensagem"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    minRows={5}
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#fff",
                        backgroundColor: "rgba(17,24,39,0.45)",
                        borderRadius: 2,
                      },
                      "& .MuiInputLabel-root": {
                        color: "#d1d5db",
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    sx={{
                      backgroundColor: "#8b5cf6",
                      color: "#fff",
                      fontWeight: 700,
                      borderRadius: 2,
                      py: 1.5,
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#7c3aed",
                      },
                    }}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                  </Button>
                </Stack>
              </Box>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  )
}

export default Contact
