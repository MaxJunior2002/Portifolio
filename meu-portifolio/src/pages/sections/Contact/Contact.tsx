import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material"
import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  Phone,
  WhatsApp,
} from "@mui/icons-material"
import { ChangeEvent, FormEvent, useState } from "react"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8081/api"

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
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null)

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
    setFeedback(null)

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Não foi possível enviar sua mensagem.")
      }

      setFeedback({
        type: "success",
        message: "Mensagem enviada com sucesso!",
      })
      setFormData(initialForm)
    } catch (error) {
      setFeedback({
        type: "error",
        message: error instanceof Error ? error.message : "Erro ao enviar a mensagem.",
      })
    } finally {
      setIsSubmitting(false)
    }
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
                <Link
                  href="mailto:maxjunior2002@gmail.com?subject=Contato%20via%20portf%C3%B3lio"
                  rel="noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#fff",
                    textDecoration: "none",
                    "&:hover": { color: "#8b5cf6" },
                  }}
                >
                  <Email fontSize="small" />
                  <Typography variant="body1">maxjunior2002@gmail.com</Typography>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/maximiliano-augusto-8a57611a5/"
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#fff",
                    textDecoration: "none",
                    "&:hover": { color: "#8b5cf6" },
                  }}
                >
                  <LinkedIn fontSize="small" />
                  <Typography variant="body1">LinkedIn</Typography>
                </Link>

                <Link
                  href="https://github.com/maxjunior2002"
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#fff",
                    textDecoration: "none",
                    "&:hover": { color: "#8b5cf6" },
                  }}
                >
                  <GitHub fontSize="small" />
                  <Typography variant="body1">GitHub</Typography>
                </Link>

                <Link
                  href="https://www.instagram.com/maxjunior2002/"
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#fff",
                    textDecoration: "none",
                    "&:hover": { color: "#8b5cf6" },
                  }}
                >
                  <Instagram fontSize="small" />
                  <Typography variant="body1">Instagram</Typography>
                </Link>

                <Link
                  href="tel:+55 31 99558-2787"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#fff",
                    textDecoration: "none",
                    "&:hover": { color: "#8b5cf6" },
                  }}
                >
                  <Phone fontSize="small" />
                  <Typography variant="body1">+55 (11) 99999-9999</Typography>
                </Link>

                <Link
                  href="https://wa.me/5531995582787?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#25D366",
                    textDecoration: "none",
                    "&:hover": { color: "#1ebc5b" },
                  }}
                >
                  <WhatsApp fontSize="small" />
                  <Typography variant="body1">WhatsApp</Typography>
                </Link>
              </Stack>
            </StyledCard>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <StyledCard>
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Stack spacing={2.5}>
                  {feedback && (
                    <Alert severity={feedback.type} sx={{ borderRadius: 2 }}>
                      {feedback.message}
                    </Alert>
                  )}

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
