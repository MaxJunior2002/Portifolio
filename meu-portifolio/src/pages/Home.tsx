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

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Experiências", href: "#experiences" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
]

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

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

            <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
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
            <IconButton onClick={openMenu} aria-label="Abrir menu" sx={{ display: { xs: "flex", md: "none" }, color: "#111827" }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={menuOpen} onClose={closeMenu}>
              <Stack sx={{ width: 280, p: 2 }}>
                <IconButton onClick={closeMenu} aria-label="Fechar menu" sx={{ alignSelf: "flex-end", mb: 1, color: "#111827" }}>
                  <CloseIcon />
                </IconButton>
                <List>
                  {navItems.map((item) => (
                    <ListItem key={item.href} disablePadding>
                      <ListItemButton component="a" href={item.href} onClick={closeMenu}>
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Stack>
      </Drawer>

      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
