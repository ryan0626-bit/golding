import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import React from 'react'
import useAtTop from './hooks/useAtTop'
import Logo from './images/gc.png'
import WhiteLogo from './images/gc-white.png'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useLocation } from 'react-router-dom'
const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
  },
  company: ({ atTop, isHome }) => ({
    color: atTop && isHome ? theme.palette.primary.main : 'white',
    fontWeight: 'bold',
    '&:hover': {
      cursor: 'pointer',
    },
  }),
  logo: {
    height: '2rem',
  },
  logoContainer: ({ atTop }) => ({
    color: 'white',
    marginLeft: '2rem',
    marginRight: '.5rem',
  }),
  root: {
    flexDirection: 'row',
    display: 'flex',
    marginTop: '1rem',
    alignItems: 'center',
  },
  navButton: {
    '&:hover': {
      cursor: 'pointer',
    },

    paddingBottom: '.5rem',
    marginLeft: '1rem',
    marginRight: '1rem',
  },

  smallScreen: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  bigScreen: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    marginRight: '2rem',
  },
  menuIcon: {
    color: 'white',
  },
  route: ({ atTop, isHome }) => ({
    color: 'white',
    padding: '.25rem 1rem .25rem 1rem',
    margin: '1rem',
    borderRadius: '2rem',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: atTop && isHome ? theme.palette.primary.main : 'white',
      color: isHome && atTop ? 'white' : theme.palette.primary.main,
    },
  }),
  companyWrapper: ({ atTop, isHome }) => ({
    display: 'flex',
    '&:hover': {
      cursor: 'pointer',
    },
  }),
}))

export default function NavBar() {
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const atTop = useAtTop()
  const isHome = useLocation().pathname === '/'
  const classes = useStyles({ atTop, isHome })
  const xs = useMediaQuery(theme => theme.breakpoints.only('xs'))

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
  }
  const openPage = page => {
    history.push(`/${page}`)
    handleClose()
  }

  return (
    <div className={clsx(classes.paper, classes.root)}>
      <div className={classes.companyWrapper} onClick={() => openPage('')}>
        <div className={classes.logoContainer}>
          <img src={atTop && isHome ? Logo : WhiteLogo} className={classes.logo} />
        </div>
        <Typography variant={xs ? 'h6' : 'h4'} className={classes.company}>
          Golding Companies
        </Typography>
      </div>

      <div style={{ flexGrow: 1 }} />
      <div className={classes.bigScreen}>
        <Typography variant="h6" className={classes.route} onClick={() => openPage('profile')}>
          Profile
        </Typography>
        <Typography variant="h6" className={classes.route} onClick={() => openPage('account')}>
          My account
        </Typography>
        <Typography variant="h6" className={classes.route} onClick={() => openPage('about')}>
          About
        </Typography>
      </div>
      <div className={classes.smallScreen}>
        <div className={classes.navButton}>
          <IconButton onClick={handleOpen}>
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </div>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => openPage('profile')}>Profile</MenuItem>
          <MenuItem onClick={() => openPage('account')}>My account</MenuItem>
          <MenuItem onClick={() => openPage('about')}>About</MenuItem>
        </Menu>
      </div>
    </div>
  )
}
