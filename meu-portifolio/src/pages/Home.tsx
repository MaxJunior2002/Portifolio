import { useState } from "react"
import {
  AppBar,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material"
import About from "./sections/About/About"
import Contact from "./sections/Contact/Contact"
import Experiences from "./sections/Experiences/Experiences"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

export type Language = "pt" | "en"

const navItems = {
  pt: [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Experiências", href: "#experiences" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experiences" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
}

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState<Language>("pt")

  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

  const items = navItems[language]

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

            <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
              {items.map((item) => (
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

              <Button
                variant="outlined"
                onClick={() => setLanguage((current) => (current === "pt" ? "en" : "pt"))}
                sx={{
                  minWidth: 70,
                  borderRadius: 999,
                  textTransform: "none",
                  fontWeight: 700,
                  borderColor: "#d1d5db",
                  color: "#111827",
                  ml: 1,
                }}
              >
                {language === "pt" ? "EN" : "PT"}
              </Button>
            </Stack>

            <Stack direction="row" spacing={1} sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
              <Button
                variant="outlined"
                size="small"
                onClick={() => setLanguage((current) => (current === "pt" ? "en" : "pt"))}
                sx={{
                  minWidth: 54,
                  borderRadius: 999,
                  textTransform: "none",
                  fontWeight: 700,
                  borderColor: "#d1d5db",
                  color: "#111827",
                  px: 1,
                }}
              >
                {language === "pt" ? "EN" : "PT"}
              </Button>
              <IconButton onClick={openMenu} aria-label="Abrir menu" sx={{ color: "#111827" }}>
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={menuOpen} onClose={closeMenu}>
        <Stack sx={{ width: 280, p: 2 }}>
          <IconButton onClick={closeMenu} aria-label="Fechar menu" sx={{ alignSelf: "flex-end", mb: 1, color: "#111827" }}>
            <CloseIcon />
          </IconButton>
          <List>
            {items.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton component="a" href={item.href} onClick={closeMenu}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Drawer>

      <Hero language={language} />
      <About language={language} />
      <Experiences language={language} />
      <Projects language={language} />
      <Contact language={language} />
    </>
  )
}

export default Home
