import { AppBar, Button, Container, Stack, Toolbar, Typography } from "@mui/material"
import About from "./sections/About/About"
import Contact from "./sections/Contact/Contact"
import Experiences from "./sections/Experiences/Experiences"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Experiências", href: "#experiences" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
]

const Home = () => {
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#ffffff",
          color: "#111827",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between", minHeight: 72 }}>
            <Typography
              component="a"
              href="#home"
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              MAX
            </Typography>

            <Stack direction="row" spacing={1}>
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  component="a"
                  href={item.href}
                  sx={{
                    color: "#111827",
                    textTransform: "none",
                    fontWeight: 500,
                    borderRadius: 999,
                    px: 2,
                    "&:hover": { backgroundColor: "rgba(25, 118, 210, 0.08)" },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
